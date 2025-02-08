import { useEffect, useState } from 'react';
import DeveloperPic from '../components/image/DeveloperPic';
import { BiSolidMap } from 'react-icons/bi';
import { LuEdit } from 'react-icons/lu';
import { useParams } from 'react-router-dom';

const DeveloperMain = () => {
	const { uid } = useParams();
	const [developer, setDeveloper] = useState([]);

	useEffect(() => {
		const fetchDeveloper = async () => {
			const response = await fetch(
				`https://projekto-backend.onrender.com/developers/${uid}`,
				{ mode: 'cors' }
			);
			const fetchedDeveloper = await response.json();
			setDeveloper(fetchedDeveloper.data);
			console.log('fetch Developer------------', fetchedDeveloper.data);
		};
		fetchDeveloper();
	}, []);

	const skills = developer?.skills;

	if (!Object.keys(developer).length > 0)
		return (
			<div className='flex w-full justify-center text-slate-500'>
				Loading.....
			</div>
		);
	return (
		<>
			<div className='flex flex-col max-w-screen-sm md:max-w-none lg:max-w-none items-center justify-center mx-3'>
				<div
					className='flex w-full lg:w-3/5 md:w-4/5 flex-col justify-center 
            items-center border z-10 relative
           border-slate-300  bg-white/50 rounded-2xl my-6 mb-10'
				>
					<div className='flex justify-start w-full mt-6 items-start place-content-start gap-[5%] border-b border-slate-300 px-5 py-7 relative'>
						<div className='flex items-center relative justify-center h-24 p-0 m-0'>
							<img
								src={developer?.profile_pic}
								className='inline-block object-cover aspect-square h-full p-0 shadow shadow-accent rounded-full'
							/>
						</div>
						<LuEdit className='absolute right-8 top-9 text-2xl text-accent hover:bg-accent/10' />
						<div className='flex flex-col justify-between items-start gap-3'>
							{/* --------Developer Name------------------- */}
							<h1 className='text-3xl font-medium text-slate-900'>
								{developer?.fname} {developer?.lname}
							</h1>
							<div className='flex place-content-start items-center w-full text-slate-600 gap-1'>
								<BiSolidMap />
								{/*------------------------ Developer City-------------------------- */}
								<p>{developer?.city}, India</p>
							</div>
						</div>
					</div>
					<div className='flex justify-start w-full items-start place-content-start'>
						{/* ----------Col-1----------------*/}
						<div className='flex flex-col gap-6 px-5 py-7  mr-2  w-1/3'>
							<div className='flex flex-col gap-2  '>
								<h1 className='text-lg text-slate-900 font-medium'>
									Experience
								</h1>
								<p className='description'>3+ Years Expert</p>
							</div>
							<div className='flex flex-col gap-2'>
								<h1 className='text-lg text-slate-900 font-medium'>
									Languages
								</h1>
								<p className='description'>English | Hindi | Marathi</p>
							</div>
							<div className='flex flex-col gap-2'>
								<h1 className='text-lg text-slate-900 font-medium'>
									Education
								</h1>
								<h1 className='text-base text-slate-900 font-medium'>
									VIVA Institute of Technology
								</h1>
								<p className='description'>{developer?.qualification}</p>
							</div>
						</div>
						{/* ----------Col-2----------------*/}
						<div className='flex flex-col border-l pl-2 border-slate-300 gap-6 w-2/3 pb-10'>
							<div className='flex flex-col gap-2 px-5 py-7'>
								{/* ---------Domain------------ */}
								<h1 className='text-2xl font-semibold mb-3'>
									{developer?.technical_role}
								</h1>
								<p className='description'>
									Hello!, I'm {developer?.technical_role} seeking side projects,
									My skill set extends beyond technical proficiency. I have a
									keen eye for design, allowing me to effectively transform
									wireframes and mockups into visually appealing product. I
									understand the importance of creating intuitive user
									experiences that engage and captivate visitors, ultimately
									leading to increased conversion rates and customer
									satisfaction.
								</p>
							</div>
							<div className='flex flex-col gap-2 px-5'>
								<h1 className='text-lg font-semibold mb-3'>Skills</h1>
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
						<h1 className='text-2xl font-semibold mb-3'>Project History</h1>
						{/* ---------TODO: Project History------------ */}
						<div className='border-b py-5 border-slate-300 '>
							<h2 className='text-xl font-semibold mb-3'>
								Web Developer | Freelance
							</h2>
							<div className='flex place-content-start items-center w-full text-slate-600 gap-1'>
								{/*------------------------ Developer City-------------------------- */}
								<p>January 2020 - December 2022</p>
							</div>
							<p className='description'>
								Key Responsibilities: <br />
								Hello!, I'm full stack developer seeking side projects, My skill
								set extends beyond technical proficiency. I have a keen eye for
								design, allowing me to effectively transform wireframes and
								mockups into visually appealing interfaces. I understand the
								importance of creating intuitive user experiences that engage
								and captivate visitors, ultimately leading to increased
								conversion rates and customer satisfaction.
							</p>
						</div>
						<div className='border-b py-5 border-slate-300'>
							<h2 className='text-xl font-semibold mb-3'>
								Web Developer | Freelance
							</h2>
							<div className='flex place-content-start items-center w-full text-slate-600 gap-1'>
								{/*------------------------ Developer City-------------------------- */}
								<p>January 2020 - December 2022</p>
							</div>
							<p className='description'>
								Key Responsibilities: <br />
								Hello!, I'm full stack developer seeking side projects, My skill
								set extends beyond technical proficiency. I have a keen eye for
								design, allowing me to effectively transform wireframes and
								mockups into visually appealing interfaces. I understand the
								importance of creating intuitive user experiences that engage
								and captivate visitors, ultimately leading to increased
								conversion rates and customer satisfaction.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeveloperMain;
