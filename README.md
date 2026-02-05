# 🌽 Corn Cost Calculator PWA

A Progressive Web App for Ontario corn farmers to compare their operation costs against OMAFA benchmarks.

## Features

- ✅ **Multi-user authentication** - Username/password sign-in
- ✅ **Automatic data saving** - All inputs save automatically to Firebase
- ✅ **Live price updates** - Fetches latest corn prices from Grain Farmers of Ontario
- ✅ **Installable** - Works like a native app on phone/tablet
- ✅ **Offline ready** - Works without internet after first load
- ✅ **Mobile responsive** - Optimized for all screen sizes

## Included Calculators

1. **Operating Costs** - 9 cost categories with OMAFA comparisons
2. **Tillage Toggle** - Switch between conventional and no-till budgets
3. **Drying Calculator** - Dynamic moisture point calculator
4. **Overhead Costs** - Track depreciation, interest, and fixed costs
5. **Breakeven Analysis** - Calculate breakeven yields
6. **Sensitivity Matrix** - Margin analysis at different prices/yields
7. **Corn-on-Corn Penalty** - 8.5% yield adjustment toggle
8. **Acreage Scaling** - See whole-farm totals

## Quick Start

1. **Set up Firebase** - See SETUP.md for detailed instructions
2. **Create icons** - 192x192 and 512x512 PNG files
3. **Deploy** - Firebase Hosting, Netlify, or Vercel
4. **Share** - Send URL to your team
5. **Install** - Add to home screen on mobile devices

## Files

- `index.html` - Main application
- `manifest.json` - PWA configuration
- `sw.js` - Service worker for offline support
- `SETUP.md` - Complete setup instructions
- `icon-192.png` - Small app icon (you need to create)
- `icon-512.png` - Large app icon (you need to create)

## Data Sources

- **OMAFA Benchmarks** - Ontario Ministry of Agriculture 2025 Field Crop Budgets
- **Corn Prices** - Grain Farmers of Ontario average commodity prices
- **Land Rent** - University of Guelph Farmland Survey 2024

## Technology Stack

- **Frontend** - Vanilla JavaScript, HTML5, CSS3
- **Backend** - Firebase Authentication + Realtime Database
- **Offline** - Service Workers with caching
- **Charts** - HTML5 Canvas

## Security

- User passwords encrypted by Firebase Auth
- Each user can only access their own data
- Security rules prevent cross-user data access

## Browser Support

- ✅ Chrome/Edge (Android & Desktop)
- ✅ Safari (iOS & macOS)
- ✅ Firefox (Desktop)
- ✅ Samsung Internet (Android)

## License

Created for Bosdale Farm Operations - Cambridge, Ontario

---

**Read SETUP.md for complete deployment instructions**
