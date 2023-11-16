import React, { useState, useCallback } from 'react';
import { DELAY } from "@/app/constants"

const useEmailValidation = () => {
	const [email, setEmail] = useState<string>('');
	const [isValid, setIsValid] = useState<boolean>(true);

	const validateEmail = useCallback((input: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(input);
	}, []);

	const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setEmail(inputValue);

		const validate = async () => {
			const isValidEmail = validateEmail(inputValue) && inputValue.trim() !== '';
			setIsValid(isValidEmail);
		};

		const timeoutId = setTimeout(validate, DELAY);

		return () => clearTimeout(timeoutId);
	}, [validateEmail]);

	return { email, isValid, handleEmailChange };
};

export default useEmailValidation;
