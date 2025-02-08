import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CompanyList = ({ organizations_prop = [] }) => {
	return organizations_prop.map((organization) => {
		// console.log('developer >>>>>', developer);
		const { uid, name, about, website, domain, banner_img } = organization;
		return (
			<>
				{/*---------------- Project List--------------- */}
				<Link
					to={`/companies/${uid}`}
					className='flex flex-col items-start gap-3 p-5 hover:bg-slate-100 cursor-pointer border-t w-full relative'
				>
					<div className='flex w-full gap-6 items-center relative'>
						<BsFillBookmarkPlusFill className='absolute w-7 h-7 top-2 border-spacing-4 right-3 z-30 hover:text-accent' />
						<img
							src={banner_img}
							className='aspect-video md:w4 h-40 object-cover rounded-lg'
							alt=''
						/>
						<div className='flex flex-col w-full'>
							{/*------------ Company Name------------- */}
							<h1 className='text-xl font-medium text-slate-900'>{name}</h1>

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
									<div>
										<h3 className='listing-content-data'>Domain</h3>
										<h4 className='listing-content-constant company-domain'>
											{domain}
										</h4>
									</div>
									<div>
										<h3 className='listing-content-data'>Website</h3>
										<a className='link link-hover company-website'>{website}</a>
									</div>
								</div>
								<div className='flex flex-col w-1/2 items-start justify-start gap-3'>
									{/* ---------TODO: Founded in ---------------*/}
									<div>
										<h3 className='listing-content-data'>Founded in</h3>
										<h4 className='listing-content-constant'>1968</h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/*------------ Description ------------- */}
					<p className='Company-description'>{about}</p>

					{/* -------------TODO: Company Tags---------------- */}
					<div className='flex Comapany-tags'>
						<ul className='capitalize text-slate-500 flex gap-2'>
							<li className='border  bg-transparent hover:bg-cyan-100/50 shadow-sm p-2 text-sm px-2 py-1 rounded-xl'>
								IT Services
							</li>
							<li className='border  bg-transparent hover:bg-cyan-100/50 shadow-sm p-2 text-sm px-2 py-1 rounded-xl'>
								Software Product
							</li>
							<li className='border  bg-transparent hover:bg-cyan-100/50 shadow-sm p-2 text-sm px-2 py-1 rounded-xl'>
								IT services
							</li>
							<li className='border  bg-transparent hover:bg-cyan-100/50 shadow-sm p-2 text-sm px-2 py-1 rounded-xl'>
								BPO
							</li>
						</ul>
					</div>
				</Link>
			</>
		);
	});
};

export default CompanyList;
