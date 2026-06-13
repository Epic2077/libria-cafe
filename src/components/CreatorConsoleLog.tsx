"use client";

import { useEffect } from "react";

export default function CreatorConsoleLog() {
  useEffect(() => {
    console.log(
      "%cWebsite created by Ashkan Sadeghi\nPortfolio: https://portfolio-ashkan.vercel.app/",
      "color: #8B5E3C; font-size: 14px; font-weight: 700;",
    );
  }, []);

  return null;
}
