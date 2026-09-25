# Frontend Agent Guidelines

## Playwright MCP verification

When changing the Astro frontend, use the repository's Playwright MCP server
from `.vscode/mcp.json` to verify the affected route in a real browser.

### Required workflow

1. Start the frontend dev server from `apps/frontend` with:

   ```bash
   npm run dev -- --host 127.0.0.1
   ```

2. Use Playwright MCP to open the affected route at
   `http://127.0.0.1:4321`.
3. Check the desktop layout and at least one mobile viewport for responsive
   changes.
4. Exercise the changed interaction, not only the initial page load.
5. Check the browser console for errors and capture a screenshot when visual
   layout is part of the change.
6. Stop the dev server after verification.

### Selector and assertion guidance

- Prefer accessible locators such as roles, labels, and visible text.
- Assert the page URL, key headings, navigation state, and any changed
  interaction.
- Use stable attributes such as `data-*` selectors only when an accessible
  locator is not appropriate.
- Do not assert generated class names, framework internals, or exact
  implementation details unless they are the behavior being tested.
- For links with placeholder destinations, verify their presence and accessible
  name without navigating away from the page.

### Complementary checks

Playwright MCP checks are required for browser behavior, but they do not
replace the frontend checks. From `apps/frontend`, also run:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```
