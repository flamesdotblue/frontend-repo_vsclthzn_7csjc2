import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* gradient bloom overlays - non-blocking */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-pink-500/10 via-purple-500/10 to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
            <Star size={14} className="text-yellow-300" />
            Stream anime in stunning quality
          </span>

          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Dive into vibrant worlds of anime
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400">with a beautiful, fluid experience</span>
          </h1>

          <p className="mt-5 text-white/80 max-w-xl">
            A modern streaming interface with a mesmerizing 3D backdrop, silky interactions, and scrolling animations that make browsing feel magical.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-medium shadow-lg shadow-fuchsia-500/30 hover:brightness-110 transition">
              <Play size={18} />
              Start Watching
            </button>
            <a href="#showcase" className="inline-flex items-center h-11 px-5 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 transition">
              Explore Library
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
