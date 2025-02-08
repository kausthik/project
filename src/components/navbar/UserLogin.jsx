import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdLogIn } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';

function UserLogin() {
	return (
		<div className=' hover:text-accent dropdown dropdown-end '>
			<label
				tabIndex={0}
				className='btn text-4xl btn-ghost rounded-btn'
			>
				<RxAvatar />
			</label>
			<ul className='menu dropdown-content z-[15] p-2 shadow bg-base-100 rounded-box w-52 mt-4'>
				<li>
					<Link
						to={'login'}
						className='w-full text-accent  focus:bg-accent hover:bg-slate-100  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
					>
						Login
					</Link>
				</li>
				<li>
					<Link
						to={'/register'}
						className='w-full text-accent hover:text-accent bg-white shadow-sm font-medium hover:bg-slate-100 rounded-lg text-sm px-5 py-2.5 text-center'
					>
						Register
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default UserLogin;
