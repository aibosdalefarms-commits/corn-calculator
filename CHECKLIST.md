## 🔥 Firebase Setup Checklist

Complete these steps to get your Corn Calculator PWA online:

### 1. Create Firebase Project
- [ ] Go to https://console.firebase.google.com
- [ ] Click "Add project"
- [ ] Name: "corn-calculator" or similar
- [ ] Create project

### 2. Enable Authentication
- [ ] Click "Authentication" in sidebar
- [ ] Click "Get started"
- [ ] Click "Sign-in method" tab
- [ ] Enable "Email/Password"
- [ ] Save

### 3. Enable Realtime Database
- [ ] Click "Realtime Database" in sidebar
- [ ] Click "Create Database"
- [ ] Choose "us-central1" location
- [ ] Start in "test mode"
- [ ] Enable

### 4. Get Your Config
- [ ] Click ⚙️ gear icon → "Project settings"
- [ ] Scroll to "Your apps"
- [ ] Click web icon `</>`
- [ ] Register app: "Corn Calculator"
- [ ] Copy the firebaseConfig object

### 5. Update index.html
```javascript
// Find this section in index.html (around line 700)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",              // ← paste your values
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### 6. Create Icons
Choose ONE option:

**Option A - Online Tool (Easiest)**
- [ ] Go to https://favicon.io/favicon-generator/
- [ ] Use 🌽 emoji or "CC" text
- [ ] Background: #1a1c1e (dark)
- [ ] Text color: #d4a832 (gold)
- [ ] Download and rename to icon-192.png and icon-512.png

**Option B - Use Node.js Script**
- [ ] Install: `npm install canvas`
- [ ] Run: `node create-icons.js`
- [ ] Icons created automatically

**Option C - Manual**
- [ ] Create 192x192 PNG with gold background
- [ ] Create 512x512 PNG with gold background
- [ ] Save as icon-192.png and icon-512.png

### 7. Deploy to Firebase Hosting
```bash
# Install Firebase CLI (one time)
npm install -g firebase-tools

# Login
firebase login

# Initialize (in your project folder)
firebase init hosting
# Choose existing project
# Public directory: . (dot)
# Single-page app: Yes
# Overwrite index.html: No

# Deploy
firebase deploy --only hosting
```

### 8. Get Your URL
After deployment, you'll see:
```
Hosting URL: https://your-project.web.app
```

### 9. Share With Team
- [ ] Text/email the URL to your team
- [ ] Tell them to "Add to Home Screen" on mobile

### 10. Secure Your Database
- [ ] Firebase Console → Realtime Database → Rules
- [ ] Copy rules from SETUP.md
- [ ] Publish

---

## ✅ You're Done!

Your Corn Calculator PWA is now:
- ✅ Online and shareable
- ✅ Installable on mobile devices
- ✅ Saving user data automatically
- ✅ Fetching live corn prices
- ✅ Working offline

---

## 🚨 Common Issues

**"Firebase not defined" error**
→ Check your firebaseConfig in index.html

**"Can't install app"**
→ Make sure you have icon-192.png and icon-512.png files

**"Authentication failed"**
→ Verify Email/Password auth is enabled in Firebase Console

**"Price fetch failed"**
→ This is normal - GFO blocks some requests. Default price still works.

---

## 📞 Need Help?

Check the full SETUP.md file for detailed instructions.
