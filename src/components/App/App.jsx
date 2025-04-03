import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const PsychologistsPage = lazy(() =>
  import('../../pages/PsychologistsPage/PsychologistsPage.jsx')
);
const FavoritesPage = lazy(() =>
  import('../../pages/FavoritesPage/FavoritesPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage.jsx')
);

import Layout from '../Layout/Layout.jsx';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute.jsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<RestrictedRoute component={<HomePage />} />} />

          <Route
            path='psychologists'
            element={<RestrictedRoute component={<PsychologistsPage />} />}
          />

          <Route
            path='favorites'
            element={<PrivateRoute component={<FavoritesPage />} />}
          />

          <Route
            path='*'
            element={<RestrictedRoute component={<NotFoundPage />} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
