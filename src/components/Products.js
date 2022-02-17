import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Products(props) {
  const { products } = props;
  const brands = [...new Set(products.map((product) => product.brand_name))];

  console.log("brands:", brands);
  console.log("products:", products);
  const settings = {
    className: "center products-bar",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    autoplaySpeed: 1000,
    arrows: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div className="products-section">
      <h1>Edvora</h1>
      <h4>Products</h4>
      <div className="product-container">
        {brands.map((brand) => (
          <>
            <h5>{brand}</h5>
            <hr />
            <Slider {...settings}>
              {products
                .filter((product) => product.brand_name === brand)
                .map((product) => (
                  <div className="product-box">
                    <div className="row">
                      <div className="col">
                        <img src={product.image} alt="product" />
                      </div>
                      <div className="col">
                        <span className="product-name">
                          {product.product_name}
                        </span>
                        <span className="brand-name">{product.brand_name}</span>
                        <span>
                          {" "}
                          $<span className="price">{product.price}</span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col location">
                        <span>{product.address.state}</span>-
                        <span>{product.address.city}</span>
                      </div>
                      <div className="col date">Date: {product.date}</div>
                    </div>
                    <div className="row discription">{product.discription}</div>
                  </div>
                ))}
            </Slider>
          </>
        ))}
      </div>
    </div>
  );
}
export default Products;
