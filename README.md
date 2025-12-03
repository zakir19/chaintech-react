This is a simple single-page application (SPA) built with React and React Router DOM to demonstrate fundamental user authentication and profile management using the Context API for state management and Local Storage for mock persistence.

Features

User Registration: Create a new account.
User Login: Authenticate using stored credentials.
Profile Management: View and update user details (Name, Email).
Logout: Clear the user session.
Protected Routes: Restricted access to the `/profile` page for logged-in users only.
Simple Inline Styling: All components are styled using simple, consistent inline CSS for a clean, sober UI.
Session Persistence: Maintains user login state across page refreshes using `localStorage`.

Technology Stack

Frontend React (Create React App, if applicable)
Routing React Router DOM
tate Management React Context API (`AuthContext`)
Mock Database/Session Storage Browser `localStorage`

Steps

1.  Register: User submits data. Data is saved to `localStorage` under the `dbUser` key. Redirects to `/login`.
2.  Login: User submits email/password. Credentials are checked against `dbUser`. If valid, data is saved to `sessionUser`, the global `user` state is set, and the user is redirected to `/profile`.
3.  Access: The `<ProtectedRoute>` checks the global `user` state before rendering the restricted components.
4.  Logout: Both `sessionUser` in `localStorage` and the global `user` state are cleared.

Project Structure

```bash
src/
├── components/
│   ├── AuthContext.js
│   ├── Login.js
│   ├── Profile.js
│   ├── ProtectedRoute.js
│   └── Register.js
├── App.js
└── index.js