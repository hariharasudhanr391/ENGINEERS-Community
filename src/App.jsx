import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import HomepageFollowing from './pages/HomepageFollowing';
import HomepageForYou from './pages/HomepageForYou';
import Login from './pages/Login';
import LoginOrSignup from './pages/LoginOrSignup';
import Property1Default from './pages/Property1Default';
import Property1Variant2 from './pages/Property1Variant2';
import Property1Variant3 from './pages/Property1Variant3';
import Saved from './pages/Saved';
import Signup1 from './pages/Signup1';
import Signup2 from './pages/Signup2';
import UserPref from './pages/UserPref';
import Welcome from './pages/Welcome';
import YourThreads from './pages/YourThreads';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/HomepageFollowing', element: <HomepageFollowing /> },
{ path: '/HomepageForYou', element: <HomepageForYou /> },
{ path: '/Login', element: <Login /> },
{ path: '/LoginOrSignup', element: <LoginOrSignup /> },
{ path: '/Property1Default', element: <Property1Default /> },
{ path: '/Property1Variant2', element: <Property1Variant2 /> },
{ path: '/Property1Variant3', element: <Property1Variant3 /> },
{ path: '/Saved', element: <Saved /> },
{ path: '/Signup1', element: <Signup1 /> },
{ path: '/Signup2', element: <Signup2 /> },
{ path: '/UserPref', element: <UserPref /> },
{ path: '/Welcome', element: <Welcome /> },
{ path: '/YourThreads', element: <YourThreads /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
