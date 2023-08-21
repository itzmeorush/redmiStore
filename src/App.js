import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "./data/data.json";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories.js";
import ProductReview from "./components/ProductReview.js";
import Video from "./components/Video.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import NavOptions from "./components/NavOptions.js";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCT" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="Hot Accessories" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>

        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        ></Route>

        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        ></Route>

        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        ></Route>
      </Routes>
      <Heading text="PRODUCTS REVIEWS" />
       <ProductReview productReview={data.productReviews}/>   
      <Heading text="VIDEOS" />
      <Video videos={data.videos}/>
      <Heading text="IN THE PRESS" />
        <Banner end={data.banner.end}/>
        <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
