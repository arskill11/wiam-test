import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { ErrorNotFound } from './pages/ErrorNotFound';
import { Homepage } from './pages/Home';
import { FirstForm } from './pages/FirstForm';
import { SecondForm } from './pages/SecondForm';
import { ThirdForm } from './pages/ThirdForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/first-form',
        element: <FirstForm />,
      },
      {
        path: '/second-form',
        element: <SecondForm />,
      },
      {
        path: '/third-form',
        element: <ThirdForm />,
      },
    ],
  },
]);

export default router;
