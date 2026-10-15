import type { LucideIcon } from "lucide-react";
import { BookOpen, Gamepad2, MessageCircle, MonitorSmartphone, Ticket, Users, Wrench } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

/**
 * 分类真相源：关键词.json 的 categories（guide / modes / mechanics / codes / social / platforms / community）
 * 分类 slug 必须与 content/<locale>/ 下的文章子目录名一一对应。
 * key 是 en.json 的翻译键，path 是 URL；两者不可混为一个字段。
 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "modes", path: "/modes", icon: Gamepad2, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Wrench, isContentType: true },
  { key: "codes", path: "/codes", icon: Ticket, isContentType: true },
  { key: "platforms", path: "/platforms", icon: MonitorSmartphone, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
  { key: "social", path: "/social", icon: MessageCircle, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
