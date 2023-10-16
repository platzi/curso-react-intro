import React from "react";
import './Nadvar.css';

function Nadvar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://pbs.twimg.com/profile_images/1534067141519069184/AyYQAI1b_400x400.jpg" alt="Misael" width="40" height="40" className="rounded-custom"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> 
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand link" href="https://github.com/Misael-GC">GitHub</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link link" aria-current="page" href="https://misael-gomez-cuautle.super.site/">My Web</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link link" href="https://www.linkedin.com/in/misael-g%C3%B3mez-cuautle-5976491b9/">LinkedIn</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link link" aria-disabled="true" href="https://twitter.com/MisaelG51069440">Twitter</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link link" aria-disabled="true" href="https://misael-gc.github.io/introduccion-react/">Anterior versión</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export { Nadvar };