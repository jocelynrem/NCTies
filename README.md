# NCTies Workshop Pages

## File Structure

- HTML pages live at the project root:
  - `index.html`
  - `basics.html`
  - `pico.html`
  - `bootstrap.html`
  - `bulma.html`
  - `frankenstein.html`
- Workshop flow order:
  - `index.html` (Baseline start)
  - `pico.html`
  - `bootstrap.html`
  - `bulma.html`
  - `frankenstein.html` (capstone/challenges)
  - `basics.html` (quick reference)
- CSS is split by purpose:
  - `css/pages/` for page-specific styles
  - `css/shared/` for shared styles used by all pages

## CSS Naming Convention

- Shared stylesheet:
  - `css/shared/styles.css`
- Page stylesheets (one per page):
  - `css/pages/index.css`
  - `css/pages/basics.css`
  - `css/pages/pico.css`
  - `css/pages/bootstrap.css`
  - `css/pages/bulma.css`
  - `css/pages/frankenstein.css`

## How To Add A New Page

1. Create the new HTML file in the project root (for example `new-page.html`).
2. Create a matching page stylesheet at `css/pages/new-page.css`.
3. Link styles in this order inside `<head>`:
   - page CSS first
   - shared CSS second

Example:

```html
<link rel="stylesheet" href="css/pages/new-page.css" />
<link rel="stylesheet" href="css/shared/styles.css" />
```

## Rule Of Thumb

- Keep page-only styles in `css/pages/*`.
- Keep cross-page utilities/components in `css/shared/styles.css`.
- Do not place CSS in `<style>` tags or inline `style="..."` attributes.
