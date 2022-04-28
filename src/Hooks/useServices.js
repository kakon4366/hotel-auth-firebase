import { useEffect, useState } from "react";

const useServices = () => {
	const [rooms, setrooms] = useState([]);

	useEffect(() => {
		fetch("https://calm-tor-81190.herokuapp.com/service")
			.then((res) => res.json())
			.then((data) => setrooms(data));
	}, []);

	return [rooms, setrooms];
};

export default useServices;
