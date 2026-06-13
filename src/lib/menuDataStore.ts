"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Language } from "@/context/LanguageContext";
import type {
  MenuCategory,
  MenuCategoryKey,
  MenuItem,
} from "@/context/menuItems";
import {
  defaultCategoryLabels,
  defaultCategoryOrder,
  defaultMenuItemsByLanguage,
} from "@/context/menuItems";

const STORAGE_KEY = "libria.menuData.v1";

export interface MenuData {
  itemsByLanguage: Record<Language, MenuItem[]>;
  categoryLabelsByLanguage: Record<Language, Record<MenuCategoryKey, string>>;
  categoryOrder: MenuCategoryKey[];
  updatedAt: string;
}

const cloneData = <T>(data: T): T => JSON.parse(JSON.stringify(data)) as T;

export const createDefaultMenuData = (): MenuData => ({
  itemsByLanguage: cloneData(defaultMenuItemsByLanguage),
  categoryLabelsByLanguage: cloneData(defaultCategoryLabels),
  categoryOrder: cloneData(defaultCategoryOrder),
  updatedAt: "",
});

const normalizeCategoryOrder = (
  order: MenuCategoryKey[] | undefined,
  fallback: MenuCategoryKey[],
): MenuCategoryKey[] => {
  const normalized: MenuCategoryKey[] = [];
  const candidates = Array.isArray(order) ? order : fallback;

  // Keep all keys (both default and custom)
  for (const key of candidates) {
    if (!normalized.includes(key)) {
      normalized.push(key);
    }
  }

  // Ensure all default keys are present
  for (const key of fallback) {
    if (!normalized.includes(key)) {
      normalized.push(key);
    }
  }

  return normalized;
};

const normalizeMenuData = (data: MenuData | null | undefined): MenuData => {
  const defaults = createDefaultMenuData();

  if (!data) {
    return defaults;
  }

  const itemsByLanguage: Record<Language, MenuItem[]> = {
    ...defaults.itemsByLanguage,
  };
  const categoryLabelsByLanguage: Record<
    Language,
    Record<MenuCategoryKey, string>
  > = {
    ...defaults.categoryLabelsByLanguage,
  };

  (Object.keys(defaults.itemsByLanguage) as Language[]).forEach((language) => {
    const items = data.itemsByLanguage?.[language];
    if (Array.isArray(items)) {
      itemsByLanguage[language] = items;
    }

    const labels = data.categoryLabelsByLanguage?.[language];
    if (labels) {
      categoryLabelsByLanguage[language] = {
        ...defaults.categoryLabelsByLanguage[language],
        ...labels,
      };
    }
  });

  return {
    itemsByLanguage,
    categoryLabelsByLanguage,
    categoryOrder: normalizeCategoryOrder(
      data.categoryOrder,
      defaults.categoryOrder,
    ),
    updatedAt: data.updatedAt ?? "",
  };
};

const loadMenuDataLocal = (): MenuData => {
  if (typeof window === "undefined") {
    return createDefaultMenuData();
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return createDefaultMenuData();
  }

  try {
    return normalizeMenuData(JSON.parse(raw) as MenuData);
  } catch {
    return createDefaultMenuData();
  }
};

const saveMenuDataLocal = (data: MenuData) => {
  if (typeof window === "undefined") {
    return;
  }

  const payload: MenuData = {
    ...data,
    updatedAt: new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // ignore
  }
};

export const clearMenuData = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
};

const fetchServerMenuData = async (): Promise<MenuData | null> => {
  try {
    const res = await fetch("/api/menu");
    if (!res.ok) return null;
    const data = (await res.json()) as MenuData;
    return normalizeMenuData(data);
  } catch {
    return null;
  }
};

const saveMenuDataServer = async (data: MenuData): Promise<MenuData | null> => {
  try {
    const res = await fetch("/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) return null;
    const saved = (await res.json()) as MenuData;
    return normalizeMenuData(saved);
  } catch {
    return null;
  }
};

const persistMenuData = async (data: MenuData): Promise<MenuData> => {
  const saved = await saveMenuDataServer(data);
  if (saved) {
    saveMenuDataLocal(saved);
    return saved;
  }

  saveMenuDataLocal(data);
  return {
    ...data,
    updatedAt: new Date().toISOString(),
  };
};

export const useMenuDataView = (language: Language) => {
  const [menuData, setMenuData] = useState<MenuData>(() =>
    createDefaultMenuData(),
  );

  useEffect(() => {
    let mounted = true;

    (async () => {
      const server = await fetchServerMenuData();
      if (mounted && server) {
        setMenuData(server);
        // persist locally
        saveMenuDataLocal(server);
        return;
      }

      // fallback to local
      const local = loadMenuDataLocal();
      if (mounted) setMenuData(local);
    })();

    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        setMenuData(loadMenuDataLocal());
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => {
      mounted = false;
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const items = useMemo(
    () => menuData.itemsByLanguage[language],
    [menuData, language],
  );
  const categories = useMemo<MenuCategory[]>(
    () =>
      menuData.categoryOrder.map((key) => ({
        key,
        label: menuData.categoryLabelsByLanguage[language][key],
      })),
    [menuData, language],
  );

  return { items, categories, menuData, setMenuData };
};

export const useMenuDataManager = () => {
  const [menuData, setMenuData] = useState<MenuData>(() =>
    createDefaultMenuData(),
  );
  const [savedSnapshot, setSavedSnapshot] = useState<string>(() =>
    JSON.stringify(createDefaultMenuData()),
  );
  const [hydrated, setHydrated] = useState(false);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      // Try server first
      const server = await fetchServerMenuData();
      if (mounted && server) {
        setMenuData(server);
        setSavedSnapshot(JSON.stringify(server));
        setHydrated(true);
        // persist locally for offline fallback
        saveMenuDataLocal(server);
        return;
      }

      // fallback to local
      const local = loadMenuDataLocal();
      if (mounted) {
        setMenuData(local);
        setSavedSnapshot(JSON.stringify(local));
        setHydrated(true);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    if (JSON.stringify(menuData) === savedSnapshot) {
      return;
    }

    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
    }

    saveTimerRef.current = setTimeout(async () => {
      const saved = await persistMenuData(menuData);
      setMenuData(saved);
      setSavedSnapshot(JSON.stringify(saved));
    }, 300);

    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
      }
    };
  }, [hydrated, menuData, savedSnapshot]);

  const isDirty = useMemo(
    () => JSON.stringify(menuData) !== savedSnapshot,
    [menuData, savedSnapshot],
  );

  const applyChanges = useCallback(async () => {
    const saved = await persistMenuData(menuData);
    setMenuData(saved);
    setSavedSnapshot(JSON.stringify(saved));
  }, [menuData]);

  const resetToDefaults = useCallback(() => {
    const defaults = createDefaultMenuData();
    clearMenuData();
    setMenuData(defaults);
    setSavedSnapshot(JSON.stringify(defaults));
  }, []);

  return {
    menuData,
    setMenuData,
    isDirty,
    applyChanges,
    resetToDefaults,
  };
};
