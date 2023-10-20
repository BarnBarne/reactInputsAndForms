import { useState } from 'react'

const useInputt = validHandler => {
	const [enteredValue, setEnteredValue] = useState('')
	const [isTouched, setIsTouched] = useState(false)

	const isInputValid = validHandler(enteredValue)
	const hasError = !isInputValid && isTouched

	const inputBlurHandler = () => {
		setIsTouched(true)
	}

	const inputChangeHandler = event => {
		setEnteredValue(event.target.value)
	}
    
    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

	return {
		enteredValue,
		inputBlurHandler,
		isInputValid,
		inputChangeHandler,
		hasError,
        reset
	}
}

export default useInputt
