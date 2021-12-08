import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "./components/Counter";
import { ProductsList } from "./components/ProductsList";
import { BikeList } from "./components/BikeList";
import { NavLib } from "react-navlib-pickupbiz";

import "./App.css";
const App = () => {
  const links = [
    {
      title: "Ayaz",
      icon: "fa fa-home",
      url: "/",
    },
    {
      title: "Home",
      icon: "fa fa-home",
      url: "/",
    },
    {
      title: "Products",
      icon: "fa fa-phone-square",
      url: "/products",
    },
    {
      title: "Bikes",
      icon: "fa fa-cogs",
      url: "/bikes",
    },
    {
      title: "Counter",
      icon: "fa fa-cogs",
      url: "/",
    },
    {
      title: "Simran",
      icon: "fa fa-cogs",
      url: "/bikes",
    },
    {
      title: "Simran",
      icon: "fa fa-phone-square",
      url: "/products",
    },
  ];
  return (
    <BrowserRouter>
      <NavLib type="modern" links={links} />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/bikes" element={<BikeList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
