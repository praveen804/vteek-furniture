import React from "react";

interface InputFieldProps {
  id: string;
  type: string;
  label: string;
  value: string;
  name:string ;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const ReusableInputField: React.FC<InputFieldProps> = ({ id, type, label, value,name, onChange, required = true,}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700"> {label} </label>
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
    </div>
  );
};

export default ReusableInputField;
