# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Multi-brand casino affiliate website showcasing Hong Kong entertainment group partner platforms (CEO8, HKONE, JDM88, LFC8, ROLEX88, TOP88, GT88). Static HTML site with bilingual support (Chinese/English).

## Architecture

### Directory Structure

Each brand has its own directory containing:
- `index.html` - Chinese version
- `index-en.html` - English version

Brand directories:
- `ceo8/` - CEO8 brand pages
- `hkone/` - HKONE brand pages
- `jdm88/` - JDM88 brand pages
- `lfc8/` - LFC8 brand pages
- `rolex88/` - ROLEX88 brand pages
- `top88/` - TOP88 brand pages
- `gt88/` - GT88 brand pages
- `partnership/root/` - Partnership landing page

Shared assets:
- `assets/` - Centralized resources used by all brand pages
  - `styles/app.css` - Main stylesheet (~262KB, built/compiled CSS)
  - `js/app.js` - Main application JavaScript (~1.1MB, built/compiled)
  - `js/main.js` - Custom scripts (card shuffling, random online counts)
  - `images/` - Shared images
  - `fonts/` - Web fonts

### Key Patterns

**Bilingual Support:**
- Each page has two versions: `index.html` (Chinese) and `index-en.html` (English)
- Language switcher in header toggles between `/brandname` and `/brandnameen` routes
- Content structure identical between versions, only text differs
- CSS classes differentiate language-specific styling (e.g., `cn-corner-ribbon__label` vs `en-corner-ribbon__label`)

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
1. Changes typically need to be replicated across all brand directories
2. Each brand has unique referral links and brand-specific content
3. Partnership pages use different asset paths: `../partnership/assets/`
4. Brand pages use: `../assets/`

### Asset Updates

CSS/JS changes require:
1. Modify source files in `assets/` directory
2. Update version query parameters in HTML files (e.g., `?v=1.5` → `?v=1.6`)
3. Update across all brand HTML files (both Chinese and English versions)

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

1. Create new directory: `newbrand/`
2. Copy template from existing brand (e.g., `ceo8/`)
3. Update brand-specific content:
   - Logo/company images
   - Referral links
   - Promotional offers
   - Meta descriptions
   - Page title
4. Create both `index.html` and `index-en.html`
5. Update language switcher links

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
