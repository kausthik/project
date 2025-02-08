import React from 'react';

const PersonalInfo = ({ formData, setFormData }) => {
	/*2.Form
	Phone
	City
	Qualification
	Technical role
	Skills
	OpenToWork
	*/
	console.log("formData in personal info---", formData);
	return (
		<div className='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8'>
			<div className='relative'>
				<p
					className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute'
				>
					{/* -----------phone----------- */}
					Phone
				</p>
				<input
					placeholder='+91-9876543210'
					type='tel'
					value={ formData.phone }
					onChange={(event) => setFormData({...formData, phone: event.target.value})}
					className='border placeholder-gray-400 focus:outline-none
		  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
		  border-gray-300 rounded-md'
				/>
			</div>
			<div className='flex flex-auto gap-5 w-full items-center justify-between'>
				<div className='relative w-full'>
					<p
						className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
								  absolute'
					>
						{/* -----------city----------- */}
						City
					</p>
					<input
						placeholder='Eg. Mumbai'
						type='text'
						value={ formData.city }
						onChange={(event) => setFormData({...formData, city: event.target.value})}
						className='border capitalize placeholder-gray-400 focus:outline-none
								  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
								  border-gray-300 rounded-md'
					/>
				</div>
				<div className='relative w-full'>
					<p
						className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
								  absolute'
					>
						{/* -----------technical_role----------- */}
						Profession
					</p>
					<input
						placeholder='web developer'
						type='text'
						value={ formData.technical_role }
						onChange={(event) => setFormData({...formData, technical_role: event.target.value})}
						className='border capitalize placeholder-gray-400 focus:outline-none
								  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
								  border-gray-300 rounded-md'
					/>
				</div>
			</div>
			<div className='relative w-full'>
				<p
					className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
								  absolute'
				>
					{/* -----------qualification----------- */}
					Qualification
				</p>
				<input
					placeholder='B.E (Computer Science)'
					type='text'
					value={ formData.qualification }
					onChange={(event) => setFormData({...formData, qualification: event.target.value})}
					className='border capitalize placeholder-gray-400 focus:outline-none
								  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
								  border-gray-300 rounded-md'
				/>
			</div>
			<div className='relative w-full'>
				<p
					className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
								  absolute'
				>
					{/* -----------Skills----------- */}
					Skills
				</p>
				<textarea
					rows='2'
					placeholder='web developer'
					value={ formData.skills }
					onChange={(event) => setFormData({...formData, skills: event.target.value})}
					className='border capitalize placeholder-gray-400 focus:outline-none
								  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
								  border-gray-300 rounded-md'
				/>
			</div>
		</div>
	);
};

export default PersonalInfo;
