import AppFeatures from './AppFeatures';
import FeaturedProjects from './FeaturedProjects';

const Featured = () => {
	return (
		<div className='flex items-center justify-center flex-col text-white bg-bg-color relative px-5 z-[1] py-24 gap-24 md:py-48 md:gap-32 lg:py-60 lg:gap-40'>
			{/*------------- Features ------------ */}

			<AppFeatures />

			{/*-------------Featured Projects ------------ */}
			<FeaturedProjects />
		</div>
	);
};

export default Featured;
