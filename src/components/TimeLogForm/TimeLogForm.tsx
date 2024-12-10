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
import Datepicker from '../Datepicker/Datepicker.tsx';
import { Nullable } from 'primereact/ts-helpers';
import CustomTextarea from '../CustomTextarea/CustomTextarea.tsx';

const TimeLogForm = () => {
  const { data: staffData } = useQuery<IStaffResponse>(LOAD_STAFF);
  const [createTimeLog, { data: timeLogData, loading: timeLogLoading }] = useMutation<ICreateTimeLogResponse, ICreateTimeLogData>(CREATE_TIME_LOG_MUTATION);
  const { t } = useTranslation();
  const [employees, setEmployees] = useState<ITimeLogOption[]>([]);
  const { actions } = useContext(AppContext);
  const [formState, setFormState] = useState<ITimeLogFormState>({
    values: {
      date: new Date(),
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

    const tempEmployees = staffData.staff.map(item => ({
      code: item.id,
      name: item.name,
    }));

    setEmployees(tempEmployees);

    setFormState(produce(draft => {
      draft.values.employee = tempEmployees[0];
    }));
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLogData]);


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    void createTimeLog({
      variables: {
        day: format(formState.values.date, `dd.MM.yyyy`),
        hours: formState.values.hours,
        projectName: formState.values.project,
        staffId: formState.values.employee?.code ?? -1,
        subject: formState.values.description,
        timeFrom: format(new Date(), `HH:mm`),
        timeTo: format(addHours(new Date(),formState.values.hours), `HH:mm`),
      },
    });
  };

  const handleChange = (value: string | number | Nullable<Date> | ITimeLogOption, name: string) => {
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
        <Datepicker
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
          value={formState.values.employee}
          onChange={handleChange} />
        <CustomInput
          required
          id="hours"
          invalid={!formState.values.hours}
          label={t(`myTimeLog.hours`)}
          name="hours"
          type="number"
          value={formState.values.hours}
          onChange={handleChange} />
        <CustomInput
          required
          id="project"
          invalid={!formState.values.project}
          label={t(`myTimeLog.project`)}
          name="project"
          placeholder={t(`myTimeLog.placeholderProject`)}
          value={formState.values.project}
          onChange={handleChange} />
        <CustomTextarea
          id="description"
          invalid={!formState.values.description}
          label={t(`myTimeLog.description`)}
          name="description"
          placeholder={t(`myTimeLog.placeholderDescription`)}
          value={formState.values.description}
          onChange={handleChange} />
        <Button
          className="TimeLogForm__form-button"
          disabled={!formState.values.project || !formState.values.description}
          label={t(`myTimeLog.save`)}
          loading={timeLogLoading}
          type="submit" />
      </form>
    </div>
  );
};

export default TimeLogForm;
