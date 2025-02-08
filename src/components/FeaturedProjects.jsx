import { useEffect, useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

const FeaturedProjects = () => {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		const fetchProjects = async () => {
			const response = await fetch(
				'https://projekto-backend.onrender.com/projects?featured=true',
				{ mode: 'cors' }
			);
			const fetchedProjects = await response.json();
			setProjects(fetchedProjects.data);
			console.log('fetch Projects------------', fetchedProjects.data);
			// console.log('fetch Projects------------', projects);
		};
		fetchProjects();	
	}, [])
	
	return (
		<div className='flex flex-col max-w-7xl'>
			<div className='flex flex-col'>
				<h3 className='text-purple-300 font-semibold uppercase text-sm'>
					Featured projects
				</h3>
				<h2 className='text-3xl font-semibold'>
					Projects open for development join them and start contributing today.
				</h2>
			</div>

			<div className='flex flex-col md:flex-row my-8 gap-5'>
			{/*------------- Features Card ------------ */}
			{projects.map((project) => {
				return (

				<div className='flex md:w-1/3 flex-col gap-4 bg-[#0a0c3d] rounded-xl border border-slate-800 p-5'>
					{/*------------- Project thumbnail ------------ */}
					<img
						src={project.thumbnail}
						className='object-cover rounded  aspect-video'
					/>

					<div className='gap=0'>
						{/*------------- Project title ------------ */}
						<h2 className='font-semibold text-xl '>{project.title}</h2>

						{/*------------- Project organization ------------ */}
						{/* <h2 className='font-light text-xl text-slate-200 '>Google</h2> */}
					</div>
					<div className='flex'>
						{/*------------- Project tech stack ------------ */}

						<ul className='capitalize text-slate-400'>
							<li className='border border-slate-600 p-2 text-sm rounded-2xl'>
								{project.techStack}
							</li>
						</ul>
					</div>

					{/*------------- Project description ------------ */}
					<p className='opacity-75 '>
						{project.description} 
					</p>
					<div className='flex'>
						{/*------------- Project link button ------------ */}
						{/* <a
							href='/about'
							className='flex items-center p-3 mt-7 text-sm rounded-lg font-semibold bg-accent/70 hover:bg-accent/50'
						>
							About IdeaBox <RiArrowRightSLine className='ml-2 text-md' />
						</a> */}
					</div>
				</div>
	)})}
	</div>
	</div>
	);
};

export default FeaturedProjects;
