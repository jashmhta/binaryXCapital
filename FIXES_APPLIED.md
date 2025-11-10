# Binary Capital - Fixes Applied

This document outlines all the fixes and improvements applied to make the Binary Capital Next.js application production-ready.

## Version Information
- **Framework:** Next.js 16.0.1
- **React:** 19.2.0
- **Node.js:** 22.13.0 or higher recommended
- **Package Manager:** npm

## Fixes Applied

### 1. Environment Variables Migration
**Issue:** Application used Vite-style environment variables (`import.meta.env`)  
**Fix:** Migrated to Next.js environment variables (`process.env.NEXT_PUBLIC_*`)

**Files Modified:**
- `src/components/Map.tsx`
- `src/const.ts`

**Changes:**
```typescript
// Before
const API_KEY = import.meta.env.VITE_FRONTEND_FORGE_API_KEY;

// After
const API_KEY = process.env.NEXT_PUBLIC_FRONTEND_FORGE_API_KEY;
```

### 2. TypeScript Type Definitions
**Issue:** Missing type definitions for AOS library  
**Fix:** Added `@types/aos` as dev dependency

**Command:**
```bash
npm install --save-dev @types/aos --legacy-peer-deps
```

### 3. Chart Component Type Fixes
**Issue:** TypeScript errors in `chart.tsx` due to missing type definitions  
**Fix:** Added explicit type definitions for tooltip and legend components

**File Modified:** `src/components/ui/chart.tsx`

**Changes:**
- Added `payload`, `label`, `labelFormatter`, `labelClassName`, `formatter`, `color` to ChartTooltipContent type
- Fixed ChartLegendContent type definition to avoid Pick type conflicts

### 4. Routing Migration
**Issue:** Application used `wouter` library which is incompatible with Next.js  
**Fix:** Replaced with Next.js native `usePathname` hook

**File Modified:** `src/hooks/useScrollToTop.ts`

**Changes:**
```typescript
// Before
import { useLocation } from 'wouter';
const [location] = useLocation();

// After
import { usePathname } from 'next/navigation';
const pathname = usePathname();
```

### 5. Tailwind CSS Configuration
**Issue:** Invalid darkMode configuration format  
**Fix:** Changed from array format to string format

**File Modified:** `tailwind.config.ts`

**Changes:**
```typescript
// Before
darkMode: ["class"]

// After
darkMode: "class"
```

### 6. Missing Shared Constants
**Issue:** Import from non-existent `@shared/const` module  
**Fix:** Defined constants directly in the file

**File Modified:** `src/const.ts`

**Added:**
```typescript
export const COOKIE_NAME = "auth_token";
export const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
```

## Installation & Setup

### Prerequisites
- Node.js 22.13.0 or higher
- npm 10.x or higher

### Installation Steps

1. **Install Dependencies:**
```bash
npm install --legacy-peer-deps
```

Note: The `--legacy-peer-deps` flag is required due to React 19 compatibility with some Radix UI components.

2. **Build for Production:**
```bash
npm run build
```

3. **Start Production Server:**
```bash
npm start
```

The application will run on port 3000 by default.

### Development Mode

To run in development mode:
```bash
npm run dev
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables (optional):

```env
# App Configuration
NEXT_PUBLIC_APP_TITLE=Binary Capital
NEXT_PUBLIC_APP_LOGO=https://your-logo-url.com/logo.png

# Map API (if using maps)
NEXT_PUBLIC_FRONTEND_FORGE_API_KEY=your_api_key_here
NEXT_PUBLIC_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev

# OAuth (if using authentication)
NEXT_PUBLIC_OAUTH_PORTAL_URL=your_oauth_url
NEXT_PUBLIC_APP_ID=your_app_id
```

## Available Routes

The application includes the following routes:

- `/` - Home page
- `/capital-markets` - Capital Markets services
- `/finance-advisory` - Finance Advisory services
- `/project-advisory` - Project Advisory services
- `/transaction-advisory` - Transaction Advisory services
- `/products/capitalmarkets` - Capital Markets products
- `/products/mergersacquisitions` - M&A products
- `/products/projectfinancing` - Project Financing products
- `/products/structuredbonds` - Structured Bonds products
- `/products/structuredfinance` - Structured Finance products
- `/products/supplychainfinancing` - Supply Chain Financing products

## Build Output

After successful build, you should see output similar to:

```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /capital-markets
├ ○ /finance-advisory
├ ○ /products/capitalmarkets
├ ○ /products/mergersacquisitions
├ ○ /products/projectfinancing
├ ○ /products/structuredbonds
├ ○ /products/structuredfinance
├ ○ /products/supplychainfinancing
├ ○ /project-advisory
└ ○ /transaction-advisory
○  (Static)  prerendered as static content
```

All routes are statically generated for optimal performance.

## Deployment

### Recommended Platforms

1. **Vercel** (Recommended)
   - Native Next.js support
   - Automatic deployments
   - Edge network CDN

2. **Netlify**
   - Good Next.js support
   - Continuous deployment

3. **AWS Amplify**
   - Scalable infrastructure
   - Custom domain support

### Deployment Steps (Vercel)

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Configure environment variables
4. Deploy

## Troubleshooting

### Build Errors

If you encounter build errors:

1. **Clear cache and reinstall:**
```bash
rm -rf node_modules package-lock.json .next
npm install --legacy-peer-deps
npm run build
```

2. **Check Node.js version:**
```bash
node --version  # Should be 22.x or higher
```

3. **Verify TypeScript compilation:**
```bash
npx tsc --noEmit
```

### Runtime Errors

If you encounter runtime errors:

1. Check browser console for detailed error messages
2. Verify environment variables are properly set
3. Ensure all required API keys are configured

## Dependencies

### Key Dependencies
- Next.js 16.0.1
- React 19.2.0
- TypeScript 5.x
- Tailwind CSS 4.x
- Radix UI components
- Framer Motion for animations
- Recharts for data visualization

### Dev Dependencies
- @types/aos
- @types/node
- @types/react
- ESLint
- TypeScript

## Support

For issues or questions:
1. Check the Next.js documentation: https://nextjs.org/docs
2. Review the fixes applied in this document
3. Check the build logs for specific error messages

## License

[Your License Here]

---

**Last Updated:** November 4, 2025  
**Build Status:** ✅ Production Ready
