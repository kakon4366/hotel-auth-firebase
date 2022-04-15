import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/User/Login/Login";
import Register from "./Pages/User/Register/Register";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
