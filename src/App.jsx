import React from "react";
import ListController from "./Pages/List/ListController";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderView from "./components/Header/HeaderView";
import CreateController from "./Pages/Create/CreateController";
const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<ListController />} />
        <Route path="/create" element={<CreateController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
