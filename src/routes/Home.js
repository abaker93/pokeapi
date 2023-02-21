import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<h1 style={{ marginTop: 70 }}>Home</h1>
			<Link to="/pokedex/national">National Dex</Link>
			<Link to="/pokemon/0425">Drifloon</Link>
			<Link to="/pokemon/0666">asdf</Link>
		</>
	)
}

export default Home;