import React from 'react';
import { Link } from 'react-router-dom';

const navigations = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Projects',
		path: '/projects',
	},
	{
		name: 'Companies',
		path: '/companies',
	},
	{
		name: 'Developer',
		path: '/developers',
	},
];

const NavMobile = () => {
	return (
		<div className='bg-white w-full h-full shadow-2xl'>
			<ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
				{navigations.map((navigation, index) => {
					// Include index as the second argument
					return (
						<li key={index}>
							<Link
								to={navigation.path}
								className='mr-5 capitalize hover:border-b transition-all hover:text-gray-900'
							>
								{navigation.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default NavMobile;
