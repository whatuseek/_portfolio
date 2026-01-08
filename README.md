
# 🚀 Professional Frontend Portfolio

This is a professional portfolio project. To run this on your local machine, you need **Node.js** installed.

## 🛠️ Local Setup (Essential)

1. **Install Node.js**: If you haven't, download it at [nodejs.org](https://nodejs.org/).
2. **Open Terminal**: In VS Code, go to `Terminal > New Terminal`.
3. **Run these commands**:
   ```bash
   # 1. Install the tools (only once)
   npm install

   # 2. Start the local server
   npm run dev
   ```
4. **View your site**: Click the link in your terminal (usually `http://localhost:5173`).

---

## 🌐 How to Deploy (Make it Live)

### ⚡ Option A: Vercel (Easiest)
1. **Download** this project as a ZIP and extract it.
2. Go to [Vercel.com](https://vercel.com) and log in.
3. **Drag and drop** the project folder onto the Vercel dashboard.
4. Vercel will automatically detect the `package.json` and build the site for you.

### 🛠️ Option B: GitHub Pages
1. Push your code to a GitHub repository.
2. Go to **Settings > Pages**.
3. Under "Build and deployment", select **GitHub Actions** as the source (standard for Vite projects).
4. GitHub will automatically deploy your site every time you push code.

---

## 🖼️ Personalizing Your Site
Edit `constants.tsx` to update your name, role, projects, and contact info. All text and configuration is centralized there for easy editing.
