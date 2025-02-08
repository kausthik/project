import React from 'react';

export default function ProjectAdd() {
	return (
		<>
			<div className='flex justify-center my-10 items-center h-screen'>
				<div className='gradient z-0'></div>
				<div className='max-w-3xl w-full'>
					<form
						action='#'
						method='POST'
						className='bg-white shadow-md px-8 pt-6 pb-8 mb-4 border z-10 border-slate-300 rounded-2xl py-5'
					>
						<h2
							className='text-gray-900 text-center text-2xl md:text-3xl mb-5
				 font-semibold'
						>
							Create Project
						</h2>
						<div className='mb-4'>
							<label
								htmlFor='project_name'
								className='block text-gray-700 text-sm font-bold mb-2'
							>
								Project Name
							</label>
							<input
								type='text'
								name='project_name'
								id='project_name'
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								placeholder='Enter project name'
							/>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='title'
								className='block text-gray-700 text-sm font-bold mb-2'
							>
								Title
							</label>
							<input
								type='text'
								name='title'
								id='title'
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								placeholder='Enter title'
							/>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='description'
								className='block text-gray-700 text-sm font-bold mb-2'
							>
								Description
							</label>
							<textarea
								id='description'
								name='description'
								rows='3'
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								placeholder='Enter description'
							></textarea>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='timeframe'
								className='block text-gray-700 text-sm font-bold mb-2'
							>
								Timeframe
							</label>
							<input
								type='text'
								name='timeframe'
								id='timeframe'
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								placeholder='Enter timeframe'
							/>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='timeframe'
								className='block text-gray-700 text-sm font-bold mb-2 flex-left'
							>
								Project Thumbnail
							</label>
							<label
								for='dropzone-file'
								className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:text-accent  hover:bg-accent/10 '
							>
								<div className='flex flex-col text-gray-500  hover:text-accent items-center justify-center pt-5 pb-6'>
									<svg
										className='w-8 h-8 mb-4 '
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 20 16'
									>
										<path
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
										/>
									</svg>
									<p className='mb-2 text-sm  '>
										<span className='font-semibold'>Click to upload</span> or
										drag and drop
									</p>
									<p className='text-xs  '>
										SVG, PNG, JPG or GIF (MAX. 800x400px)
									</p>
								</div>
								<input
									id='dropzone-file'
									type='file'
									className='hidden'
								/>
							</label>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='project_type'
								className='block text-gray-700 text-sm font-bold mb-2'
							>
								Project Type
							</label>
							<input
								type='text'
								name='project_type'
								id='project_type'
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								placeholder='Enter project type'
							/>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='required_personnel'
								className='block text-gray-700 text-sm font-bold mb-2'
							>
								Required Personnel
							</label>
							<input
								type='text'
								name='required_personnel'
								id='required_personnel'
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								placeholder='Enter required personnel'
							/>
						</div>
						<div className='flex items-center justify-between glass'>
							<button
								type='submit'
								className='w-full text-white bg-accent hover:bg-accent/75 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
							>
								Add Project
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
