import React from 'react';
import BirthdayCard from './components/BirthdayCard';
import WishesForm from './components/WishesForm';
import ProfileImage from './components/ProfileImage';
import Quote from './components/Quote';

function App() {
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 
        flex flex-col items-center justify-center p-6 space-y-8"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 flex flex-col items-center space-y-8 w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
          🎉 Happy Birthday, Swati! 🎂
        </h1>
        
        <ProfileImage />
        
        <Quote />
        
        <div className="w-full grid md:grid-cols-2 gap-8 items-start">
          <BirthdayCard />
          
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Send Your Wishes to Swati
            </h2>
            <WishesForm />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
export default App;