import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { IStaffResponse, ITimeLogResponse } from '../../common/interfaces/api.interfaces.ts';
import { LOAD_STAFF, LOAD_TIME_LOGS } from '../../api/Queries.ts';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { IMyTimeLogState } from './MyTimeLog.types.ts';

const MyTimeLog = () => {
  const { t } = useTranslation();
  const { data: timeLogData, loading: timeLogLoading } = useQuery<ITimeLogResponse>(LOAD_TIME_LOGS);
  const { data: staffData, loading: staffLoading } = useQuery<IStaffResponse>(LOAD_STAFF);
  const [state, setState] = useState<IMyTimeLogState[]>([]);


  useEffect(() => {
    if (!timeLogData || !staffData) {
      return;
    }

    setState(timeLogData.timeLogs.map(item => {
      return {
        id: item.id,
        day: item.day,
        hours: item.hours,
        project: item.project_name,
        name: staffData.staff.find(staffItem => staffItem.id === item.staff_id)?.name ?? `-`,
      }
    }))

    console.log(timeLogData, staffData);
  }, [timeLogData, staffData]);

  return (
    <div>
      <Typography variant="h4">
        {t(`navbar.myTimeLog`)}
      </Typography>

      { (timeLogLoading || staffLoading) && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}

      { timeLogData && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {state.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.day}</TableCell>
                  <TableCell>{row.hours}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.project}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}
export default MyTimeLog;