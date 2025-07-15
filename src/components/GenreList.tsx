'use client'

import { useEffect, useState } from 'react'
import { getGenres } from '../lib/api'
import type { Genre, GenreListProps } from '../types'


export default function GenreList({ cardStyle }: GenreListProps)  {
  const [genres, setGenres] = useState<Genre[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getGenres()
        setGenres(data)
      } catch (err) {
        console.error('Error fetching genres:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <p className="text-gray-500 italic">Loading genres...</p>

  return (
    <div className="p-4">
      {/* <h2 className="text-2xl font-bold mb-4 text-center">Genres</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-indigo-400 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold text-indigo-600 flex items-center gap-2">
              <span>🎵</span> {genre.name}
            </h3>
            <p className="text-gray-600 mb-2 text-sm">{genre.description}</p>
            <div className="mt-3">
              <strong>Instruments:</strong>{' '}
              {genre.instruments.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-1">
                  {genre.instruments.map((instrument) => (
                    <span
                      key={instrument}
                      className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {instrument}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="text-gray-400 italic text-xs">No instruments listed</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}