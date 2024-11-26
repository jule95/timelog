import { Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import StaffSelect from '../StaffSelect/StaffSelect.tsx';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ITimeLogFormState, ITimeLogOption } from './TimeLogForm.types.ts';
import GridItem from '../Utility/GridItem.tsx';
import { produce } from 'immer';
import { useMutation, useQuery } from '@apollo/client';
import { ICreateTimeLogData, ICreateTimeLogResponse, IStaffResponse } from '../../common/interfaces/api.interfaces.ts';
import { LOAD_STAFF } from '../../api/Queries.ts';
import { CREATE_TIME_LOG_MUTATION } from '../../api/Mutations.ts';
import { addHours, format } from 'date-fns';
import './TimeLogForm.scss';

const TimeLogForm = () => {
  const { data } = useQuery<IStaffResponse>(LOAD_STAFF);
  const { t } = useTranslation();
  const [formState, setFormState] = useState<ITimeLogFormState>({
    values: {
      date: ``,
      description: ``,
      employee: ``,
      hours: 1,
      project: ``,
    },
  });
  const [options, setOptions] = useState<ITimeLogOption[]>([]);
  const [createTimeLog] = useMutation<ICreateTimeLogResponse, ICreateTimeLogData>(CREATE_TIME_LOG_MUTATION);

  useEffect(() => {
    if (!data) {
      return;
    }

    setOptions(data.staff.map(item => ({
      label: item.name,
      value: item.id,
    })));
  }, [data]);


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    void createTimeLog({
      variables: {
        day: formState.values.date,
        hours: formState.values.hours,
        projectName: formState.values.project,
        staffId: parseInt(formState.values.employee),
        subject: formState.values.description,
        timeFrom: format(new Date(), `HH:mm`),
        timeTo: format(addHours(new Date(), formState.values.hours), `HH:mm`),
      },
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(produce(draft => {
      if (event.target.name === `hours`) {
        draft.values.hours = parseInt(event.target.value);
        return;
      }
      // @ts-expect-error TS7053
      draft.values[event.target.name] = event.target.value;
    }));
  };

  // Handling this separately for TS typings.
  const handleEmployeeChange = (value: string) => {
    setFormState(produce(draft => { draft.values.employee = value; }));
  };

  return (
    <Box
      className="TimeLogForm"
      component="form"
      onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}>
        <GridItem>
          <TextField
            fullWidth
            label={t(`myTimeLog.date`)}
            name="date"
            value={formState.values.date}
            variant="outlined"
            onChange={handleChange} />
        </GridItem>
        <GridItem>
          <StaffSelect
            label={t(`myTimeLog.employee`)}
            options={options}
            value={formState.values.employee}
            onChange={handleEmployeeChange} />
        </GridItem>
        <GridItem>
          <TextField
            fullWidth
            label={t(`myTimeLog.hours`)}
            name="hours"
            type="number"
            value={formState.values.hours}
            variant="outlined"
            onChange={handleChange} />
        </GridItem>
        <GridItem>
          <TextField
            fullWidth
            label={t(`myTimeLog.project`)}
            name="project"
            value={formState.values.project}
            variant="outlined"
            onChange={handleChange} />
        </GridItem>
        <GridItem full>
          <TextField
            fullWidth
            multiline
            label={t(`myTimeLog.description`)}
            name="description"
            rows={4}
            value={formState.values.description}
            variant="outlined"
            onChange={handleChange} />
        </GridItem>
        <GridItem full>
          <Button
            disableRipple
            fullWidth
            className="TimeLogForm__button"
            color="primary"
            type="submit"
            variant="contained">
            {t(`myTimeLog.save`)}
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TimeLogForm;
