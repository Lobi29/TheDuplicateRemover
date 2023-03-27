import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>  
                <h3>The Duplicate Remover</h3>
            </Link>
        </nav>
    );
}

export default Navbar;