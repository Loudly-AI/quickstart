'use client'

import { useEffect, useState } from 'react'
import { getSongs } from '../lib/api'
import type { Song, GenreListProps } from '../types'

export default function SongList({ cardStyle }: GenreListProps) {
  const [songs, setSongs] = useState<Song[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getSongs()
        setSongs(data.items)
      } catch (err) {
        console.error('Error fetching songs:', err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  if (loading) return <p className="text-gray-500 italic">Loading songs...</p>

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Songs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {songs.map((song) => (
          <div
            key={song.id}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-indigo-400 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold text-indigo-600 flex items-center gap-2 mb-2">
              🎵 {song.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4 text-xs text-indigo-700 font-medium">
              <span className="bg-indigo-100 px-2 py-1 rounded-full">
                BPM: {song.tempo_bpm ?? 'N/A'}
              </span>
              <span className="bg-indigo-100 px-2 py-1 rounded-full">
                Has Vocal: {song.has_vocal ? 'Yes' : 'No'}
              </span>
            </div>

            <audio
              controls
              src={song.music_file_path}
              className="w-full rounded-md"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  )
}