import React from 'react';
import './Footer.css';
import { BsGithub, BsInstagram, BsLinkedin,  } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";


function Footer() {
  return (
    <footer >
        <section className="left">
            <ul>
                <li><a className='link-footer' href="https://www.linkedin.com/in/misael-g%C3%B3mez-cuautle-5976491b9/"> <BsLinkedin/> </a></li>
                <li><a className='link-footer' href="https://github.com/Misael-GC"> <BsGithub/> </a></li>
                <li><a className='link-footer' href="https://twitter.com/MisaelG51069440"> <RiTwitterXFill/></a></li>
                <li><a className='link-footer' href="https://www.instagram.com/misael.gmz.ctl/"> <BsInstagram/> </a></li>
            </ul>
        </section>
        <section className="right">
            <img  loading="lazy"  src="https://scontent.fpbc2-6.fna.fbcdn.net/v/t39.30808-1/548457985_648398208324643_6500843107420245253_n.jpg?stp=dst-jpg_tt6&cstp=mx979x979&ctp=s200x200&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGIBMXPtQrVEjxqcxjTYfWU7JwhcV7NRkPsnCFxXs1GQ-SaaON11Pr7FXjtRvpl2Ro4Cl-tnvKMmaNX85cxvu5u&_nc_ohc=gcujbIUpvPIQ7kNvwFS0T_9&_nc_oc=AdrepFcDjpVilsX7PhJgCpB4ft5QDG0ZRf3Uv7if0XjiRUNgDqgeVcCXFYEqIxQQ1WPWp7tc6Bj8fz9lzR8gh6Ee&_nc_zt=24&_nc_ht=scontent.fpbc2-6.fna&_nc_gid=RXeJaVpmR-4xYpZZf82Iyg&_nc_ss=7b2a8&oh=00_AQD-3OPRSHC9xrBWutHDFQnmtwbkcAGKhtQto1vRIwUaBQ&oe=6A6A0999" alt="Logo de Misael" width="40" height="40" className="rounded-custom"/>
        </section>
    </footer>
  )
}

export { Footer };
