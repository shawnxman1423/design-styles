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
import { MaterialDesignLanding } from "./styles/landings/material-design";
import { SoftPop } from "./styles/soft-pop";
import { SoftPopLanding } from "./styles/landings/soft-pop";
import { Y2KRetroFuturism } from "./styles/y2k-retro-futurism";
import { Y2KRetroFuturismLanding } from "./styles/landings/y2k-retro-futurism";
import { Vaporwave } from "./styles/vaporwave";
import { VaporwaveLanding } from "./styles/landings/vaporwave";
import { Cyberpunk } from "./styles/cyberpunk";
import { CyberpunkLanding } from "./styles/landings/cyberpunk";
import { AuroraGradientMesh } from "./styles/aurora-gradient-mesh";
import { AuroraGradientMeshLanding } from "./styles/landings/aurora-gradient-mesh";
import { BentoGrid } from "./styles/bento-grid";
import { BentoGridLanding } from "./styles/landings/bento-grid";
import { SwissMinimalism } from "./styles/swiss-minimalism";
import { SwissMinimalismLanding } from "./styles/landings/swiss-minimalism";
import { Maximalism } from "./styles/maximalism";
import { MaximalismLanding } from "./styles/landings/maximalism";
import { DarkModeAesthetic } from "./styles/dark-mode-aesthetic";
import { DarkModeAestheticLanding } from "./styles/landings/dark-mode-aesthetic";
import { FrutigerAero } from "./styles/frutiger-aero";
import { FrutigerAeroLanding } from "./styles/landings/frutiger-aero";
import { MemphisDesign } from "./styles/memphis-design";
import { MemphisDesignLanding } from "./styles/landings/memphis-design";
import { Bauhaus } from "./styles/bauhaus";
import { BauhausLanding } from "./styles/landings/bauhaus";
import { OrganicBlobDesign } from "./styles/organic-blob-design";
import { OrganicBlobDesignLanding } from "./styles/landings/organic-blob-design";
import { MonochromeTypographic } from "./styles/monochrome-typographic";
import { MonochromeTypographicLanding } from "./styles/landings/monochrome-typographic";
import { RetroPixelArt } from "./styles/retro-pixel-art";
import { RetroPixelArtLanding } from "./styles/landings/retro-pixel-art";
import { HandDrawnSketchy } from "./styles/hand-drawn-sketchy";
import { HandDrawnSketchyLanding } from "./styles/landings/hand-drawn-sketchy";
import { Cutealism } from "./styles/cutealism";
import { CutealismLanding } from "./styles/landings/cutealism";
import { KineticMotion } from "./styles/kinetic-motion";
import { KineticMotionLanding } from "./styles/landings/kinetic-motion";
import { WindowsXPLuna } from "./styles/windows-xp-luna";
import { WindowsXPLunaLanding } from "./styles/landings/windows-xp-luna";
import { Windows95Classic } from "./styles/windows-95-classic";
import { Windows95ClassicLanding } from "./styles/landings/windows-95-classic";
import { MacOSAqua } from "./styles/macos-aqua";
import { MacOSAquaLanding } from "./styles/landings/macos-aqua";
import { IOSAppleModern } from "./styles/ios-apple-modern";
import { IOSAppleModernLanding } from "./styles/landings/ios-apple-modern";
import { VercelNextJS } from "./styles/vercel-nextjs";
import { VercelNextJSLanding } from "./styles/landings/vercel-nextjs";
import { ClaudeAnthropic } from "./styles/claude-anthropic";
import { ClaudeAnthropicLanding } from "./styles/landings/claude-anthropic";
import { Stripe } from "./styles/stripe";
import { StripeLanding } from "./styles/landings/stripe";
import { Linear } from "./styles/linear";
import { LinearLanding } from "./styles/landings/linear";
import { Notion } from "./styles/notion";
import { NotionLanding } from "./styles/landings/notion";
import { Figma } from "./styles/figma";
import { FigmaLanding } from "./styles/landings/figma";
import { Spotify } from "./styles/spotify";
import { SpotifyLanding } from "./styles/landings/spotify";
import { Discord } from "./styles/discord";
import { DiscordLanding } from "./styles/landings/discord";
import { GitHub } from "./styles/github";
import { GitHubLanding } from "./styles/landings/github";
import { TailwindCSS } from "./styles/tailwind-css";
import { TailwindCSSLanding } from "./styles/landings/tailwind-css";
import { Supabase } from "./styles/supabase";
import { SupabaseLanding } from "./styles/landings/supabase";
import { GhibliStorybook } from "./styles/ghibli-storybook";
import { GhibliStorybookLanding } from "./styles/landings/ghibli-storybook";

const prompt = (style: string) => `Build a landing page in the ${style} style.

SECTIONS
1. Header — logo "▲ Stackpulse" left, nav links center, sign-up button right
2. Hero — large headline, subtitle, two side-by-side CTA buttons
3. Logos bar — "Trusted by 2,000+ makers at" with 5 brand names
4. Features — section heading + 3 cards in a responsive grid
5. Testimonials — section heading + 3 quote cards with name and role
6. Pricing — 3 tiers (Starter/Free, Pro/$29mo, Team/$79mo) with feature lists and CTA buttons. Highlight the Pro tier.
7. CTA — full-width section with headline and single button
8. Footer — logo + tagline left, 3 link columns (Product, Company, Legal) right, copyright at bottom

Keep it lightweight — React with inline styles, no external dependencies.`;

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
    description: "Bold, raw aesthetic with high contrast, chunky elements, and hard shadows. Thick black borders, offset box-shadows, clashing bright colors, and elements that feel stamped onto the page.",
    prompt: prompt("Neobrutalism"),
  },
  {
    name: "Glassmorphism",
    slug: "glassmorphism",
    component: Glassmorphism,
    landing: GlassmorphismLanding,
    description: "Frosted-glass layers with translucent surfaces, backdrop blur, and vibrant gradients behind. Depth through layered transparency.",
    prompt: prompt("Glassmorphism"),
  },
  {
    name: "Neumorphism",
    slug: "neumorphism",
    component: Neumorphism,
    landing: NeumorphismLanding,
    description: "Soft, extruded surfaces using dual light/dark shadows on a matching background. Elements feel tactile and physically embedded.",
    prompt: prompt("Neumorphism"),
  },
  {
    name: "Claymorphism",
    slug: "claymorphism",
    component: Claymorphism,
    landing: ClaymorphismLanding,
    description: "Puffy, inflated 3D appearance with inner and outer shadows like molded plasticine. Pastel colors, large border-radius, soft depth.",
    prompt: prompt("Claymorphism"),
  },
  {
    name: "Skeuomorphism",
    slug: "skeuomorphism",
    component: Skeuomorphism,
    landing: SkeuomorphismLanding,
    description: "Realistic textures imitating physical objects — leather, metal, paper. Gradients, beveled edges, glossy buttons, detailed shadows.",
    prompt: prompt("Skeuomorphism"),
  },
  {
    name: "Flat Design",
    slug: "flat-design",
    component: FlatDesign,
    landing: FlatDesignLanding,
    description: "Pure minimalism — no shadows, no gradients, no textures. Clean geometric shapes, solid colors, crisp typography.",
    prompt: prompt("Flat Design"),
  },
  {
    name: "Material Design",
    slug: "material-design",
    component: MaterialDesign,
    landing: MaterialDesignLanding,
    description: "Google's design system. Flat aesthetics with subtle elevation via layered shadows, bold color, and systematic spacing.",
    prompt: prompt("Material Design"),
  },
  {
    name: "Soft Pop",
    slug: "soft-pop",
    component: SoftPop,
    landing: SoftPopLanding,
    description: "Friendly and approachable with pastel candy colors, rounded shapes, and gentle depth. Pillowy and inviting.",
    prompt: prompt("Soft Pop"),
  },
  {
    name: "Y2K Retro-Futurism",
    slug: "y2k-retro-futurism",
    component: Y2KRetroFuturism,
    landing: Y2KRetroFuturismLanding,
    description: "Late-90s/early-2000s nostalgia. Chrome, neon, bubbly shapes, and techno-optimism.",
    prompt: prompt("Y2K Retro-Futurism"),
  },
  {
    name: "Vaporwave",
    slug: "vaporwave",
    component: Vaporwave,
    landing: VaporwaveLanding,
    description: "Dreamy internet-era nostalgia. Pastel neons, retro grids, surreal aesthetics, and Japanese characters.",
    prompt: prompt("Vaporwave"),
  },
  {
    name: "Cyberpunk",
    slug: "cyberpunk",
    component: Cyberpunk,
    landing: CyberpunkLanding,
    description: "Dark dystopian-futuristic. Neon glows, glitch effects, angular clipped shapes, monospace fonts.",
    prompt: prompt("Cyberpunk"),
  },
  {
    name: "Aurora / Gradient Mesh",
    slug: "aurora-gradient-mesh",
    component: AuroraGradientMesh,
    landing: AuroraGradientMeshLanding,
    description: "Fluid luminous gradients mimicking aurora borealis. Organic, flowing color blobs on dark backgrounds.",
    prompt: prompt("Aurora / Gradient Mesh"),
  },
  {
    name: "Bento Grid",
    slug: "bento-grid",
    component: BentoGrid,
    landing: BentoGridLanding,
    description: "Modular layout inspired by Japanese bento boxes. Neat, compartmentalized cards with consistent gaps and varied spans.",
    prompt: prompt("Bento Grid"),
  },
  {
    name: "Swiss Minimalism",
    slug: "swiss-minimalism",
    component: SwissMinimalism,
    landing: SwissMinimalismLanding,
    description: "Maximum clarity through reduction. Strong typography, ample whitespace, systematic grids, and primary color accents.",
    prompt: prompt("Swiss Minimalism"),
  },
  {
    name: "Maximalism",
    slug: "maximalism",
    component: Maximalism,
    landing: MaximalismLanding,
    description: "Bold, dense, layered. Multiple colors, patterns, textures, competing elements. More is more.",
    prompt: prompt("Maximalism"),
  },
  {
    name: "Dark Mode Aesthetic",
    slug: "dark-mode-aesthetic",
    component: DarkModeAesthetic,
    landing: DarkModeAestheticLanding,
    description: "Premium dark-first design. Careful luminance hierarchy with high contrast accents on near-black surfaces.",
    prompt: prompt("Dark Mode Aesthetic"),
  },
  {
    name: "Frutiger Aero",
    slug: "frutiger-aero",
    component: FrutigerAero,
    landing: FrutigerAeroLanding,
    description: "Glossy 2006-2013 optimism. Sky blue gradients, nature imagery, transparency, and skeuomorphic gloss.",
    prompt: prompt("Frutiger Aero"),
  },
  {
    name: "Memphis Design",
    slug: "memphis-design",
    component: MemphisDesign,
    landing: MemphisDesignLanding,
    description: "1980s Italian movement. Geometric shapes, bold patterns, clashing colors. Anti-minimalism with circles, triangles, and squiggles.",
    prompt: prompt("Memphis Design"),
  },
  {
    name: "Bauhaus",
    slug: "bauhaus",
    component: Bauhaus,
    landing: BauhausLanding,
    description: "Functional geometric design. Primary colors, strict grids, sans-serif typography. Form follows function.",
    prompt: prompt("Bauhaus"),
  },
  {
    name: "Organic / Blob Design",
    slug: "organic-blob-design",
    component: OrganicBlobDesign,
    landing: OrganicBlobDesignLanding,
    description: "Soft flowing irregular curves. Natural and human, avoiding rigid geometry. Earth tones and organic border-radius.",
    prompt: prompt("Organic / Blob Design"),
  },
  {
    name: "Monochrome Typographic",
    slug: "monochrome-typographic",
    component: MonochromeTypographic,
    landing: MonochromeTypographicLanding,
    description: "Single-color design where typography is the primary visual element. Weight, scale, spacing, and rhythm create hierarchy.",
    prompt: prompt("Monochrome Typographic"),
  },
  {
    name: "Retro Pixel Art",
    slug: "retro-pixel-art",
    component: RetroPixelArt,
    landing: RetroPixelArtLanding,
    description: "8-bit / 16-bit gaming nostalgia. Pixel fonts, limited palettes, chunky grids, and monospace type.",
    prompt: prompt("Retro Pixel Art"),
  },
  {
    name: "Hand-Drawn / Sketchy",
    slug: "hand-drawn-sketchy",
    component: HandDrawnSketchy,
    landing: HandDrawnSketchyLanding,
    description: "Imperfect, human-touch aesthetic. Wobbly lines, sketchy textures, dashed borders, warm paper tones.",
    prompt: prompt("Hand-Drawn / Sketchy"),
  },
  {
    name: "Cutealism",
    slug: "cutealism",
    component: Cutealism,
    landing: CutealismLanding,
    description: "Brutalist structure meets kawaii details. Raw grids + pink hearts + sticker vibes + monospace type.",
    prompt: prompt("Cutealism"),
  },
  {
    name: "Kinetic / Motion",
    slug: "kinetic-motion",
    component: KineticMotion,
    landing: KineticMotionLanding,
    description: "UI built around purposeful animation, scroll-driven transitions, and dynamic typography.",
    prompt: prompt("Kinetic / Motion"),
  },
  {
    name: "Windows XP Luna",
    slug: "windows-xp-luna",
    component: WindowsXPLuna,
    landing: WindowsXPLunaLanding,
    description: "The classic Luna theme. Blue title bars, silver/olive taskbar, glossy gradient buttons on #ece9d8 canvas.",
    prompt: prompt("Windows XP Luna"),
  },
  {
    name: "Windows 95 Classic",
    slug: "windows-95-classic",
    component: Windows95Classic,
    landing: Windows95ClassicLanding,
    description: "3D beveled look. Outset/inset borders creating tactile depth on a silver-gray #c0c0c0 canvas.",
    prompt: prompt("Windows 95 Classic"),
  },
  {
    name: "macOS Aqua",
    slug: "macos-aqua",
    component: MacOSAqua,
    landing: MacOSAquaLanding,
    description: "Lickable UI. Glossy gel buttons, pinstripe textures, traffic light controls, translucent panels.",
    prompt: prompt("macOS Aqua"),
  },
  {
    name: "Apple / iOS Modern",
    slug: "ios-apple-modern",
    component: IOSAppleModern,
    landing: IOSAppleModernLanding,
    description: "San Francisco font, vibrant system colors, rounded rectangles, semantic spacing, effortless clarity.",
    prompt: prompt("Apple / iOS Modern"),
  },
  {
    name: "Vercel / Next.js",
    slug: "vercel-nextjs",
    component: VercelNextJS,
    landing: VercelNextJSLanding,
    description: "Monochrome precision. Black canvas, white text, subtle borders, Geist font. Developer-focused minimalism.",
    prompt: prompt("Vercel / Next.js"),
  },
  {
    name: "Claude / Anthropic",
    slug: "claude-anthropic",
    component: ClaudeAnthropic,
    landing: ClaudeAnthropicLanding,
    description: "Warm earthy tones. Terracotta accents on dark cocoa. Thoughtful, approachable, human-feeling parchment surfaces.",
    prompt: prompt("Claude / Anthropic"),
  },
  {
    name: "Stripe",
    slug: "stripe",
    component: Stripe,
    landing: StripeLanding,
    description: "Deep navy base with vivid gradient meshes. Premium, developer-trusted. Clean type hierarchy with colorful flair.",
    prompt: prompt("Stripe"),
  },
  {
    name: "Linear",
    slug: "linear",
    component: Linear,
    landing: LinearLanding,
    description: "Ultra-refined dark UI. Subtle purplish-gray tones, razor-sharp typography, buttery animations. Craft as ethos.",
    prompt: prompt("Linear"),
  },
  {
    name: "Notion",
    slug: "notion",
    component: Notion,
    landing: NotionLanding,
    description: "Content-first minimalism. Warm grays, generous whitespace, inline blocks, and a writing-native interface.",
    prompt: prompt("Notion"),
  },
  {
    name: "Figma",
    slug: "figma",
    component: Figma,
    landing: FigmaLanding,
    description: "Dark chrome canvas with colorful multiplayer accents. Tool-first, functional panels, vibrant brand colors.",
    prompt: prompt("Figma"),
  },
  {
    name: "Spotify",
    slug: "spotify",
    component: Spotify,
    landing: SpotifyLanding,
    description: "Dark immersive UI with signature green CTAs. Card-based browsing, circular avatars, album art vibrancy.",
    prompt: prompt("Spotify"),
  },
  {
    name: "Discord",
    slug: "discord",
    component: Discord,
    landing: DiscordLanding,
    description: "Blurple meets dark gray. Casual, gaming-rooted, with rounded elements and a playful tone throughout.",
    prompt: prompt("Discord"),
  },
  {
    name: "GitHub",
    slug: "github",
    component: GitHub,
    landing: GitHubLanding,
    description: "Developer-focused dark theme. Syntax-highlight-friendly palette, clear information hierarchy, code-first layout.",
    prompt: prompt("GitHub"),
  },
  {
    name: "Tailwind CSS",
    slug: "tailwind-css",
    component: TailwindCSS,
    landing: TailwindCSSLanding,
    description: "Utility-first aesthetic. Sky-blue brand, curated color scales, crisp shadows, generous radii.",
    prompt: prompt("Tailwind CSS"),
  },
  {
    name: "Supabase",
    slug: "supabase",
    component: Supabase,
    landing: SupabaseLanding,
    description: "Dark developer dashboard aesthetic. Emerald green brand accent, dashboard-dense with clean data tables.",
    prompt: prompt("Supabase"),
  },
  {
    name: "Ghibli / Storybook",
    slug: "ghibli-storybook",
    component: GhibliStorybook,
    landing: GhibliStorybookLanding,
    description: "Watercolor warmth, nature greens, hand-painted feel. Nostalgic, dreamy, and gentle. Soft gradients that breathe.",
    prompt: prompt("Ghibli / Storybook"),
  },
];
