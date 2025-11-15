import { useGSAP } from "@gsap/react"
import { navLinks } from "../../constants"
import gsap from "gsap"

const Navbar = () => {
    
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

    return (
        <div className="w-full top-0 left-0 z-50">
            <div className="flex items-center justify-between px-10 py-4">

                {/* LEFT LINKS */}
                <ul className="flex items-center gap-6">
                    {leftLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className="hover:text-gray-300 transition">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CENTER LOGO */}
                <a id="logo" href="" className="flex items-center gap-2 text-xl font-semibold">
                    <h5 className="font-bold text-5xl maison-font glow-text">
                        Maison Mix
                    </h5>
                </a>

                {/* RIGHT LINKS */}
                <ul className="flex items-center gap-6">
                    {rightLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className="hover:text-gray-300 transition">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Navbar
