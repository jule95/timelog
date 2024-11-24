import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  // ToDo: Research type 'unknown'.
  // @ts-expect-error TS6133
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const error = useRouteError();

  return (
    <div>
      <h1>Route not found!</h1>
    </div>
  );
};
export default NotFound;
