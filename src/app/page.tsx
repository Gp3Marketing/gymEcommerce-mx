import React from 'react';

import MsgWhatsapp from '@/components/WhatsApp';

import SectionBestDeals from './home/SectionBestDeals';
// import SectionBrands from './home/SectionBrands';
import SectionHeader from './home/SectionHeader';
import SectionHeroSlider from './home/SectionHeroSlider';
import SectionProducts from './home/SectionProducts';

const page = () => {
  return (
    <div>
      <div className="my-7">
        <SectionHeroSlider />
      </div>

      <div className="my-7">
        <SectionHeader />
      </div>

      <div className="mb-32">
        <SectionBestDeals />
      </div>

      <div className="mb-32">
        <SectionProducts />
      </div>

      <div className="mb-32">
        <MsgWhatsapp />
      </div>

      {/* <div className="mb-32">
        <SectionBrands />
      </div> */}
    </div>
  );
};

export default page;
