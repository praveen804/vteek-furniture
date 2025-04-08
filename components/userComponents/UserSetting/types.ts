// types.ts
export type UserData = {
	name: string;
	email: string;
	phone: string;
	address: string;
	bio: string;
};

export type NotificationSettings = {
	email: boolean;
	sms: boolean;
	promotions: boolean;
};

export type Tab = {
	id: string;
	label: string;
	icon: React.ReactNode;
};

export type FormFieldProps = {
	label: string;
	id: string;
	type?: string;
	value: string;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	placeholder?: string;
	required?: boolean;
	className?: string;
};

export type ToggleSwitchProps = {
	enabled: boolean;
	setEnabled: (enabled: boolean) => void;
	label: string;
	className?: string;
};

export type AnimatedCardProps = {
	children: React.ReactNode;
	className?: string;
	key?: string;
};
