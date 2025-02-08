import React, { useState } from 'react';
import Stepper from '../components/form/register/Stepper';
import StepperControl from '../components/form/register/StepperControl';
import { UseContextProvider } from '../components/form/register/StepperContext';
import AccountCredentials from '../components/form/register/steps/AccountCredentials';
import PersonalInfo from '../components/form/register/steps/PersonalInfo';
import Final from '../components/form/register/steps/Final';
import FormContainer from '../components/form/FormContainer';
import developer from '/developer.svg';
import { useNavigate } from 'react-router-dom';
const RegisterDeveloper = () => {
	let navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		fname: '',
		lname: '',
		email: '',
		password: '',
		phone: '',
		city: '',
		technical_role: '',
		qualification: '',
		skills: '',
	});

	const steps = ['Login Details', 'Personal Details', 'Review'];

	const displayStep = (step) => {
		switch (step) {
			case 1:
				return (
					<AccountCredentials
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 2:
				return (
					<PersonalInfo
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 3:
				return <Final />;
			default:
		}
	};

	const handleClick = (direction) => {
		let newStep = currentStep;
		// console.log('newstep---', newStep);
		// console.log('lenght?------', steps.length);
		// console.log('direction------>', direction);

		// POST when the you reach at the last step
		if (newStep == steps.length) {
			// console.log('heyyyy ', JSON.stringify(formData));
			fetch('https://projekto-backend.onrender.com/developers/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
				.then((response) => response.json())
				.then((data) => {
					// console.log('POSTED --> ', data);
					if(data.data.access_token){
						// console.log("token is ", data.data.access_token);
						localStorage.setItem("authToken", data.data.access_token)
						navigate("/");
						alert(`${data.message}`)
					}
				})
				.catch((error) => {
					console.log('POSTING error --> ', error);
				});
		}

		direction === 'next' ? newStep++ : newStep--;
		// check if steps are within bounds
		newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
	};

	return (
		<div
		//  className='mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2'
		>
			{/* Stepper */}
			<FormContainer image={developer}>
				<div className='relative h-full w-full'>
					<div className='w-full h-full relative'>
						<Stepper
							steps={steps}
							currentStep={currentStep}
						/>
						<UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
					</div>
					{/* navigation button */}
					<div className=' w-full absolute bottom-0'>
						{/* {currentStep !== steps.length && ( */}
						<StepperControl
							handleClick={handleClick}
							currentStep={currentStep}
							steps={steps}
						/>
						{/* )} */}
					</div>
				</div>
			</FormContainer>
		</div>
	);
};

export default RegisterDeveloper;
