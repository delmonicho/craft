import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div class="header-bar">

                <NavLink to="/">home</NavLink>
                <NavLink to="/topics">topics</NavLink>
                <NavLink to="/missions">mission log</NavLink>
        </div>
    );
}

export default Header;