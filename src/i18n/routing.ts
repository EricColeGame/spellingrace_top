import { defineRouting } from "next-intl/routing";

/** 全站语言集合（唯一真相源）：request.ts、language-switcher.tsx 与 src/locales/*.json 必须与之一致 */
export const locales = ["en", "es", "ja", "ko"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});
