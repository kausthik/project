import React from 'react';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<>
			<div className='flex flex-col w-full justify-center'>
				<Hero />
				<Featured />
			</div>
			<Footer />
		</>
	);
};

export default Home;
