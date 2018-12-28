import * as React from 'react'

import { LayerData } from '../layer-data'
import { Layer } from './Layer'

export const Layers: React.SFC<{ readonly list: ReadonlyArray<LayerData> }> = ({
  list,
}) => (
  <ul>
    {list.map((data) => (
      <Layer key={data.title} data={data} />
    ))}
  </ul>
)
