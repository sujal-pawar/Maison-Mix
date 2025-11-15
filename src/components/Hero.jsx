import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'
import { useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const videoRef = useRef();
    const videoContainerRef = useRef();
    const isMobile = useMediaQuery  ({maxWidth:767})

    useGSAP(() => {
        // text animation defination
        const heroSplit = new SplitText('.title', { type: 'chars words' });
        const paraSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => {
            char.classList.add('text-gradient')
        })
        gsap.from(heroSplit.chars, {
            y: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        });
        gsap.from(paraSplit.lines, {
            opacity: 0,
            y: 100,
            duration: 1.8,
            stagger: 0.06,
            ease: 'expo.out',
            delay: 1
        });

        // Leaf animations
        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        }).to('.right-leaf', {y: 200}, 0).to('.left-leaf', {y: -200}, 0)    

        const startValue = isMobile?'top 60%':'center 60%';
        const endValue = isMobile?'120% top':'bottom top';
        // Video scroll animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true, // Smooth scrubbing
                pin: true,        
                duration:4        
            }
        });
        
        videoRef.current.onloadedmetadata=() =>{
            tl.to(videoRef.current,{
                currentTime:videoRef.current.duration
            })
        }        
        
        // Additional video effects for mobile
        if (isMobile) {
            tl.to(videoRef.current, {
                x: 0,
                ease: 'none',     
                pin:true
            }, 0);
        }

        
    }, [])
    return (
        <>
        <section id='hero' className=''>
            
            <h1 className='title'> MOJITO</h1>
            <img src="/images/hero-left-leaf.png" alt="left-leaf"
                className='left-leaf' />
            <img src="/images/hero-right-leaf.png" alt="right-leaf"
                className='right-leaf' />
            <div className='body'>
                <div className='content'>
                    <div className='space-y-5 text-center hidden md:block'>
                        <p>Cool. Crisp. Classic</p>
                        <p className='subtitle'>
                            Sip the Spirit <br /> with break of summer
                        </p>
                    </div>
                    <div className='view-cocktails'>
                        <p className='subtitle'>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. </p>
                        <a href="#coctails">View Coctails</a>
                    </div>
                </div>
            </div>
        </section>

        {/* Command for the formating of video for smooth animation it does not runs here run it in terminal by going into the directory where video exist */}
        {/* ffmpeg -i input.mp4 -vf scale=1280:-1 -vcodec libx264 -crf 18 -preset veryfast -g 1 -movflags faststart -pix_fmt yuv420p -an output_gsap.mp4 */}

        <div className='video absolute inset-0' ref={videoContainerRef}>
            <video 
                src="/videos/output_gsap.mp4" 
                muted 
                playsInline 
                preload='auto'                 
                ref={videoRef}
            ></video>
        </div>
        </>
    )
}

export default Hero
