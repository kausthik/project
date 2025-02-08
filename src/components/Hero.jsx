import { RiArrowRightSLine } from 'react-icons/ri';
import { AiFillPlayCircle } from 'react-icons/ai';
import { MdCelebration } from 'react-icons/md';

const Hero = () => {
	return (
		<div
			className=' antialiased flex flex-col py-12 px-6  items-center
		   justify-center gap-4'
		>
			{/*------------- Background Gradient ------------ */}
			<div className='flex flex-row gap-0 z-0'>
				<div className='gradient'></div>
			</div>

			{/*------------- Milestone ------------ */}

			<div
				className='flex flex-row px-2 border items-center justify-center 
			animate-bounce border-accent rounded-full text-gray-700 text-md z-10'
			>
				<MdCelebration className='mr-2' />
				More than 6000+ users joined.
			</div>

			{/*------------- Headings ------------ */}

			<div className='gap-0 z-[1]'>
				<h1
					className=' text-gray-900 text-center text-4xl md:text-6xl
				 font-semibold'
				>
					More than listing
				</h1>
				<h1
					className=' blue-gradient text-center text-4xl md:text-6xl
				 font-semibold'
				>
					Complete Freelancing Platform
				</h1>
			</div>

			{/*------------- SubHeading ------------ */}

			<p className='my-3 text-center md:text-2xl text-xl text-gray-700'>
				IdeaBox is a project listing platform that{' '}
				<span className='text-accent font-semibold'>"Connects"</span> <br />
				businesses with freelancers helping them grow together.
			</p>
			<div className='flex my-8 items-center justify-center gap-10 z-[1]'>
				<div className='flex justify-between  items-center cursor-pointer bg-accent hover:bg-accent/50 rounded-lg text-white font-semibold text-center'>
					<a
						href='/register'
						className='flex p-3 md:p-4 items-center justify-center'
					>
						Start your journey <RiArrowRightSLine className='ml-2 text-md' />
					</a>
				</div>

				{/*------------- Demo Video ------------ */}

				<a
					href='/'
					className='flex p-0 gap-3 items-center justify-center'
				>
					<AiFillPlayCircle className='text-accent text-5xl md:text-6xl animate-pulse' />
					<div className='flex flex-col'>
						<p className='text-accent'>Watch demo</p>
						<p>2 min</p>
					</div>
				</a>
			</div>
			{/*------------- Screenshots ------------ */}

			<img src='/new-hero.svg' />
			<h2
				className='text-center text-3xl md:text-4xl
				 font-semibold my-4'
			>
				Completed <span className='blue-gradient'>6,000+</span> applications and
				<br />
				<span className='blue-gradient'>thousands</span> of users
			</h2>
		</div>
	);
};

export default Hero;
