# Design Styles

**The open-source registry of UI design aesthetics — with ready-to-use AI prompts.**

Building landing pages with AI? You've probably noticed that when you tell Claude, ChatGPT, or Cursor to "make it look like Neobrutalism" or "use a Glassmorphism style" — it actually works. The AI knows these design languages.

The problem: **you don't know what to ask for.**

Design Styles is a visual catalog of every known UI aesthetic, each with a live preview and a copy-paste prompt you can drop straight into your AI tool. Think of it as a Wikipedia of design languages — browsable, searchable, and community-driven.

## Why this exists

While building landing pages for side projects, I kept discovering that AI responds remarkably well to named design styles. "Make this Neobrutalist" gets you 80% there instantly. But I had to Google around every time to remember what styles exist and how to describe them.

So I built one place to find them all.

## What's inside

- **41 design styles** (and growing) — from Glassmorphism to Ghibli Storybook
- **Live previews** — each card is rendered in its own aesthetic
- **AI-ready prompts** — copy a prompt, paste it into your AI, get beautiful UI
- **Community-driven** — submit your own styles via PR

### Style categories

| Category | Styles |
|----------|--------|
| **Morphisms** | Neobrutalism, Glassmorphism, Neumorphism, Claymorphism, Skeuomorphism |
| **Design Schools** | Flat Design, Material Design, Swiss Minimalism, Bauhaus, Memphis, Maximalism |
| **Aesthetic Movements** | Vaporwave, Cyberpunk, Y2K Retro-Futurism, Frutiger Aero, Dark Mode |
| **Organic & Playful** | Soft Pop, Aurora Gradient Mesh, Bento Grid, Organic Blob, Hand-Drawn, Cutealism, Ghibli Storybook |
| **Motion & Type** | Kinetic Motion, Monochrome Typographic, Retro Pixel Art |
| **Retro OS** | Windows 95, Windows XP Luna, macOS Aqua |
| **Brand-Inspired** | Apple/iOS, Vercel, Claude/Anthropic, Stripe, Linear, Notion, Figma, Spotify, Discord, GitHub, Tailwind CSS, Supabase |

## Getting started

```bash
# Clone the repo
git clone https://github.com/shawndev/design-styles.git
cd design-styles

# Install dependencies
pnpm install

# Run the dev server
pnpm dev
```

Open [http://localhost:3000/design-styles](http://localhost:3000/design-styles) to browse all styles.

## How to use with AI

1. Browse the catalog at `/design-styles`
2. Find a style you like
3. Copy its AI prompt
4. Paste into Claude, ChatGPT, Cursor, v0, or any AI tool
5. Get beautiful, styled UI instantly

## Contributing

We want this to be the most comprehensive design style registry on the internet. Contributions are welcome and encouraged!

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to:
- Add a new design style
- Improve an existing style's prompt or preview
- Suggest styles without coding

## Project structure

```
app/
  design-styles/
    page.tsx              # Showcase page — renders all styles
    registry.ts           # The map — typed array of all styles
    styles/
      neobrutalism.tsx    # One file per style
      glassmorphism.tsx
      ...                 # 41 styles total
```

## Tech stack

- [Next.js](https://nextjs.org) 16 with App Router
- [Tailwind CSS](https://tailwindcss.com) v4
- [shadcn/ui](https://ui.shadcn.com) components
- TypeScript

## Roadmap

- [ ] AI prompts for every style
- [ ] Copy-to-clipboard on each card
- [ ] Search and filter by category/tag
- [ ] Individual style pages with full prompt + variations
- [ ] Community submission flow (submit via PR or form)
- [ ] Prompt playground — paste a prompt, see the result live
- [ ] Style combination generator
- [ ] Export to popular AI tools (Claude, Cursor, v0)

## License

MIT — see [LICENSE](LICENSE).

## Star history

If this saves you time, give it a star. It helps others find it.
