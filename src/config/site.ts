export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Spelling Race Wiki",
  shortName: "Spelling Race",
  logoText: "S",
  tagline: "Complete Guides, Tips, Gameplay & Strategies",
  description: "Explore Spelling Race guides, spelling tips, controls, and multiplayer features. Learn to answer faster, earn more blocks, and compete with friends on Roblox.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://spellingrace.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://spellingrace.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/17664585395/Spelling-Race",
  heroVideoId: "dT0f3Xgh79s", // Roblox Spelling Race gameplay / challenge showcase
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
