import Features from "./components/Features";
import FeaturesSecond from "./components/FeaturesSecond";
import Hero from "./components/Hero";
import NewItems from "./components/NewItems";
import Products from "./components/Products";

function App() {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white '>
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
    </div>
  );
}

export default App;
