import React from 'react';

import SectionBestDeals from './home/SectionBestDeals';
// import SectionBrands from './home/SectionBrands';
import SectionHeader from './home/SectionHeader';
import SectionProducts from './home/SectionProducts';
import SectionHeroSlider from './home/SectionHeroSlider';

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

      {/* <div className="mb-32">
        <SectionBrands />
      </div> */}
    </div>
  );
};

export default page;
