import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import type { MenuData } from "@/lib/menuDataStore";
import {
  defaultMenuItemsByLanguage,
  defaultCategoryLabels,
  defaultCategoryOrder,
} from "@/context/menuItems";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "menu.json");

async function ensureDefaultFile(): Promise<MenuData> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (e) {
    // ignore
  }

  const defaults: MenuData = {
    itemsByLanguage: defaultMenuItemsByLanguage,
    categoryLabelsByLanguage: defaultCategoryLabels,
    categoryOrder: defaultCategoryOrder,
    updatedAt: new Date().toISOString(),
  };

  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(defaults, null, 2), "utf8");
  } catch (e) {
    // ignore write errors for now
  }

  return defaults;
}

export async function GET() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as MenuData;
    return NextResponse.json(parsed);
  } catch (err) {
    const defaults = await ensureDefaultFile();
    return NextResponse.json(defaults);
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as MenuData;
    const payload: MenuData = {
      ...body,
      updatedAt: new Date().toISOString(),
    };

    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(payload, null, 2), "utf8");

    return NextResponse.json(payload);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
