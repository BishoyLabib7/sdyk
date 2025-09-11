# Copilot Instructions for the SDYK Project

## Project Overview

The SDYK project is a React-based web application built using Vite. It leverages modern JavaScript and React conventions to deliver a dynamic user experience. The project is structured to ensure modularity and scalability, with components organized by functionality.

## Architecture

- **Entry Point**: The application starts from `src/main.jsx`, which initializes the React app and renders the `App` component.
- **Component Structure**: Components are organized under `src/components` and further divided into subfolders for specific features (e.g., `src/components/feathers/home` for home-related components).
- **Pages**: Full-page components are located in `src/pages`, representing major views like `Home`, `Experiences`, and `NotFound`.
- **Styling**: Global styles are defined in `src/styles/index.css`.
- **Assets**: Static assets like images are stored in the `public` folder.

## Developer Workflows

### Build and Run

- Use `npm install` to install dependencies.
- Start the development server with `npm run dev`.
- Build the project for production using `npm run build`.

### Debugging

- Debugging is primarily done using browser developer tools.
- React DevTools can be used for inspecting component state and props.

### Testing

- No explicit testing framework is set up. Add tests as needed using your preferred framework (e.g., Jest, React Testing Library).

## Project-Specific Conventions

- **Component Naming**: Components are named using PascalCase (e.g., `Hero.jsx`, `Navbar.jsx`).
- **File Organization**: Related components are grouped together in subfolders under `src/components`.
- **State Management**: Local state is managed using React's `useState` and `useReducer` hooks. No global state management library is currently integrated.

## Integration Points

- **External Libraries**: The project uses Vite for bundling and development, and ESLint for linting.
- **Cross-Component Communication**: Props are the primary method for passing data between components.

## Examples

### Adding a New Component

1. Create a new file in the appropriate folder under `src/components`.
2. Use the following template:

   ```jsx
   import React from "react";

   const NewComponent = () => {
     return <div>New Component</div>;
   };

   export default NewComponent;
   ```

### Importing Assets

Assets are stored in the `public` folder and can be accessed using relative paths:

```jsx
<img src="/hero.png" alt="Hero" />
```

### Styling

Global styles are defined in `src/styles/index.css`. Use class names to apply styles:

```jsx
<div className="hero">Welcome to SDYK</div>
```

---

Feel free to update this document as the project evolves.
