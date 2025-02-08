import { Link, useParams } from 'react-router-dom';
import { BiSolidMap } from 'react-icons/bi';
import { FaCircleDollarToSlot } from 'react-icons/fa6';
import { AiFillQuestionCircle } from 'react-icons/ai';
import Container from './Container';
import { useEffect, useState } from 'react';

const ProjectDetails = () => {
	const { uid } = useParams();
	const [project, setProject] = useState([]);

	useEffect(() => {
		const fetchProject = async () => {
			const response = await fetch(
				`https://projekto-backend.onrender.com/projects/${uid}`,
				{ mode: 'cors' }
			);
			const fetchedProject = await response.json();
			setProject(fetchedProject.data);
			console.log('fetch Projects------------', fetchedProject.data);
			// console.log('fetch Projects------------', projects);
		};
		fetchProject();
	}, []);

	if (!Object.keys(project).length > 0)
		return (
			<div className='flex justify-center text-slate-500'>Loading.....</div>
		);

	return (
		<>
			<div className='flex flex-col max-w-screen-sm md:max-w-none lg:max-w-none items-center justify-center mx-3 relative'>
				<Container>
					<div className='flex w-full items-center justify-start flex-col md:flex-row relative'>
						<div className='flex w-full items-center justify-center md:items-start md:justify-start px-5 md:w-auto '>
							<img
								src={project?.thumbnail}
								className='aspect-video  mb-2 
								 w-full  md:h-44 max  object-cover rounded-lg'
							/>
						</div>
						{/* Heading */}
						<div className='flex flex-col w-full md:w-auto justify-start items-start  md:ml-0'>
							<h1 className='text-2xl px-6 text-start font-medium text-slate-800 mb-6 '>
								{project?.title}
							</h1>
							{/* Domain */}
							<Link className='text-accent px-6 my-2 text-base font-medium underline'>
								Posted by Google
							</Link>
							{/* Timestamp */}
							<p className='text-sm px-6 text-slate-600'>
								Posted on {project?.createdAt}
							</p>
							<div className='flex px-6 flex-col my-5 gap-2'>
								{/* City */}
								<p className='text-base flex items-center gap-2 text-slate-800'>
									<BiSolidMap className='text-accent' /> Worldwide
								</p>
								{/* Proposal Count */}
								<p className='text-base  text-slate-800'>
									Send a proposal for: total proposals{' '}
									<span className='text-accent animate-pulse'>
										{project?.proposals}
									</span>
								</p>
							</div>
						</div>
					</div>

					<div className='flex w-full border-t py-3'>
						{/* description */}
						<h1 className='description px-6'>{project?.description}</h1>
					</div>
					{/* Pricing */}
					<div className='flex justify-start gap-8 w-full border-t pt-3 pb-6'>
						<div className='flex text-base px-6 text-start font-normal gap-3 items-start'>
							<FaCircleDollarToSlot className='text-accent mt-2' />
							<p className='text-base font-medium'>
								Rs. {project?.fixed_price} <br />{' '}
								<span className='text-sm font-light text-slate-600'>
									{project?.project_type}
								</span>
							</p>
						</div>
						{/* Experience Level */}
						<div className='flex text-base px-6 text-start font-normal gap-3 items-start'>
							<p className='text-base font-medium'>
								{project?.timeframe} <br />{' '}
								<span className='text-sm font-light text-slate-600'>
									Project Duration
								</span>
							</p>
						</div>
					</div>
					<div className='flex w-full border-t py-3'>
						{/* Contract type */}
						<p className='text-base capitalize px-6 text-start font-normal text-slate-800'>
							<span className=' font-medium'>Project Type:</span>{' '}
							{project?.board} project
						</p>
					</div>
					<div className='flex flex-col w-full border-t py-3 px-6 gap-4'>
						{/* TechStack */}
						<p className='text-base mb-3 text-start font-medium text-slate-800'>
							Skill and Expertise
						</p>
						<div className='flex flex-wrap'>
							<ul className='flex flex-wrap  gap-2 capitalize text-accent'>
								<li
									className='border border-slate-300 px-2 
								py-1 bg-accent/10 text-sm rounded-2xl'
								>
									{project?.techStack}
								</li>
							</ul>
						</div>
					</div>

					<div className='flex flex-col w-full border-t py-3 px-6 gap-4'>
						<p className='flex items-center text-lg my-3 text-start font-medium text-slate-800'>
							Upgrade your membership to see bid range
							{/* ----------TODO: Tooltip Style ----! pending */}
							<div
								className='tooltip'
								data-tip='Hello'
							>
								<AiFillQuestionCircle className='text-base text-accent ml-2' />
							</div>
						</p>
					</div>
				</Container>
				{/* Apply Button */}
				<div
					className='flex md:relative 2xl:absolute 2xl:w-96 md:w-4/5 2xl:bg-transparent 2xl:-top-[79%] 2xl:right-[21%] fixed bottom-0
				 bg-white gap-2 w-full border-t md:border-0 md:bottom-4 border-slate-300 py-2 items-center justify-center z-10 px-3'
				>
					<div className='flex items-center justify-center w-1/2'>
						<Link
							className='flex bg-accent px-4 py-2 w-full items-center justify-center text-white
						hover:bg-white hover:text-accent hover:border-accent font-medium border border-slate-300 rounded-full'
						>
							Apply Now
						</Link>
					</div>
					<div className='flex items-center justify-center w-1/2'>
						{' '}
						<Link
							className='flex bg-white px-4 py-2 w-full items-center justify-center text-accent
						hover:bg-accent hover:text-white font-medium border border-accent rounded-full'
						>
							Save
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectDetails;
