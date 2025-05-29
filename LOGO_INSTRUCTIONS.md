# Logo Integration Instructions

## How to Replace Logo Placeholders

The application has been set up to use professional logos for **Hyper Scale Insights**. You need to replace the placeholder files with your actual logo images.

### Files to Replace:

1. **`src/assets/logo.jpeg`** - Clean/minimal logo for navbar
   - Recommended size: 200x60px or similar aspect ratio
   - Used in: Desktop navbar, mobile navbar icon
   - Should be a clean, minimal version of your logo

2. **`src/assets/logo2.jpeg`** - Full logo for mobile menu
   - Recommended size: 300x100px or similar aspect ratio  
   - Used in: Mobile menu header
   - Can be the full version with text/tagline

### Steps to Replace:

1. **Prepare your logo files:**
   - Save your clean logo as `logo.jpeg`
   - Save your full logo as `logo2.jpeg`
   - Ensure they are in JPEG format
   - Optimize for web (keep file size reasonable)

2. **Replace the files:**
   - Navigate to `src/assets/` folder
   - Delete the existing placeholder files
   - Copy your logo files with the exact same names:
     - `logo.jpeg` (clean version)
     - `logo2.jpeg` (full version)

3. **Alternative formats:**
   If you prefer PNG or SVG format, you can:
   - Change the file extensions in the import statements in `src/components/navbar/Navbar.js`
   - Update lines 12-13:
     ```javascript
     import cleanLogo from "../../assets/logo.png";  // or .svg
     import fullLogo from "../../assets/logo2.png";   // or .svg
     ```

### Fallback Behavior:

If the logo files fail to load, the application will automatically show a fallback with:
- A stylized "H" icon with gradient background
- "Hyper Scale Insights" text branding

This ensures your application always looks professional even if there are logo loading issues.

### Testing:

After replacing the logos:
1. Restart your development server (`npm run dev`)
2. Check the navbar on desktop view
3. Check the mobile menu
4. Verify logos display correctly in both light and dark themes 