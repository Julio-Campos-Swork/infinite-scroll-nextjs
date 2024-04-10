'use server'

import AnimeCard, { AnimeProp } from '@/components/AnimeCard'
import { GenresListProps } from '@/components/GenresList'

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8`
  )

  const data = await response.json()
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ))
}

// export const fetchGenres = async () => {
//   const genres = await fetch(`https://shikimori.one/api/genres`).then((res) =>
//     res.json()
//   )
//   return genres.map((genre: GenresListProps, index: number) => (
//     <div className="pt-2">
//       <p className="px-3 py-2" key={index}>
//         {genre.name}
//       </p>
//     </div>
//   ))
// }
