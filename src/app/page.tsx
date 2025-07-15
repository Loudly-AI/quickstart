'use client';

import Link from 'next/link';
import { useState } from 'react';
import GenreList from '@/components/GenreList';
import SongList from '@/components/SongsList';

export default function HomePage() {
  const [showGenres, setShowGenres] = useState(false);
  const [showSongs, setShowSongs] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="text-center py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-5xl font-extrabold mb-6">AI Music for Your Creative Universe</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Collaborate with AI to create, customize & release 100% royalty‑free music.
        </p>
        <Link href="/generate">
          <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-4 px-8 rounded-full transition">
            Generate Music
          </button>
        </Link>
      </section>

      <div className="max-w-6xl mx-auto py-16 space-y-20">
        {/* Genres Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-teal-300 mb-4">
              Explore Genres
            </h2>
            <p className="text-gray-300 mb-6">
              Discover a wide variety of musical genres to inspire your creativity
            </p>
            <button
              onClick={() => setShowGenres(!showGenres)}
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors border border-gray-600"
            >
              {showGenres ? 'Hide Genres' : 'Browse Genres'}
            </button>
          </div>
          
          {showGenres && (
            <div className="mt-8 animate-fade-in">
              <GenreList cardStyle="white" />
            </div>
          )}
        </section>

        {/* Songs Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-teal-300 mb-4">
              Featured Songs
            </h2>
            <p className="text-gray-300 mb-6">
              Listen to AI-generated tracks from our community
            </p>
            <button
              onClick={() => setShowSongs(!showSongs)}
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors border border-gray-600"
            >
              {showSongs ? 'Hide Songs' : 'View Songs'}
            </button>
          </div>
          
          {showSongs && (
            <div className="mt-8 animate-fade-in">
              <SongList cardStyle="white" />
            </div>
          )}
        </section>

        {/* Call to Action Section */}
        <section className="text-center py-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Create?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Start your musical journey today and bring your creative ideas to life with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate">
              <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-3 px-8 rounded-lg transition">
                Start Creating
              </button>
            </Link>
            <button
              onClick={() => {
                setShowGenres(true);
                setShowSongs(true);
              }}
              className="bg-transparent hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg border border-gray-600 transition"
            >
              Explore All Content
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}