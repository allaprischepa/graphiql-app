import { userAuth } from '../../services/firebaseAuth';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../src/utils/enums';

import './SignOut.scss';

const SignOut = () => {
  const navigate = useNavigate();

  const userLogOut = async (): Promise<void> => {
    try {
      await userAuth.logOut();
      navigate(AppRoutes.main);
    } catch (err) {
      alert(err);
    }
  };

  return <button className="signout" onClick={userLogOut} />;
};

export default SignOut;
