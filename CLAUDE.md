# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Multi-brand casino affiliate website showcasing Hong Kong entertainment group partner platforms (bc88, CEO8, HKONE, JDM88, LFC8, ROLEX88, TOP88, GT88). Static HTML site with bilingual support (Chinese/English). Deployed on Cloudflare Pages with clean URL routing.

## Architecture

### Directory Structure

**IMPORTANT: Cloudflare Pages Routing Structure**

The site is structured for Cloudflare Pages, where each directory's `index.html` serves at that path:
- `/brand/index.html` → accessible at `https://hkpartner88.com/brand`
- `/branden/index.html` → accessible at `https://hkpartner88.com/branden`

**Root Level:**
- `index.html` - Partnership landing page (Chinese) for root URL `/`
- `assets/` - Centralized resources for all brand pages
  - `styles/app.css` - Main stylesheet (~262KB, built/compiled CSS)
  - `js/app.js` - Main application JavaScript (~1.1MB, built/compiled)
  - `js/main.js` - Custom scripts (card shuffling, random online counts)
  - `images/` - Shared images (includes company logos like `companies/bc88.webp`)
  - `fonts/` - Web fonts

**Brand Directories (Chinese pages):**
- `bc88/index.html` - bc88 Chinese page
- `ceo8/index.html` - CEO8 Chinese page
- `hkone/index.html` - HKONE Chinese page
- `jdm88/index.html` - JDM88 Chinese page
- `lfc8/index.html` - LFC8 Chinese page
- `rolex88/index.html` - ROLEX88 Chinese page
- `top88/index.html` - TOP88 Chinese page
- `gt88/index.html` - GT88 Chinese page

**English Brand Directories:**
- `bc88en/index.html` - bc88 English page
- `ceo8en/index.html` - CEO8 English page
- `hkoneen/index.html` - HKONE English page
- `jdm88en/index.html` - JDM88 English page
- `lfc8en/index.html` - LFC8 English page
- `rolex88en/index.html` - ROLEX88 English page
- `top88en/index.html` - TOP88 English page
- `gt88en/index.html` - GT88 English page

**Partnership Pages:**
- `partnership/index.html` - Partnership page (Chinese) at `/partnership`
- `partnershipen/index.html` - Partnership page (English) at `/partnershipen`
- `partnership/assets/` - Partnership-specific assets (separate from brand assets)

### Key Patterns

**Bilingual Support:**
- Each brand has separate directories for Chinese and English versions
- Chinese pages: `/brand/index.html` (e.g., `/bc88/index.html`)
- English pages: `/branden/index.html` (e.g., `/bc88en/index.html`)
- Language switcher in header toggles between `/brand` and `/branden` routes
- Content structure identical between versions, only text differs
- CSS classes differentiate language-specific styling (e.g., `cn-corner-ribbon__label` vs `en-corner-ribbon__label`)

**Asset Paths:**
- Brand pages (at root level): Use `assets/` for main assets
- Partnership root page (`/index.html`): Use `partnership/assets/`
- Partnership pages (`/partnership/` and `/partnershipen/`): Use `partnership/assets/`
- All brand pages reference: `assets/images/`, `assets/js/`, `assets/styles/`
- Partnership pages reference: `partnership/assets/images/`, etc.

**Asset Versioning:**
- Assets loaded with query parameter versioning: `app.css?v=1.5`, `app.js?v=1.5`
- Update version numbers when deploying asset changes

**Company Cards:**
- All pages display promotional cards for partner platforms
- Cards are shuffled on page load via `main.js` for randomized display order
- Online player counts are randomly generated (500-1000) per page view

**External Dependencies:**
- Swiper.js for carousels (bundled in app.js)
- Alpine.js for interactive components like dropdowns (bundled in app.js)
- Tabler Icons for UI icons
- Google Fonts (Orbitron)
- Google Analytics tracking
- Facebook Pixel tracking (partnership pages)

## Development Notes

### Modifying Content

When updating pages across all brands:
1. Changes typically need to be replicated across all brand directories (both Chinese and English)
2. Each brand has unique referral links and brand-specific content
3. Partnership pages use asset paths: `partnership/assets/`
4. Brand pages use asset paths: `assets/`
5. Asset paths are relative to the file location (no `../` prefix needed in current structure)

**CRITICAL: Partnership Page Duplication**
- `/index.html` and `/partnership/index.html` are EXACT duplicates (both Chinese)
- When updating partnership content, you MUST update both files
- This duplication allows the same page to be served at both `/` (root) and `/partnership`
- The English partnership page is separate at `/partnershipen/index.html`

### bc88 Special Notes

bc88 is a unique brand with special handling:

1. **No Self-Reference:** bc88 company pages do NOT display bc88 itself in the company cards section
2. **Not Yet on Other Pages:** bc88 has not been added to other company pages yet (future enhancement)
3. **When Adding bc88 to Other Pages:**
   - Determine the bc88 referral link (format: `https://bc88domain.com/RFXXXXXXXX`)
   - Add bc88 promo card to all other brand pages
   - Follow the same card structure as other companies
   - Include promotional offers (registration bonus, VIP rewards, etc.)
4. **GT88 Exclusion:** GT88 is excluded from bc88 pages but shown on other brand pages

### Asset Updates

CSS/JS changes require:
1. Modify source files in `assets/` or `partnership/assets/` directories
2. Update version query parameters in HTML files (e.g., `?v=1.5` → `?v=1.6`)
3. Update across all brand HTML files (both Chinese and English versions)
4. For partnership assets, update in both `/index.html` and `/partnership/index.html`

### Testing

No automated build process or test suite. Manual testing required:
- Test both language versions of each brand page
- Verify asset loading (check browser console)
- Test responsive layouts across device sizes
- Verify external links to partner sites
- Check language switcher functionality

### Tracking

- Google Analytics ID: `G-B115JTRT78` (all pages)
- Facebook Pixel ID: `1662354331153943` (partnership pages only)

## Common Tasks

### Adding a New Brand

1. **Create directories:**
   - `newbrand/` for Chinese version
   - `newbranden/` for English version

2. **Copy templates:**
   - Copy `ceo8/index.html` → `newbrand/index.html`
   - Copy `ceo8en/index.html` → `newbranden/index.html`

3. **Update brand-specific content:**
   - Logo/company images in `assets/images/companies/`
   - Header logo link: Change `/ceo8` to `/newbrand`
   - Language switcher links: `/newbrand` ↔️ `/newbranden`
   - Referral links in company cards
   - Promotional offers
   - Meta descriptions
   - Page title
   - Footer logo and company name
   - Footer copyright text

4. **Asset paths should already be correct** (`assets/...`)

5. **Add to other brand pages:**
   - Create promo card for new brand
   - Add to all existing brand pages (Chinese and English)
   - Follow existing card structure with referral link

### Updating Promotional Content

Company cards are in `#companies` section:
- Each card has `wba-promo-card` class
- Update offers in both language versions
- Maintain consistent structure across all brands

### Modifying Styles

Note: `app.css` appears to be compiled/built (very large file). Source files not in repository.
- Direct CSS edits may be overwritten if build process exists
- For small fixes, edit `app.css` directly and increment version
- For major changes, locate source files (likely Tailwind CSS based on utility classes)
