# User List App (Test Task)

## 🛠️ Используемые технологии

- **React** + **Vite** — современная сборка и компонентный UI.
- **React Router DOM** — маршруты и навигация между страницами.
- **Redux Toolkit** — UI-состояния (например, лайки, фильтры).
- **React Query** — загрузка и кэширование данных с сервера.
- **SCSS Modules** — изоляция CSS, scoped-стили.
- **React Use** — хуки вроде `useDebounce`.

## 📦 Оптимизация

- ✅ `Suspense` + `React.lazy()` для code-splitting.
- ✅ `react-query` для кэширования и оптимальной загрузки данных.
- ✅ `useMemo`, `useDebounce` — производительность UI.
- ✅ UI fallback-компоненты (`Loader`) для UX в моменты ожидания.

## 💬 Почему такой стек?

- `react-query` упрощает работу с API: кэш, refetch, loading.
- Redux остаётся для UI-логики — логично и масштабируемо.
- Vite позволяет быстро запускать и собирать проект.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
	extends: [
		// Remove ...tseslint.configs.recommended and replace with this
		...tseslint.configs.recommendedTypeChecked,
		// Alternatively, use this for stricter rules
		...tseslint.configs.strictTypeChecked,
		// Optionally, add this for stylistic rules
		...tseslint.configs.stylisticTypeChecked,
	],
	languageOptions: {
		// other options...
		parserOptions: {
			project: ['./tsconfig.node.json', './tsconfig.app.json'],
			tsconfigRootDir: import.meta.dirname,
		},
	},
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
	plugins: {
		// Add the react-x and react-dom plugins
		'react-x': reactX,
		'react-dom': reactDom,
	},
	rules: {
		// other rules...
		// Enable its recommended typescript rules
		...reactX.configs['recommended-typescript'].rules,
		...reactDom.configs.recommended.rules,
	},
})
```
