import React, { useEffect, useRef, useState } from "react";
import { IStateForm } from "../types/form";
const useValidationForm = () => {
	const [previewImage, setPreviewImage] = useState<File>();
	const [formState, setFormState] = useState<IStateForm>({
		name: "",
		message: "",
		image: null,
	});
	const [completedForm, setCompletedForm] = useState(false);
	const updateValueFormState = (name: string, value: string | File | null) => {
		setFormState((currentValue) => {
			return {
				...currentValue,
				[name]: value,
			};
		});
	};
	const resetForm = () => {
		setFormState({
			name: "",
			message: "",
			image: null,
		});
	};
	useEffect(() => {
		const validation = Object.values(formState).every((item) => item); // tests if all items are true , if so , releases the button
		if (validation) setCompletedForm(true);
		else setCompletedForm(false);
	}, [formState]);
	return {
		formState,
		setFormState,
		updateValueFormState,
		completedForm,
		previewImage,
		setPreviewImage,
		resetForm,
	};
};

export default useValidationForm;
