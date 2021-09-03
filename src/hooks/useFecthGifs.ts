import { useState, useEffect } from 'react';
import { getGif } from '../helpers/getGif';
import { ICategory } from '../interfaces/interfaces'

export const useFetchGifs = ({ category }: ICategory) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getGif({ category })
      .then((imgs) => setState({
        data: imgs,
        loading: false
      }))
  }, [category]);
  return state;
}