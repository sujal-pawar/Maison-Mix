import { useGSAP } from "@gsap/react"
import { navLinks } from "../../constants"
import gsap from "gsap"
import { useState } from "react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTween.fromTo('nav', {
            backgroundColor: 'transparent'
        }, {
            backgroundColor: '#00000050',
            backdropFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })
    })

    const leftLinks = navLinks.slice(0, 2)
    const rightLinks = navLinks.slice(2, 4)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 z-50 w-full">
            <div className="relative flex items-center justify-between lg:justify-between px-5 lg:px-10 py-4 container mx-auto">

                {/* LEFT LINKS - Desktop Only */}
                <ul className="hidden lg:flex items-center gap-6">
                    {leftLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className="hover:text-green-700 transition-colors duration-300">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CENTER LOGO */}
                <a id="logo" href="#" className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-0">
                    <h5 className="font-modern-negra text-3xl lg:text-4xl xl:text-5xl whitespace-nowrap">
                        Maison Mix
                    </h5>
                </a>

                {/* RIGHT LINKS - Desktop Only */}
                <ul className="hidden lg:flex items-center gap-6">
                    {rightLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className="hover:text-green-700 transition-colors duration-300">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* MOBILE MENU BUTTON */}
                <button 
                    className="lg:hidden flex flex-col gap-1 w-6 h-6 z-60 ml-auto"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>

                {/* MOBILE MENU OVERLAY */}
                <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 backdrop-blur-lg transition-all duration-300 lg:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        {navLinks.map((link, index) => (
                            <a 
                                key={link.id}
                                href={`#${link.id}`} 
                                className={`text-2xl font-medium hover:text-green-700 transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                                onClick={closeMenu}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
