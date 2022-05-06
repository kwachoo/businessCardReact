import React from 'react'

function Info() {
    return(
        <div className="info--box">
            <h1>Łukasz Kwasiński</h1>
            <h3>Frontend Developer</h3>
            <p className="info--web">lk-design.pl</p>
            <div className="info--button">
                <a href="mailto:lukasz@lk-desing.pl" className="button">E-Mail</a>
                <a href="mailto:lukasz@lk-desing.pl" className="button--linkedin">Linkedin</a>
            </div>
        </div>
    )
}

export default Info;