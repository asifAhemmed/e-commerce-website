import { useState } from "react";
import { FaSearch, FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
    const user = {_id:"1",role:"admin"}
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const logOutHandler = () => {
        setIsOpen(false)
    }
    return (
        <nav className="header">
            <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
            <Link onClick={() => setIsOpen(false)} to="/search">
            <FaSearch/>
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/cart">
             <FaShoppingCart />
            </Link>
            {
                user?._id ? (
                     <>
                      <button onClick={() => setIsOpen((prev) => !prev)}>
                        <FaUser/>
                      </button>
                      <dialog open={isOpen}>
                        <div>
                            {user.role === "admin" && (
                                <Link to="/admin/dashboard">Admin</Link>
                            )}
                            <Link to="/orders">Orders</Link>
                            <button onClick={logOutHandler}>
                                <FaSignOutAlt/>
                            </button>
                        </div>
                      </dialog>
                     </>
                ):(
                    <Link to="/login">
                        <FaSignInAlt />
                    </Link>
                )
            }
        </nav>
    );
};

export default Header;