

import HomeSlider from './components/HomeSlider' ;
import HomeCategory from './components/HomeCategory' ;
import HomeWhatWeProvide from './components/HomeWhatWeProvide';
import HomeOffers from './components/HomeOffers';
import FeaturedProducts from './components/FeaturedProducts';

export default function HomeScreen(){
    return<>
    <HomeSlider/>
    <HomeWhatWeProvide/>
    <HomeCategory/>
    <HomeOffers/>
    <FeaturedProducts/>
    </>
}