---
name: building-components
description: Guide for building modern, accessible, and composable UI components. Use when building new components, implementing accessibility, creating composable APIs, setting up design tokens, publishing to npm/registry, or writing component documentation.
---

# Building Components

## St. Paul's Newsletter Project Mode

This repository is a static HTML email system with no React runtime, component
framework, package manifest, or build step. Translate component guidance into
email-safe source organization:

- Treat `snippets/` as reusable, copy-neutral section fragments and
  `newsletter-system/components/outlook-safe/` as layout primitives.
- Keep seasonal drafts in `newsletters/drafting/<year>-<season>/`; do not turn
  archived or older-draft HTML into active components.
- A component must remain table-based, readable without media queries, and safe
  when pasted into a full email. Keep critical styles inline and retain any MSO
  conditional markup.
- Separate layout from editorial content. Replace example wording with the
  assigned approved copy; never let a reusable fragment become a wording source.
- Prefer explicit section variants over a single fragment with many hidden
  layout modes. Do not introduce React, JSX, TypeScript, client-side state,
  JavaScript, npm packages, or a bundler unless the user explicitly changes the
  project architecture.
- Preserve absolute links, image URLs, alt text, width attributes, and the
  canonical icon mapping. After edits, run `node scripts/audit-newsletter-repo.js`.

For this project, read `definitions.mdx`, `principles.mdx`, `accessibility.mdx`,
and `composition.mdx` only for transferable design ideas. The React, TypeScript,
npm, registry, polymorphism, and state references are out of scope unless the
user explicitly requests work in a different application.

## When to use this skill

Use when the user is:

- Building new UI components (primitives, components, blocks, templates)
- Implementing accessibility features (ARIA, keyboard navigation, focus management)
- Creating composable component APIs (slots, render props, controlled/uncontrolled state)
- Setting up design tokens and theming systems
- Publishing components to npm or a registry
- Writing component documentation
- Implementing polymorphism or as-child patterns
- Working with data attributes for styling/state

## References

- [definitions.mdx](./references/definitions.mdx) - Artifact taxonomy (primitives, components, blocks, templates)
- [principles.mdx](./references/principles.mdx) - Core principles for component design
- [accessibility.mdx](./references/accessibility.mdx) - ARIA, keyboard navigation, WCAG compliance
- [composition.mdx](./references/composition.mdx) - Composable component patterns
- [as-child.mdx](./references/as-child.mdx) - The as-child pattern for element polymorphism
- [polymorphism.mdx](./references/polymorphism.mdx) - Polymorphic component patterns
- [types.mdx](./references/types.mdx) - TypeScript typing patterns for components
- [state.mdx](./references/state.mdx) - Controlled vs uncontrolled state management
- [data-attributes.mdx](./references/data-attributes.mdx) - Using data attributes for styling and state
- [design-tokens.mdx](./references/design-tokens.mdx) - Design token systems and theming
- [styling.mdx](./references/styling.mdx) - Component styling approaches
- [registry.mdx](./references/registry.mdx) - shadcn-style registry distribution
- [npm.mdx](./references/npm.mdx) - Publishing components to npm
- [marketplaces.mdx](./references/marketplaces.mdx) - Component marketplace distribution
- [docs.mdx](./references/docs.mdx) - Writing component documentation
