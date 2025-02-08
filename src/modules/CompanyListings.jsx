import { useEffect, useState } from 'react';
import CompanyList from '../components/CompanyList';

const CompanyListings = () => {
	const [organizations, setOrganizations] = useState([]);
	useEffect(() => {
		const fetchOrganizations = async () => {
			const response = await fetch(
				'https://projekto-backend.onrender.com/organizations',
				{ mode: 'cors' }
			);
			const fetchedOrganizations = await response.json();
			setOrganizations(fetchedOrganizations.data);
			console.log('fetch Organizations------------', fetchedOrganizations.data);
			// console.log('fetch Organizations------------', organizations);
		};
		fetchOrganizations();
	}, []);
	return (
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

			{/*------------- Search Bar ------------*/}
			{/* <div className="flex justify-center mt-4 py-0 relative mx-3">
				<form className='flex lg:w-3/5 flex-col justify-center w-full md:w-4/5'>
					<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
						Search
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
						<input
							type="search"
							id="default-search"
							className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search Companies..."
							required
						/>
						<button
							type="submit"
							className="text-white absolute right-2.5 bottom-2.5 bg-accent hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Search
						</button>
					</div>
				</form>
			</div>  */}

			<div className='flex justify-center my-6 relative mx-3'>
				<div className='flex lg:w-3/5 flex-col justify-center w-full md:w-4/5 items-start border z-10 border-slate-300  bg-white/50 rounded-2xl py-5'>
					<h1 className='text-2xl text-start font-medium text-slate-800 px-5 my-2'>
						List of companies
					</h1>
					{organizations.length > 0 ? (
						<CompanyList organizations_prop={organizations} />
					) : (
						<div className='flex w-full justify-center text-slate-500'>
							Loading.....
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CompanyListings;
