import { useForm } from "react-hook-form";
import { FormControl } from "./FormControl";

export function App() {
    const { control, register, handleSubmit } = useForm({
        defaultValues: {
            months: [],
            months2: [],
        },
    });
    function onSubmit(form) {
        alert(`Form data: ${JSON.stringify(form, null, 2)}`);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="months">Months</label>
                </div>

                <select {...register("months")} id="months" multiple>
                    <option value="">--Select</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                </select>

                <FormControl
                    control={control}
                    name="months2"
                    label="Months 2"
                    render={(field) => {
                        return (
                            <select {...field} multiple>
                                <option value="">--Select</option>
                                <option value="Jan">Jan</option>
                                <option value="Feb">Feb</option>
                                <option value="Mar">Mar</option>
                                <option value="Apr">Apr</option>
                            </select>
                        );
                    }}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
