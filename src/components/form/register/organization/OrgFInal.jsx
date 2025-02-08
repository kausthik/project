import React from 'react';
import { VscOrganization } from 'react-icons/vsc';

const OrgFinal = ({ formData, setFormData }) => {
	return (
		<div className='flex flex-col gap-8 w-full justify-center items-center h-1/2 font-bold text-accent'>
			<VscOrganization className='w-40 h-40 text-accent' />
			<h1>Confirm your details and click confirm to register.</h1>
		</div>
	);
};

export default OrgFinal;
