import { Link } from 'react-router-dom';

export const Navigation = () => {
	return (
		<nav>
			<Link to='/'>Image</Link>
			<Link to='/about'>About</Link>
		</nav>
	);
};
