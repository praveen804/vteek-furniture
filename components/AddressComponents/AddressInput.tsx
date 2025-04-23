import React from 'react';

interface AddressInputProps {
	label: string;
	name: string;
	type?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}

const AddressInput: React.FC<AddressInputProps> = ({label,name,type = 'text',value,onChange,placeholder,}) => (
	<div>
		<label
      htmlFor={name}
			className='mb-1 block text-sm font-medium text-gray-700'
		>
			{label}
		</label>
		<input
			id={name}
			name={name}
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className='w-full rounded-md border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500'
		/>
	</div>
);

export default AddressInput;
