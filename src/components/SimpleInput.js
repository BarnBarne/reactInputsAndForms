import useInput from '../hooks/use-input'

const SimpleInput = props => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput(value => value.trim() !== '')
	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangedHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput(value => value.includes('@'))

	let formIsValid = false

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true
	}

	const formSubmissionHandler = event => {
		event.preventDefault()

		if (!formIsValid) {
			return
		}

		console.log(enteredName, enteredEmail)

		resetNameInput()
		resetEmailInput()
	}

	const nameInputClasses = !nameInputHasError ? 'form-control' : 'form-control invalid'
	const emailInputClasses = !emailInputHasError ? 'form-control' : 'form-control invalid'

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' onChange={nameChangedHandler} value={enteredName} onBlur={nameBlurHandler} />
				{nameInputHasError && <p className='error-text'>Name must not be empty</p>}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>Your E-mail</label>
				<input type='text' id='email' onChange={emailChangedHandler} value={enteredEmail} onBlur={emailBlurHandler} />
				{emailInputHasError && <p className='error-text'>Email must include @</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
