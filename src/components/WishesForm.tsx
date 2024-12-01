import React, { useState } from 'react';
import { Send } from 'lucide-react';

const WishesForm = () => {
  const [wish, setWish] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (wish.trim()) {
      alert('Your wish has been sent! 🎉');
      setWish('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <textarea
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          placeholder="Write your birthday wish here..."
          className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none h-32"
        />
        <button
          type="submit"
          className="absolute bottom-4 right-4 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default WishesForm;