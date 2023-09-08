// import css from './App.module.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser, refreshUser } from 'redux/auth/operations';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import NotFoundPage from 'pages/NotFoundPage';
import { selectUserAuthenticated, selectUserData } from 'redux/selectors';
import { Suspense, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const App = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectUserAuthenticated);
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          {authenticated ? (
            <>
              <span>Hello, {userData.name}</span>
              <button onClick={handleLogOut}>Log Out</button>
            </>
          ) : (
            <>
              <NavLink to="/register">Registration</NavLink>
              <NavLink to="/login">Log In</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<ThreeDots color="#4a346b" />} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
