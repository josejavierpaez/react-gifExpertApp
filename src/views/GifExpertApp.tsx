import React, { useState } from 'react'
import { AddCategory } from '../components/AddCategory'
import { GifGrid } from '../components/GifGrid/GifGrid';

export const GifExpertApp = ({ defaulCategories = ['One Punch'] }) => {



  const [categories, setcategories] = useState(defaulCategories)


  // const handleAdd = (newCategory: string) => {
  //   setcategories(cats => [...cats, newCategory]);
  // }
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setcategories} />
      <hr />

      <ol>
        {
          categories.map(category => {
            return (
              <GifGrid
                key={category}
                category={category}
              />
            )
          })
        }
      </ol>
    </>
  );
}

