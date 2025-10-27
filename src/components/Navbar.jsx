import { useState } from 'react';
import { Search, Play, Film } from 'lucide-react';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
              <Film className="text-white" size={18} />
            </div>
            <span className="font-semibold tracking-tight text-white">VibeAnime</span>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search anime, movies, or genres..."
                className="w-full h-10 rounded-xl bg-white/5 border border-white/10 px-10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500/60 focus:border-transparent"
              />
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
            </div>
          </form>

          <button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-medium shadow-lg shadow-fuchsia-500/30 hover:brightness-110 transition">
            <Play size={16} />
            Watch Now
          </button>
        </div>
      </div>
    </header>
  );
}
