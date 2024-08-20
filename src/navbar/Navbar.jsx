import { CartWidget } from "./components/CartWidget"



export const Navbar = () => {
    return <>
        <nav className="navbar">
            <h2>NC Clohes</h2>
            <ul className="links">

                <li><a href="#">Home</a></li>
                <li><a href="#">Remeras</a></li>
                <li><a href="#">Buzos y camperas</a></li>
                <li><a href="#">Pantalones</a></li>
            </ul>
            <CartWidget />
        </nav>
    </>
}