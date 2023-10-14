import React from 'react';
import './Footer.css';
import { BsGithub, BsInstagram, BsLinkedin,  } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";


function Footer() {
  return (
    <footer >
        <section class="left">
            <ul>
                <li><a className='link-footer' href="https://www.linkedin.com/in/misael-g%C3%B3mez-cuautle-5976491b9/"> <BsLinkedin/> </a></li>
                <li><a className='link-footer' href="https://github.com/Misael-GC"> <BsGithub/> </a></li>
                <li><a className='link-footer' href="https://twitter.com/MisaelG51069440"> <RiTwitterXFill/></a></li>
                <li><a className='link-footer' href="https://www.instagram.com/misael.gmz.ctl/"> <BsInstagram/> </a></li>
            </ul>
        </section>
        <section class="right">
            <img  loading="lazy"  src="https://pbs.twimg.com/profile_images/1534067141519069184/AyYQAI1b_400x400.jpg" alt="Logo de Misael" width="40" height="40" className="rounded-custom"/>
        </section>
    </footer>
  )
}

export { Footer };
