import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to={'/'}>Home</Link>
				</li>
				<li>
					<Link to={'/pokedex/national'}>National Pokedex</Link>
				</li>
				<li>
					<Link to={'/pokemon/425'}>Drifloon</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav;