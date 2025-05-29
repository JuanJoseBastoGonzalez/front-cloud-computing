import Navbar from "./components/Nav/Nav.jsx";
import Banner from "./components/banner/banner.jsx";
import Brandstrip from "./components/Brandstrip/Brandstrip.jsx";
import Cart from "./components/Cart/Cart.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Brandstrip />
      <Cart />
    </div>
  );
}
export default Home;