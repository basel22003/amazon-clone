import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://globalnews.ca/wp-content/uploads/2020/04/high-res-tvod-store-ca.png?w=1200"
          alt=""
        />

        <div className="home-row">
          <Product
            title="The Lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg "
            rating={5}
          />
          <Product
            id="4354356"
            title="Kenwood Chef Stand Mixer for Baking -
             Stylish Food Mixer in White with K-beater, Dough Hook,"
            price={250.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg "
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id="43445436"
            title="SAMSUNG LC24F396FHNXZA 23.5 FHD Curved LED-Lit FreeSync Monitor"
            price={900.0}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqYW024cq013_Qs4SFteD22TOQmt9Ysdqrw&usqp=CAU"
            rating={5}
          />
          <Product
            id="13245439"
            title="All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Charcoal"
            price={400.0}
            image="https://brain-images-ssl.cdn.dixons.com/4/4/10215744/u_10215744.jpg"
            rating={4}
          />
          <Product
            id="12335436"
            title="Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Space Gray (1st Generation)"
            price={350.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61is5y-%2BMeL._AC_SY679_.jpg"
            rating={3}
          />
        </div>
        <div className="home-row">
          <Product
            id="12346556"
            title="Samsung Galaxy S10 Factory Unlocked Android Cell Phone | 
            US Version | 128GB of Storage | Fingerprint ID and Facial Recognition | Long-Lasting Battery |   Prism White"
            price={989.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._AC_SY355_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
