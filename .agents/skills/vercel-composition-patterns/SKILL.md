---
name: vercel-composition-patterns
description:
  React composition patterns that scale. Use when refactoring components with
  boolean prop proliferation, building flexible component libraries, or
  designing reusable APIs. Triggers on tasks involving compound components,
  render props, context providers, or component architecture. Includes React 19
  API changes.
license: MIT
metadata:
  author: vercel
  version: '1.0.0'
---

# React Composition Patterns

Composition patterns for building flexible, maintainable React components. Avoid
boolean prop proliferation by using compound components, lifting state, and
composing internals. These patterns make codebases easier for both humans and AI
agents to work with as they scale.

## St. Paul's Newsletter Project Mode

This repository does not use React. Apply only the transferable composition
principles and keep the implementation as static, Outlook-safe email HTML.

- Map composition to explicit table-based fragments in `snippets/` and layout
  primitives in `newsletter-system/components/outlook-safe/`.
- Map explicit variants to clearly named seasonal or section fragments rather
  than boolean flags, runtime conditionals, render props, or context providers.
- Assemble only the modules selected by the approved seasonal draft, in its
  approved order. Composition must not rewrite copy or invent optional modules.
- Preserve inline critical styles, MSO conditionals, absolute URLs, alt text,
  width attributes, and mobile fallbacks that remain readable when media queries
  are ignored.
- Do not introduce React, JSX, hooks, providers, client state, JavaScript, npm
  dependencies, or a build step to remove static HTML repetition.
- Run `node scripts/audit-newsletter-repo.js` after changing newsletter
  fragments or assembled drafts.

For work in this repository, use the `architecture-*` and `patterns-*` rules as
conceptual guidance. Skip the `state-*` and `react19-*` rules unless the user is
explicitly working in a separate React application.

## When to Apply

Reference these guidelines when:

- Refactoring components with many boolean props
- Building reusable component libraries
- Designing flexible component APIs
- Reviewing component architecture
- Working with compound components or context providers

## Rule Categories by Priority

| Priority | Category                | Impact | Prefix          |
| -------- | ----------------------- | ------ | --------------- |
| 1        | Component Architecture  | HIGH   | `architecture-` |
| 2        | State Management        | MEDIUM | `state-`        |
| 3        | Implementation Patterns | MEDIUM | `patterns-`     |
| 4        | React 19 APIs           | MEDIUM | `react19-`      |

## Quick Reference

### 1. Component Architecture (HIGH)

- `architecture-avoid-boolean-props` - Don't add boolean props to customize
  behavior; use composition
- `architecture-compound-components` - Structure complex components with shared
  context

### 2. State Management (MEDIUM)

- `state-decouple-implementation` - Provider is the only place that knows how
  state is managed
- `state-context-interface` - Define generic interface with state, actions, meta
  for dependency injection
- `state-lift-state` - Move state into provider components for sibling access

### 3. Implementation Patterns (MEDIUM)

- `patterns-explicit-variants` - Create explicit variant components instead of
  boolean modes
- `patterns-children-over-render-props` - Use children for composition instead
  of renderX props

### 4. React 19 APIs (MEDIUM)

> **⚠️ React 19+ only.** Skip this section if using React 18 or earlier.

- `react19-no-forwardref` - Don't use `forwardRef`; use `use()` instead of `useContext()`

## How to Use

Read individual rule files for detailed explanations and code examples:

```
rules/architecture-avoid-boolean-props.md
rules/state-context-interface.md
```

Each rule file contains:

- Brief explanation of why it matters
- Incorrect code example with explanation
- Correct code example with explanation
- Additional context and references

## Full Compiled Document

For the complete guide with all rules expanded: `AGENTS.md`

---

## St. Paul’s Project Context

When this skill is used in this repository, the [newsletter system architecture](../../../docs/newsletter-system-architecture.md) and `AGENTS.md` define the production boundary; this skill supplements, but does not replace, email-safe workflow rules.
