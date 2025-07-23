# React `useEffect` Hook

The `useEffect` hook lets you perform **side effects** in your React function components. It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

---

## What is `useEffect`?

`useEffect` runs a function after your component renders. It's primarily used to:

- Fetch data
- Set up subscriptions or event listeners
- Update the DOM
- Start or clear timers
- Sync state with external systems (e.g., localStorage, APIs)

---

## Basic Syntax

```js
useEffect(() => {
  // Side effect logic here
}, [dependencies]);
```

## 1. No Dependency Array (⚠️ Runs After Every Render)

useEffect(() => {
// Executes on every render
});

## 2. Empty Dependency Array [] (✅ Runs Once on Mount)

useEffect(() => {
// Executes only once (like componentDidMount)
}, []);

## 3. With Dependencies [value] (✅ Runs on Mount + When value Changes)

useEffect(() => {
// Executes on first render + when 'value' changes
}, [value]);

## 4. Cleanup Function

Used to clean up effects when the component unmounts or before the effect runs again.

useEffect(() => {
const timer = setInterval(() => console.log('Tick'), 1000);

return () => {
clearInterval(timer); // Cleanup
console.log('Timer cleared');
};
}, []);

Scenario Example Description
Fetching API Data useEffect(() => fetchData(), [])
Event Listeners Add/remove event listeners on mount/unmount
Timers setTimeout, setInterval, clear on cleanup
Local Storage Sync Save or read values when specific state updates
DOM Updates Update document title or scroll behavior
