import { FC } from 'react';
import { get } from 'lodash';
import { InputProps } from '@/types/props';

const Input: FC<InputProps> = ({
  label,
  id,
  type = 'text',
  isRequired,
  register,
  errors,
}) => {
  const errorMessage = get(errors, id)?.message;
  return (
    <label className="font-apercu font-medium uppercase" htmlFor={id}>
      {label}
      {isRequired && <span className="text-red-500">&nbsp;*</span>}
      {type === 'textarea' ? (
        <textarea
          cols={10}
          rows={10}
          className={`block w-full border-b-2 bg-highlight ${
            errorMessage ? 'border-red-500' : 'border-primary'
          }`}
          {...register(id)}
        />
      ) : (
        <input
          className={`block w-full border-b-2 bg-highlight ${
            errorMessage ? 'border-red-500' : 'border-primary'
          }`}
          type={type}
          {...register(id, {
            valueAsNumber: type === 'number',
          })}
        />
      )}
      {errorMessage && (
        <p className="text-xs normal-case text-red-500">{errorMessage}</p>
      )}
    </label>
  );
};

export default Input;
