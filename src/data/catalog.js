//pink cyclop
import pinkyCyclop_1 from '../assets/video/Pinky_Common_1.mp4';
import pinkyCyclop_2 from '../assets/video/Pinky_Common_2.mp4';
import pinkyCyclop_3 from '../assets/video/Pinky_Uncommon_1.mp4';
import pinkyCyclop_4 from '../assets/video/Pinky_Uncommon_2.mp4';
import pinkyCyclop_5 from '../assets/video/Pinky_Rare.mp4';
import pinkyCyclop_6 from '../assets/video/Pinky_Epic.mp4';
import pinkyCyclop_7 from '../assets/video/Pinky_Special.mp4';
import pinkyCyclop_8 from '../assets/video/Pinky_Legendary.mp4';


//green cyclop
import jungleCyclop_1 from '../assets/video/JungleCyclop_Common_01.mp4';
import jungleCyclop_2 from '../assets/video/JungleCyclop_Common_02.mp4';
import jungleCyclop_3 from '../assets/video/JungleCyclop_Uncommon_01.mp4';
import jungleCyclop_4 from '../assets/video/JungleCyclop_Uncommon_02.mp4';
import jungleCyclop_5 from '../assets/video/JungleCyclop_Rare_01.mp4';
import jungleCyclop_6 from '../assets/video/JungleCyclop_Epic_01.mp4';
import jungleCyclop_7 from '../assets/video/JungleCyclop_Special_01.mp4';
import jungleCyclop_8 from '../assets/video/JungleCyclop_Legendary_01.mp4';


//blue cyclop


//purple cyclop



//corny cyclop



const catalogList = [
    {
        title: "Pinky Cyclop Common 1",
        video: pinkyCyclop_1,
        catalogSlug: "pinky-cyclop",
        rare: "common",
        colors: "green",
        slug: "pinky-cyclop-common-1",
        
    },
    {
        title: "Pinky Cyclop Common 2",
        video: pinkyCyclop_2,
        catalogSlug: "pinky-cyclop",
        rare: "common",
        colors: "pink",
        slug: "pinky-cyclop-common-2",
        
        
    },
    {
        title: "Pinky Cyclop Uncommon 1",
        video: pinkyCyclop_3,
        catalogSlug: "pinky-cyclop",
        rare: "uncommon",
        colors: "pink",
        slug: "pinky-cyclop-uncommon-1",
        
        
    },
    {
        title: "Pinky Cyclop Uncommon 2",
        video: pinkyCyclop_4,
        catalogSlug: "pinky-cyclop",
        rare: "uncommon",
        colors: "pink",
        slug: "pinky-cyclop-uncommon-2",
       
        
    },
    {
        title: "Pinky Cyclop Rare",
        video: pinkyCyclop_5,
        catalogSlug: "pinky-cyclop",
        rare: "rare",
        colors: "pink",
        slug: "pinky-cyclop-rare",
        
    },
    {
        title: "Pinky Cyclop Epic",
        video: pinkyCyclop_6,
        catalogSlug: "pinky-cyclop",
        rare: "epic",
        colors: "pink",
        slug: "pinky-cyclop-epic",
        
        
    },
    {
        title: "Pinky Cyclop Special",
        video: pinkyCyclop_7,
        catalogSlug: "pinky-cyclop",
        rare: "special",
        colors: "pink",
        slug: "pinky-cyclop-special"
        
        
    },
    {
        title: "Pinky Cyclop Legendary",
        video: pinkyCyclop_8,
        catalogSlug: "pinky-cyclop",
        rare: "legendary",
        colors: "pink",
        slug: "pinky-cyclop-legendary"  
    },

    //green
    {
        title: "Jungle Cyclop Common 1",
        video: jungleCyclop_1,
        catalogSlug: "jungle-cyclop",
        rare: "common",
        colors: "green",
        slug: "jungle-cyclop-common-01"  
    },
    {
        title: "Jungle Cyclop Common 2",
        video: jungleCyclop_2,
        catalogSlug: "jungle-cyclop",
        rare: "common",
        colors: "green",
        slug: "jungle-cyclop-common-02"  
    },
    {
        title: "Jungle Cyclop Uncommon 1",
        video: jungleCyclop_3,
        catalogSlug: "jungle-cyclop",
        rare: "uncommon",
        colors: "green",
        slug: "jungle-cyclop-uncommon-01"  
    },
    {
        title: "Jungle Cyclop Uncommon 2",
        video: jungleCyclop_4,
        catalogSlug: "jungle-cyclop",
        rare: "uncommon",
        colors: "green",
        slug: "jungle-cyclop-uncommon-02"  
    },
    {
        title: "Jungle Cyclop Rare",
        video: jungleCyclop_5,
        catalogSlug: "jungle-cyclop",
        rare: "rare",
        colors: "green",
        slug: "jungle-cyclop-rare-01"  
    },
    {
        title: "Jungle Cyclop Epic",
        video: jungleCyclop_6,
        catalogSlug: "jungle-cyclop",
        rare: "epic",
        colors: "green",
        slug: "jungle-cyclop-epic-01"  
    },
    {
        title: "Jungle Cyclop Spical",
        video: jungleCyclop_7,
        catalogSlug: "jungle-cyclop",
        rare: "special",
        colors: "green",
        slug: "jungle-cyclop-special-01"  
    },
    {
        title: "Jungle Cyclop Legendary",
        video: jungleCyclop_8,
        catalogSlug: "jungle-cyclop",
        rare: "legendary",
        colors: "rainbow",
        slug: "jungle-cyclop-legendary-01"  
    },

]

const getAllCatalogs = () => catalogList

const catalogData = {
    getAllCatalogs
}

export default catalogData