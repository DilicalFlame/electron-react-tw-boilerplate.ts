import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-500 to-purple-600">
      <div className="max-w-md rounded-lg bg-white p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Electron + React + TailwindCSS
        </h1>
        <p className="mb-6 text-center text-gray-600">
          Welcome to your TypeScript-powered desktop application!
        </p>
        <div className="space-y-4">
          <button
            onClick={() => alert('Hello from React!')}
            className="focus:ring-opacity-50 w-full rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
          >
            Click me!
          </button>
          <div className="rounded-md bg-gray-100 p-4">
            <h3 className="mb-2 font-semibold text-gray-800">Features:</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>✅ Electron with TypeScript</li>
              <li>✅ React 19 with TypeScript</li>
              <li>✅ TailwindCSS v4 for styling</li>
              <li>✅ ESLint for code quality</li>
              <li>✅ Prettier for code formatting</li>
              <li>✅ Vite for fast development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
