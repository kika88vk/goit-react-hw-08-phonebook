// import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useEffect, lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivareRoute from './PrivateRoute/PrivareRoute';
import Footer from './Footer/Footer';

// import ContactsPage from 'pages/ContactsPage';
// import HomePage from 'pages/HomePage';
// import RegisterPage from 'pages/RegisterPage';
// import LoginPage from 'pages/LoginPage';
// import NotFoundPage from 'pages/NotFoundPage';
const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="contacts"
              element={
                <PrivareRoute>
                  <ContactsPage />
                </PrivareRoute>
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute redirectTo="/contacts">
                  <RegisterPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/contacts">
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
