import React, { useState } from 'react';
import ProfilePicDev from './ProfilePicDev';
import Avatar from 'react-avatar-edit';
import { RxAvatar } from 'react-icons/rx';

const Final = () => {
	/* Show details */

	return (
		<div className='flex flex-col gap-8 w-full justify-center items-center h-1/2 font-bold text-accent'>
			{/* <ProfilePicDev profileImg={profileImg} setProfileImg={setProfileImg}/> */}
			<RxAvatar className='w-40 h-40 text-accent' />
			<h1>Confirm your details and click confirm to register.</h1>
		</div>
	);
};

export default Final;
