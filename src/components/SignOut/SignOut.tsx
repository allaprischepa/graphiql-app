import { userAuth } from '../../services/firebaseAuth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsUserLoggedIn } from '../../services/authSlice';
import { AppRoutes } from '../../../src/utils/enums';

import './SignOut.scss';

const SignOut = () => {
  const auth = getAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogOut = async (): Promise<void> => {
    try {
      await userAuth.logOut();
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          dispatch(setIsUserLoggedIn(false));
          navigate(AppRoutes.welcome);
        }
      });
    } catch (err) {
      alert(err);
    }
  };

  return <button className="signout" onClick={userLogOut} />;
};

export default SignOut;
