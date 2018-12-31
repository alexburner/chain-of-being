import * as React from 'react'

import { LayerData } from '../data'
import { Layer } from './Layer'

export const Layers: React.SFC<{ readonly list: ReadonlyArray<LayerData> }> = ({
  list,
}) => (
  <div className="layers">
    {list.map((data) => (
      <Layer key={data.title} data={data} />
    ))}
  </div>
)
