import { createElement, useEffect, useState } from "react";
import {
    FiCode,
    FiCoffee,
    FiGlobe,
    FiLifeBuoy,
    FiMail,
    FiMenu,
    FiX,
} from "react-icons/fi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiPatreon } from "react-icons/si";
import About from "./components/about";
import BookReadingList from "./components/bookReadingList";
import ScrollToTopButton from "./components/scrollToTopButton";
import { Styled } from "./styled";

const footerLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FiCode },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedinIn },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebookF },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiLifeBuoy },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: SiPatreon },
];

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <Styled.App>
            <Styled.Header>
                <Styled.Brand as="a" href={import.meta.env.BASE_URL} aria-label="Book Reading List home">
                    <Styled.Logo
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="Book Reading List logo"
                    />
                    <span>Book Reading List</span>
                </Styled.Brand>

                <Styled.Nav $open={menuOpen} aria-label="Main navigation">
                    <Styled.NavLink as="a" href="#reading-list" onClick={() => setMenuOpen(false)}>
                        Reading list
                    </Styled.NavLink>
                    <Styled.NavLink as="a" href="#about" onClick={() => setMenuOpen(false)}>
                        About
                    </Styled.NavLink>
                </Styled.Nav>

                <Styled.Actions>
                    <Styled.MenuButton
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                    </Styled.MenuButton>
                </Styled.Actions>
            </Styled.Header>

            <Styled.Content>
                <div id="reading-list">
                    <BookReadingList />
                </div>
                <div id="about">
                    <About />
                </div>
            </Styled.Content>

            <Styled.Footer>
                <Styled.FooterMain>
                    <div className="copyright">
                        Copyright &copy; {new Date().getFullYear()} {" "}
                        <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                            Ashish Ranjan
                        </a>
                    </div>
                    <nav className="links" aria-label="Footer links">
                        {footerLinks.map(({ label, href, icon }) => {
                            const iconElement = createElement(icon, { "aria-hidden": true });
                            const external = !href.startsWith("mailto:");
                            return (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    title={label}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noopener noreferrer" : undefined}
                                >
                                    {iconElement}
                                </a>
                            );
                        })}
                    </nav>
                </Styled.FooterMain>
            </Styled.Footer>

            <ScrollToTopButton />
        </Styled.App>
    );
}
