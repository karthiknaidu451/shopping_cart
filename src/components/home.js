import { useNavigate } from "react-router-dom";
import "./style.css"

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home_container">
      {/* Hero Section */}
      <div className="hero_section">
        <div className="hero_content">
          <h1>Welcome to <span>"SHOPPING"</span></h1>
          <p>
            Discover the best products at unbeatable prices.
            Fast delivery  Secure payments & Easy returns
          </p>

          <button
            className="shop_now_btn"
            onClick={() => navigate("/product")}
          >
            Shop Now
          </button>
        </div>

        <div className="hero_image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="shopping"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
