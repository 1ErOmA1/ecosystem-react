import { useForm } from 'react-hook-form'

export function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = data => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input defaultValue='test' {...register('name')} />

			<input {...register('exampleRequired', { required: true })} />
			{errors.exampleRequired && <span>This field is required</span>}

			<input type='submit' />
		</form>
	)
}
