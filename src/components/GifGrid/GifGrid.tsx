import React from 'react'
import { ICategory, IGift } from '../../interfaces/interfaces';
import { GifGridItem } from '../GifGridItem/GifGridItem';
import { useFetchGifs } from '../../hooks/useFecthGifs';

export const GifGrid = ({ category }: ICategory) => {

  const { data:images, loading } = useFetchGifs({ category })

  const classTitles: string[] = ['category-title-blue', 'category-title-green', 'category-title-orange', 'category-title-pink', 'category-title-purple', 'category-title-red','category-title-yellow'];

  return (
    <>
      <h3 className={classTitles[Math.floor(Math.random() * classTitles.length)]}>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
        {
          images.map((img: IGift) => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  )
}
