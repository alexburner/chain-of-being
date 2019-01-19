import * as React from 'react'

import { LayerData } from '../data'

const Layer: React.SFC<{ readonly data: LayerData }> = ({ data }) => (
  <div className="layer">
    <div className="thumb">
      <img src={data.img} alt={data.title} />
    </div>
    <div className="words">
      <div className="title">
        {data.title}
        <span className="subtitle">— {data.subtitle}</span>
      </div>
      <div className="text">{data.text}</div>
    </div>
  </div>
)

export const LayerList: React.SFC<{
  readonly list: ReadonlyArray<LayerData>
}> = ({ list }) => (
  <div className="layers">
    {list.map((data) => (
      <Layer key={data.title} data={data} />
    ))}
  </div>
)
