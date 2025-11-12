# Binary Capital Website - Deployment Guide

**Date:** November 12, 2025
**Repository:** https://github.com/jashmhta/binaryXCapital

## 🚀 Deployment Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Netlify account (or Vercel/other Next.js hosting)

### Local Testing

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```
Visit: http://localhost:3000

3. **Build for Production**
```bash
npm run build
```

4. **Test Production Build**
```bash
npm start
```

### Deployment to Netlify

#### Option 1: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=.next
```

#### Option 2: GitHub Integration
1. Log in to Netlify
2. Click "New site from Git"
3. Connect to GitHub repository: jashmhta/binaryXCapital
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js
5. Click "Deploy site"

#### Option 3: Manual Deploy (Recommended for immediate deployment)
1. Build locally: `npm run build`
2. Install Netlify CLI: `npm install -g netlify-cli`
3. Login: `netlify login`
4. Deploy: `netlify deploy --prod`

### Deployment to Vercel (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 📋 Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify responsive design on mobile/tablet/desktop
- [ ] Check logo GIF animation loads correctly
- [ ] Verify all service pages work (/finance-advisory, /project-advisory, /capital-markets)
- [ ] Test new pages (/about, /team, /contact)
- [ ] Confirm Transaction Advisory is completely removed
- [ ] Check header hide-on-scroll functionality
- [ ] Verify all animations work properly
- [ ] Test contact form (if backend connected)
- [ ] Check footer design and links
- [ ] Verify SEO metadata
- [ ] Test page load speed

## 🎨 Key Features Implemented

### Visual Updates
- ✅ Transparent header with hide-on-scroll
- ✅ GIF logo animation
- ✅ New gradient hero background
- ✅ Improved typography (Montserrat + Inter)
- ✅ Modern footer design
- ✅ Sector-wise testimonials (no images)
- ✅ Icon-based team section

### Content Updates
- ✅ Removed "LLP" from branding
- ✅ Removed Transaction Advisory
- ✅ Created dedicated About page
- ✅ Created dedicated Team page
- ✅ Created dedicated Contact page
- ✅ India map video preparation

### Technical Updates
- ✅ Enhanced responsive design
- ✅ Improved accessibility
- ✅ Optimized font loading
- ✅ Better SEO structure
- ✅ Reduced motion support

## ⚠️ Important Notes

### India Map Video
Currently using a placeholder for the India map video. To add actual video:
1. Create or obtain an animated India map video (MP4 format)
2. Place it in `public/india_map.mp4`
3. The page will automatically use it (fallback to static image included)

### Environment Variables
If you need analytics or other services, create a `.env.local` file:
```
NEXT_PUBLIC_ANALYTICS_ENDPOINT=your_endpoint
NEXT_PUBLIC_ANALYTICS_WEBSITE_ID=your_id
```

## 🔧 Troubleshooting

### Build Errors
- Clear `.next` folder and rebuild
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Image Loading Issues
- Verify all images exist in `public/` folder
- Check file paths are correct

### Styling Issues
- Clear browser cache
- Check if globals.css is properly imported

## 📞 Support
For deployment assistance or issues:
- Email: sales@binarycapital.in
- Phone: +91 7738056127

---
**Deployed by:** Fellou AI Agent
**Date:** November 12, 2025 at 10:27 PM
