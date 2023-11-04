import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  CREATE_STORIES_URL,
  DASHBOARD_URL,
  HOME_URL,
  LOGIN_URL,
  SIGN_UP_URL,
  GALLERY_URL,
  SUBSCRIPTION_URL,
  EDIT_STORY_URL,
  DETAIL_STORY_URL,
  PROFILE_URL,
  PRICING_URL,
  RESET_PASSWORD_URL,
  FORGOT_PASSWORD_URL,
  VERIFY_ACCOUNT_URL,
  TEST_JOT_FORM_URL,
} from "./routes";
import Auth from "./sub-components/Auth";
import Home from "./components/Home";
import Login from "./components/LoginPage";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import CreateStories from "./components/CreateStories";
import Gallery from "./components/Gallery";
import Subscription from "./components/Subscription";
import Pricing from "./components/Pricing";
import Profile from "./components/Profile";
import ResetPasswordAuthContainer from "./sub-components/AuthContainer/ResetPasswordAuth";
import ForgetPasswordAuthContainer from "./sub-components/AuthContainer/ForgetPasswordAuthContainer";
import ActionVerficationAuthContainer from "./sub-components/AuthContainer/AccountVerficationAuthContainer";

import JotFormTest from "./components/JotFormTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={HOME_URL}
          exact
          element={
            <Auth allow="$authenticated" redirectTo={LOGIN_URL}>
              <Dashboard />
            </Auth>
          }
        />
        <Route
          path={LOGIN_URL}
          element={
            <Auth allow="$unauthenticated" redirectTo={LOGIN_URL}>
              <Login />
            </Auth>
          }
        />
        <Route
          path={SIGN_UP_URL}
          element={
            <Auth allow="$unauthenticated" redirectTo={LOGIN_URL}>
              <SignUp />
            </Auth>
          }
        />
        <Route path={DASHBOARD_URL} element={<Dashboard />} />
        <Route path={GALLERY_URL} element={<Gallery />} />
        <Route path={SUBSCRIPTION_URL} element={<Subscription />} />
        <Route path={CREATE_STORIES_URL} element={<CreateStories />} />
        <Route path={EDIT_STORY_URL} element={<CreateStories type="edit" />} />
        <Route
          path={DETAIL_STORY_URL}
          element={<CreateStories type="detail" />}
        />
        <Route path={PROFILE_URL} element={<Profile />} />
        <Route path={PRICING_URL} element={<Pricing />} />
        <Route path={RESET_PASSWORD_URL} element={<ResetPasswordAuthContainer />} />
        <Route path={FORGOT_PASSWORD_URL} element={<ForgetPasswordAuthContainer />} />
        <Route path={VERIFY_ACCOUNT_URL} element={<ActionVerficationAuthContainer />} />
        <Route path={TEST_JOT_FORM_URL} element={<JotFormTest />} />
      </Routes>
    </Router>
  );
}

export default App;
