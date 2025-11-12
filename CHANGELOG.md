# Binary Capital Website - Changelog

## Version 2.0.0 - November 12, 2025

### Major Changes

#### Header & Navigation
- **Transparent Header**: Changed from solid white to transparent with backdrop blur
- **Hide on Scroll**: Header now hides when scrolling down, appears when scrolling up
- **Logo Enhancement**: Replaced video logo with GIF animation for better performance
- **Logo Link**: Logo now properly links to home page (#home)

#### Hero Section
- **Background**: Changed from blue overlay to modern dark gradient (slate colors)
- **Typography**: Updated to use Montserrat for headings, Inter for body text
- **Colors**: New amber accent color scheme (#fbbf24) replacing previous secondary colors
- **Layout**: Improved spacing and visual hierarchy

#### Content Restructuring
- **New Pages Created**:
  - `/about` - Comprehensive about page with vision, mission, values
  - `/team` - Dedicated team page with expertise areas
  - `/contact` - Full contact page with form and information
- **Removed**: Transaction Advisory section and page completely eliminated
- **Home Page**: Streamlined to focus on key content with links to dedicated pages

#### Design Updates
- **Testimonials**: Converted to sector-wise format, removed all names and images
- **Team Section**: Removed profile images, implemented icon-based design
- **India Map**: Added video element support (with static image fallback)
- **Map Info**: Removed state-by-state information
- **Footer**: Complete redesign with gradient background and improved layout
- **Branding**: Removed "LLP" suffix - now just "Binary Capital"

#### Performance & UX
- **Animations**: Slowed CountUp animations from 2000ms to 4000ms
- **Responsive**: Enhanced mobile, tablet, and desktop responsiveness
- **Typography**: All content center-aligned for better aesthetics
- **Accessibility**: Added reduced motion support and better focus states

#### Technical Improvements
- **CSS**: Completely rewritten globals.css with modern utilities
- **SEO**: Enhanced metadata and structured data
- **Fonts**: Optimized font loading with display: swap
- **Performance**: Preloading critical assets

### Files Modified
- `src/app/page.tsx` - Complete redesign
- `src/app/layout.tsx` - Metadata and optimization updates
- `src/app/globals.css` - Complete rewrite
- `public/binary_capital_logo.gif` - New logo animation

### Files Added
- `src/app/about/page.tsx`
- `src/app/team/page.tsx`
- `src/app/contact/page.tsx`
- `DEPLOYMENT_GUIDE.md`
- `INDIA_MAP_VIDEO_TODO.md`
- `CHANGELOG.md`

### Files Removed
- `src/app/transaction-advisory/page.tsx`
- All transaction advisory references

### Breaking Changes
- Transaction Advisory service completely removed
- URL structure changed with new dedicated pages
- Logo file format changed from .mp4 to .gif

### Migration Notes
If updating from previous version:
1. Update any external links pointing to transaction-advisory
2. Clear browser cache to see new logo GIF
3. Test all internal navigation links
4. Verify responsive design on all devices

---
**Version:** 2.0.0  
**Release Date:** November 12, 2025  
**Status:** ✅ Production Ready
