# 🌽 Corn Calculator PWA - Quick Start

## 3-Minute Setup

### Step 1: Firebase (2 minutes)
1. Go to https://console.firebase.google.com → "Add project"
2. Enable **Authentication** (Email/Password)
3. Enable **Realtime Database** (test mode)
4. Get your config from Project Settings → Web App
5. Paste it into `index.html` (line 700)

### Step 2: Icons (30 seconds)
Go to https://favicon.io/favicon-generator/
- Text: 🌽 or CC
- Background: #1a1c1e
- Download → rename to `icon-192.png` and `icon-512.png`

### Step 3: Deploy (30 seconds)
**Firebase Hosting:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting  # Choose . as directory, Yes for SPA
firebase deploy --only hosting
```

**OR Netlify:** Drag folder to https://app.netlify.com/drop

**OR Vercel:** Drag folder to https://vercel.com/new

### Step 4: Share
Send the URL to your team:
- `https://your-app.web.app` (Firebase)
- `https://your-app.netlify.app` (Netlify)
- `https://your-app.vercel.app` (Vercel)

### Step 5: Install on Phone
**iPhone:** Open in Safari → Share → Add to Home Screen
**Android:** Open in Chrome → Menu → Install app

---

## What You Get

### ✅ Multi-User Support
- Each person creates their own account
- Data saves automatically
- Works on multiple devices

### ✅ Live Price Updates
- Fetches latest corn prices from Grain Farmers of Ontario
- Updates automatically when you open the app
- Converts $/tonne to $/bushel

### ✅ Full Calculator Features
- Operating costs (9 categories)
- Tillage system toggle (conventional vs no-till)
- Corn-on-corn penalty
- Drying calculator
- Overhead costs
- Breakeven analysis
- Sensitivity matrix
- Acreage scaling

### ✅ Works Like a Native App
- Installs to home screen
- Works offline
- No app store needed
- Updates automatically

---

## Files Included

```
corn-calculator-pwa/
├── index.html          Main app
├── manifest.json       PWA config
├── sw.js              Service worker
├── README.md          Overview
├── SETUP.md           Detailed guide
├── CHECKLIST.md       Step-by-step
├── create-icons.js    Icon generator
└── QUICKSTART.md      This file
```

---

## Firebase Config Template

Replace in `index.html` (line ~700):

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyB...",                    // ← Your API key
  authDomain: "your-app.firebaseapp.com",  // ← Your domain
  databaseURL: "https://your-app-default-rtdb.firebaseio.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

## Security (Do This!)

After deployment:
1. Firebase Console → Realtime Database → Rules
2. Paste:
```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```
3. Publish

---

## Testing Locally

Before deploying, test on your computer:

```bash
# Install a simple HTTP server
npm install -g http-server

# Run in your project folder
http-server -p 8080

# Open in browser
http://localhost:8080
```

⚠️ **Note:** Some PWA features (like install prompt) only work with HTTPS (i.e., after deployment).

---

## Troubleshooting

**Icons not showing?**
→ Make sure files are named exactly `icon-192.png` and `icon-512.png`

**Authentication not working?**
→ Check Firebase config is correct in index.html

**Price fetch failed?**
→ Normal! GFO blocks automated requests sometimes. Default price works.

**Can't install app?**
→ Must be accessed via HTTPS (not HTTP)

---

## Next Steps

1. ✅ Deploy your app
2. ✅ Create your account
3. ✅ Share with team
4. ✅ Everyone installs to home screen
5. ✅ Start tracking farm costs!

---

**Need more help? See SETUP.md for detailed instructions.**
