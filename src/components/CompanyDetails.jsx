import { BiSolidMap } from 'react-icons/bi';
import { LuEdit } from 'react-icons/lu';

const CompanyDetails = ({ org_data }) => {
	console.log('got orgData ---------', org_data);
	return (
		<>
			<div className='flex flex-col max-w-screen-sm md:max-w-none lg:max-w-none items-center justify-center mx-3'>
				<div
					className='flex w-full lg:w-3/5 md:w-4/5 flex-col justify-center 
            items-center border z-10 relative
           border-slate-300  bg-white/50 rounded-2xl my-6 mb-10'
				>
					{/* ------------------Company Banner */}
					<div className='flex justify-start w-full mt-6 items-start place-content-start gap-[5%] border-b border-slate-300 px-5 py-7 relative'>
						<div className='flex items-center relative justify-center h-24 p-0 m-0'>
							<img
								src={org_data.banner_img}
								className='inline-block object-cover aspect-video h-full p-0 shadow rounded-xl'
							/>
						</div>
						{/* <LuEdit className='absolute right-8 top-9 text-2xl text-accent hover:bg-accent/10' /> */}
						<div className='flex flex-col justify-between items-start gap-3'>
							{/* --------Company Name------------------- */}
							<h1 className='text-3xl font-medium text-slate-900'>
								{org_data.name}
							</h1>
							<div className='flex place-content-start items-center w-full text-slate-600 gap-1'>
								<BiSolidMap />
								{/*------------------------ Company Location-------------------------- */}
								<p>India</p>
							</div>
						</div>
					</div>
					<div className='flex justify-start w-full items-start place-content-start'>
						{/* ----------Col-1----------------*/}
						<div className='flex flex-col gap-6 px-5 py-7  mr-2  w-1/3 relative'>
							<div className='flex flex-col gap-2  '>
								<h1 className='text-lg text-slate-900 font-medium'>Industry</h1>
								<p className='description break-words'>{org_data.domain}</p>
							</div>
							<div className='flex flex-col gap-2'>
								<h1 className='text-lg text-slate-900 font-medium'>
									Founded in
								</h1>
								<p className='description'>1968</p>
							</div>
							<div className='flex flex-col gap-2'>
								<h1 className='text-lg text-slate-900 font-medium'>
									Company Website
								</h1>
								<p className='description break-words'>{org_data.website}</p>
							</div>
						</div>
						{/* ----------Col-2----------------*/}
						<div className='flex flex-col border-l pl-2 border-slate-300 gap-6 w-2/3 pb-10'>
							<div className='flex flex-col gap-2 px-5 py-7'>
								{/* ---------Company Name------------ */}
								<h1 className='text-2xl font-semibold mb-3'>
									About {org_data.name}
								</h1>
								<p className='description'>{org_data.about}</p>
							</div>
							<div className='flex flex-col gap-2 px-5'>
								<h1 className='text-lg font-semibold mb-3'>Domain</h1>
								<div className='flex flex-wrap'>
									<ul className='flex flex-wrap  gap-2 capitalize text-accent'>
										<li
											className='border border-slate-300 px-2 
									py-1 bg-accent/5 text-sm rounded-2xl'
										>
											Consultancy
										</li>
										<li
											className='border border-slate-300 px-2 
									py-1 bg-accent/5 text-sm rounded-2xl'
										>
											Cybersecurity
										</li>
										<li
											className='border border-slate-300 px-2 
									py-1 bg-accent/5 text-sm rounded-2xl'
										>
											Machine Learning
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className='flex w-full lg:w-3/5 md:w-4/5 flex-col justify-center 
            items-center border z-10 relative
           border-slate-300  bg-white/50 rounded-2xl my-6 mb-10'
				>
					<div className='flex flex-col px-5 py-7'>
						<h1 className='text-2xl font-semibold mb-3'>Company Projects</h1>
						{/* ---------TODO: Comapny Projects------------ */}
						<div className='border-b py-5 border-slate-300 '>
							<h2 className='text-xl font-semibold mb-3'>EduConnect</h2>
							<div className='flex place-content-start items-center w-full text-slate-600 gap-1'>
								{/*------------------------ Developer City-------------------------- */}
								<p>January 2020 - December 2022</p>
							</div>
							<p className='description'>
								Key Responsibilities:Design its UI/UX <br />
								Project Description: Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. In officia atque, porro quibusdam alias,
								voluptates quasi aliquid tempora fugiat, ex dignissimos facere
								est et labore libero dolor natus deserunt. Dignissimos.
							</p>
						</div>
						<div className='border-b py-5 border-slate-300'>
							<h2 className='text-xl font-semibold mb-3'>EduConnect</h2>
							<div className='flex place-content-start items-center w-full text-slate-600 gap-1'>
								{/*------------------------ Developer City-------------------------- */}
								<p>January 2020 - December 2022</p>
							</div>
							<p className='description'>
								Key Responsibilities:Design its Frontend <br />
								Project Description: Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Iure non in architecto quas quisquam repellat.
								Vero in laboriosam adipisci tempora rem quos sunt, reprehenderit
								molestiae ex, totam quia ratione ea. Lorem ipsum dolor, sit amet
								consectetur adipisicing elit. Facilis quisquam blanditiis cum
								id, amet debitis neque totam a numquam aperiam ex eum veritatis
								molestias facere assumenda repudiandae? Fugit, iste obcaecati.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CompanyDetails;
