import { Neobrutalism } from "./styles/neobrutalism";
import { NeobrutalismLanding } from "./styles/landings/neobrutalism";
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
  landing?: React.ComponentType;
  prompt?: string;
  description?: string;
};

export const designStyles: DesignStyle[] = [
  {
    name: "Neobrutalism",
    slug: "neobrutalism",
    component: Neobrutalism,
    landing: NeobrutalismLanding,
    description: "Bold, raw aesthetic with high contrast, chunky elements, and hard shadows. Neobrutalism rejects polish in favor of loud, unapologetic design. Think thick black borders, offset box-shadows, clashing bright colors, and elements that feel like they were stamped onto the page. Popularized by Gumroad's redesign in 2021, it's become a go-to for indie hackers and creative tools that want to stand out.",
    prompt: `Design Style: Neobrutalism
Build a landing page in the Neobrutalism design style using React with inline styles only.

---

STRUCTURE
8 sections in this order:
1. Header — logo, nav links, sign-up button
2. Hero — bold headline, subtitle, two CTA buttons
3. Logos bar — "Trusted by" social proof with brand names
4. Features — 3 cards in a responsive grid
5. Testimonials — 3 quote cards in a grid
6. Pricing — 3 tiers (Free, Pro, Team)
7. CTA — full-width closing call to action
8. Footer — logo, link columns, copyright

---

VISUAL RULES
Colors:
  - Primary background: yellow #ffe156
  - Accent: coral #ff6b6b
  - Alternating sections: white #fff
  - Text & borders: black #000

Borders & Shadows:
  - All borders: 2-3px solid #000
  - All shadows: hard offset, no blur (e.g. 4px 4px 0 #000, 6px 6px 0 #000)
  - Section dividers: 3px solid #000

Typography:
  - Headings: font-weight 800-900
  - Hero title: 56px
  - Section headings: 36px
  - Body: 14-16px

Shape:
  - Border-radius: 0 on everything
  - No gradients, no blur, no soft shadows

---

KEY DETAILS
- Header: white bg, black bottom border, logo "▲ Stackpulse" left, nav center, black button right
- Hero: yellow bg, centered, two buttons (coral primary + white secondary) with 6px offset shadows
- Logos bar: white bg with top/bottom black borders, brand names at reduced opacity
- Features: yellow bg, white cards with black borders and 4px offset shadows
- Testimonials: white bg, yellow cards with italic quotes and bold attribution
- Pricing: yellow bg, Pro tier highlighted in coral #ff6b6b, all cards with 6px offset shadows and full-width CTA buttons
- CTA section: black bg, yellow #ffe156 text, yellow button
- Footer: white bg, black top border, 3 link columns, copyright separated by 2px black rule

Overall vibe: raw, confident, playful — a zine made a website.`,
  },
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
