import React from 'react';

import Banner from '../components/HomeComponents/Banner';
import Content from '../components/HomeComponents/Content';
import ContentBannerA from '../components/HomeComponents/ContentBannerA';
import ContentBannerB from '../components/HomeComponents/ContentBannerB';
import ContentBannerC from '../components/HomeComponents/ContentBannerC';
import policy from '../data/policy';
import PolicyCard from '../components/HomeComponents/PolicyCard';
import ContentBannerD from '../components/HomeComponents/ContentBannerD';

import Categories from '../components/HomeComponents/Categories';
import Timeline from '../components/HomeComponents/Timeline';
import Subcribe from '../components/HomeComponents/Subcribe';
import FAQ from '../components/HomeComponents/FAQ';



import 'swiper/css'






const Home = () => {
  return (
    <div>
      <Banner/>
      <Content/>
      <ContentBannerA/>
      <ContentBannerD/>
      <div className="policyCard">
      {
        policy.map((item,index) => <PolicyCard
          key={index}
          name={item.name}
          description={item.description}
          icon={item.icon}
        />)
      }
      </div>
      <Categories/>
      <ContentBannerB/>
      <ContentBannerC/>
      <Timeline/>
      <FAQ/>
      <Subcribe/>
    </div>
  )
}

export default Home