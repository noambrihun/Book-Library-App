# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
איפה השתמשתי ב AI :
*עיצוב
מבנה כללי (App.tsx)
רקע בהיר (slate-50) לכל האתר
תוכן ממורכז עם ריווח נוח (max-w-7xl, padding)
Sidebar משמאל + אזור תוכן מימין (אותו layout כמו קודם)
Sidebar
רקע כהה (slate-900) עם צל
כותרת "My Shelf" + תווית "Book Library"
NavLink — הדף הפעיל מודגש ב-indigo, שאר הקישורים עם hover
אותם 3 קישורים: All Books, Add Book, Search Book
All Books
כותרת עמוד + משפט הסבר
Grid רספונסיבי: 1 עמודה במובייל → 2 → 3 בדסקטופ
כרטיס לבן לכל ספר: פינות מעוגלות, צל, hover קל
תג genre בצבע indigo
סיכום מוגבל ל-4 שורות (line-clamp)
כפתור Delete עדין (אדום בהיר, לא בוהק)
מצב "אין ספרים" — קופסה עם מסגרת מקווקוות
Add Book
שמרתי את אותו מבנה (inputs + 2 כפתורים, אותה לוגיקה)
עטפתי בכרטיס לבן עם צל
שדות עם מסגרת, צל ו-focus indigo
כפתורים: indigo (Add Book) ו-emerald (Generate Summary)
