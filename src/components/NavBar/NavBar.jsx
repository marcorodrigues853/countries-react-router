import { Link } from 'react-router';
import Button from '../Button/Button';
import CurrencyCard from '../CurrencyCard';
import NavBarItem from './NavBarItem';

function NavBar() {
    return (
        <nav style={{ listStyle: 'none' }}>
            <Link to="/">
                <NavBarItem>
                    <Button variant="info">Home</Button>
                </NavBarItem>
            </Link>

            <Link to="/continents">
                <NavBarItem>
                    <Button variant="info">Continents</Button>
                </NavBarItem>
            </Link>

            <Link to="/currecnies">
                <NavBarItem>
                    <Button variant="info">Currencies</Button>
                </NavBarItem>
            </Link>

            <li>
                <Button size="small" variant="diferente">
                    call us
                </Button>
            </li>
        </nav>
    );
}

export default NavBar;
