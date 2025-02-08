import React from 'react';

const UserProfile = () => {
	return (
		<div
			className='flex md:w-3/12 flex-col justify-center w-full
         lg:w-2/5 items-start border
          z-10 border-slate-300  bg-white/50 rounded-2xl py-5'
		>
			<div>
				<div>{/* ProfilePic */}</div>
				<div>
					<h2>{/* Name */}</h2>
					<div>
						{/* ICON */}
						<h4>{/* city */}</h4>
					</div>
				</div>
			</div>
			<div>
				<h2>{/* Skills */}</h2>
				<h4>Specializes in</h4>
				<p>{/* description */}</p>
			</div>
		</div>
	);
};

export default UserProfile;
