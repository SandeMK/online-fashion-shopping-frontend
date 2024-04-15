import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Settings from './pages/Settings';
import { useAppContext } from './context';
import Authentication from './pages/Authentication/Authentication';
import StyleView from './pages/StyleView';
import Messages from './pages/Messages';
import Dashboard from './pages/Dashboard';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  const { state: { isAuthenticated }} = useAppContext()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes location={!isAuthenticated && '/authentication'}>
        <Route
         index
          element={
            <>
              <PageTitle title="Dashboard" />
              <Dashboard />
            </>
          }
        />

        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />

        <Route
          path="/authentication"
          element={
            <>
              <PageTitle title="Signin | Register" />
              <Authentication />
            </>
          }
        />

      <Route
          path="/style/:id"
          element={
            <>
              <PageTitle title="Style View" />
              <StyleView />
            </>
          }
        />

      <Route
          path="/messages/:id"
          element={
            <>
              <PageTitle title="Messages" />
              <Messages />
            </>
          }
        />

      </Routes>
      
    </>
  );
}

export default App;
