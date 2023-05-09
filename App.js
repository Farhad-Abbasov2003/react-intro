import React from "react";
import './style.css'
import { BsArrowRight, BsList } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
const App = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          SB UllI Kit Pro
          <div>
          <BsList className="nav-logo-icon"/>
          </div>
        </div>
        <ul className="nav-ul">
          <li style={{ marginTop: "0.2rem" }}>Home</li>
          <li>
            Ladings <AiOutlineRight className="nav-li-icon" />
          </li>
          <li>
            Pages <AiOutlineRight className="nav-li-icon" />
          </li>
          <li>
            Documentation <AiOutlineRight className="nav-li-icon" />
          </li>
        </ul>

        <button>
          buy now <BsArrowRight className="nav-btn-icon" />{" "}
        </button>
      </nav>

      <div className="center">
        <img src="https://sb-ui-kit-pro-vue.startbootstrap.com/assets/img/avataaars.svg"></img>

        <h3>Welcome to my portfolio!</h3>
        <p>
          I am a graphic artist, illustrator, and UI designer specializing in
          modern, creative design based in Wildemount, TX
        </p>
      </div>

      <section className="portfolio">
        <div className="title">
          <div className="icon-1"></div>
          <h3>Illustration</h3>
          <p>I provide custom illustration services for contract clients</p>
        </div>

        <div className="title-2">
          <div className="icon-2"></div>
          <h3>UI Design</h3>
          <p>User experience and interface designs is one of my specialties</p>
        </div>

        <div className="title-3">
          <div className="icon-3"></div>
          <h3>Graphic Design</h3>
          <p>Photo restoration, post processing, and other photo services</p>
        </div>
      </section>

      <section className="images">
        <div className="item grid-item-1">
          <img src="https://source.unsplash.com/jWQj5Wjepuk/400x300"></img>
        </div>

        <div className="item grid-item-2">
          <img src="https://source.unsplash.com/cuTcfqsES6o/400x500"></img>
        </div>

        <div className="item grid-item-3">
          <img src="https://source.unsplash.com/Zr7MxECDTQ8/400x300"></img>
        </div>

        <div className="item grid-item-4">
          <img src="https://source.unsplash.com/Ecnx13MEPK0/400x500"></img>
        </div>

        <div className="item grid-item-5">
          <img src="https://source.unsplash.com/jipR1oTCO7U/400x400"></img>
        </div>

        <div className="item grid-item-6">
          <img src="https://source.unsplash.com/QcyenJDqDzw/400x500"></img>
        </div>

        <div className="item grid-item-7">
          <img src="https://source.unsplash.com/eUCy1jb_B7I/400x400"></img>
        </div>

        <div className="item grid-item-8">
          <img src="https://source.unsplash.com/n3sqjJzZiBM/400x300"></img>
        </div>

        <div className="item grid-item-9">
          <img src="https://source.unsplash.com/TIutDBFEtcY/400x400"></img>
        </div>
      </section>

      <section className="contact">
        <h3>Contact me</h3>
        <p>
          I am available for contract work, when you're ready - let me know!
        </p>
        <div className="cards">
          <div className="card-1">
            <div className="icon-1"></div>
            <a href="">hello@example.com</a>
          </div>

          <div className="card-2">
            <div className="icon-2"></div>
            <a>555-123-4567</a>
          </div>
        </div>
      </section>

      <footer>
        <ul className="ftr-list-1">
          <li>SB UI Kit Pro</li>
          <li>Build better websites</li>
        </ul>

        <ul className="ftr-list-2">
          <li>
            <ul>
            <div>PRODUCT</div>
              <li>Landing</li>
              <li>Pages</li>
              <li>Sections</li>
              <li>Documentation</li>
              <li>Changelog</li>
            </ul>
          </li>

          <li>
            <ul>
            <div>TECHNICAL</div>
              <li>Documentation</li>
              <li>Changelog</li>
              <li>Theme Customizer</li>
              <li>Uİ Kit</li>
            </ul>
          </li>
          <li>
            <ul>
            <div>INCLUDES</div>
              <li>Utilites</li>
              <li>Components</li>
              <li>Layouts</li>
              <li>Code Samples</li>
              <li>Product</li>
              <li>Affiliates</li>
              <li>Updates</li>
            </ul>
          </li>
          <li>
            <ul>
            <div>LEGAL</div>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>License</li>
            </ul>
          </li>
        </ul>

        <div className="footer">
          <div>Copyright © Your Website 2020</div>
          <div>
            <span>Privacy Policy ·</span> <span>Terms & Conditions</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
