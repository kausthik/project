import { useEffect, useState } from 'react';
import DeveloperList from '../components/DeveloperList';

const DevelopersListing = () => {
	const [developers, setDevelopers] = useState([]);
	useEffect(() => {
		const fetchDevelopers = async () => {
			const response = await fetch(
				'https://projekto-backend.onrender.com/developers',
				{ mode: 'cors' }
			);
			const fetchedDevelopers = await response.json();
			setDevelopers(fetchedDevelopers.data);
			console.log('fetch Developers------------', fetchedDevelopers.data);
			// console.log('fetch Developers------------', developers);
		};
		fetchDevelopers();
	}, []);
	return (
		<>
			<div className='flex flex-col justify-center w-full'>
				{/*------------- Background Gradient ------------ */}
				<div className='gradient z-0'></div>

				{/*------------- Headings ------------ */}

				<div className='gap-0 z-[1] mt-5'>
					<h1
						className=' text-gray-900 text-center text-3xl md:text-4xl
			 font-semibold'
					>
						Discover Best Places to Work!
					</h1>
					<h1
						className=' blue-gradient text-center text-3xl md:text-4xl
			 font-semibold'
					>
						Company reviews. Salaries. Interviews. Jobs.
					</h1>
				</div>
				<div className='flex justify-center my-6 relative mx-3'>
					<div className='flex lg:w-3/5 flex-col justify-center w-full md:w-4/5 items-start border z-10 border-slate-300  bg-white/50 rounded-2xl py-5'>
						<h1 className='text-2xl text-start font-medium text-slate-800 px-5 my-2'>
							List of companies
						</h1>
						{/*---------------- Developer List--------------- */}
						{developers.length > 0 ? (
							<DeveloperList developers_prop={developers} />
						) : (
							<div className='flex justify-center w-full text-slate-500'>
								Loading.....
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default DevelopersListing;
