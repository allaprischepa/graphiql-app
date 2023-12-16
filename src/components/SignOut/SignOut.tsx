import { userAuth } from '../../services/firebaseAuth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../src/utils/enums';

import './SignOut.scss';
import { setIsUserLoggedIn } from '../../services/authSlice';

const SignOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogOut = async (): Promise<void> => {
    try {
      await userAuth.logOut();
      navigate(AppRoutes.welcome);
      dispatch(setIsUserLoggedIn(false));
    } catch (err) {
      alert(err);
    }
  };

  return <button className="signout" onClick={userLogOut} />;
};

export default SignOut;
