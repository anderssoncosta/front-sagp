/* eslint-disable @typescript-eslint/no-explicit-any */
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { Input as UIInput } from "./ui/input";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  error?: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
}

const Input = ({
  name,
  placeholder,
  register,
  type,
  error,
  rules,
}: InputProps) => {
  return (
    <div>
      <UIInput
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <span className="text-red-700 text-xs">{error}</span>}
    </div>
  );
};
export default Input;
