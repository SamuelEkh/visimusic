import './App.css';
import './style/Product.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { CookiesProvider } from 'react-cookie';
import Cookies from 'js-cookie';
import Header from './components/Header';
import Browse from './components/Browse';
import Recommendation from './components/Recommendation';
// import Footer from './components/Footer';
import ProductsBoard from './components/ProductsBoard';
import RecoBoard from './components/RecoBoard';
import Login from './components/Login';
import Register from './components/Register';
import CartBoard from './components/CartBoard';
import Account from './components/Account';
import Contact from './components/Contact';
import About from './components/About';
import SingleProduct from './components/SingleProduct';
import Checkout from './components/Checkout';
import Backbutton from './components/Backbutton';

const App = () => {

  // background image url: https://i.postimg.cc/D0nBd8h2/fiddle-background-edited-blur4.jpg

  const [browseAnchorEl, setBrowseAnchorEl] = useState(null);
  const [recoAnchorEl, setRecoAnchorEl] = useState(null);
  const [products, setProducts] = useState([]);
  const [options, setOptions] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [backgroundState, setBackground] = useState({background: '#282727'});
  const [headerBackground, setHeaderBackground] = useState({background: '#282727'});
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [prevProductState, setPrevProductState] = useState([]);

  const { localStorage } = window;

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('options', options);
  }, [options]);

  const handleOptions = (recos) => {
    setOptions(recos);
  }

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('user');
    removeCookie('token');
    setUsername('');
  }

  const getCart = async () => {
    if (cookies.token) {
      const data = await JSON.parse(atob(cookies.token.split('.')[1]));
      const cartUser = data.username;
      const request = await fetch(`${process.env.REACT_APP_SERVER}/visimusic/carts/${cartUser}`, {
        method: 'GET'
      })
      const cart = await request.json()
      setCartProducts(cart);
    }
  };

  useEffect(() => {
    if(cookies.token) {
      const data = JSON.parse(atob(cookies.token.split('.')[1]));
      setUsername(data.username);
      setEmail(data.email);
      setName(data.name);
      getCart();
    }
  }, [cookies]);

  const handleOpen = (element) => {
    if (element.className === 'browse__button') {
      setBrowseAnchorEl(element);
    }
    if (element.className === 'reco__button') {
      setRecoAnchorEl(element);
    }
  };
  
  const handleClose = () => {
    setBrowseAnchorEl(null);
    setRecoAnchorEl(null);
  };

  const handleFetchGroup = async (productGroup) => {
    const products = await fetch(`${process.env.REACT_APP_SERVER}/visimusic/products/productGroup/${productGroup}`);
    const response = await products.json();
    setProducts(response);
  }

  const handleFetchAll = async (searchOptions) => {
    setOptions(searchOptions);
    const products = await fetch(`${process.env.REACT_APP_SERVER}/visimusic/products`);
    const response = await products.json();
    setProducts(response);
  }

  const handleFetchSingle = async (id) => {
      const product = await fetch(`${process.env.REACT_APP_SERVER}/visimusic/products/${id}`);
      const response = await product.json();
      setProducts(response);
  }

  const handleProductState = async (state) => {
    setProducts(state);
  }

  const handleUserCookie = (state) => {
    setCookie('user', state);
  }

  const handleUsername = (user) => {
    setUsername(user);
  }

  const handleBackground = (background) => {
    setBackground(background);
  }

  const handleHeaderBackground = (background) => {
    setHeaderBackground(background);
  }

  const handleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  // const prevStateHandler = (prevProducts) => {
  //   setPrevProductState
  // }
  
  return (
    <div className='app-container' style={backgroundState}>
    <CookiesProvider>
    <Router basename="/visimusic">
      <main className="main-content">
        <Header handleProductState={handleProductState} cookies={cookies} cartProducts={cartProducts} username={username} getCart={getCart} headerBackground={headerBackground} handleBackground={handleBackground} hamburgerOpen={hamburgerOpen} handleHamburger={handleHamburger} setHamburgerOpen={setHamburgerOpen}/>
        <Route exact path="/visimusic" render={() => (
          <>
            <Browse handleOpen={handleOpen} handleClose={handleClose} handleFetchGroup={handleFetchGroup} browseAnchorEl={browseAnchorEl} handleBackground={handleBackground} handleHeaderBackground={handleHeaderBackground} setHamburgerOpen={setHamburgerOpen}/>
            <Recommendation handleOpen={handleOpen} handleClose={handleClose} handleFetchAll={handleFetchAll} recoAnchorEl={recoAnchorEl} handleOptions={handleOptions} handleBackground={handleBackground} handleHeaderBackground={handleHeaderBackground} setHamburgerOpen={setHamburgerOpen}/>
            <h1 className="app-title">VisiMusic</h1>
          </>
        )}
        />
        <Route path="/visimusic/products" render={() => (
          <section className="product-board">
            <Backbutton handleProductState={handleProductState} prevProductState={prevProductState} />
            <ProductsBoard products={products} cookies={cookies} username={username} getCart={getCart} handleFetchSingle={handleFetchSingle} setProducts={setProducts} handleProductState={handleProductState} setHamburgerOpen={setHamburgerOpen} setPrevProductState={setPrevProductState}/>
          </section>
        )} />
        <Route path="/visimusic/recommendation" render={() => (
          <section className="recoboard">
            <Backbutton handleProductState={handleProductState} prevProductState={prevProductState}/>
            <RecoBoard products={products} options={options} setProducts={setProducts} setOptions={setOptions} username={username} getCart={getCart} handleFetchSingle={handleFetchSingle} setHamburgerOpen={setHamburgerOpen} setPrevProductState={setPrevProductState}/>
          </section>
        )} />
        <Route path="/visimusic/login" render={() => (
          <>
          <Backbutton />
          <Login handleUserCookie={handleUserCookie} cookies={cookies} username={username} handleUsername={handleUsername} getCart={getCart}/>
          </>
          )} />
        <Route path="/visimusic/register" render={() => (
          <>
          <Backbutton />
          <Register handleUserCookie={handleUserCookie} cookies={cookies} thisUsername={username} />
          </>
          )} />
        <Route path="/visimusic/cart" render={() => (
          <>
          <Backbutton />
          <CartBoard username={username} cartProducts={cartProducts} getCart={getCart} handleBackground={handleBackground} handleFetchSingle={handleFetchSingle} handleProductState={handleProductState} setHamburgerOpen={setHamburgerOpen}/>
          </>
          )} />
        <Route path="/visimusic/account" render={() => (
          <>
          <Backbutton />
          <Account handleLogout={handleLogout} cookies={cookies} username={username} email={email} name={name}/>
          </>
        )} />
        <Route path="/visimusic/checkout" render={() => (
          <>
          <Backbutton />
          <Checkout cartProducts={cartProducts}/>
          </>
        )} />
        <Route path="/visimusic/contact" render={() => (
          <>
          <Backbutton />
          <Contact handleBackground={handleBackground} handleHeaderBackground={handleHeaderBackground}/>
          </>
        )} />
        <Route path="/visimusic/about" render={() => (
          <>
          <Backbutton />
          <About handleBackground={handleBackground} handleHeaderBackground={handleHeaderBackground}/>
          </>
        )} />
        <Route path="/visimusic/product" render={() => (
          <>
          <Backbutton handleProductState={handleProductState} prevProductState={prevProductState}/>
          <SingleProduct products={products} setProducts={setProducts} username={username} getCart={getCart} handleHeaderBackground={handleHeaderBackground}/>
          </>
        )} />
      </main>
    </Router>
    </CookiesProvider>
    </div>
  );
}

export default App;
