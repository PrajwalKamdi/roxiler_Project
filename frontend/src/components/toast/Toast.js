import { toast } from 'react-toastify'
export const isSuccess = (msg) => {
  toast.success(msg);
}
export const isError = (err) => {
  toast.error(err);
}

export const isWarn = (msg)=>{
  toast.warning(msg);
}