import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { IStaffResponse } from '../../common/interfaces/api.interfaces.ts';
import { LOAD_STAFF } from '../../api/Queries.ts';
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';
import Box from '@mui/material/Box';

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
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {data.staff.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Employees;
