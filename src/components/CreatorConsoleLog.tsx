"use client";

import { useEffect } from "react";

import { developer } from "@/lib/site";

export default function CreatorConsoleLog() {
  useEffect(() => {
    console.log(
      `%cLibria Café%c\n\n%cDeveloped by ${developer.name}%c\nGitHub:    %c${developer.github}%c\nPortfolio: %c${developer.portfolio}`,
      "color:#8A9A86;font-size:20px;font-weight:800;letter-spacing:1px;",
      "",
      "color:#cfbbaf;font-size:14px;font-weight:700;",
      "color:#7D6B5D;font-size:12px;",
      "color:#E8A38B;font-size:12px;font-weight:600;",
      "color:#7D6B5D;font-size:12px;",
      "color:#E8A38B;font-size:12px;font-weight:600;",
    );
  }, []);

  return null;
}
