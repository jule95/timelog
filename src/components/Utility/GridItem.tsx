import { Grid } from '@mui/material';
import { IGridItemProps } from './GridItem.types,ts.ts';
import { FC } from 'react';

const GridItem:FC<IGridItemProps> = ({ full=false, children=null }) => (
  <Grid
    item
    sm={full ? 12 : 6}
    xs={12}>
    {children}
  </Grid>
);

export default GridItem;
