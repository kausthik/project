import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import NavMobile from './NavMobile';

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

const NavMenu = () => {
	const [mobileNav, setMobileNav] = useState(false);

	return (
		<div className='flex justify-between'>
			<div
				onClick={() => setMobileNav(!mobileNav)}
				className='text-2xl md:hidden lg:text-3xl cursor-pointer'
			>
				{mobileNav ? <CgClose /> : <CgMenuRight />}
			</div>
			<nav className='hidden md:ml-auto md:mr-auto md:flex md:flex-wrap md:items-center text-base md:justify-center'>
				<ul className='md:flex md:gap-x-8'>
					{navigations.map((navigation, index) => {
						return (
							<li
								key={index}
								className='mr-5 capitalize transition-all items-center hover:text-accent z-50'
							>
								<NavLink
									to={navigation.path}
									className={(navClass) =>
										navClass.isActive ? 'text-accent' : ''
									}
								>
									{navigation.name}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
			<div
				className={`${
					mobileNav ? 'left-0' : '-left-full'
				} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
			>
				<NavMobile />
			</div>
		</div>
	);
};

export default NavMenu;
