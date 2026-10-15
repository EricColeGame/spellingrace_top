import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
};

// 新站导航待后续 Part 重建，当前保持空数组（清空旧主题的 races/bosses/guides 等入口）
export const NAVIGATION_CONFIG = [] as NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
