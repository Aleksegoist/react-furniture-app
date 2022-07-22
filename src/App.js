import Features from "./components/Features";
import FeaturesSecond from "./components/FeaturesSecond";
import Hero from "./components/Hero";
import NewItems from "./components/NewItems";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";


function App() {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white '>
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonial />
      <Newsletter />
    </div>
  );
}

export default App;
