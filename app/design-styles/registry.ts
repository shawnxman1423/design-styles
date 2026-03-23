import { Neobrutalism } from "./styles/neobrutalism";
import { NeobrutalismLanding } from "./styles/landings/neobrutalism";
import { Glassmorphism } from "./styles/glassmorphism";
import { GlassmorphismLanding } from "./styles/landings/glassmorphism";
import { Neumorphism } from "./styles/neumorphism";
import { NeumorphismLanding } from "./styles/landings/neumorphism";
import { Claymorphism } from "./styles/claymorphism";
import { ClaymorphismLanding } from "./styles/landings/claymorphism";
import { Skeuomorphism } from "./styles/skeuomorphism";
import { SkeuomorphismLanding } from "./styles/landings/skeuomorphism";
import { FlatDesign } from "./styles/flat-design";
import { FlatDesignLanding } from "./styles/landings/flat-design";
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
    prompt: `Build a landing page in the Neobrutalism style.

SECTIONS
1. Header — logo "▲ Stackpulse" left, nav links center, sign-up button right
2. Hero — large headline, subtitle, two side-by-side CTA buttons
3. Logos bar — "Trusted by 2,000+ makers at" with 5 brand names
4. Features — section heading + 3 cards in a responsive grid
5. Testimonials — section heading + 3 quote cards with name and role
6. Pricing — 3 tiers (Starter/Free, Pro/$29mo, Team/$79mo) with feature lists and CTA buttons. Highlight the Pro tier.
7. CTA — full-width dark section with headline and single button
8. Footer — logo + tagline left, 3 link columns (Product, Company, Legal) right, copyright at bottom

Keep it lightweight — React with inline styles, no external dependencies.`,
  },
  {
    name: "Glassmorphism",
    slug: "glassmorphism",
    component: Glassmorphism,
    landing: GlassmorphismLanding,
    description: "Frosted-glass layers with translucent surfaces, backdrop blur, and vibrant gradients behind. Popularized by Apple's macOS Big Sur and iOS design language, glassmorphism creates depth through layered transparency.",
    prompt: `Build a landing page in the Glassmorphism style.

SECTIONS
1. Header — logo "▲ Stackpulse" left, nav links center, sign-up button right
2. Hero — large headline, subtitle, two side-by-side CTA buttons
3. Logos bar — "Trusted by 2,000+ makers at" with 5 brand names
4. Features — section heading + 3 cards in a responsive grid
5. Testimonials — section heading + 3 quote cards with name and role
6. Pricing — 3 tiers (Starter/Free, Pro/$29mo, Team/$79mo) with feature lists and CTA buttons. Highlight the Pro tier.
7. CTA — full-width section with headline and single button
8. Footer — logo + tagline left, 3 link columns (Product, Company, Legal) right, copyright at bottom

Keep it lightweight — React with inline styles, no external dependencies.`,
  },
  {
    name: "Neumorphism",
    slug: "neumorphism",
    component: Neumorphism,
    landing: NeumorphismLanding,
    description: "Soft, extruded surfaces that push out from the background using dual light/dark shadows on a matching background color. Elements feel tactile and physically embedded, like buttons molded from the screen itself.",
    prompt: `Build a landing page in the Neumorphism style.

SECTIONS
1. Header — logo "▲ Stackpulse" left, nav links center, sign-up button right
2. Hero — large headline, subtitle, two side-by-side CTA buttons
3. Logos bar — "Trusted by 2,000+ makers at" with 5 brand names
4. Features — section heading + 3 cards in a responsive grid
5. Testimonials — section heading + 3 quote cards with name and role
6. Pricing — 3 tiers (Starter/Free, Pro/$29mo, Team/$79mo) with feature lists and CTA buttons. Highlight the Pro tier.
7. CTA — full-width section with headline and single button
8. Footer — logo + tagline left, 3 link columns (Product, Company, Legal) right, copyright at bottom

Keep it lightweight — React with inline styles, no external dependencies.`,
  },
  {
    name: "Claymorphism",
    slug: "claymorphism",
    component: Claymorphism,
    landing: ClaymorphismLanding,
    description: "Puffy, inflated 3D appearance with inner and outer shadows that make elements look like molded plasticine. Pastel colors, large border-radius, and soft depth create a playful, tactile feel.",
    prompt: `Build a landing page in the Claymorphism style.

SECTIONS
1. Header — logo "▲ Stackpulse" left, nav links center, sign-up button right
2. Hero — large headline, subtitle, two side-by-side CTA buttons
3. Logos bar — "Trusted by 2,000+ makers at" with 5 brand names
4. Features — section heading + 3 cards in a responsive grid
5. Testimonials — section heading + 3 quote cards with name and role
6. Pricing — 3 tiers (Starter/Free, Pro/$29mo, Team/$79mo) with feature lists and CTA buttons. Highlight the Pro tier.
7. CTA — full-width section with headline and single button
8. Footer — logo + tagline left, 3 link columns (Product, Company, Legal) right, copyright at bottom

Keep it lightweight — React with inline styles, no external dependencies.`,
  },
  {
    name: "Skeuomorphism",
    slug: "skeuomorphism",
    component: Skeuomorphism,
    landing: SkeuomorphismLanding,
    description: "Realistic textures and materials imitating physical objects — leather, metal, paper, wood grain. Gradients, beveled edges, glossy buttons, and detailed shadows create the illusion of real-world surfaces on screen.",
    prompt: `Build a landing page in the Skeuomorphism style.

SECTIONS
1. Header — logo "▲ Stackpulse" left, nav links center, sign-up button right
2. Hero — large headline, subtitle, two side-by-side CTA buttons
3. Logos bar — "Trusted by 2,000+ makers at" with 5 brand names
4. Features — section heading + 3 cards in a responsive grid
5. Testimonials — section heading + 3 quote cards with name and role
6. Pricing — 3 tiers (Starter/Free, Pro/$29mo, Team/$79mo) with feature lists and CTA buttons. Highlight the Pro tier.
7. CTA — full-width section with headline and single button
8. Footer — logo + tagline left, 3 link columns (Product, Company, Legal) right, copyright at bottom

Keep it lightweight — React with inline styles, no external dependencies.`,
  },
  {
    name: "FlatDesign",
    slug: "flat-design",
    component: FlatDesign,
    landing: FlatDesignLanding,
    description: "Pure minimalism — no shadows, no gradients, no textures. Just clean geometric shapes, solid colors, and crisp typography. Championed by Microsoft's Metro design and early iOS 7, flat design strips UI to its essentials.",
    prompt: `Build a landing page in the Flat Design style.

SECTIONS
1. Header — logo "▲ Stackpulse" left, nav links center, sign-up button right
2. Hero — large headline, subtitle, two side-by-side CTA buttons
3. Logos bar — "Trusted by 2,000+ makers at" with 5 brand names
4. Features — section heading + 3 cards in a responsive grid
5. Testimonials — section heading + 3 quote cards with name and role
6. Pricing — 3 tiers (Starter/Free, Pro/$29mo, Team/$79mo) with feature lists and CTA buttons. Highlight the Pro tier.
7. CTA — full-width section with headline and single button
8. Footer — logo + tagline left, 3 link columns (Product, Company, Legal) right, copyright at bottom

Keep it lightweight — React with inline styles, no external dependencies.`,
  },
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
