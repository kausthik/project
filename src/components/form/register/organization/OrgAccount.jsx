import React from 'react';

const OrgAccount = ({formData, setFormData}) => {
	{
		/*
Name
password


*/
	}

	return (
		<div className='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8'>
			<div className='relative w-full'>
				<p
					className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                          absolute'
				>
					Company Name
				</p>
				<input
					placeholder='Eg. Raw Engineering '
					type='text'
					value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
					className='border capitalize placeholder-gray-400 focus:outline-none
                          focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                          border-gray-300 rounded-md'
				/>
			</div>
			<div className='relative'>
				<p
					className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
          absolute'
				>
					Password
				</p>
				<input
					placeholder='Password'
					type='password'
					value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}
					className='border placeholder-gray-400 focus:outline-none
          focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
          border-gray-300 rounded-md'
				/>
			</div>
			<div className='relative'>
				<p
					className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
          absolute'
				>
					Re-enter Password
				</p>
				<input
					placeholder='Password'
					type='password'
					value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}
					className='border placeholder-gray-400 focus:outline-none
          focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
          border-gray-300 rounded-md'
				/>
			</div>
		</div>
	);
};

export default OrgAccount;
