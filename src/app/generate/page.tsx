'use client';

import { useState } from 'react';
import { getSongfromPrompt } from '@/lib/api';
import { PromptSongResponse } from '@/types';

export default function GenerateMusicPage() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAudioUrl('');

    try {
      const song: PromptSongResponse = await getSongfromPrompt(prompt);
      setAudioUrl(song.music_file_path); 
    } catch (err) {
      alert('Failed to generate music.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-teal-300">Generate AI Music</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-2xl space-y-4"
      >
        <textarea
          className="w-full p-4 rounded-md bg-black text-white border border-teal-500"
          rows={4}
          placeholder="Enter a music prompt, e.g., 'Epic orchestral music for a sci-fi trailer'"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={isLoading}
          className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-3 px-6 rounded-full transition"
        >
          {isLoading ? 'Generating...' : 'Generate Music'}
        </button>
      </form>

      {audioUrl && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-teal-300 mb-4">Preview:</h2>
          <div className="w-full max-w-xl bg-gray-900 p-4 rounded-xl shadow-md" style={{width: "30rem" }}>
            <audio
              controls
              src={audioUrl}
              className="w-full"
              style={{ minHeight: '48px' }}
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      )}
    </main>
  );
}