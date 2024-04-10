'use client'
import { useState } from 'react'
import { GenresList } from '@/components/GenresList'

export const NavBar = () => {
  const [genreIsOpen, setGenreIsOpen] = useState(false)

  return (
    <>
      <div className="flex justify-evenly px-8 ">
        <div className="flex flex-col gap-1">
          <div className="relative">
            <button
              onClick={() => setGenreIsOpen(!genreIsOpen)}
              className="cursor-pointer"
            >
              Genres
            </button>
            {/* {genreIsOpen && <GenresList />} */}
          </div>
        </div>
        <button>Other</button>
      </div>
    </>
  )
}
