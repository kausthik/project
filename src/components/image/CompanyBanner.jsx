import React from 'react';

const CompanyBanner = (props) => {
	return (
		<div
			className={`flex items-center relative justify-center ${props.style} p-0 m-0`}
		>
			<img
				src='/public/SVG/os-projects-android_thumbnail_720.png'
				className='flex object-cover aspect-video p-0 border border-accent rounded-xl'
			/>
		</div>
	);
};

export default CompanyBanner;
