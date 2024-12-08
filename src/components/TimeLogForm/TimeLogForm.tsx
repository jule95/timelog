import { useTranslation } from 'react-i18next';
import { FormEvent, useEffect, useState } from 'react';
import { ITimeLogFormState, ITimeLogOption } from './TimeLogForm.types.ts';
import { produce } from 'immer';
import { useMutation, useQuery } from '@apollo/client';
import { ICreateTimeLogData, ICreateTimeLogResponse, IStaffResponse } from '../../common/interfaces/api.interfaces.ts';
import { LOAD_STAFF } from '../../api/Queries.ts';
import { CREATE_TIME_LOG_MUTATION } from '../../api/Mutations.ts';
import { addHours, format } from 'date-fns';
import './TimeLogForm.scss';
import { Button } from 'primereact/button';
import CustomInput from '../CustomInput/CustomInput.tsx';
import CustomSelect from '../CustomSelect/CustomSelect.tsx';

const TimeLogForm = () => {
  const { data } = useQuery<IStaffResponse>(LOAD_STAFF);
  const { t } = useTranslation();
  const [formState, setFormState] = useState<ITimeLogFormState>({
    values: {
      date: ``,
      description: ``,
      employee: null,
      hours: `1`,
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
      code: item.id,
      name: item.name,
    })));
  }, [data]);


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // ToDo: Add new time log to table.
    event.preventDefault();

    void createTimeLog({
      variables: {
        day: formState.values.date,
        hours: parseInt(formState.values.hours),
        projectName: formState.values.project,
        staffId: formState.values.employee?.code ?? -1,
        subject: formState.values.description,
        timeFrom: format(new Date(), `HH:mm`),
        timeTo: format(addHours(new Date(), parseInt(formState.values.hours)), `HH:mm`),
      },
    });
  };

  const handleChange = (value: string | ITimeLogOption, name: string) => {
    setFormState(produce(draft => {
      // @ts-expect-error TS7053
      draft.values[name] = value;
    }));
  };

  return (
    <form
      className="TimeLogForm"
      onSubmit={handleSubmit}>
      <CustomInput
        id="date"
        label={t(`myTimeLog.date`)}
        name="date"
        value={formState.values.date}
        onChange={handleChange} />
      <CustomSelect
        id="employee"
        label={t(`myTimeLog.employee`)}
        name="employee"
        options={options}
        placeholder="[PLACEHOLDER]"
        value={formState.values.employee}
        onChange={handleChange} />
      <CustomInput
        id="hours"
        label={t(`myTimeLog.hours`)}
        name="hours"
        type="number"
        value={formState.values.hours}
        onChange={handleChange} />
      <CustomInput
        id="project"
        label={t(`myTimeLog.project`)}
        name="project"
        value={formState.values.project}
        onChange={handleChange} />
      <CustomInput
        fullWidth
        id="description"
        label={t(`myTimeLog.description`)}
        name="description"
        value={formState.values.description}
        onChange={handleChange} />
      <Button
        className="TimeLogForm__button"
        label={t(`myTimeLog.save`)}
        type="submit" />
    </form>
  );
};

export default TimeLogForm;
