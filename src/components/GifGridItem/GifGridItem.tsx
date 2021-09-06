import React from 'react'
import { IGifGridItemProps } from '../../interfaces/interfaces'
export const GifGridItem = ({ id, title, url }: IGifGridItemProps) => {

  return (
    <div className="card animate__animated animate__pulse">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
