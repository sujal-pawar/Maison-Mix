import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import { Github, Linkedin, Mail } from "lucide-react"
import gsap from 'gsap';

const Contact = () => {
 	useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',            
		 },
		 ease: "power1.inOut"
		})
	 
	timeline
		.from(titleSplit.words, {
			opacity: 0, yPercent: 100, stagger: 0.02
		})
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
		})
		.from('#f-right-leaf', {
			y: '100', duration: 1, ease: 'power1.inOut'
		})
		.from('#f-left-leaf', {
			y: '100', duration: 1, ease: 'power1.inOut'
		}, '<')
	})
 
 return (
	<footer id="contact">
	 <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
	 <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
	 
	 <div className="content">
		<h2>Where to Find Us</h2>

		
		<div>
		 <h3>Contact Us</h3>
		 <p>(999) 987-6543</p>
		 <p>hello@maisonmix.com</p>
		</div>
		
		<div>
		 <h3>Open Every Day</h3>
		 {openingHours.map((time) => (
			<p key={time.day}>
			 {time.day} : {time.time}
			</p>
		 ))}
		</div>
		
		<div>
		 <h3>Socials</h3>
		 
		 <div className="flex justify-center gap-5 p-2">
              <a href="mailto:sujalpawar00007@gmail.com" aria-label="Email" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/sujal-pawar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/sujal-pawar/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
		</div>
	 </div>
	</footer>
 )
}

export default Contact