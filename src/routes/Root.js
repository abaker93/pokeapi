import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Root = () => {
	return (
		<>
			<Nav />
			<Outlet />
		</>
	)
}

export default Root;