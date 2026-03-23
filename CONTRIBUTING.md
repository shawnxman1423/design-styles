# Contributing to Design Styles

First off — thank you! This project grows through community contributions. Whether you're adding a new design style, improving a prompt, or just suggesting an idea, you're helping builders everywhere ship better-looking projects.

## Ways to contribute

### 1. Add a new design style

This is the most impactful contribution. Each style needs:

**A React component** — a self-contained card that visually demonstrates the aesthetic using inline styles.

#### Steps

1. Fork the repo and create a branch: `git checkout -b add/your-style-name`
2. Create a new file in `app/design-styles/styles/your-style-name.tsx`
3. Export a single function component that renders a card in that aesthetic
4. Add your style to `app/design-styles/registry.ts`
5. Run `pnpm build` to make sure everything compiles
6. Open a PR

#### Style file template

```tsx
// app/design-styles/styles/your-style-name.tsx

export function YourStyleName() {
  return (
    <div
      style={{
        // Use inline styles to demonstrate the aesthetic
        // The card should be self-contained — no external CSS or imports
        background: "#fff",
        borderRadius: 12,
        padding: 24,
        color: "#000",
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
        Your Style Name
      </h2>
      <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
        A brief description of the aesthetic. What makes it distinct?
        What are its visual hallmarks?
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          style={{
            // Primary button in this aesthetic
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          Primary
        </button>
        <button
          style={{
            // Secondary button in this aesthetic
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          Secondary
        </button>
      </div>
      <div
        style={{
          marginTop: 16,
          padding: 12,
          fontSize: 13,
        }}
      >
        Key visual traits: list the defining characteristics.
      </div>
    </div>
  );
}
```

#### Guidelines for style cards

- **Inline styles only** — no Tailwind classes, no CSS modules, no external dependencies. This keeps each card fully self-contained and easy to compare.
- **No imports** — the component should work with zero dependencies.
- **Show the aesthetic** — the card itself should BE the style, not just describe it. Someone should be able to look at the card and immediately understand the design language.
- **Include buttons** — show at least a primary and secondary action to demonstrate the interaction style.
- **Include a detail panel** — a small section at the bottom showing a secondary surface treatment.
- **Keep it concise** — each card should fit in a grid cell. Don't make it a full page.

### 2. Improve an existing style

- Better visual representation
- More accurate description
- Bug fixes (rendering issues, typos)

### 3. Improve a prompt

The AI prompts are the core value of this project. A great prompt should:

- Be specific enough that an AI generates recognizable output
- Include concrete CSS properties, color values, and spacing
- Mention the key visual hallmarks of the style
- Work across different AI tools (Claude, ChatGPT, Cursor, v0)

### 4. Suggest a style (no code required)

Don't code? No problem. Open an issue with:

- The name of the design style
- A description of what makes it distinct
- Links to examples in the wild
- Tag it with `style-request`

## Development setup

```bash
pnpm install
pnpm dev
```

Visit [http://localhost:3000/design-styles](http://localhost:3000/design-styles) to see your changes.

## PR checklist

- [ ] New style file in `app/design-styles/styles/`
- [ ] Style registered in `registry.ts`
- [ ] `pnpm build` passes
- [ ] Card uses inline styles only (no Tailwind/CSS imports)
- [ ] Card includes heading, description, buttons, and detail panel
- [ ] Component is a single exported function (no default export)

## Code style

- We use Prettier for formatting — run `pnpm format` before committing
- TypeScript strict mode is on
- No unused variables or imports

## Questions?

Open an issue or start a discussion. We're friendly.
