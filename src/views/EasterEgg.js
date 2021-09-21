import React from 'react';
import { Link } from 'react-router-dom';
const EasterEgg = () => {
return (
        <div class= "easter-egg-avocado">
            <div class="nav">
                <Link to="/portfolio">
                    The best of Photograghy Quotes
                </Link>
            </div>
        Imogen Cunningham
        "Which of the photographs is my favorite? The one I'm going to take tomorrow"
            <div class="inner-avocado">
            Ansel Adams
            "There are no rules for good photographs there are only good photographs"
            </div> 
            Minor White
            "Photography is a language more universal than words"
            <div class="other-inner-inner avocado">
                Leon Levinstein
                "I walk. I look. I see. I stop. I photograph"
                </div> 
                <div class="other inner-inner avocado"> 
                    Destin Sparks
                    "Photography is the story I fail to put into words"
    </div>
    <div class="img-butterfly"></div>
            </div> 
    
    )
};

export default EasterEgg;