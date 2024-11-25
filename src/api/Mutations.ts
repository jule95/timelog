import { gql } from '@apollo/client';

export const CREATE_TIME_LOG_MUTATION = gql`
mutation CreateTimeLog(
    $day: String!
    $hours: Float!
    $projectName: String!
    $staffId: Int!
    $timeFrom: String
    $timeTo: String
    $subject: String
    
  ) {
    createTimeLog(
        day: $day
        hours: $hours
        project_name: $projectName
        staff_id: $staffId
        time_from: $timeFrom
        time_to: $timeTo
        subject: $subject
    ) {
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
