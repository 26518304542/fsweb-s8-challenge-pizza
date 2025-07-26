import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css';
import { useNavigate } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0);
   const navigate = useNavigate();

  function handleClick() {
  navigate("/orderpage", {
    state: {
      title: "Position Absolute Acı Pizza",
      price: "60₺",
      description: "Acılı pizza, özel soslarla hazırlanmış. Gerçek bir yazılımcı yemeği."
    }
  });
}


  return (
    <>
      <div id="app">
        {/* HEADER */}
        <header className="main-header">
          <div className="header-logo">Teknolojik Yemekler</div>
          <div className="header-banner">
            <h2>fırsatı kaçırma</h2>
            <h1>KOD ACIKTIRIR<br />PIZZA, DOYURUR</h1>
            <button className="cta-btn">ACIKTIM</button>
          </div>
        </header>

        {/* NAVIGATION ICONS */}
        <nav className="nav-icons">
          <ul>
            <li><img src="images/iteration-2-images/icons/1.svg" alt="YEMEK" /><span>YEMEK</span></li>
            <li><img src="images/iteration-2-images/icons/2.svg" alt="Pizza" /><span>Pizza</span></li>
            <li><img src="images/iteration-2-images/icons/3.svg" alt="Burger" /><span>Burger</span></li>
            <li><img src="images/iteration-2-images/icons/4.svg" alt="Kızartmalar" /><span>Kızartmalar</span></li>
            <li><img src="images/iteration-2-images/icons/5.svg" alt="Fastfood" /><span>Fastfood</span></li>
            <li><img src="images/iteration-2-images/icons/6.svg" alt="İçecek" /><span>İçecek</span></li>
          </ul>
        </nav>

        {/* KAMPANYA KARTLARI */}
        <section className="third">
          <div className="left-side-third">
            <div className="button-and-text">
              <p>Özel <br /> Lezzetus</p>
              <p>Position:Absolute Acı Burger</p>
              <a href="#" className="siparis-ver">SİPARİŞ VER</a>
            </div>
          </div>
          <div className="right-side-third">
            <div id="upper" >
              <div id="upper-content">
                <div className="title" style={{ marginBottom: "1rem" }}>Hackathlon Burger Menü</div>
                <a href="#" className="siparis-ver" style={{ marginTop: "3rem", marginBottom: "3rem" }}>SİPARİŞ VER</a>
              </div>
              <img id="upper-img" src="images/iteration-2-images/cta/kart-2.png" alt="Burger Menü" />
            </div>
            <div id="lower">
              <div id="lower-content" className="button-and-text-rightside">
                <p><span style={{ color: "red" }}>Çooooook</span> hızlı<br />npm gibi kurye</p>
                <a href="#" className="siparis-ver" style={{ marginTop: "1.5rem" }}>SİPARİŞ VER</a>
              </div>
            </div>
          </div>
        </section>

        {/* EN ÇOK PAKETLENEN MENÜLER */}
        <section className="fourth">
          <p>en çok paketlenen menüler</p>
          {/* Masaüstü için görünür, mobilde gizli */}
          <p className="desktop-text">Acıktıran Kodlara Doyuran Lezzetler</p>

          {/* Mobilde görünür, masaüstünde gizli */}
          <p className="mobile-text">
            Acıktıran<br />
            Kodlara Doyuran<br />
            Lezzetler
          </p>

          <ul id="pills-tab">
            <button className="btn"><img src="images/iteration-2-images/icons/1.svg" alt="Ramen" />Ramen</button>
            <button className="btn" style={{ backgroundColor: "black", color: "white" }}><img src="images/iteration-2-images/icons/2.svg" alt="Pizza" />Pizza</button>
            <button className="btn"><img src="images/iteration-2-images/icons/3.svg" alt="Burger" />Burger</button>
            <button className="btn"><img src="images/iteration-2-images/icons/4.svg" alt="French Fries" />French Fries</button>
            <button className="btn"><img src="images/iteration-2-images/icons/5.svg" alt="Fastfood" />Fastfood</button>
            <button className="btn"><img src="images/iteration-2-images/icons/6.svg" alt="Soft drinks" />Soft drinks</button>
          </ul>
        </section>

        {/* ÜRÜN KARTLARI */}
        <section className="fifth">
          <div className="fifth-card">
            <img src="images/iteration-2-images/pictures/food-1.png" alt="Terminal Pizza" />
            <div className="title">Terminal Pizza</div>
            <div className="meta">
              <span>4.9</span>
              <span>(200)</span>
              <span className="price">60₺</span>
            </div>
          </div>
          <div className="fifth-card" onClick={() => handleClick()}>
            <img src="images/iteration-2-images/pictures/food-2.png" alt="Position Absolute Acı Pizza" />
            <div className="title">Position Absolute Acı Pizza</div>
            <div className="meta">
              <span>4.9</span>
              <span>(200)</span>
              <span className="price">60₺</span>
            </div>
          </div>
          <div className="fifth-card">
            <img src="images/iteration-2-images/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
            <div className="title">useEffect Tavuklu Burger</div>
            <div className="meta">
              <span>4.9</span>
              <span>(200)</span>
              <span className="price">60₺</span>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-content">
            <div className="footer-col left">
              <div className="footer-logo">Teknolojik<br />Yemekler</div>
              <div className="footer-contact">
                <span><img src="images/iteration-2-images/footer/icons/icon-1.png" alt="" /> 341 Londonderry Road, İstanbul Türkiye</span>
                <span><img src="images/iteration-2-images/footer/icons/icon-2.png" alt="" /> aciktim@teknolojikyemekler.com</span>
                <span><img src="images/iteration-2-images/footer/icons/icon-3.png" alt="" /> +90 216 123 45 67</span>
              </div>
            </div>
            <div className="footer-col center">
              <h4>Hot Menu</h4>
              <div className="footer-menu">
                <span>Terminal Pizza</span>
                <span>5 Kişilik Hackathlon Pizza</span>
                <span>useEffect Tavuklu Pizza</span>
                <span>Beyaz Console Frosty</span>
                <span>Testler Geçti Mutlu Burger</span>
                <span>Position Absolute Acı Burger</span>
              </div>
            </div>
            <div className="footer-col right">
              <h4>Instagram</h4>
              <div className="footer-instagram">
                <img src="images/iteration-2-images/footer/insta/li-0.png" alt="" />
                <img src="images/iteration-2-images/footer/insta/li-1.png" alt="" />
                <img src="images/iteration-2-images/footer/insta/li-2.png" alt="" />
                <img src="images/iteration-2-images/footer/insta/li-3.png" alt="" />
                <img src="images/iteration-2-images/footer/insta/li-4.png" alt="" />
                <img src="images/iteration-2-images/footer/insta/li-5.png" alt="" />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2023 Teknolojik Yemekler.</span>
            <span className="footer-social">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twitter.svg" alt="Twitter" style={{ width: "24px", height: "24px", verticalAlign: "middle", marginRight: "1rem" }} />
              </a>
            </span>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
