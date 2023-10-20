import useInputt from '../hooks/use-inputt'

const BasicForm = props => {
	const {
		enteredValue: enteredFirstName,
		inputBlurHandler: firstNameBlurHandler,
		isInputValid: isFirstNameValid,
		inputChangeHandler: firstNameChangedHandler,
		hasError: firstNameHasError,
		reset: firstNameReset,
	} = useInputt(enteredValue => enteredValue.trim() !== '')

	const {
		enteredValue: enteredLastName,
		inputBlurHandler: lastNameBlurHandler,
		isInputValid: isLastNameValid,
		inputChangeHandler: lastNameChangedHandler,
		hasError: lastNameHasError,
		reset: lastNameReset,
	} = useInputt(enteredValue => enteredValue.trim() !== '')

	const {
		enteredValue: enteredEmail,
		inputBlurHandler: emailBlurHandler,
		isInputValid: isEmailValid,
		inputChangeHandler: emailChangedHandler,
		hasError: emailHasError,
		reset: emailReset,
	} = useInputt(enteredValue => enteredValue.includes('@'))

	let formIsValid = false
	if (isFirstNameValid && isLastNameValid && isEmailValid) {
		formIsValid = true
	}

	const formValidationHandler = event => {
		event.preventDefault()
		if (!formIsValid) {
			return
		}
		console.log(enteredFirstName, enteredLastName, enteredEmail)

		firstNameReset()
		lastNameReset()
		emailReset()
	}

	const nameClasses = firstNameHasError ? 'form-control invalid' : 'form-control'
	const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control'
	const emailClasses = emailHasError ? 'form-control invalid' : 'form-control'

	return (
		<form onSubmit={formValidationHandler}>
			<div className='control-group'>
				<div className={nameClasses}>
					<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='name'
						onChange={firstNameChangedHandler}
						value={enteredFirstName}
						onBlur={firstNameBlurHandler}
					/>
					{firstNameHasError && <p>name can't be empty</p>}
				</div>
				<div className={lastNameClasses}>
					<label htmlFor='lastName'>Last Name</label>
					<input
						type='text'
						id='lastName'
						onChange={lastNameChangedHandler}
						value={enteredLastName}
						onBlur={lastNameBlurHandler}
					/>
					{lastNameHasError && <p>last name can't be empty</p>}
				</div>
			</div>
			<div className={emailClasses}>
				<label htmlFor='email'>E-Mail Address</label>
				<input type='text' id='email' onChange={emailChangedHandler} value={enteredEmail} onBlur={emailBlurHandler} />
				{emailHasError && <p>email must include '@'</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	)
}

export default BasicForm
