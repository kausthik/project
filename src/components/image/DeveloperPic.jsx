const DeveloperPic = (props) => {
	return (
		<div
			className={`flex items-center relative justify-center ${props.style} p-0 m-0`}
		>
			<img
				src={props.src}
				className='inline-block object-cover aspect-square h-full p-0 shadow shadow-accent rounded-full'
			/>
		</div>
	);
};

export default DeveloperPic;
