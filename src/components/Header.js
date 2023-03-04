
import logo from '../images/rickandmorty.png'


function Header() {
    return (
        <div class="container-header">
            <img src={logo} className="logo" alt="logo" />
        </div>
    );
}

export default Header;
