import { Link } from 'react-router-dom';
import FormContainer from '../components/form/FormContainer';
import developer from '/developer.svg';
import organization from '/organization.svg';
import Skate from '/Run_Skate.png';

const Register = () => {
	return (
		<div>
			<FormContainer image={Skate}>
				<div className='flex flex-col w-full relative h-full py-6 items-center transition-transform gap-5 justify-center'>
					<Link
						className='flex flex-col text-xl hover:text-2xl transition items-center 
                         justify-center hover:bg-accent/5 hover:font-semibold rounded-lg'
						to={'/register/developer'}
					>
						<img
							src={developer}
							className=' w-full'
						/>
						<h1 className=' blue-gradient '>Developer</h1>
					</Link>
					<div className='border-b border-slate-300 w-full'> </div>
					<Link
						className='flex flex-col text-xl hover:text-2xl transition items-center 
                    justify-center hover:bg-accent/5 hover:font-semibold rounded-lg'
						to={'/register/company'}
					>
						<img
							src={organization}
							className=' w-full'
						/>
						<h1 className=' blue-gradient '>Organization</h1>
					</Link>
				</div>
			</FormContainer>
		</div>
	);
};

export default Register;
