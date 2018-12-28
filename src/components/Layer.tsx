import * as React from 'react'

import { LayerData } from '../layer-data'

export const Layer: React.SFC<{ readonly data: LayerData }> = ({ data }) => (
  <li>
    <strong>{data.title}</strong>
    &nbsp;
    <em>{data.text}</em>
  </li>
)
