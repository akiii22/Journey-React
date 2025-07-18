# useRef Hook – React Learning Journey

In this section, I explored the **`useRef` hook** in React.  
It's a powerful tool that provides a way to persist values **without triggering re-renders** and to **directly reference DOM elements**.

---

## What I Learned

### `useRef` DOES NOT trigger re-renders

Unlike `useState`, updating a `ref` value does **not** cause the component to re-render.

### Preserves value across renders

The value stored in a `ref` remains intact between renders — perfect for keeping track of previous values or intervals.

### Useful for targeting DOM nodes

With `useRef`, I can directly reference and interact with a DOM element, similar to `document.querySelector()` in vanilla JS.

```jsx
const refContainer = useRef(null);

useEffect(() => {
  refContainer.current.focus(); // Accessing the DOM node
}, []);
```
