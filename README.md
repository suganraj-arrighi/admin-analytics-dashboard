# Admin Analytics Dashboard

A modern, responsive admin dashboard and analytics application built with React, Vite, and TypeScript.

## Key Technologies & Libraries

[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React%20Router-7.11.0-blue?logo=react-router)](https://reactrouter.com/)
[![Sass](https://img.shields.io/badge/Sass-1.97.1-hotpink?logo=sass)](https://sass-lang.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-purple?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)](https://www.typescriptlang.org/)

- **React:** A JavaScript library for building user interfaces.
- **React Router:** For declarative routing in the React application.
- **Sass:** A powerful CSS preprocessor for styling.
- **Vite:** A next-generation frontend build tool.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.

## Folder Structure

The project follows a standard React application structure:

```
/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable UI components
│   ├── context/         # React context providers
│   ├── data/            # Mock data for development
│   ├── pages/           # Application pages (Dashboard, Login, etc.)
│   ├── styles/          # Global styles, variables, and mixins
├── index.html           # Main HTML entry point
├── package.json         # Project dependencies and scripts
└── vite.config.ts     # Vite configuration
```

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
- [npm](https://www.npmjs.com/) (or your preferred package manager like Yarn or pnpm)

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd admin-analytics-dashboard
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Development Server

To start the local development server, run the following command:

```sh
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

To create a production build of the application, run:

```sh
npm run build
```

This will generate a `dist` folder with the optimized and minified assets.

### Linting

To check the code for any linting issues, run:

```sh
npm run lint
```
## Note:

Added the Codebase-Overview.md file to explain what was done and how the project works.