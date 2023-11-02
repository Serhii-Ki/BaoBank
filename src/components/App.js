import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Layouts
import ErrorLayout from "./layout/ErrorLayout";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";

//View
import Dashboard from "./pages/private/dashboard/Dashboard";
import SignIn from "./pages/public/signIn/SignIn";
import SignUP from "./pages/public/signUp/SignUp";
import Profile from "./pages/private/profile/Profile";
import OnBoarding from "./pages/public/onBoarding/OnBoarding";
import GiveGifts from "./pages/private/giveGifts/GiveGifts";
import PhoneBook from "./pages/private/phoneBook/PhoneBook";
import Deposit from "./pages/private/deposit/Deposit";
import ErrorPage from "./pages/errors/ErrorPage";

// eslint-disable-next-line no-unused-vars
import appStyle from "../scss/app.scss";
import DashBoard2 from "./pages/private/dashboard/DashBoard2";

function App() {
  const publicPages = [
    {
      element: <SignIn />,
      path: '/signin'
    },
    {
      element: <SignUP />,
      path: '/signup'
    },
    {
      element: <OnBoarding />,
      path: '/onboarding'
    },
    {
      element: <PhoneBook />,
      path: '/phonebook'
    },
    {
      element: <Deposit />,
      path: '/deposit'
    },
  ];

  const PrivatePages = [
    {
      element: <DashBoard2 />,
      path: '/'
    },
    {
      element: <Profile />,
      path: '/profile/:id'
    },
    {
      element: <GiveGifts />,
      path: '/givegifts'
    },
  ];



  return (
    <Router>
      <Routes>
        <Route element={<PrivateLayout />}>
          {PrivatePages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route>
        <Route element={<PublicLayout />}>
          {publicPages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route>
        <Route element={<ErrorLayout />}>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
