import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div class="header-bar">

                <NavLink to="/">Home</NavLink>
                <NavLink to="/topics">Topics</NavLink>

        </div>
    );
}

export default Header;