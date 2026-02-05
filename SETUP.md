# Corn Cost Calculator PWA - Setup Guide

## 🚀 Quick Start

This PWA (Progressive Web App) allows multiple users to:
- Sign in with username/password
- Save all their farm inputs
- Automatically fetch latest corn prices from Ontario Grain Farmers
- Install on phone/tablet like a native app
- Work offline

---

## 📋 Step 1: Set Up Firebase

### Create Firebase Project

1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Name it "corn-calculator" (or any name you prefer)
4. Disable Google Analytics (optional)
5. Click "Create project"

### Enable Authentication

1. In your Firebase console, click "Authentication" in left sidebar
2. Click "Get started"
3. Click "Sign-in method" tab
4. Click "Email/Password"
5. Toggle "Enable" ON
6. Click "Save"

### Enable Realtime Database

1. Click "Realtime Database" in left sidebar
2. Click "Create Database"
3. Choose location (us-central1 recommended for Ontario)
4. Start in **test mode** for now (we'll add security rules later)
5. Click "Enable"

### Get Firebase Configuration

1. Click the gear icon ⚙️ next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps"
4. Click the web icon `</>`
5. Register your app with nickname "Corn Calculator"
6. Copy the `firebaseConfig` object

It will look like this:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyB...",
  authDomain: "corn-calculator-xxxxx.firebaseapp.com",
  databaseURL: "https://corn-calculator-xxxxx-default-rtdb.firebaseio.com",
  projectId: "corn-calculator-xxxxx",
  storageBucket: "corn-calculator-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### Update index.html

1. Open `index.html`
2. Find the `firebaseConfig` section (around line 700)
3. Replace the placeholder values with YOUR actual Firebase config

---

## 🎨 Step 2: Create App Icons

You need two icon files: `icon-192.png` and `icon-512.png`

### Option A: Use an Online Tool
1. Go to https://favicon.io/favicon-generator/
2. Create a simple icon with 🌽 emoji or text "CC"
3. Choose background color: #1a1c1e (dark theme)
4. Choose text color: #d4a832 (gold)
5. Download and rename files to `icon-192.png` and `icon-512.png`

### Option B: Simple Solid Color Icon
Create simple solid color PNG files:
- 192x192 pixels with gold background (#d4a832)
- 512x512 pixels with gold background (#d4a832)

Place both files in the same folder as `index.html`

---

## 🌐 Step 3: Deploy Your PWA

### Option A: Firebase Hosting (Recommended)

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. In your corn-calculator-pwa folder:
```bash
firebase init hosting
```

4. Configuration:
   - Use an existing project? **Yes**
   - Select your corn-calculator project
   - Public directory? **Type: .** (current directory)
   - Single-page app? **Yes**
   - Set up automatic builds? **No**
   - File index.html already exists. Overwrite? **No**

5. Deploy:
```bash
firebase deploy --only hosting
```

6. You'll get a URL like: `https://corn-calculator-xxxxx.web.app`

### Option B: Netlify (Alternative)

1. Go to https://netlify.com
2. Drag and drop your `corn-calculator-pwa` folder
3. Done! You'll get a URL like `https://random-name.netlify.app`

### Option C: Vercel (Alternative)

1. Go to https://vercel.com
2. Import your project
3. Deploy
4. Get URL like `https://corn-calculator.vercel.app`

---

## 📱 Step 4: Share With Your Team

### Share the Link

1. Get your deployed URL (from Step 3)
2. Share it via text/email/Slack with your team

Example: `https://corn-calculator-xxxxx.web.app`

### Install as App (iOS)

1. Open the link in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"
4. Tap "Add"
5. The app icon appears on home screen

### Install as App (Android)

1. Open the link in Chrome
2. Tap the menu (⋮)
3. Tap "Install app" or "Add to Home screen"
4. Tap "Install"
5. The app icon appears on home screen

---

## 🔒 Step 5: Security Rules (Important!)

Once you have your app working, secure your Firebase database:

1. Go to Firebase Console → Realtime Database
2. Click "Rules" tab
3. Replace the rules with:

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

4. Click "Publish"

This ensures users can only read/write their own data.

---

## 👥 Step 6: User Management

### Creating Accounts

Each team member:
1. Opens the app
2. Clicks "Create one"
3. Enters a username (e.g., "john_farm", "mary_manager")
4. Enters a password (minimum 6 characters)
5. Clicks "Create Account"

### Password Reset

To reset a user's password:
1. Go to Firebase Console → Authentication
2. Find the user
3. Click ⋮ menu → Reset password
4. Firebase sends reset email to username@corncalc.app (this won't deliver)
5. Alternative: Delete the user and have them re-register

---

## 📊 How It Works

### Automatic Price Updates

When a user opens the app:
1. Fetches latest corn prices from Grain Farmers of Ontario
2. Converts $/tonne to $/bushel
3. Updates the price input automatically
4. Shows success banner with current price

The price comes from: https://gfo.ca/average-commodity-prices/

### Data Persistence

- All inputs save automatically after 1 second of inactivity
- Data stored in Firebase Realtime Database under each user's ID
- Works offline (cached locally)
- Syncs when back online

### Features Included

✅ User authentication (username/password)
✅ Automatic data saving
✅ Automatic price fetching from GFO
✅ Acreage scaling
✅ Tillage system toggle (conventional vs no-till)
✅ Corn-on-corn penalty toggle
✅ Dynamic drying calculator
✅ Overhead costs
✅ Sensitivity analysis
✅ Mobile responsive
✅ Offline capability
✅ Installable as native app

---

## 🛠️ Troubleshooting

### "Price fetch failed"
- This is normal - the GFO website sometimes blocks automated requests
- The app will use the default $6.06/bu price
- Manual price updates still work fine

### "Authentication failed"
- Check Firebase config in index.html is correct
- Verify Email/Password auth is enabled in Firebase Console

### "App not installing"
- Icons must be named exactly `icon-192.png` and `icon-512.png`
- Icons must be in same folder as index.html
- Try accessing via HTTPS (HTTP won't install)

### Icons not showing
- Create simple 192x192 and 512x512 PNG files
- Use solid gold color (#d4a832) as background
- Place in same folder as index.html

---

## 📝 File Structure

Your deployment folder should contain:
```
corn-calculator-pwa/
├── index.html          (main app)
├── manifest.json       (PWA config)
├── sw.js              (service worker)
├── icon-192.png       (small icon)
└── icon-512.png       (large icon)
```

---

## 🎯 Next Steps

1. ✅ Set up Firebase (Step 1)
2. ✅ Update Firebase config in index.html
3. ✅ Create icons (Step 2)
4. ✅ Deploy to hosting (Step 3)
5. ✅ Share URL with team (Step 4)
6. ✅ Set security rules (Step 5)
7. ✅ Create accounts for team (Step 6)

---

## 💡 Tips

- **Usernames are permanent** - choose wisely (e.g., firstname_lastname)
- **Passwords are secure** - min 6 characters, stored encrypted
- **Data syncs automatically** - no save button needed
- **Works offline** - cached on device after first load
- **Updates instantly** - price fetches on every app open
- **Multi-device** - same account works on phone/tablet/computer

---

## 📞 Support

If you need help:
1. Check Firebase Console for errors
2. Check browser console (F12) for error messages
3. Verify all 5 files are deployed correctly
4. Ensure HTTPS is enabled (not HTTP)

---

## 🔄 Updating the App

To push updates:
1. Make changes to index.html
2. Update CACHE_NAME in sw.js (e.g., 'corn-calc-v2')
3. Redeploy:
```bash
firebase deploy --only hosting
```

Users will get the update automatically on next app load.
