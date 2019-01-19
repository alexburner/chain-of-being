import * as React from 'react'

import { macro, micro, title, us } from '../data'
import { LayerList } from './LayerList'

export const Root: React.SFC = () => (
  <>
    <h1>{title}</h1>
    <LayerList list={micro} />
    <hr />
    <LayerList list={us} />
    <hr />
    <LayerList list={macro} />
  </>
)
