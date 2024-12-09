import { useTranslation } from 'react-i18next';
import { FormEvent, useContext, useEffect, useState } from 'react';
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
import AppContext from '../../state/app-context.ts';

const TimeLogForm = () => {
  const { data: staffData } = useQuery<IStaffResponse>(LOAD_STAFF);
  const [createTimeLog, { data: timeLogData, loading: timeLogLoading }] = useMutation<ICreateTimeLogResponse, ICreateTimeLogData>(CREATE_TIME_LOG_MUTATION);
  const { t } = useTranslation();
  const [employees, setEmployees] = useState<ITimeLogOption[]>([]);
  const { actions } = useContext(AppContext);
  const [formState, setFormState] = useState<ITimeLogFormState>({
    values: {
      date: ``,
      description: ``,
      employee: null,
      hours: 1,
      project: ``,
    },
  });

  useEffect(() => {
    if (!staffData) {
      return;
    }

    setEmployees(staffData.staff.map(item => ({
      code: item.id,
      name: item.name,
    })));
  }, [staffData]);

  useEffect(() => {
    if (!timeLogData || !staffData) {
      return;
    }

    actions.addTimeLog({
      day: timeLogData.createTimeLog.day,
      hours: timeLogData.createTimeLog.hours,
      id: timeLogData.createTimeLog.id,
      name: staffData.staff.find(item => item.id === timeLogData.createTimeLog.staff_id)?.name ?? ``,
      project: timeLogData.createTimeLog.project_name,
    });
  }, [timeLogData]);


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    void createTimeLog({
      variables: {
        day: formState.values.date,
        hours: formState.values.hours,
        projectName: formState.values.project,
        staffId: formState.values.employee?.code ?? -1,
        subject: formState.values.description,
        timeFrom: format(new Date(), `HH:mm`),
        timeTo: format(addHours(new Date(),formState.values.hours), `HH:mm`),
      },
    });
  };

  const handleChange = (value: string | number | ITimeLogOption, name: string) => {
    setFormState(produce(draft => {
      // @ts-expect-error TS7053
      draft.values[name] = value;
    }));
  };

  return (
    <div className="TimeLogForm">
      <h1 className="TimeLogForm__heading">{t(`app.newEntry`)}</h1>
      <form
        className="TimeLogForm__form"
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
          options={employees}
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
          className="TimeLogForm__form-button"
          label={t(`myTimeLog.save`)}
          loading={timeLogLoading}
          type="submit" />
      </form>
    </div>
  );
};

export default TimeLogForm;
