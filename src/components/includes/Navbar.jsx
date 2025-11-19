import "../../styles/Navbar.css";
import { useEffect } from "react";
import useNavDropdown from "../../hooks/useNavDropdown.js";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    useNavDropdown();

  useEffect(() => {
        // Scroll Progress Bar
        const progressBar = document.querySelector('.progress-bar');

        const updateScrollBar = () => {
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollTop = document.documentElement.scrollTop;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;

            if(progressBar) {
                progressBar.style.width = `${scrollPercentage}%`;
            }
        }

        window.addEventListener('scroll', updateScrollBar)


    // clean the function after finished (unmount)
    return () => {
        window.removeEventListener('scroll', updateScrollBar)
    }
    }, []);


  return (
    <>
    <header className="header">
        <nav className="nav container">
            <div className="nav__data">
                <Link to="/#hero" className="nav__logo">
                    <span className="logo">
                        <img src={logo} alt="logo" />
                    </span>HigherCareer
                </Link>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-menu-line nav__toggle-menu"></i>
                    <i className="ri-close-line nav__toggle-close"></i>
                </div>
            </div>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li>
                        <Link to="/" className="nav__link">Home</Link>
                    </li>

                    <li className="dropdown__item">
                        <div className="nav__link dropdown__button">
                            Admission <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                        </div>

                        <div className="dropdown__container">
                            <div className="dropdown__content">
                                <div className="dropdown__group">
                                    <div className="dropdown__icon">
                                        <i className="ri-flashlight-line"></i>
                                    </div>

                                    <span className="dropdown__title">How to join</span>

                                    <ul className="dropdown__list">
                                        <li>
                                            <a className="dropdown__link" href="/download/Nursery_Joining_Instructions_2026.pdf" download>
                                                Download Nursery Joining Instruction
                                            </a>
                                        </li>

                                        <li>
                                            <a className="dropdown__link" href="/download/Primary_Joining_Instructions_2026.pdf" download>
                                                Download Primary Joining Instruction
                                            </a>
                                        </li>

                                    </ul>
                                </div>

                                <div className="dropdown__group">
                                    <div className="dropdown__icon">
                                        <i className="ri-coins-line"></i>
                                    </div>

                                    <span className="dropdown__title">Tuition and Fees</span>

                                    <ul className="dropdown__list">
                                        <li>
                                            <Link to="/nursery-fees" className="dropdown__link">Nursery Tuition and fees</Link>
                                        </li>

                                        <li>
                                            <Link to="/primary-fees" className="dropdown__link">Primary Tuition and fees</Link>
                                        </li>

                                    </ul>
                                </div>

                                <div className="dropdown__group">
                                    <div className="dropdown__icon">
                                        <i className="ri-flag-line"></i>

                                    </div>

                                    <span className="dropdown__title">Core Values</span>

                                    <ul className="dropdown__list">
                                        <li>
                                            <Link to="/vision" className="dropdown__link">Our Mission and vision</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <Link to="https://accounts.highercareer.academy" className="nav__link">Accounts</Link>
                    </li>

                    <li>
                        <Link to="/faq" className="nav__link">FAQs</Link>
                    </li>

                    <li className="dropdown__item">
                        <div className="nav__link dropdown__button">
                            Support <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                        </div>

                        <div className="dropdown__container">
                            <div className="dropdown__content">
                                <div className="dropdown__group">
                                    <div className="dropdown__icon">
                                        <i className="ri-community-line"></i>
                                    </div>

                                    <span className="dropdown__title">About us</span>

                                    <ul className="dropdown__list">
                                        <li>
                                            <Link to="/about-us" className="dropdown__link">About us</Link>
                                        </li>

                                        <li>
                                            <Link to="/#contact-section" className="dropdown__link">Contact us</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown__group">
                                    <div className="dropdown__icon">
                                        <i className="ri-shield-line"></i>
                                    </div>

                                    <span className="dropdown__title">Safety and quality</span>

                                    <ul className="dropdown__list">
                                        <li>
                                            <Link to="/terms" className="dropdown__link">Terms and Condition</Link>
                                        </li>

                                        <li>
                                            <Link to="/privacy-policy" className="dropdown__link">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="progress-bar"></div>

    </header>
    <div className="space"></div>


    </>
  )
}

export default Navbar