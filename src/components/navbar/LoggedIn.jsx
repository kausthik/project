import { Link } from 'react-router-dom';
import DeveloperPic from '../image/DeveloperPic';

const LoggedIn = () => {
	return (
		<>
			<Link
				to={`/developers/:name`}
				className='hidden md:flex px-4 py-1.5 rounded-full items-center relative shadow shadow-accent/50 border border-accent/25'
			>
				<h1>Profile</h1>
				<DeveloperPic style='h-8 ml-2' />
			</Link>
		</>
	);
};

export default LoggedIn;
