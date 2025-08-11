# 🚀 Development Workflow – React + Vite

## 1️⃣ Install Dependencies
Run this once after cloning the repository:
```sh
npm install
```
> Installs all required packages from `package.json`.

**If you see an error like**  
`Cannot find module 'three' or its corresponding type declarations`:  
```sh
npm install three
npm install --save-dev @types/three
```
Then re-run:
```sh
npm run dev
```

## 2️⃣ Run in Development Mode
Start a local dev server with hot reload:
```sh
npm run dev
```
Your app will be available at the URL shown in the terminal (usually `http://localhost:5173`).

## 3️⃣ Preview Production Build
Simulate the production build locally:
```sh
npm run build
npm run preview
```

## 4️⃣ Build for Production
Generate optimized static files in the `dist` folder:
```sh
npm run build
```

## 5️⃣ Deploy (Admins Only)
Deploy the latest code from **main** to the live site (**gh-pages** branch):
```sh
npm run deploy
```

---

## 📌 Branch & PR Policy
- **`main` branch**: Updated **only via Pull Requests**.
- **`gh-pages` branch**: Updated **only from `main`** during deployment.
- **Contributors**:  
  1. Create a branch or fork the repo.  
  2. Make your changes.  
  3. Open a PR for review and approval.
