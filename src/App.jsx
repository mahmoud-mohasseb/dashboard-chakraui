import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home.jsx";
import Mobilemenu from "./components/Mobilemenu";
import Sidebar from "./components/Sidebar";
import EditUser from "./pages/EditUser";
import Users from "./pages/Users";
import { Center, Flex, Grid, GridItem, Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sales from "./pages/Sales";
import NewAccount from "./pages/NewAccount";
import ProductList from "./pages/ProductList";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <Grid
        templateAreas={`"header header"
      "nav main"
      "nav footer"`}
        gridTemplateColumns={"150px 1fr"}
        overflow={"hidden"}
      >
        <GridItem area={"header"}>
          <Mobilemenu />
        </GridItem>
        <GridItem area={"nav"}>
          <Sidebar />
        </GridItem>

        <BrowserRouter>
          <GridItem area={"main"}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/EditUser" element={<EditUser />} />
              <Route path="/Sales" element={<Sales />} />
              <Route path="/NewAccount" element={<NewAccount />} />
              <Route path="/Products" element={<ProductList />} />
            </Routes>
          </GridItem>
        </BrowserRouter>
      </Grid>
    </div>
  );
}

export default App;
