# Context API Learning – Local State Challenge

This challenge is part of my React journey in learning state management before diving into the Context API. The focus here was on managing state **locally in a parent component** and **passing it down via props** without using global state yet.

---

## Challenge Overview

- Create and nest the following components:
  - `Navbar.jsx`
    - `NavLinks.jsx` (nested inside `Navbar`)
      - `UserContainer.jsx` (nested inside `NavLinks`)
- Import `Navbar` in `App.jsx` and remove default container styles.

### In `Navbar.jsx`:

- Set up a user state with a default value.
- Create a logout function to set the user to `null`.
- Pass both `user` and `logout` down to `UserContainer.jsx`.

### In `UserContainer.jsx`:

- If a user exists:
  - Display a greeting with their name.
  - Show a logout button.
- If no user:
  - Display: `please login`.

---

## What I Learned

- Managing state locally at the component level.
- Passing props through multiple levels (prop drilling).
- Understanding when prop drilling becomes inefficient.
- Realizing the need for Context API in complex component trees.
