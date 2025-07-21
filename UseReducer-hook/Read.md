# useReducer Hook – List Management Project

This project is a hands-on learning experience with React's `useReducer` hook. It demonstrates how to manage complex state logic in a more organized and scalable way compared to `useState`.

---

## Key Concepts & Terminologies

### useReducer Hook

- A React hook used for managing state based on dispatched actions.
- Ideal for handling multiple related state transitions or complex logic.

### Reducer Function

- A pure function that takes the current state and an action object, then returns the new state.
- Acts as the **central logic unit** that defines how state should change based on `action.type`.

### Initial State

- A default state object representing the shape of your data (e.g., a list of people).
- Passed as the second argument to the `useReducer` hook.

### Dispatch Function

- Provided by `useReducer` to trigger state changes.
- Accepts an action object with:
  - `type`: Describes what kind of change to perform.
  - `payload`: Optional data needed to perform the update.

### Action Object

- A plain object describing the desired state change.
- Contains a `type` property (e.g., `"REMOVE_ITEM"`, `"CLEAR_LIST"`, `"RESET_LIST"`).
- May include a `payload` with additional data (e.g., an `id` to remove).

### State Management Flow

1. Dispatch is called with an action.
2. Reducer processes the action based on `type`.
3. A new version of the state is returned.
4. Component re-renders with the updated state.

---

## Learning Goals

- Replace multiple `useState` calls with a centralized reducer.
- Understand the flow of dispatching actions and handling them in a reducer.
- Learn to conditionally render UI based on state values.
- Structure reusable and maintainable state logic using `useReducer`.

---

## Functionalities Implemented

- Display a list of people.
- Remove an individual person from the list.
- Clear the entire list.
- Reset the list to its initial state.
- Use conditional rendering to toggle between **Clear** and **Reset** buttons based on current state.

---

## Why useReducer?

- Simplifies complex state logic.
- Keeps state updates predictable and centralized.
- Improves maintainability, especially as the app scales.

---

## Next Steps

- Add more actions like "Add Person" or "Edit Person."
- Combine with `useContext` for global state management.
- Experiment with asynchronous actions or external APIs.

---
