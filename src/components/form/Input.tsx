import { FC } from 'react';
import { InputProps } from '@/types/props';

const Input: FC<InputProps> = ({ label, id, type = 'text', isRequired }) => {
  return (
    <label className="font-apercu font-medium uppercase" htmlFor={id}>
      {label}
      {isRequired && <span className="text-red-500">&nbsp;*</span>}
      {type === 'textarea' ? (
        <textarea
          cols={10}
          rows={10}
          className="block w-full border-b-2 border-primary bg-highlight"
        />
      ) : (
        <input
          className="block w-full border-b-2 border-primary bg-highlight"
          type={type}
        />
      )}
    </label>
  );
};

export default Input;
