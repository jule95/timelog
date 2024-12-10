import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { IStaffResponse, ITimeLogResponse } from '../../common/interfaces/api.interfaces.ts';
import { LOAD_STAFF, LOAD_TIME_LOGS } from '../../api/Queries.ts';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useContext, useEffect } from 'react';
import './MyTimeLog.scss';
import TimeLogForm from '../../components/TimeLogForm/TimeLogForm.tsx';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import AppContext from '../../state/app-context.ts';

const MyTimeLog = () => {
  const { t } = useTranslation();
  const { data: timeLogData, loading: timeLogLoading } = useQuery<ITimeLogResponse>(LOAD_TIME_LOGS);
  const { data: staffData, loading: staffLoading } = useQuery<IStaffResponse>(LOAD_STAFF);
  const { state, actions } = useContext(AppContext);

  useEffect(() => {
    if (!timeLogData || !staffData) {
      return;
    }

    actions.setTimeLogs(timeLogData.timeLogs.map(item => ({
      day: item.day,
      hours: item.hours,
      id: item.id,
      name: staffData.staff.find(staffItem => staffItem.id === item.staff_id)?.name ?? `-`,
      project: item.project_name,
    })));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLogData, staffData]);

  return (
    <div className="MyTimeLog">
      <h1 className="page-heading">{t(`myTimeLog.heading`)}</h1>

      { (timeLogLoading || staffLoading) && (
        <ProgressSpinner className="MyTimeLog__loading"  />
      )}

      { timeLogData && (
        <DataTable
          tableStyle={{ width: `auto` }}
          value={state.timeLogs}>
          <Column
            field="day"
            headerStyle={{ display: `none` }}
            style={{
              padding: `25px 10px`,
              width: `124px`,
            }} />
          <Column
            field="hours"
            headerStyle={{ display: `none` }}
            style={{
              padding: `25px 10px 25px 0`,
              width: `70px`,
            }} />
          <Column
            field="name"
            headerStyle={{ display: `none` }}
            style={{
              padding: `25px 10px 25px 0`,
              width: `124px`,
            }} />
          <Column
            field="project"
            headerStyle={{ display: `none` }}
            style={{
              padding: `25px 10px 25px 0`,
              width: `172px`,
            }} />
        </DataTable>
      )}

      {state.newEntry &&  <TimeLogForm />}
    </div>
  );
};
export default MyTimeLog;
