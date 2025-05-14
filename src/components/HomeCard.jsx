import React from 'react'; 
import icon1 from "../assets/images/icons/1.png"
import icon2 from "../assets/images/icons/2.png"
import icon3 from "../assets/images/icons/3.png"
import icon4 from "../assets/images/icons/4.png"

const HomeCard = () => {
    return (
        <div className=''>
            <div class="bg-[#f5f1eb] py-10">
  <div class=" w-11/12  mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
    
   
    <div>
      <div class="text-4xl mb-2"><img className='w-[40px]' src={icon1} alt="" /></div>
      <h3 class="font-bold text-lg mb-1">Awesome Aroma</h3>
      <p class="text-sm text-gray-600">You will definitely be a fan of the design & aroma of your coffee</p>
    </div>
    
    
    <div>
      <div class="text-4xl mb-2"><img className='w-[40px]' src={icon2} alt="" /></div>
      <h3 class="font-bold text-lg mb-1">High Quality</h3>
      <p class="text-sm text-gray-600">We served the coffee to you maintaining the best quality</p>
    </div>
    
    
    <div>
      <div class="text-4xl mb-2"><img className='w-[40px]' src={icon3} alt="" /></div>
      <h3 class="font-bold text-lg mb-1">Pure Grades</h3>
      <p class="text-sm text-gray-600">The coffee is made of the green coffee beans which you will love</p>
    </div>
    
    
    <div>
      <div class=" mb-2"><img className='w-[40px]' src={icon4} alt="" /></div>
      <h3 class="font-bold text-lg mb-1">Proper Roasting</h3>
      <p class="text-sm text-gray-600">Your coffee is brewed by first roasting the green coffee beans</p>
    </div>

  </div>
</div>

        </div>
    );
};

export default HomeCard;