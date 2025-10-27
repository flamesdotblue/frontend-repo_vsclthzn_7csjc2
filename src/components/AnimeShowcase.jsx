import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Play, Star } from 'lucide-react';

const sampleAnime = [
  {
    id: 1,
    title: 'Neon Drift: Tokyo Pulse',
    cover: 'https://images.unsplash.com/photo-1542759564-1750f4c75e16?q=80&w=1400&auto=format&fit=crop',
    rating: 4.8,
    year: 2024,
    tags: ['Action', 'Sci‑Fi']
  },
  {
    id: 2,
    title: 'Moonlit Garden',
    cover: 'https://images.unsplash.com/photo-1592840496694-26d035b72bc9?q=80&w=1400&auto=format&fit=crop',
    rating: 4.6,
    year: 2023,
    tags: ['Fantasy', 'Drama']
  },
  {
    id: 3,
    title: 'Crimson Blade',
    cover: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1400&auto=format&fit=crop',
    rating: 4.7,
    year: 2022,
    tags: ['Adventure']
  },
  {
    id: 4,
    title: 'Astral Academy',
    cover: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1400&auto=format&fit=crop',
    rating: 4.5,
    year: 2021,
    tags: ['School', 'Mystery']
  },
  {
    id: 5,
    title: 'Skybound Symphony',
    cover: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1400&auto=format&fit=crop',
    rating: 4.9,
    year: 2025,
    tags: ['Music', 'Fantasy']
  },
  {
    id: 6,
    title: 'Shadows of Kyoto',
    cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
    rating: 4.4,
    year: 2020,
    tags: ['Historical', 'Action']
  }
];

function AnimeCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={item.cover}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/70 backdrop-blur px-2 py-1 text-xs text-white">
          <Star size={14} className="text-yellow-300" /> {item.rating}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-white font-semibold leading-snug line-clamp-2">{item.title}</h3>
          <span className="text-white/60 text-sm shrink-0">{item.year}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="text-xs text-white/70 bg-white/10 border border-white/10 rounded-full px-2 py-1">
              {t}
            </span>
          ))}
        </div>
        <button className="mt-4 inline-flex items-center gap-2 w-full h-10 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/20 transition">
          <Play size={16} />
          Play trailer
        </button>
      </div>
    </motion.div>
  );
}

export default function AnimeShowcase({ filter }) {
  const list = useMemo(() => {
    if (!filter) return sampleAnime;
    const f = filter.toLowerCase();
    return sampleAnime.filter((a) =>
      a.title.toLowerCase().includes(f) ||
      a.tags.some((t) => t.toLowerCase().includes(f)) ||
      String(a.year).includes(f)
    );
  }, [filter]);

  return (
    <section id="showcase" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-black to-black" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Trending now</h2>
            <p className="text-white/70 mt-1">Scroll to explore a curated selection</p>
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {list.map((item) => (
            <AnimeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
