import React, { useState } from 'react'
import { AddCategory } from '../components/AddCategory'
import { GifGrid } from '../components/GifGrid/GifGrid';
export const GifExpertApp = () => {



  const [categories, setcategories] = useState(['One Punch'])


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

