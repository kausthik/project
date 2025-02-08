const Container = ({ children }) => {
	return (
		<div
			className={`flex w-full 2xl:w-3/5 md:w-4/5 flex-col justify-center 
            items-center border z-10 relative
           border-slate-300  bg-white/50 rounded-2xl py-6 mb-10 my-6`}
		>
			{children}
		</div>
	);
};

export default Container;
