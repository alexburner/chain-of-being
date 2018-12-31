import * as React from 'react'

import { LayerData } from '../data'

export const Layer: React.SFC<{ readonly data: LayerData }> = ({ data }) => (
  <div className="layer">
    <img className="thumb" src={data.img} alt={data.title} />
    <div className="words">
      <div className="title">{data.title}</div>
      <div className="text">{data.text}</div>
    </div>
  </div>
)
