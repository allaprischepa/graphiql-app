import { userAuth } from '../../services/firebaseAuth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setIsUserLoggedIn } from '../../services/authSlice';

import './SignOut.scss';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../utils/enums';
import { IS_USER_LOGGED_IN } from '../../constants';

const SignOut = () => {
  const auth = getAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem(IS_USER_LOGGED_IN, 'true');
    } else {
      localStorage.removeItem(IS_USER_LOGGED_IN);
      dispatch(setIsUserLoggedIn(false));
      navigate(AppRoutes.welcome);
    }
  });

  const userLogOut = async (): Promise<void> => {
    try {
      await userAuth.logOut();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <button
      className="signout"
      onClick={userLogOut}
      data-testid="sign-out-btn"
    />
  );
};

export default SignOut;
