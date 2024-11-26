import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { IStaffResponse, ITimeLogResponse } from '../../common/interfaces/api.interfaces.ts';
import { LOAD_STAFF, LOAD_TIME_LOGS } from '../../api/Queries.ts';
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { IMyTimeLogState } from './MyTimeLog.types.ts';
import Heading from '../../components/Heading/Heading.tsx';
import './MyTimeLog.scss';

const MyTimeLog = () => {
  const { t } = useTranslation();
  const { data: timeLogData, loading: timeLogLoading } = useQuery<ITimeLogResponse>(LOAD_TIME_LOGS);
  const { data: staffData, loading: staffLoading } = useQuery<IStaffResponse>(LOAD_STAFF);
  const [state, setState] = useState<IMyTimeLogState[]>([]);


  useEffect(() => {
    if (!timeLogData || !staffData) {
      return;
    }

    setState(timeLogData.timeLogs.map(item => ({
      day: item.day,
      hours: item.hours,
      id: item.id,
      name: staffData.staff.find(staffItem => staffItem.id === item.staff_id)?.name ?? `-`,
      project: item.project_name,
    })));
  }, [timeLogData, staffData]);

  return (
    <div className="MyTimeLog">
      <Heading title={t(`myTimeLog.heading`)} />

      { (timeLogLoading || staffLoading) && (
        <Box>
          <CircularProgress className="MyTimeLog__loading"  />
        </Box>
      )}

      { timeLogData && (
        <table className="MyTimeLog__table">
          <tbody>
            {state.map(row => (
              <tr
                key={row.id}
                className="MyTimeLog__table-row">
                <td>{row.day}</td>
                <td>{row.hours}</td>
                <td>{row.name}</td>
                <td>{row.project}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default MyTimeLog;
