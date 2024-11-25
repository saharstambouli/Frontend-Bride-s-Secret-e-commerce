import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import Badge from "@mui/material/Badge";
import DropDown from '../Dropdown/index';

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const { wishList } = useSelector((state) => state.wishList);
  const { UserName, isAuthenticated } = useSelector((state) => state.user);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Vérifier la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1210);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Vérifier au montage du composant
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    if (isMobileView) {
      setMobileMenuOpen(!mobileMenuOpen);
      document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden";
    }
  };

  const toggleShopDropdown = () => {
    setShopDropdownOpen(!shopDropdownOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="navBar">
        <div className="logoLinkContainer">
          <div className="logoContainer">
            <Link to="/" onClick={scrollToTop}>
              <img src={logo} alt="Logo" style={{ height: '70px' }} />
            </Link>
          </div>
          <div className="linkContainer">
            <ul>
              <li>
                <Link to="/" onClick={scrollToTop}>HOME</Link>
              </li>
              <li
                className="dropdown"
                onMouseEnter={toggleShopDropdown}
                onMouseLeave={toggleShopDropdown}
              >
                <span className="dropdown-btn">SHOP</span>
                {shopDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><Link to="/collection-for-rent" onClick={scrollToTop}>Collection for Rent</Link></li>
                    <li><Link to="/collection-for-sale" onClick={scrollToTop}>Collection for Sale</Link></li>
                  </ul>
                )}
              </li>
              <li><Link to="/blog" onClick={scrollToTop}>BLOG</Link></li>
              <li><Link to="/about" onClick={scrollToTop}>ABOUT</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>CONTACT</Link></li>
            </ul>
          </div>
        </div>
        <div className="iconContainer">
          <FiSearch size={22} onClick={scrollToTop} />
          <div>
            {!isAuthenticated ? (
              <Link to="/loginSignUp">
                <FaRegUser />
                <p>My Account</p>
              </Link>
            ) : (
              <DropDown UserName={UserName} />
            )}
          </div>
          <Link to="/cart" onClick={scrollToTop}>
            <Badge color="primary">
              <RiShoppingBagLine size={22} />
              {cart.length > 0 && <span className="wishlist-count">{cart.length}</span>}
            </Badge>
          </Link>
          <Link to="/wishlist" onClick={scrollToTop}>
            <FiHeart size={22} />
            {wishList.length > 0 && <span className="wishlist-count">{wishList.length}</span>}
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileView && (
        <nav className="mobile-nav">
          {mobileMenuOpen ? (
            <MdOutlineClose size={22} onClick={toggleMobileMenu} />
          ) : (
            <RiMenu2Line size={22} onClick={toggleMobileMenu} />
          )}
          <Link to="/cart">
            <Badge color="primary">
              <RiShoppingBagLine size={22} />
            </Badge>
          </Link>
        </nav>
      )}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMobileMenu}>HOME</Link></li>
          <li><Link to="/shop" onClick={toggleMobileMenu}>SHOP</Link></li>
          <li><Link to="/blog" onClick={toggleMobileMenu}>BLOG</Link></li>
          <li><Link to="/about" onClick={toggleMobileMenu}>ABOUT</Link></li>
          <li><Link to="/contact" onClick={toggleMobileMenu}>CONTACT</Link></li>
        </ul>
        {!isAuthenticated ? (
          <Link to="/loginSignUp" onClick={toggleMobileMenu}>
            <FaRegUser />
            <p>My Account</p>
          </Link>
        ) : (
          <DropDown UserName={UserName} />
        )}
      </div>
    </>
  );
};

export default Navbar;
