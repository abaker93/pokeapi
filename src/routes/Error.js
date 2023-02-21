import Nav from "../components/Nav";
import { Alert } from "@mui/material";

const Error = () => {
	return (
		<>
			<Nav />
			<Alert severity="error" sx={{ marginTop: 10 }}>
				Oh no the pokemon ran away.
			</Alert>
		</>
	)
}

export default Error;