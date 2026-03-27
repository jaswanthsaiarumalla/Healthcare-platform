# Healthcare SaaS UI

An interactive healthcare management system built with React and TypeScript, integrated with Firebase for authentication. This system allows healthcare providers to manage patient data, view analytics, and monitor dashboard metrics in a modern, responsive interface.

## 🚀 Features

*   **Dashboard Overview**: Comprehensive dashboard displaying key metrics, patient statistics, and recent activities.
*   **Patient Management**: View and manage patient records, including personal details, diagnoses, status, and room assignments.
*   **Analytics & Reporting**: Interactive charts and graphs for tracking patient trends, recovery rates, and monthly statistics.
*   **Authentication**: Secure login system powered by Firebase Authentication.
*   **Responsive Design**: Modern UI built with Tailwind CSS, optimized for desktop and mobile devices.
*   **Real-time Updates**: State management with Zustand for seamless data flow and updates.
*   **Service Worker Integration**: Offline capabilities and background sync for improved user experience.

## 🛠️ Technology Stack

**Frontend:**
*   React 19 + TypeScript + Vite
*   Tailwind CSS (for styling)
*   React Router DOM (for routing)
*   Firebase Authentication (for user auth)
*   Zustand (for state management)
*   Recharts (for data visualization)
*   Lucide React (for iconography)

## 📦 Installation & Setup

### Prerequisites
*   Node.js (v18+)
*   A Firebase project with Authentication enabled

### 1. Project Setup

1.  Clone or download the project:
    ```bash
    cd healthcare-saas-ui
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up environment variables:
    *   Create a `.env` file in the root directory.
    *   Add your Firebase configuration:
        ```env
        VITE_FIREBASE_API_KEY="your_api_key_here"
        VITE_FIREBASE_AUTH_DOMAIN="your_project.firebaseapp.com"
        VITE_FIREBASE_PROJECT_ID="your_project_id"
        VITE_FIREBASE_STORAGE_BUCKET="your_project.appspot.com"
        VITE_FIREBASE_MESSAGING_SENDER_ID="your_sender_id"
        VITE_FIREBASE_APP_ID="your_app_id"
        ```

4.  Start the development server:
    ```bash
    npm run dev
    ```
    *The app will be available at `http://localhost:5173`*

## 💡 Usage

*   **Login**: Access the application through the login page with Firebase authentication.
*   **Dashboard**: View key metrics and recent patient activities on the main dashboard.
*   **Patients**: Browse and manage patient records, filter by status, and view detailed information.
*   **Analytics**: Explore interactive charts showing patient trends, recovery statistics, and monthly data.
*   **Navigation**: Use the sidebar to navigate between different sections of the application.

---
*Built as a modern healthcare management solution.*
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
