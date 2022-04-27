import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardSummery from "./DashboardSummery";
import About from "./Pages/About/About";
import AddService from "./Pages/Dashboard/AddService/AddService";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ShowServicesList from "./Pages/Dashboard/ShowServicesList/ShowServicesList";
import Home from "./Pages/Home/Home";
import Hotels from "./Pages/Hotels/Hotels";
import NotFound from "./Pages/NotFound/NotFound";
import Services from "./Pages/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/User/Login/Login";
import Register from "./Pages/User/Register/Register";
import RequireAuth from "./Pages/User/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/services" element={<Services />}></Route>
				<Route path="/hotels" element={<Hotels />}></Route>
				<Route
					path="/dashboard"
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}
				>
					<Route path="dashboard-summery" element={<DashboardSummery />} />
					<Route path="add-service" element={<AddService />} />
					<Route path="service-list" element={<ShowServicesList />} />
				</Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
			<Footer></Footer>
			<ToastContainer></ToastContainer>
		</div>
	);
}

export default App;
