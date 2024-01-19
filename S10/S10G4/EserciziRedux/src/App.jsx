import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
import Home from "./assets/pages/Home";
import Profile from "./assets/pages/Profile";
import Footer from "./assets/components/Footer";
import store from "./assets/store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
