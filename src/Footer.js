import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
        <section class="left">
            <ul>
                <li><a href="https://www.linkedin.com/in/misael-g%C3%B3mez-cuautle-5976491b9/">LinkedIn</a></li>
                <li><a href="https://github.com/Misael-GC">Github</a></li>
                <li><a href="https://twitter.com/MisaelG51069440">Twitter</a></li>
            </ul>
        </section>
        <section class="right">
            <img  loading="lazy"  src="https://pbs.twimg.com/profile_images/1534067141519069184/AyYQAI1b_400x400.jpg" alt="Logo de Misael" width="40" height="40" className="rounded-custom"/>
        </section>
    </footer>
  )
}

export { Footer };
