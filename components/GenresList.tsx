'use client'
// import { fetchGenres } from '@/app/action'
import { useEffect, useState } from 'react'

export interface GenresListProps {
  id: string
  name: string
  kind: string
  entry_type: string
}
export type AnimeGenres = JSX.Element

export const GenresList = () => {
  const [data, setData] = useState<AnimeGenres[]>([])

  // useEffect(() => {
  //   fetchGenres().then((res) => {
  //     setData(res)
  //   })
  // }, [])
  return (
    <>
      <div className="absolute z-50 bg-black/80">{data}</div>
    </>
  )
}
