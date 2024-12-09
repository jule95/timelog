import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { IStaffResponse } from '../../common/interfaces/api.interfaces.ts';
import { LOAD_STAFF } from '../../api/Queries.ts';
import { ProgressSpinner } from 'primereact/progressspinner';
import './Employees.scss';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Employees = () => {
  const { t } = useTranslation();
  const { data, loading } = useQuery<IStaffResponse>(LOAD_STAFF);

  return (
    <div className="Employees">
      <h1 className="page-heading">
        {t(`employees.heading`)}
      </h1>

      { loading && <ProgressSpinner />}

      { data && (
        <DataTable
          tableStyle={{ minWidth: `500px` }}
          value={data.staff}>
          <Column
            field="id"
            headerStyle={{ display: `none` }}></Column>
          <Column
            field="name"
            headerStyle={{ display: `none` }}></Column>
        </DataTable>
      )}
    </div>
  );
};

export default Employees;
