import { Neobrutalism } from "./styles/neobrutalism";
import { Glassmorphism } from "./styles/glassmorphism";
import { Neumorphism } from "./styles/neumorphism";
import { Claymorphism } from "./styles/claymorphism";
import { Skeuomorphism } from "./styles/skeuomorphism";
import { FlatDesign } from "./styles/flat-design";
import { MaterialDesign } from "./styles/material-design";
import { SoftPop } from "./styles/soft-pop";
import { Y2KRetroFuturism } from "./styles/y2k-retro-futurism";
import { Vaporwave } from "./styles/vaporwave";
import { Cyberpunk } from "./styles/cyberpunk";
import { AuroraGradientMesh } from "./styles/aurora-gradient-mesh";
import { BentoGrid } from "./styles/bento-grid";
import { SwissMinimalism } from "./styles/swiss-minimalism";
import { Maximalism } from "./styles/maximalism";
import { DarkModeAesthetic } from "./styles/dark-mode-aesthetic";
import { FrutigerAero } from "./styles/frutiger-aero";
import { MemphisDesign } from "./styles/memphis-design";
import { Bauhaus } from "./styles/bauhaus";
import { OrganicBlobDesign } from "./styles/organic-blob-design";
import { MonochromeTypographic } from "./styles/monochrome-typographic";
import { RetroPixelArt } from "./styles/retro-pixel-art";
import { HandDrawnSketchy } from "./styles/hand-drawn-sketchy";
import { Cutealism } from "./styles/cutealism";
import { KineticMotion } from "./styles/kinetic-motion";
import { WindowsXPLuna } from "./styles/windows-xp-luna";
import { Windows95Classic } from "./styles/windows-95-classic";
import { MacOSAqua } from "./styles/macos-aqua";
import { IOSAppleModern } from "./styles/ios-apple-modern";
import { VercelNextJS } from "./styles/vercel-nextjs";
import { ClaudeAnthropic } from "./styles/claude-anthropic";
import { Stripe } from "./styles/stripe";
import { Linear } from "./styles/linear";
import { Notion } from "./styles/notion";
import { Figma } from "./styles/figma";
import { Spotify } from "./styles/spotify";
import { Discord } from "./styles/discord";
import { GitHub } from "./styles/github";
import { TailwindCSS } from "./styles/tailwind-css";
import { Supabase } from "./styles/supabase";
import { GhibliStorybook } from "./styles/ghibli-storybook";

export type DesignStyle = {
  name: string;
  slug: string;
  component: React.ComponentType;
};

export const designStyles: DesignStyle[] = [
  { name: "Neobrutalism", slug: "neobrutalism", component: Neobrutalism },
  { name: "Glassmorphism", slug: "glassmorphism", component: Glassmorphism },
  { name: "Neumorphism", slug: "neumorphism", component: Neumorphism },
  { name: "Claymorphism", slug: "claymorphism", component: Claymorphism },
  { name: "Skeuomorphism", slug: "skeuomorphism", component: Skeuomorphism },
  { name: "FlatDesign", slug: "flat-design", component: FlatDesign },
  { name: "MaterialDesign", slug: "material-design", component: MaterialDesign },
  { name: "SoftPop", slug: "soft-pop", component: SoftPop },
  { name: "Y2KRetroFuturism", slug: "y2k-retro-futurism", component: Y2KRetroFuturism },
  { name: "Vaporwave", slug: "vaporwave", component: Vaporwave },
  { name: "Cyberpunk", slug: "cyberpunk", component: Cyberpunk },
  { name: "AuroraGradientMesh", slug: "aurora-gradient-mesh", component: AuroraGradientMesh },
  { name: "BentoGrid", slug: "bento-grid", component: BentoGrid },
  { name: "SwissMinimalism", slug: "swiss-minimalism", component: SwissMinimalism },
  { name: "Maximalism", slug: "maximalism", component: Maximalism },
  { name: "DarkModeAesthetic", slug: "dark-mode-aesthetic", component: DarkModeAesthetic },
  { name: "FrutigerAero", slug: "frutiger-aero", component: FrutigerAero },
  { name: "MemphisDesign", slug: "memphis-design", component: MemphisDesign },
  { name: "Bauhaus", slug: "bauhaus", component: Bauhaus },
  { name: "OrganicBlobDesign", slug: "organic-blob-design", component: OrganicBlobDesign },
  { name: "MonochromeTypographic", slug: "monochrome-typographic", component: MonochromeTypographic },
  { name: "RetroPixelArt", slug: "retro-pixel-art", component: RetroPixelArt },
  { name: "HandDrawnSketchy", slug: "hand-drawn-sketchy", component: HandDrawnSketchy },
  { name: "Cutealism", slug: "cutealism", component: Cutealism },
  { name: "KineticMotion", slug: "kinetic-motion", component: KineticMotion },
  { name: "WindowsXPLuna", slug: "windows-xp-luna", component: WindowsXPLuna },
  { name: "Windows95Classic", slug: "windows-95-classic", component: Windows95Classic },
  { name: "MacOSAqua", slug: "macos-aqua", component: MacOSAqua },
  { name: "IOSAppleModern", slug: "ios-apple-modern", component: IOSAppleModern },
  { name: "VercelNextJS", slug: "vercel-nextjs", component: VercelNextJS },
  { name: "ClaudeAnthropic", slug: "claude-anthropic", component: ClaudeAnthropic },
  { name: "Stripe", slug: "stripe", component: Stripe },
  { name: "Linear", slug: "linear", component: Linear },
  { name: "Notion", slug: "notion", component: Notion },
  { name: "Figma", slug: "figma", component: Figma },
  { name: "Spotify", slug: "spotify", component: Spotify },
  { name: "Discord", slug: "discord", component: Discord },
  { name: "GitHub", slug: "github", component: GitHub },
  { name: "TailwindCSS", slug: "tailwind-css", component: TailwindCSS },
  { name: "Supabase", slug: "supabase", component: Supabase },
  { name: "GhibliStorybook", slug: "ghibli-storybook", component: GhibliStorybook },
];
