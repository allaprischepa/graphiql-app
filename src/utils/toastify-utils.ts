import { Slide, ToastOptions, toast } from 'react-toastify';

const defaultConfig: ToastOptions = {
  position: 'top-center',
  autoClose: 5000,
  transition: Slide,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const toastSuccess = (msg: string) => toast.success(msg, defaultConfig);
export const toastError = (msg: string) => toast.error(msg, defaultConfig);
