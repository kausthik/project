export default function StepperControl({ handleClick, currentStep, steps }) {
	console.log('next?->>>>', currentStep);
	console.log('lenght inn stepper>>>>>>', steps.length);
	return (
		<div className='container mt-4 mb-8 flex justify-between'>
			<button
				onClick={() => handleClick()}
				className={`cursor-pointer inline-block  pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
				rounded-lg transition duration-200 hover:bg-indigo-600 ease w-32  ${
					currentStep === 1 ? ' hidden ' : ''
				}`}
			>
				Back
			</button>

			<button
				onClick={() => handleClick('next')}
				className={`cursor-pointer inline-block  pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
				rounded-lg transition duration-200 hover:bg-indigo-600 ease ${
					currentStep === 1 ? 'w-full' : 'w-32'
				}`}
			>
				{currentStep === steps.length ? `Confirm` : `Next`}
			</button>
		</div>
	);
}
