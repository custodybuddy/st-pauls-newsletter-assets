# Sections

This file defines all sections, their ordering, impact levels, and descriptions.
The section ID (in parentheses) is the filename prefix used to group rules.

---

## 1. Component Architecture (architecture)

**Impact:** HIGH  
**Description:** Fundamental patterns for structuring components to avoid prop
proliferation and enable flexible composition.

## 2. State Management (state)

**Impact:** MEDIUM  
**Description:** Patterns for lifting state and managing shared context across
composed components.

## 3. Implementation Patterns (patterns)

**Impact:** MEDIUM  
**Description:** Specific techniques for implementing compound components and
context providers.

## 4. React 19 APIs (react19)

**Impact:** MEDIUM  
**Description:** React 19+ only. Don't use `forwardRef`; use `use()` instead of `useContext()`.

---

## St. Paul’s Project Context

When this skill is used in this repository, the [newsletter system architecture](../../../../docs/newsletter-system-architecture.md) and `AGENTS.md` define the production boundary; this skill supplements, but does not replace, email-safe workflow rules.
