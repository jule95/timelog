import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { IStaffResponse } from '../../common/interfaces/api.interfaces.ts';
import { LOAD_STAFF } from '../../api/Queries.ts';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import './Employees.scss';

const Employees = () => {
  const { t } = useTranslation();
  const { data, loading } = useQuery<IStaffResponse>(LOAD_STAFF);

  return (
    <div>
      <Typography variant="h4">
        {t(`employees.heading`)}
      </Typography>

      { loading && (
        <Box sx={{ display: `flex` }}>
          <CircularProgress />
        </Box>
      )}

      { data && (
        <table className="Employees__table">
          <tbody>
            {data.staff.map(row => (
              <tr
                key={row.id}
                className="Employees__table-row">
                <td>{row.id}</td>
                <td>{row.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Employees;
