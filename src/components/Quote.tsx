import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

const Quote = () => {
  return (
    <div className="max-w-2xl text-center px-6 py-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
      <QuoteIcon className="w-8 h-8 text-pink-500 mx-auto mb-4" />
      <blockquote className="text-xl font-medium text-gray-800 mb-4">
        "Dear Swati, your beautiful smile brightens up every room you walk into. 
        Your kindness and grace make the world a better place. 
        May this birthday bring you endless moments of joy, love, and laughter!"
      </blockquote>
      <div className="text-gray-600 font-semibold">
        - With Happiness ❤️
      </div>
    </div>
  );
};

export default Quote;