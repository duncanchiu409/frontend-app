import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import queryString from "query-string";

export const HOME_URL = "/";
export const LOGIN_URL = "/login";
export const SIGN_UP_URL = "/signup";
export const DASHBOARD_URL = "/dashboard";
export const CREATE_STORIES_URL = "/story/create";
export const GALLERY_URL = "/gallery";
export const SUBSCRIPTION_URL = "/subscription";
export const EDIT_STORY_URL = "/story/edit";
export const DETAIL_STORY_URL = "/story/detail";
export const PROFILE_URL = "/profile";
export const PRICING_URL = "/pricing";
export const RESET_PASSWORD_URL = "/reset-password";
export const VERIFY_ACCOUNT_URL = "/verify-account";
export const FORGOT_PASSWORD_URL = "/forgot-password";

export const TEST_JOT_FORM_URL = "/test-jot-form"

export const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const history = useNavigate();
  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,

      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },

      //   match,
      location,
      history,
    };
  }, [params, location, history]);
};
