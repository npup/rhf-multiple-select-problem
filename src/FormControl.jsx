import { useController } from "react-hook-form";

export function FormControl({ label, name, control, render }) {
    const { field } = useController({ name, control });

    return (
        <div>
            {label ? (
                <div>
                    <label htmlFor={name}>{label}</label>
                </div>
            ) : null}
            {render({
                id: name,
                ...field,
            })}
        </div>
    );
}
