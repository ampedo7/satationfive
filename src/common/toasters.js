import { toast } from 'react-toastify';

export const ErrorToast = (data) => {
  toast.error(
    <div>
      {data.map((value, i) => {
        return <p key={i}>{value.msg}</p>;
      })}
    </div>
  );
};

const Toasters = {
  ErrorToast,
};

export default Toasters;
