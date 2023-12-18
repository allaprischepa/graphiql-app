import { userAuth } from '../../services/firebaseAuth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsUserLoggedIn } from '../../services/authSlice';
import { AppRoutes } from '../../utils/enums';

import './SignOut.scss';

const SignOut = () => {
  const auth = getAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem('isUserLoggedIn', 'true');
    } else {
      localStorage.removeItem('isUserLoggedIn');
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
