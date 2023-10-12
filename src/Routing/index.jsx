import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from '../Pages/Home/Home'
import Auth from "../Pages/Auth/Auth";
import Orders from "../Pages/Orders";
import Shop from "../Pages/Shop";


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/Orders" element={<Orders/>} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/auth" element={<Auth/>} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;