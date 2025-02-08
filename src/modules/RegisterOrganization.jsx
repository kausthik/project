import { useState } from 'react';
import Stepper from '../components/form/register/Stepper';
import StepperControl from '../components/form/register/StepperControl';
import { UseContextProvider } from '../components/form/register/StepperContext';
import FormContainer from '../components/form/FormContainer';
import organization from '/organization.svg';
import OrgAccount from '../components/form/register/organization/OrgAccount';
import OrgInfo from '../components/form/register/organization/OrgInfo';
import OrgBanner from '../components/form/register/organization/OrgBanner';
import Final from '../components/form/register/organization/Final';
import OrgFinal from '../components/form/register/organization/OrgFInal';
import { useNavigate } from 'react-router-dom';

const RegisterOrganization = () => {
	let navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		name: '',
		about: '',
		password: '',
		domain: '',
		website: '',
	});

	const steps = ['Login Details', 'Company Details', 'Review'];

	const displayStep = (step) => {
		switch (step) {
			case 1:
				return (
					<OrgAccount
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 2:
				return (
					<OrgInfo
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 3:
				// return <OrgBanner formData={formData} setFormData={setFormData} />;
				return (
					<OrgFinal
						formData={formData}
						setFormData={setFormData}
					/>
				);
			default:
		}
	};

	const handleClick = (direction) => {
		let newStep = currentStep;
		// console.log('newstep---', newStep);
		// console.log('lenght?------', steps.length);

		// POST when the you reach at the last step
		if (newStep == steps.length) {
			// console.log('heyyyy ', JSON.stringify(formData));
			fetch(
				'https://projekto-backend.onrender.com/organizations/auth/register',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			)
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

	console.log('org data ==== ', formData);
	return (
		<div
		//  className='mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2'
		>
			{/* Stepper */}
			<FormContainer image={organization}>
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

export default RegisterOrganization;
