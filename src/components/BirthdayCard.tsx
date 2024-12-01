import React from 'react';
import { Cake, Heart, Stars, PartyPopper } from 'lucide-react';
import { useConfetti } from '../hooks/useConfetti';

const BirthdayCard = () => {
  const triggerConfetti = useConfetti();

  return (
    <div className="relative p-6 bg-white rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300 max-w-md w-full">
      <div className="absolute -top-4 -right-4">
        <PartyPopper 
          className="w-8 h-8 text-pink-500 animate-bounce" 
          onClick={triggerConfetti}
        />
      </div>
      <div className="text-center">
        <Cake className="w-16 h-16 mx-auto text-pink-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Happy Birthday Swati!</h2>
        <p className="text-gray-600 mb-6">
          Wishing you a day filled with sweet moments and beautiful surprises.
          May your life continue to sparkle with joy and success!
        </p>
        <div className="flex justify-center space-x-2 mb-4">
          <Heart className="w-6 h-6 text-red-500 animate-pulse" />
          <Stars className="w-6 h-6 text-yellow-500 animate-spin-slow" />
          <Heart className="w-6 h-6 text-red-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;