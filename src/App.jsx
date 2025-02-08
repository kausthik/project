import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import CompanyListings from './modules/CompanyListings';
import DevelopersListing from './modules/DevelopersListing';
import ProjectListings from './modules/ProjectListings';
import CompanyMain from './modules/CompanyMain';
import ProjectMain from './modules/ProjectMain';
import DeveloperMain from './modules/DeveloperMain';
import Login from './modules/Login';
import Register from './modules/Register';
import RegisterDeveloper from './modules/RegisterDeveloper';
import RegisterOrganization from './modules/RegisterOrganization';
import AboutUs from './modules/AboutUs'
import ProjectAdd from './modules/ProjectAdd';

import { DevLogin } from './components/form/login/DevLogin';
import { OrgLogin } from './components/form/login/OrgLogin';

function App() {
	return (
		<>
			<Header />
			<div className='pt-20'>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/projects'
						element={<ProjectListings />}
					/>
					<Route
						path='/projects/create'
						element={<ProjectAdd />}
					/>
					<Route
						path='/aboutus'
						element={<AboutUs/>}
					/>
					<Route
						path='/projects/:uid'
						element={<ProjectMain />}
					/>
					<Route
						path='/companies'
						element={<CompanyListings />}
					/>
					<Route
						path='/companies/:uid'
						element={<CompanyMain />}
					/>
					<Route
						path='/developers'
						element={<DevelopersListing />}
					/>
					<Route
						path='/developers/:uid'
						element={<DeveloperMain />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/login/developer'
						element={<DevLogin />}
					/>
					<Route
						path='/login/company'
						element={<OrgLogin />}
					/>
					<Route
						path='/register'
						element={<Register />}
					/>
					<Route
						path='/register/developer'
						element={<RegisterDeveloper />}
					/>
					<Route
						path='/register/company'
						element={<RegisterOrganization />}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
