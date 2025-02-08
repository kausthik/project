import { RiArrowRightSLine } from 'react-icons/ri';

const AppFeatures = () => {
	return (
		<div className='flex flex-col max-w-7xl'>
			<div className='flex flex-col'>
				<h3 className='text-purple-300 font-semibold uppercase text-sm'>
					why ideaBox
				</h3>
				<h2 className='text-3xl font-semibold'>
					Created by engineers and founders, we built IdeaBox from the ground up
					to solve our own problem.
				</h2>
				<div className='flex'>
					<a
						href='/about'
						className='flex items-center p-3 mt-10 text-sm rounded-lg font-semibold bg-accent hover:bg-accent/50'
					>
						About IdeaBox <RiArrowRightSLine className='ml-2 text-md' />
					</a>
				</div>
			</div>

			{/*------------- Features Card ------------ */}

			<div className='flex flex-col md:flex-row my-8 gap-5'>
				<div className='flex flex-col gap-4 bg-[#0a0c3d] rounded-xl border border-slate-800 p-5'>
					<img src='/SVG/card-1.svg' />
					<h2 className='font-semibold text-xl'>User Experience</h2>
					<p className='opacity-75'>
						We are a team of experts, and know all the pain points involved with
						search of project. We’ve painstakingly built the freelancing
						platform you’ve always wished you had — one that “just works”, and
						one that still keeps you in control of your choosing the projects
						you align with.
					</p>
				</div>
				<div className='flex flex-col gap-4 bg-[#0a0c3d] rounded-xl border border-slate-800 p-5'>
					<img src='/SVG/card-1.svg' />
					<h2 className='font-semibold text-xl'>User Experience</h2>
					<p className='opacity-75'>
						We are a team of experts, and know all the pain points involved with
						search of project. We’ve painstakingly built the freelancing
						platform you’ve always wished you had — one that “just works”, and
						one that still keeps you in control of your choosing the projects
						you align with.
					</p>
				</div>
				<div className='flex flex-col gap-4 bg-[#0a0c3d] rounded-xl border border-slate-800 p-5'>
					<img src='/SVG/card-1.svg' />
					<h2 className='font-semibold text-xl'>User Experience</h2>
					<p className='opacity-75'>
						We are a team of experts, and know all the pain points involved with
						search of project. We’ve painstakingly built the freelancing
						platform you’ve always wished you had — one that “just works”, and
						one that still keeps you in control of your choosing the projects
						you align with.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AppFeatures;
