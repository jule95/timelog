import { gql } from '@apollo/client';

export const LOAD_STAFF = gql`
query Staff {
    staff {
        name
        id
    }
}
`;

export const LOAD_TIME_LOGS = gql`
query TimeLogs {
    timeLogs {
        id
        day
        hours
        time_from
        time_to
        project_name
        subject
        staff_id
    }
}
`;
