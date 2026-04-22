'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div className="p-8 text-center">Загрузка...</div>;
  if (error) return <div className="p-8 text-red-500 text-center">{error.message}</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <div className="max-w-3xl w-full flex flex-col items-center gap-8 text-center">
        
        {/* Заголовок */}
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold text-blue-600">VCell AI Platform</h1>
          
          {/* Опис */}
          <p className="text-gray-600 text-lg leading-relaxed">
            An AI-powered platform for discovering, analyzing, and exploring biomodels from the VCell database. 
            Built as part of Google Summer of Code (GSoC), this project combines modern web technologies 
            with AI capabilities to provide an intuitive interface for scientific model research.
          </p>
        </div>

        {/* Список функцій */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left w-full text-sm text-gray-700">
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">✔ AI-Powered Chatbot</div>
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">✔ Biomodel Search & API</div>
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">✔ Visual Diagrams</div>
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">✔ Knowledge Base (Qdrant)</div>
        </div>

        {/* Кнопки дій */}
        <div className="mt-8">
          {!user ? (
            <a 
              href="/api/auth/login" 
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg text-lg"
            >
              Get Started / Log In
            </a>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg text-gray-700">Welcome back, <span className="font-bold text-blue-600">{user.name}</span>!</p>
              
              <div className="flex gap-4">
                <a 
                  href="/chat" 
                  className="px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all shadow-md text-lg"
                >
                  Перейти до чату
                </a>
                <a 
                  href="/api/auth/logout" 
                  className="px-8 py-4 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all shadow-md text-lg"
                >
                  Вийти
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}


// 'use client';

// import { useUser } from '@auth0/nextjs-auth0/client';

// export default function Home() {
//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div className="p-8">Loading...</div>;
//   if (error) return <div className="p-8 text-red-500">{error.message}</div>;

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col gap-8">
//         <h1 className="text-4xl font-bold text-blue-600">VCell AI Assistant</h1>
        
//         {!user ? (
//           <div className="flex flex-col items-center gap-4">
//             <p className="text-gray-600 text-lg">Please log in to start modeling</p>
//             <a 
//               href="/api/auth/login" 
//               className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg"
//             >
//               Log In
//             </a>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-xl">
//             <p className="text-xl">Welcome, <span className="font-bold text-green-600">{user.name}</span>! 👋</p>
//             <img src={user.picture || ''} alt="User" className="w-16 h-16 rounded-full border-2 border-blue-200" />
//             <a 
//               href="/api/auth/logout" 
//               className="mt-4 text-sm text-gray-500 underline hover:text-red-500"
//             >
//               Log out
//             </a>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }