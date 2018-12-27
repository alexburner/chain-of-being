import * as React from 'react'

import { LayerData, macro, micro, us } from './layer-data'

export const App: React.SFC = () => (
  <>
    <h1>Layers of self-organizing emergent complexity</h1>
    <Layers list={micro} />
    <Layers list={us} />
    <Layers list={macro} />
  </>
)

const Layers: React.SFC<{ readonly list: ReadonlyArray<LayerData> }> = ({
  list,
}) => (
  <ul>
    {list.map((data) => (
      <Layer data={data} />
    ))}
  </ul>
)

const Layer: React.SFC<{ readonly data: LayerData }> = ({ data }) => (
  <li>
    <strong>{data.title}</strong>
    &nbsp;
    <em>{data.text}</em>
  </li>
)
