# Codebase Overview: Admin Analytics Dashboard

This document provides a summary of the implementation details for the Admin Analytics Dashboard, a frontend coding challenge.

## High-Level Architecture

The application is built using a modern frontend stack:

-   **Framework**: React (v19) with Functional Components and Hooks.
-   **Build Tool**: Vite for fast development and optimized builds.
-   **Language**: TypeScript for type safety and improved developer experience.
-   **Routing**: `react-router-dom` (v7) for client-side routing.
-   **Styling**: Sass with a modular structure (`.scss` files per component).
-   **State Management**: React Context API for managing global state for authentication and user data.

The project is structured logically with clear separation of concerns:
-   `components/`: For reusable, generic UI elements.
-   `context/`: For global state providers (`AuthContext`, `UserContext`).
-   `data/`: Contains the mock data used throughout the application.
-   `pages/`: Each page is a self-contained module with its own component and styles.
-   `routes.tsx`: Defines the logic for public and protected routes.
-   `styles/`: For global styles and Sass variables.

---

## Core Feature Implementation

### 1. Authentication (Login Page)

-   **Route**: `/login`
-   **Implementation**: The `Login.tsx` component presents a form for email and password entry.
-   **Logic**:
    -   Authentication is simulated using hardcoded credentials (`admin@test.com` / `1234`).
    -   Upon successful login, an `isAuth` flag and the user's email are stored in `localStorage` to persist the session. This is managed by the `AuthContext`.
    -   Incorrect credentials result in an error message displayed on the form.
-   **Bonus (Google SSO)**: A "Sign in with Google" button is present on the UI, fulfilling the visual aspect of the bonus requirement. The actual OAuth flow is not implemented.

### 2. Protected Routes & Dashboard

-   **Routes**: `/dashboard` (and all other private pages).
-   **Implementation**:
    -   A `ProtectedRoute` component was created. It checks for the `isAuthenticated` flag from `AuthContext`. If the user is not authenticated, it redirects them to `/login`.
    -   A `PublicRoute` was also implemented to prevent authenticated users from accessing the login page, redirecting them to the dashboard instead.
    -   A shared `DashboardLayout` component provides a consistent sidebar and navigation for all protected pages.
-   **Dashboard Features**:
    -   **KPI Cards**: The `Dashboard.tsx` component displays key metrics (Total Users, Active Learners, etc.) using data from `mockData.ts`.
    -   **Data Visualization**: A bar chart shows "Time Spent per Language". This was implemented with custom CSS and HTML, avoiding the need for an external charting library while still being dynamic based on the mock data.
    -   **Logout**: The layout contains a "Sign Out" button that clears the `localStorage` session via `AuthContext` and redirects the user to the login page.

### 3. User Management

-   **Route**: `/users`
-   **Implementation**: The `Users.tsx` component displays a list of users in a responsive table.
-   **State Management**: The user list is managed via `UserContext`, which is initialized with data from `USERS_LIST` in `mockData.ts`.
-   **Interactivity**:
    -   **Filter**: A search bar allows filtering the user list by name in real-time. The filtering logic is case-insensitive.
    -   **Delete**: Each user row has a "Delete" button. Clicking it calls the `deleteUser` function from the `UserContext`, which removes the user from the state. The UI updates automatically to reflect this change.

### 4. Profile & Settings

-   **Route**: `/settings`
-   **Implementation**: The `Settings.tsx` component provides a form to update user information.
-   **Logic**:
    -   Users can update their "Display Name". The change is persisted in the application's state via `UserContext`.
    -   The user's email is displayed in a `readOnly` field, sourced from `localStorage`.
    -   A success message is shown after the profile is updated.

---
