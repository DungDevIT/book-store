import Banner from "../components/Banner";
import BannerBook from "../components/home/BannerBook";
import BestSellerBooks from "../components/home/BestSellerBooks";
import FavBook from "../components/home/FavBook";
import OtherBook from "../components/home/OtherBook";
import Review from "../components/home/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerBooks />
      <FavBook />
      <BannerBook />
      <OtherBook />
      <Review />
    </div>
  );
};

export default Home;
