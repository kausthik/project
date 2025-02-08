import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import DeveloperPic from './image/DeveloperPic';

const DeveloperList = ({ developers_prop = [] }) => {
	// console.log('Developer has --------------', developers_prop);
	return developers_prop.map((developer) => {
		// console.log('developer >>>>>', developer);
		const {
			fname,
			lname,
			qualification,
			technical_role,
			profile_pic,
			uid,
			skills,
		} = developer;
		return (
			<Link
				to={`/developers/${uid}`}
				className='flex flex-col items-start gap-3 p-5 hover:bg-slate-100 cursor-pointer border-t w-full relative'
			>
				<div className='flex w-full gap-6 items-center relative'>
					<BsFillBookmarkPlusFill className='absolute w-7 h-7  top-2 border-spacing-4 right-3 z-30 hover:text-accent' />
					<div
						className={`flex items-center relative justify-center h-40 w-56 p-0 m-0`}
					>
						{/* -------Developer Pic-------- */}
						<img
							src={profile_pic}
							className='inline-block object-cover aspect-square h-full p-0 shadow
                                 shadow-accent rounded-full'
						/>
					</div>
					<div className='flex flex-col w-full'>
						{/*------------ Developer Name------------- */}
						<h1 className='text-xl font-medium text-slate-900'>
							{fname} {lname}
						</h1>

						{/*------------ Rating ------------- */}
						<div className='rating md:rating-sm rating-xs'>
							<input
								type='radio'
								name='rating-2'
								className='mask mask-star-2 bg-orange-400'
							></input>
							<input
								type='radio'
								name='rating-2'
								className='mask mask-star-2 bg-orange-400'
								checked
							/>
							<input
								type='radio'
								name='rating-2'
								className='mask mask-star-2 bg-orange-400'
							/>
							<input
								type='radio'
								name='rating-2'
								className='mask mask-star-2 bg-orange-400'
							/>
							<input
								type='radio'
								name='rating-2'
								className='mask mask-star-2 bg-orange-400'
							/>
						</div>
						<div className='flex my-5'>
							<div className='flex flex-col w-1/2 items-start justify-start gap-3'>
								{/* ---------Profession------------- */}
								<div>
									<h3 className='listing-content-data'>Domain</h3>
									<h4 className='listing-content-constant description'>
										{technical_role}
									</h4>
								</div>
								{/* --------Education------------ */}
								<div>
									<h3 className='listing-content-data'>Education</h3>
									<a className='link link-hover company-website'>
										{qualification}
									</a>
								</div>
							</div>

							<div className='flex flex-col w-1/2 items-start justify-start gap-3'>
								{/* -----------TODO: Experience------------ */}
								<div>
									<h3 className='listing-content-data'>Experience</h3>
									<h4 className='listing-content-constant'>3+ Years</h4>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*------------TODO:  Description ------------- */}
				<p className='description'>
					Accenture is an Irish-American, professional services company based in
					Dublin, specializing in information technology services and
					consulting. Accenture is a global professional services company with
					leading capabilities in digital, cloud, and security.
				</p>

				{/* -------------Skill---------------- */}
				<div className='flex flex-wrap'>
					<ul className='flex flex-wrap  gap-2 capitalize text-accent'>
						{skills.map((skill) => {
							return (
								<li
									className='border border-slate-300 px-2 
									py-1 bg-accent/5 text-sm rounded-2xl'
								>
									{skill}
								</li>
							);
						})}
					</ul>
				</div>
			</Link>
		);
	});
};

export default DeveloperList;
