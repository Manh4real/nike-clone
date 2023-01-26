import React from "react";

const CarouselProducts = React.forwardRef((_, ref) => {
  return (
    <div ref={ref} className="carousel" id="carousel">
      {CAROUSEL_PRODUCTS.map((p, i) => {
        return (
          <div key={i} className="product-container">
            <div className="pd-cover">
              <a href={p.url}>
                <div className="pd-cover">
                  <img src={p.image} alt="" />
                </div>
                <div className="pd-title-i regular-font">
                  <div className="pd-name flex-spbw flex-wrap">
                    Nike Air Force 1 Crater
                    <div className="price">$110</div>
                  </div>
                  <div className="pd-type">Men's Shoes</div>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
});

const CAROUSEL_PRODUCTS = [
  {
    image: "/images/af-1-1-mens-shoes-kcdPxn.jfif",
    url: "/1abc/details/0",
  },
  {
    image: "/images/air-force-1-fontanka-womens-shoes-L41zBh.jfif",
    url: "/1abc/details/0",
  },
  {
    image: "/images/air-force-1-lv8-big-kids-shoes-NBpsc3.jfif",
    url: "/1abc/details/0",
  },
  {
    image: "/images/air-force-1-lv8-big-kids-shoes-NSNB97.jfif",
    url: "/1abc/details/0",
  },
  {
    image: "/images/af-1-1-mens-shoes-kcdPxn.jfif",
    url: "/1abc/details/0",
  },
];

export default React.memo(CarouselProducts);
