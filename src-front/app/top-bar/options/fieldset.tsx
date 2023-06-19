import { ReactNode } from "react";

interface FieldsetProps {
	children?: ReactNode | ReactNode[];
	legend?: string;
}

export default function Fieldset({ children, legend }: FieldsetProps) {
	return (
		<fieldset className="border border-gray-700 p-2 dark:border-gray-300 dark:bg-gray-800">
			{!!legend && <legend className="-mb-2 px-0.5">{legend}</legend>}
			{children}
		</fieldset>
	);
}
