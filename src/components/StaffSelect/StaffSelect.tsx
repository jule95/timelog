import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FC } from 'react';
import { IStaffSelectProps } from './StaffSelect.ts';

const StaffSelect: FC<IStaffSelectProps> = props => (
  <FormControl fullWidth>
    <InputLabel id="custom-select-label">{props.label}</InputLabel>
    <Select
      label={props.label}
      labelId="custom-select-label"
      value={props.value}
      variant="outlined"
      onChange={(event) => props.onChange(event.target.value as number)}>
      {props.options.map((item, index) => (
        <MenuItem
          key={`menu-item-${index}`}
          value={item.value}>{item.label}</MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default StaffSelect;
