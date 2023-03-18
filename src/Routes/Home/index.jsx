import React from "react";
import "./Home.css";

export const Home = () => {
    return(
        <section className="home section">
            <div className="home__container container grid">
                <div className="title__container">
                    <h2 className="home__title"><span id="title__imagined">Imagined</span> Transformations</h2>
                </div>
                <p className="home__name">Catherine Davies</p>
                <div className="home__content">
                    <p>
                        Imagined Transformations is here <br /> to help you, step by step, to achieve <br /> the best version of yourself.
                    </p>
                    <p>
                        Find your new empowered self <br/> and eliminate the negative thoughts and feelings that hold you back.                    
                    </p>
                    <p>
                        With my help you achieve more than ever before.
                    </p>
                </div>
            </div>
        </section>
    )
};
