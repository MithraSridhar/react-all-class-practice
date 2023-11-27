import './App.css';
import { AddColor } from './AddColor';
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom"
import { Msg } from "./Msg"
import { UserList } from './components/UserList';
import { Home } from './components/Home';
import { ProductList } from './components/ProductList';
import { ProductDetails } from './components/ProductDetails';
import {  useState } from 'react';
import Example from "./Example"
import { AddProduct } from "./components/Addproduct"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ContextExample } from "./components/context/ContextExample"
import TicTacToe from './components/TicTacToe';
import UpdateProduct from './components/UpdateProduct';
import LifeCycleA from './components/class/LifeCycleA';
import EditProduct from './components/EditProduct';

export const INITIAL_PRODUCT_LIST = [
  {

    name: "iPhone 15 (128 GB)",
    poster: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
    price: "₹77,900 ",
    rating: 4,
    summary: "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more.",
    trailer: "https://www.youtube.com/embed/xqyUdNxWazA"
  },

  {

    name: "iPhone 15 Pro (128 GB) ",
    poster: "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
    price: "₹1,34,900 ",
    rating: 5.0,
    summary: " iPhone 15 Pro has Link strong and light aerospace-grade titanium design with Link textured matte-glass back. It also features Link Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
    trailer: "https://www.youtube.com/embed/xqyUdNxWazA"
  },


  {

    name: "Samsung Galaxy S23 5G (256GB Storage) ",
    poster: "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
    price: "₹65,320",
    rating: 4.4,
    summary: "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever."

  },

  {

    name: "Samsung Galaxy S23 Ultra 5G (256GB Storage) ",
    poster: "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
    price: "₹1,00,000",
    rating: 5.0,
    summary: "Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on Link phone; Whether you’re posting or printing, Galaxy S23 Ultra always does the moment justice."

  },

  {

    name: "Apple AirPods Pro (2nd Generation) ​​​​​​​ ",
    poster: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
    price: "₹20,999 ",
    rating: 4.8,
    summary: "Active Noise Cancellation reduces unwanted background noise.Adaptive Transparency lets outside sounds in while reducing loud environmental noise.Personalised Spatial Audio with dynamic head tracking places sound all around you."

  },

  {

    name: " Apple Watch Series 9 [GPS + Cellular 41mm] ",
    poster: "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
    price: "₹75,900 ",
    rating: 4.9,
    summary: "Smartwatch with Gold Stainless steel Case with Gold Milanese Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant"

  },

  {

    name: " Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)",
    poster: "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg",
    price: "₹22,999",
    rating: 4.5,
    summary: "Analysis (BIA Measurement): Monitor everything from body fat percentage (BIA) to skeletal muscle weight. All the feedback you need to track your progress."

  },

  {

    name: "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White",
    poster: "https://m.media-amazon.com/images/I/51m4LnFz84L._SX466_.jpg",
    price: "₹27,141",
    rating: 4.3,
    summary: "Reduce unwanted noise with Galaxy Buds2 Pro; They use Intelligent Active Noise Cancellation* to quiet even the loudest outside sounds; Tune in to what matters most without being bothered by distracting sounds around you"

  },

  {

    name: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
    poster: "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
    price: "₹84,990",
    rating: 5.0,
    summary: "Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power."

  },


  {

    name: "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)",
    poster: "https://m.media-amazon.com/images/I/71iBfI3rAYL._SX679_.jpg",
    price: "₹1,10,790",
    rating: 4.9,
    summary: " 12th Generation Intel EVOTM Core i7-1260P processor (2.1 GHz up to 4.6 GHz 18 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD"

  }
]

function App() {
  //Lifting the state up => lifted from child to parent
  const [productList, setProductList] = useState([])
  const [mode, setMode] = useState("light")





  //1. Creating - createContext ✅
  //2. Publisher - provider  - context.Provider  ✅
  //3. Subscriber  -useContext - useContext(context)

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate = useNavigate()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
      

        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
            <Button color="inherit" onClick={() => navigate("/products")}>ProductList</Button>
            <Button color="inherit" onClick={() => navigate("/products/add")}>Add Product</Button>
            <Button color="inherit" onClick={() => navigate("/color-game")}>AddColor</Button>
            <Button color="inherit" onClick={() => navigate("/profile")}>UserList</Button>
            <Button color="inherit" onClick={() => navigate("/context")}>Context</Button>
            <Button color="inherit" onClick={() => navigate("/tictactoe")}>TicTacToe</Button>
            <Button color="inherit" onClick={() => navigate("/update")}>Update Product</Button>
            <Button color="inherit" onClick={() => navigate("/class")}>Class</Button>
            <Button sx={{ marginLeft: "45%" }} color="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}
              endIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}>
              {mode === "light" ? "dark" : "light"} Mode</Button>

          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productid" element={<ProductDetails productList={productList} />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:productid" element={<EditProduct />} />

          <Route path="/color-game" element={<AddColor />} />
          <Route path="/profile" element={<UserList />} />
          <Route path="/example" element={<Example />} />
          {/* context */}
          <Route path="/context" element={<ContextExample />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/update" element={<UpdateProduct />} />
          <Route path="/class" element={<LifeCycleA />} />
          <Route path="/items" element={<Navigate replace to="/products" />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </ThemeProvider>
  );

}


function NotFound() {
  return (
    <div><img src="https://blog-cdn.lottiefiles.com/2022/08/Taras-Migulko.gif" alt="notfound" /></div>
  )
}

export default App;



// Task  - 15 mins
// /products/add  => <AddProduct/>
// Add product => product added => /products
