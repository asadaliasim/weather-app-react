import { createBrowserRouter } from 'react-router-dom';

import ContentHolder from '../components/ContentHolder';
import CardHolder from '../components/CardHolder';
import { Layout } from '../components/layout';
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ContentHolder />,
      },
      {
        path: 'cards',
        element: <CardHolder />,
      },
      {
        path: '*',
        element: <div>page not found</div>,
      },
    ],
  },
]);
export default router;
