'use client';

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useState } from 'react';

export default withPageAuthRequired(function ChatPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Привіт! Я VCell AI. З якою біомоделью ми працюватимемо сьогодні?' }
  ]);
  const [input, setInput] = useState('');

  return (
    <main className="flex h-screen bg-gray-100">
      {/* 1. Sidebar  */}
      <aside className="w-72 bg-gray-50 border-r border-gray-200 p-4 flex flex-col shadow-sm">
        <div className="mb-6">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Історія моделей</h2>
          <div className="space-y-3">
            {/* Карточки моделей  */}
            <div className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-blue-400 cursor-pointer transition-all">
              <p className="text-sm font-medium text-gray-700">Glycolysis Model</p>
              <p className="text-xs text-gray-400">Виправлено 2 години назад</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-blue-400 cursor-pointer transition-all">
              <p className="text-sm font-medium text-gray-700">Krebs Cycle</p>
              <p className="text-xs text-gray-400">Виправлено вчора</p>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. Основний чат */}
      <section className="flex-1 flex flex-col bg-white">
        {/* Шапка - додати стилі кнопці "Назад" */}
        <header className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
          <h1 className="font-bold text-gray-800">VCell AI Chat</h1>
          <a 
            href="/" 
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-medium rounded-lg transition-all"
          >
            ← На головну
          </a>
        </header>

        {/* Вікно вводу */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-2xl p-4 rounded-2xl shadow-sm ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-800'}`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Панель вводу */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Спитай що-небудь..."
              className="flex-1 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
            />
            <button className="px-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md">
              Відправити
            </button>
          </div>
        </div>
      </section>
    </main>
  );
});

// 'use client';

// import { useUser } from '@auth0/nextjs-auth0/client';
// import { useEffect, useState } from 'react';

// export default function Home() {
//   const { user, error, isLoading } = useUser();
//   const [isMounted, setIsMounted] = useState(false);

//   // 
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Если мы еще не в браузере (на сервере)ничего не рендерим или рендерим скелет
//   if (!isMounted) return null; 

//   if (isLoading) return <div className="p-8 text-center">Загрузка...</div>;
//   if (error) return <div className="p-8 text-red-500 text-center">{error.message}</div>;

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
//       <div className="max-w-3xl w-full flex flex-col items-center gap-8 text-center">
        
//         <div className="space-y-4">
//           <h1 className="text-5xl font-extrabold text-blue-600">VCell AI Platform</h1>
//           <p className="text-gray-600 text-lg leading-relaxed">
//             An AI-powered platform for discovering, analyzing, and exploring biomodels from the VCell database. 
//             Built as part of Google Summer of Code (GSoC)...
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left w-full text-sm text-gray-700">
//           <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">✔ AI-Powered Chatbot</div>
//           <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">✔ Biomodel Search & API</div>
//           <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">✔ Visual Diagrams</div>
//           <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">✔ Knowledge Base (Qdrant)</div>
//         </div>

//         <div className="mt-8">
//           {!user ? (
//             <a 
//               href="/api/auth/login" 
//               className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg text-lg"
//             >
//               Get Started / Log In
//             </a>
//           ) : (
//             <div className="flex flex-col items-center gap-4">
//               <p className="text-lg text-gray-700">Welcome back, <span className="font-bold text-blue-600">{user.name}</span>!</p>
              
//               <div className="flex gap-4">
//                 <a 
//                   href="/chat" 
//                   className="px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all shadow-md text-lg"
//                 >
//                   Перейти до чату
//                 </a>
//                 <a 
//                   href="/api/auth/logout" 
//                   className="px-8 py-4 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all shadow-md text-lg"
//                 >
//                   Вийти
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>

//       </div>
//     </main>
//   );
// }