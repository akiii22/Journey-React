# React Global Context API – Learning Journey

This project documents my learning experience in setting up and using **React's Context API** for global state management.

---

## Project Setup

```bash
# 1. Create a new Vite + React app
npm create vite@latest global-context -- --template react

# 2. Install dependencies and start the dev server
npm install
npm run dev

# 3. Inside /src, create a new file: context.jsx

# 4. Set up a Global Context using createContext()

# 5. Create a Provider component (AppContext) that:
#    - Holds state (via useState or useReducer)
#    - Returns <GlobalContext.Provider value={...}> with state/logic
#    - Uses children prop to wrap child components

# 6. Wrap your app in the provider (main.jsx)

# 7. Create a custom hook (e.g., useGlobalContext) to simplify context consumption

# 8. Use the context in App.jsx or any nested component
```
