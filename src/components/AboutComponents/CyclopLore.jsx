import React from 'react'


import PinkyCyclop from '../../assets/image/Lore_Pinky.png';
import JungleCyclop from '../../assets/image/Lore_Jungle.png';
import DeepseaCyclop from '../../assets/image/Lore_DeepSea.png';
import CornyCyclop from '../../assets/image/Lore_Corny.png';
import ToxicCyclop from '../../assets/image/Lore_Toxic.png';

import SpaceCyclopLogo from '../../assets/image/SpaceCyclop.png';

import Button from './../Common/Button';

const CyclopLore = () => {
  return (
    <div className="lore">
        <div className="lore-container bg-pinky">
            <div className="container">
                <div className="lore-box">
                    <div className="lore-box__image">
                        <img src={PinkyCyclop} alt="PinkyCyclop" />
                    </div>
                    <div className="lore-box__content">
                        <p>
                            Pinky got its name from when it first arrived on Earth. It crash landed in the vibrant pink-hued neon of a red-light district. Space Cyclop's camouflage themselves to blend in, so what better color than hot-blush for such a seedy place?
                        </p>
                        <p>For reasons unknown, Pinky hates crabs (of the aquatic kind), but no one quite knows why.</p>
                        <p>
                            It usually spends its time these days as a hardworking mascot, doing what it can to help out at X-Plus.
                        </p>
                        <div className="lore-box__content__form">
                            <Button value='View Anatomy' styleClass='btn-primary-dm'/>
                            <div className="lore-box__content__form__logo">
                                <img src={SpaceCyclopLogo} alt="SpaceCyclopLogo" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>

        <div className="lore-container bg-jungle">
            <div className="container">
                <div className="lore-box">
                   
                    <div className="lore-box__content">
                        <p>
                            Having landed in a particularly lush jungle, it adopted the name for itself, along with the protective, natural camouflage.
                        </p>

                        <p>
                            While a bit of a show off, it does so in good cheer and is always kind to others.
                        </p>
                        <p>
                            Having landed in a jungle when it first arrived, it is most certainly an adventurous, outdoors-y type, and is particularly comfortable when camping alone.
                        </p>
                        <div className="lore-box__content__form">
                            <Button value='View Anatomy' styleClass='btn-primary-dm'/>
                            <div className="lore-box__content__form__logo">
                                <img src={SpaceCyclopLogo} alt="SpaceCyclopLogo" />
                            </div>
                        </div>
                    </div>
                    <div className="lore-box__image">
                        <img src={JungleCyclop} alt="JungleCyclop" />
                    </div>
                </div>  
            </div>
        </div>

        <div className="lore-container bg-deepsea">
            <div className="container">
                <div className="lore-box">
                    <div className="lore-box__image">
                        <img src={DeepseaCyclop} alt="DeepseaCyclop" />
                    </div>
                    <div className="lore-box__content">
                        <p>
                            An ocean blue-colored Cyclop that landed in the Okinawan sea.
                        </p>
                        <p>A nature lover, while it is somewhat slow-paced and introverted, it is earnest, firm and very reliable.</p>
                        <p>
                        Its favorite food is pineapple flavored chinsuko, an Okinawan shortbread. It secretly dreams of appearing in a monster movie.
                        </p>
                        <div className="lore-box__content__form">
                            <Button value='View Anatomy' styleClass='btn-primary-dm'/>
                            <div className="lore-box__content__form__logo">
                                <img src={SpaceCyclopLogo} alt="SpaceCyclopLogo" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>

        <div className="lore-container bg-corny">
            <div className="container">
                <div className="lore-box">
                   
                    <div className="lore-box__content">
                        <p>
                            Corny got its particular coloration from when it flew into a cornfield in Hokkaido and ate as much of the delicious crop as it could.
                        </p>
                        <p> 
                            Corny longed for the city and eventually found itself in Osaka. The city was so noisy that its eyes turned into a menacing stare to ward off any obnoxious people. A shame that its eyes lost its beautiful blue tones.</p>
                        <p>
                            A bit of a fashionista, Corny wishes that it could open a store in Ame-mura, a bustling American themed shopping hub of Osaka.
                        </p>
                        <div className="lore-box__content__form">
                            <Button value='View Anatomy' styleClass='btn-primary-dm'/>
                            <div className="lore-box__content__form__logo">
                                <img src={SpaceCyclopLogo} alt="SpaceCyclopLogo" />
                            </div>
                        </div>
                    </div>
                    <div className="lore-box__image">
                        <img src={CornyCyclop} alt="CornyCyclop" />
                    </div>
                </div>  
            </div>
        </div>

        <div className="lore-container bg-toxic">
            <div className="container">
                <div className="lore-box">
                    <div className="lore-box__image">
                        <img src={ToxicCyclop} alt="ToxicCyclop" />
                    </div>
                    <div className="lore-box__content">
                        <p>
                            Toxic fell into some hazardous waste when it first arrived on Earth. The goop ended up turning Toxic a rich purple color, like the waste it was dunked in.
                        </p>
                        <p>
                            While maybe unrelated (or not given the name), this Cyclop has a very brash and outspoken temperament. On top of that, it loves video games, particularly competitive FPS ones.
                        </p>
                        <p>
                            Jungle regularly invites Toxic to go camping, but Toxic doesn’t really enjoy all that nature stuff.
                        </p>
                        <div className="lore-box__content__form">
                            <Button value='View Anatomy' styleClass='btn-primary-dm'/>
                            <div className="lore-box__content__form__logo">
                                <img src={SpaceCyclopLogo} alt="SpaceCyclopLogo" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default CyclopLore