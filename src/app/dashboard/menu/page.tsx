"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Language } from "@/context/LanguageContext";
import type { MenuCategoryKey, MenuItem } from "@/context/menuItems";
import { useMenuDataManager } from "../../../lib/menuDataStore";

const languageOptions: { value: Language; label: string }[] = [
  { value: "en", label: "English" },
  { value: "fa", label: "Farsi" },
];

const tabs = [
  { value: "items", label: "Items" },
  { value: "categories", label: "Categories" },
] as const;

type TabKey = (typeof tabs)[number]["value"];

type CategoryDirection = "up" | "down";

const getNextItemId = (itemsByLanguage: Record<Language, MenuItem[]>) => {
  const allIds = Object.values(itemsByLanguage).flatMap((items) =>
    items.map((item) => item.id),
  );
  return Math.max(0, ...allIds) + 1;
};

const getDefaultCategory = (order: MenuCategoryKey[]) =>
  (order.find((key) => key !== "all") ?? "hotCoffee") as Exclude<
    MenuCategoryKey,
    "all"
  >;

export default function MenuDashboardPage() {
  const { menuData, setMenuData, isDirty, applyChanges, resetToDefaults } =
    useMenuDataManager();
  const [activeLanguage, setActiveLanguage] = useState<Language>("en");
  const [activeTab, setActiveTab] = useState<TabKey>("items");
  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<MenuCategoryKey>("all");
  const [optionDraft, setOptionDraft] = useState("");
  const [newCategoryKey, setNewCategoryKey] = useState("");
  const [newCategoryLabelEn, setNewCategoryLabelEn] = useState("");
  const [newCategoryLabelFa, setNewCategoryLabelFa] = useState("");

  const categoryOrder = menuData.categoryOrder;
  const categoryLabels = menuData.categoryLabelsByLanguage[activeLanguage];

  const items = menuData.itemsByLanguage[activeLanguage];
  const filteredItems = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase();
    const categoryLookup = new Map(
      categoryOrder.map((key, index) => [key, index]),
    );

    return items
      .filter((item) => {
        if (categoryFilter !== "all" && item.category !== categoryFilter) {
          return false;
        }
        if (!normalizedSearch) {
          return true;
        }
        return (
          item.name.toLowerCase().includes(normalizedSearch) ||
          item.description.toLowerCase().includes(normalizedSearch)
        );
      })
      .sort((a, b) => {
        const orderA = categoryLookup.get(a.category) ?? 0;
        const orderB = categoryLookup.get(b.category) ?? 0;
        if (orderA !== orderB) {
          return orderA - orderB;
        }
        return a.id - b.id;
      });
  }, [items, searchValue, categoryFilter, categoryOrder]);

  const activeItem = useMemo(
    () => items.find((item) => item.id === activeItemId) ?? null,
    [items, activeItemId],
  );

  const updateLocalizedItem = (id: number, patch: Partial<MenuItem>) => {
    setMenuData((prev) => ({
      ...prev,
      itemsByLanguage: {
        ...prev.itemsByLanguage,
        [activeLanguage]: prev.itemsByLanguage[activeLanguage].map((item) =>
          item.id === id ? { ...item, ...patch } : item,
        ),
      },
    }));
  };

  const updateSharedItem = (id: number, patch: Partial<MenuItem>) => {
    setMenuData((prev) => {
      const updated = (Object.keys(prev.itemsByLanguage) as Language[]).reduce(
        (acc, language) => {
          acc[language] = prev.itemsByLanguage[language].map((item) =>
            item.id === id ? { ...item, ...patch } : item,
          );
          return acc;
        },
        {} as Record<Language, MenuItem[]>,
      );

      return {
        ...prev,
        itemsByLanguage: updated,
      };
    });
  };

  const handleAddItem = () => {
    const nextId = getNextItemId(menuData.itemsByLanguage);
    const category = getDefaultCategory(categoryOrder);

    const newItem: MenuItem = {
      id: nextId,
      name: "New item",
      description: "",
      category,
      isPopular: false,
      developerSpecial: false,
    };

    setMenuData((prev) => ({
      ...prev,
      itemsByLanguage: (Object.keys(prev.itemsByLanguage) as Language[]).reduce(
        (acc, language) => {
          acc[language] = [...prev.itemsByLanguage[language], { ...newItem }];
          return acc;
        },
        {} as Record<Language, MenuItem[]>,
      ),
    }));

    setActiveItemId(nextId);
    setActiveTab("items");
  };

  const handleDeleteItem = (id: number) => {
    if (!window.confirm("Delete this item from all languages?")) {
      return;
    }

    setMenuData((prev) => ({
      ...prev,
      itemsByLanguage: (Object.keys(prev.itemsByLanguage) as Language[]).reduce(
        (acc, language) => {
          acc[language] = prev.itemsByLanguage[language].filter(
            (item) => item.id !== id,
          );
          return acc;
        },
        {} as Record<Language, MenuItem[]>,
      ),
    }));

    if (activeItemId === id) {
      setActiveItemId(null);
    }
  };

  const handleOptionsChange = (id: number, nextOptions: string[]) => {
    const filteredOptions = nextOptions.filter((option) => option.trim());
    updateSharedItem(id, {
      options: filteredOptions.length ? filteredOptions : undefined,
    });
  };

  const handleMoveCategory = (
    key: MenuCategoryKey,
    direction: CategoryDirection,
  ) => {
    setMenuData((prev) => {
      const order = [...prev.categoryOrder];
      const index = order.indexOf(key);
      const nextIndex = direction === "up" ? index - 1 : index + 1;

      if (index === -1 || nextIndex < 0 || nextIndex >= order.length) {
        return prev;
      }

      if (key !== "all" && nextIndex === 0) {
        return prev;
      }

      if (order[nextIndex] === "all") {
        return prev;
      }

      [order[index], order[nextIndex]] = [order[nextIndex], order[index]];
      return { ...prev, categoryOrder: order };
    });
  };

  const handleAddCategory = () => {
    const trimmedKey = newCategoryKey.trim();
    if (!trimmedKey) {
      window.alert("Add a category key first.");
      return;
    }
    if (trimmedKey === "all") {
      window.alert("The key 'all' is reserved.");
      return;
    }
    if (categoryOrder.includes(trimmedKey)) {
      window.alert("That category already exists.");
      return;
    }

    const labelEn = newCategoryLabelEn.trim() || trimmedKey;
    const labelFa = newCategoryLabelFa.trim() || trimmedKey;

    setMenuData((prev) => ({
      ...prev,
      categoryOrder: [...prev.categoryOrder, trimmedKey],
      categoryLabelsByLanguage: {
        ...prev.categoryLabelsByLanguage,
        en: {
          ...prev.categoryLabelsByLanguage.en,
          [trimmedKey]: labelEn,
        },
        fa: {
          ...prev.categoryLabelsByLanguage.fa,
          [trimmedKey]: labelFa,
        },
      },
    }));

    setNewCategoryKey("");
    setNewCategoryLabelEn("");
    setNewCategoryLabelFa("");
  };

  const handleDeleteCategory = (key: MenuCategoryKey) => {
    if (key === "all") {
      return;
    }

    const fallbackCategory = categoryOrder.find(
      (entry) => entry !== "all" && entry !== key,
    );

    if (!fallbackCategory) {
      window.alert("Add another category before removing this one.");
      return;
    }

    if (
      !window.confirm(
        `Delete '${categoryLabels[key]}' and move its items to '${categoryLabels[fallbackCategory]}'?`,
      )
    ) {
      return;
    }

    setMenuData((prev) => {
      const nextLabels = (
        Object.keys(prev.categoryLabelsByLanguage) as Language[]
      ).reduce(
        (acc, language) => {
          const filtered = Object.entries(
            prev.categoryLabelsByLanguage[language],
          ).filter(([entryKey]) => entryKey !== key);
          acc[language] = Object.fromEntries(filtered) as Record<
            MenuCategoryKey,
            string
          >;
          return acc;
        },
        {} as Record<Language, Record<MenuCategoryKey, string>>,
      );

      const nextItems = (
        Object.keys(prev.itemsByLanguage) as Language[]
      ).reduce(
        (acc, language) => {
          acc[language] = prev.itemsByLanguage[language].map((item) =>
            item.category === key
              ? {
                  ...item,
                  category: fallbackCategory as Exclude<MenuCategoryKey, "all">,
                }
              : item,
          );
          return acc;
        },
        {} as Record<Language, MenuItem[]>,
      );

      return {
        ...prev,
        categoryOrder: prev.categoryOrder.filter((entry) => entry !== key),
        categoryLabelsByLanguage: nextLabels,
        itemsByLanguage: nextItems,
      };
    });

    if (categoryFilter === key) {
      setCategoryFilter("all");
    }
  };

  const handleReset = () => {
    if (!window.confirm("Reset to default menu data?")) {
      return;
    }
    resetToDefaults();
    setActiveItemId(null);
  };

  return (
    <div
      className="min-h-screen text-(--dash-ink)"
      style={
        {
          background:
            "linear-gradient(135deg, #FBF7F0 0%, #F6EFE5 45%, #F1E7DB 100%)",
          "--dash-ink": "#2F2621",
          "--dash-muted": "#6D5C50",
          "--dash-accent": "#E8A38B",
          "--dash-moss": "#8A9A86",
          "--dash-cream": "#FDFBF7",
        } as CSSProperties
      }
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-32 right-0 h-72 w-72 rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(#E8A38B, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-24 left-0 h-80 w-80 rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(#8A9A86, transparent 70%)" }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-[0_30px_80px_-60px_rgba(47,38,33,0.45)] backdrop-blur"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-(--dash-moss)">
                  Menu Studio
                </p>
                <h1 className="font-display text-4xl font-bold text-(--dash-ink) sm:text-5xl">
                  Manage your menu, live
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-(--dash-muted) sm:text-base">
                  Edit items, tune categories, and publish updates in one place.
                  Changes apply after you hit Apply.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest ${
                    isDirty
                      ? "bg-(--dash-accent)/15 text-[#C56C50]"
                      : "bg-(--dash-moss)/15 text-[#5A6B56]"
                  }`}
                >
                  {isDirty ? "Unsaved changes" : "All changes saved"}
                </div>
                <button
                  type="button"
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    isDirty
                      ? "bg-(--dash-ink) text-(--dash-cream) shadow-[0_10px_30px_-18px_rgba(47,38,33,0.6)]"
                      : "bg-(--dash-ink)/30 text-(--dash-cream)/70"
                  }`}
                  onClick={applyChanges}
                  disabled={!isDirty}
                >
                  Apply
                </button>
                <button
                  type="button"
                  className="rounded-full border border-(--dash-accent)/30 px-4 py-2 text-sm font-semibold text-[#C56C50] transition hover:border-(--dash-accent)"
                  onClick={handleReset}
                >
                  Reset defaults
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeTab === tab.value
                  ? "bg-[#2F2621] text-[#FDFBF7]"
                  : "bg-white/70 text-[#6D5C50] hover:text-[#2F2621]"
              }`}
            >
              {tab.label}
            </button>
          ))}

          <div className="ml-auto flex rounded-full border border-white/60 bg-white/70 p-1">
            {languageOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setActiveLanguage(option.value)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition ${
                  activeLanguage === option.value
                    ? "bg-[#8A9A86] text-white"
                    : "text-[#6D5C50]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "items" ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-[320px_1fr]">
            <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_25px_60px_-50px_rgba(47,38,33,0.45)]">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold text-[#2F2621]">
                  Items
                </h2>
                <button
                  type="button"
                  className="rounded-full bg-[#8A9A86] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white"
                  onClick={handleAddItem}
                >
                  Add item
                </button>
              </div>

              <div className="mt-4 space-y-3">
                <input
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  placeholder="Search items"
                  className="w-full rounded-2xl border border-[#E7DED4] bg-white/80 px-4 py-2 text-sm outline-none focus:border-[#8A9A86]"
                />
                <select
                  value={categoryFilter}
                  onChange={(event) =>
                    setCategoryFilter(event.target.value as MenuCategoryKey)
                  }
                  className="w-full rounded-2xl border border-[#E7DED4] bg-white/80 px-4 py-2 text-sm"
                >
                  {categoryOrder.map((key) => (
                    <option key={key} value={key}>
                      {categoryLabels[key]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5 space-y-3">
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item) => (
                    <motion.button
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      type="button"
                      onClick={() => setActiveItemId(item.id)}
                      className={`flex w-full flex-col rounded-2xl border px-4 py-3 text-left transition ${
                        activeItemId === item.id
                          ? "border-[#8A9A86] bg-white shadow-[0_12px_30px_-20px_rgba(47,38,33,0.45)]"
                          : "border-transparent bg-white/60 hover:border-white"
                      }`}
                    >
                      <span className="text-sm font-semibold text-[#2F2621]">
                        {item.name}
                      </span>
                      <span className="text-xs text-[#6D5C50]">
                        {categoryLabels[item.category]}
                      </span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_25px_60px_-50px_rgba(47,38,33,0.45)]">
              {activeItem ? (
                <div className="space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-[#8A9A86]">
                        Item #{activeItem.id}
                      </p>
                      <h2 className="font-display text-2xl font-semibold text-[#2F2621]">
                        {activeItem.name || "Untitled item"}
                      </h2>
                    </div>
                    <button
                      type="button"
                      className="rounded-full border border-[#E8A38B]/40 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#C56C50]"
                      onClick={() => handleDeleteItem(activeItem.id)}
                    >
                      Delete
                    </button>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    <label className="text-sm font-semibold text-[#2F2621]">
                      Name ({activeLanguage.toUpperCase()})
                      <input
                        value={activeItem.name}
                        onChange={(event) =>
                          updateLocalizedItem(activeItem.id, {
                            name: event.target.value,
                          })
                        }
                        className="mt-2 w-full rounded-2xl border border-[#E7DED4] bg-white px-4 py-2 text-sm"
                      />
                    </label>
                    <label className="text-sm font-semibold text-[#2F2621]">
                      Category
                      <select
                        value={activeItem.category}
                        onChange={(event) =>
                          updateSharedItem(activeItem.id, {
                            category: event.target.value as Exclude<
                              MenuCategoryKey,
                              "all"
                            >,
                          })
                        }
                        className="mt-2 w-full rounded-2xl border border-[#E7DED4] bg-white px-4 py-2 text-sm"
                      >
                        {categoryOrder
                          .filter((key) => key !== "all")
                          .map((key) => (
                            <option key={key} value={key}>
                              {categoryLabels[key]}
                            </option>
                          ))}
                      </select>
                    </label>
                  </div>

                  <label className="text-sm font-semibold text-[#2F2621]">
                    Description ({activeLanguage.toUpperCase()})
                    <textarea
                      value={activeItem.description}
                      onChange={(event) =>
                        updateLocalizedItem(activeItem.id, {
                          description: event.target.value,
                        })
                      }
                      className="mt-2 min-h-30 w-full rounded-2xl border border-[#E7DED4] bg-white px-4 py-3 text-sm"
                    />
                  </label>

                  <div className="grid gap-4 lg:grid-cols-3">
                    <label className="text-sm font-semibold text-[#2F2621]">
                      Price
                      <input
                        value={activeItem.price ?? ""}
                        onChange={(event) =>
                          updateSharedItem(activeItem.id, {
                            price: event.target.value.trim()
                              ? event.target.value
                              : undefined,
                          })
                        }
                        placeholder="Optional"
                        className="mt-2 w-full rounded-2xl border border-[#E7DED4] bg-white px-4 py-2 text-sm"
                      />
                    </label>
                    <label className="flex items-center gap-3 rounded-2xl border border-[#E7DED4] bg-white px-4 py-2 text-sm">
                      <input
                        type="checkbox"
                        checked={Boolean(activeItem.isPopular)}
                        onChange={(event) =>
                          updateSharedItem(activeItem.id, {
                            isPopular: event.target.checked,
                          })
                        }
                        className="h-4 w-4"
                      />
                      Popular badge
                    </label>
                    <label className="flex items-center gap-3 rounded-2xl border border-[#E7DED4] bg-white px-4 py-2 text-sm">
                      <input
                        type="checkbox"
                        checked={Boolean(activeItem.developerSpecial)}
                        onChange={(event) =>
                          updateSharedItem(activeItem.id, {
                            developerSpecial: event.target.checked,
                          })
                        }
                        className="h-4 w-4"
                      />
                      Developer special
                    </label>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <label className="text-sm font-semibold text-[#2F2621]">
                        Options
                      </label>
                      <span className="text-xs text-[#6D5C50]">
                        (shared across languages)
                      </span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <input
                        value={optionDraft}
                        onChange={(event) => setOptionDraft(event.target.value)}
                        placeholder="Add option"
                        className="flex-1 rounded-2xl border border-[#E7DED4] bg-white px-4 py-2 text-sm"
                      />
                      <button
                        type="button"
                        className="rounded-2xl bg-[#2F2621] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white"
                        onClick={() => {
                          const next = optionDraft.trim();
                          if (!next) {
                            return;
                          }
                          const existingOptions = activeItem.options ?? [];
                          if (!existingOptions.includes(next)) {
                            handleOptionsChange(activeItem.id, [
                              ...existingOptions,
                              next,
                            ]);
                          }
                          setOptionDraft("");
                        }}
                      >
                        Add
                      </button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(activeItem.options ?? []).map((option) => (
                        <span
                          key={option}
                          className="flex items-center gap-2 rounded-full border border-[#E7DED4] bg-white px-3 py-1 text-xs"
                        >
                          {option}
                          <button
                            type="button"
                            onClick={() =>
                              handleOptionsChange(
                                activeItem.id,
                                (activeItem.options ?? []).filter(
                                  (item) => item !== option,
                                ),
                              )
                            }
                            className="text-[#C56C50]"
                          >
                            Remove
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-full min-h-100 items-center justify-center text-center text-sm text-[#6D5C50]">
                  Select an item to start editing.
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-6 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_25px_60px_-50px_rgba(47,38,33,0.45)]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl font-semibold text-[#2F2621]">
                  Category labels
                </h2>
                <p className="mt-2 text-sm text-[#6D5C50]">
                  Adjust display names and reorder the filter rail.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#E7DED4] bg-white p-4">
              <h3 className="text-sm font-semibold text-[#2F2621]">
                Add a new category
              </h3>
              <p className="mt-1 text-xs text-[#6D5C50]">
                Use a short key (no spaces) and provide labels for both
                languages.
              </p>
              <div className="mt-4 grid gap-3 lg:grid-cols-[160px_1fr_1fr_auto]">
                <input
                  value={newCategoryKey}
                  onChange={(event) =>
                    setNewCategoryKey(event.target.value.replace(/\s+/g, ""))
                  }
                  placeholder="Key (ex: seasonal)"
                  className="w-full rounded-2xl border border-[#E7DED4] bg-white px-4 py-2 text-sm"
                />
                <input
                  value={newCategoryLabelEn}
                  onChange={(event) =>
                    setNewCategoryLabelEn(event.target.value)
                  }
                  placeholder="English label"
                  className="w-full rounded-2xl border border-[#E7DED4] bg-white px-4 py-2 text-sm"
                />
                <input
                  value={newCategoryLabelFa}
                  onChange={(event) =>
                    setNewCategoryLabelFa(event.target.value)
                  }
                  placeholder="Farsi label"
                  className="w-full rounded-2xl border border-[#E7DED4] bg-white px-4 py-2 text-sm"
                />
                <button
                  type="button"
                  className="rounded-2xl bg-[#2F2621] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white"
                  onClick={handleAddCategory}
                >
                  Add
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {categoryOrder.map((key, index) => (
                <div
                  key={key}
                  className="flex flex-col gap-3 rounded-2xl border border-[#E7DED4] bg-white p-4 sm:flex-row sm:items-center"
                >
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#8A9A86]">
                      {key}
                    </p>
                    <input
                      value={categoryLabels[key]}
                      onChange={(event) =>
                        setMenuData((prev) => ({
                          ...prev,
                          categoryLabelsByLanguage: {
                            ...prev.categoryLabelsByLanguage,
                            [activeLanguage]: {
                              ...prev.categoryLabelsByLanguage[activeLanguage],
                              [key]: event.target.value,
                            },
                          },
                        }))
                      }
                      className="mt-2 w-full rounded-2xl border border-[#E7DED4] bg-white px-4 py-2 text-sm"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-widest ${
                        index === 0
                          ? "bg-[#2F2621]/20 text-[#2F2621]/40"
                          : "bg-[#2F2621] text-white"
                      }`}
                      onClick={() => handleMoveCategory(key, "up")}
                      disabled={index === 0}
                    >
                      Up
                    </button>
                    <button
                      type="button"
                      className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-widest ${
                        index === categoryOrder.length - 1
                          ? "bg-[#2F2621]/20 text-[#2F2621]/40"
                          : "bg-[#2F2621] text-white"
                      }`}
                      onClick={() => handleMoveCategory(key, "down")}
                      disabled={index === categoryOrder.length - 1}
                    >
                      Down
                    </button>
                    <button
                      type="button"
                      className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-widest ${
                        key === "all"
                          ? "bg-[#E8A38B]/20 text-[#C56C50]/60"
                          : "bg-[#E8A38B]/15 text-[#C56C50]"
                      }`}
                      onClick={() => handleDeleteCategory(key)}
                      disabled={key === "all"}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
