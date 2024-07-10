import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../components/layout';
import SearchPage from '../pages/SearchPage';
import WeatherData from '../pages/WeaherData';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <SearchPage />,
      },
      {
        path: 'weatherdata',
        element: <WeatherData />,
      },
      {
        path: '*',
        element: <div>page not found</div>,
      },
    ],
  },
]);
export default router;
