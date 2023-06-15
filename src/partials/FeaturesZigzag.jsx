import React from 'react';

import FeatImage01 from '../images/features-03-image-01.png';
import FeatImage02 from '../images/features-03-image-02.png';
import FeatImage03 from '../images/features-03-image-03.png';

function FeaturesZigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
  <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
    <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
    <h1 className="h2 mb-4">dotflo Campaigns</h1>
    {/* <p className="text-xl text-gray-400">Dotflo leverages AI to enable our product to meet the data science needs of any business using 2 main features. </p> */}
  </div>

  {/* Items */}
  <div className="grid gap-20">

    {/* 1st item */}
    <div className="md:grid md:grid-cols-1 md:gap-6 items-center">
      {/* Content */}
      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
        <div className="md:pr-4 lg:pr-12 xl:pr-16">
          <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
          <h3 className="h3 mb-3">Campaigns make data fun</h3>
          <p className="text-xl text-gray-400 mb-4">Unlock your creative side and drive value in the work you do. Create, collaborate, and communicate campaigns. All powered by machine learning. No more repetitive tasks or feeling stuck in your job.</p>
        </div>
      </div>
    </div>

    {/* 2nd item */}
    <div className="md:grid md:grid-cols-1 md:gap-0 items-center">
      {/* Content */}
      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
        <div className="md:pr-4 lg:pr-12 xl:pr-16">
          <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
          <h3 className="h3 mb-3">Campaigns make data equitable</h3>
          <p className="text-xl text-gray-400 mb-4">Dotflo is meant for all fundraising members to leverage, not just the data folks. Connect data, identify pain points, get results, automate workflows.</p>
        </div>
      </div>
    </div>

    {/* 3rd item */}
    <div className="md:grid md:grid-cols-1 md:gap-6 items-center">
      {/* Content */}
      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
        <div className="md:pr-4 lg:pr-12 xl:pr-16">
          <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
          <h3 className="h3 mb-3">Campaigns make data powerful</h3>
          <p className="text-xl text-gray-400 mb-4">Powerful Automation opportunities encapsulate the value of dotflo. Unlock a variety of perspectives for strategic acquisition and retention campaigns faster than ever by simply automating repetitive tasks and generating key analytics providing a statistical perspective.</p>
        </div>
      </div>
    </div>

  </div>

</div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;