'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">{error.message}</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-blue-600">VCell AI Assistant</h1>
        
        {!user ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-600 text-lg">Please log in to start modeling</p>
            <a 
              href="/api/auth/login" 
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg"
            >
              Log In
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-xl">
            <p className="text-xl">Welcome, <span className="font-bold text-green-600">{user.name}</span>! 👋</p>
            <img src={user.picture || ''} alt="User" className="w-16 h-16 rounded-full border-2 border-blue-200" />
            <a 
              href="/api/auth/logout" 
              className="mt-4 text-sm text-gray-500 underline hover:text-red-500"
            >
              Log out
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
