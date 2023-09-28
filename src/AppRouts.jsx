import React from "react";
import { Route, Routes } from "react-router-dom";
import Showprojects from "./showprojects/Showprojects";
import StarRating from "./Task1/StarRating";
import Popover from "./Task2/Popover";
import Accordion from "./Task3/Accordion";
import Carousal from "./Task4/Carousal";
import GridLayout from "./Task5/GridLayout";
import App from "./Task8/TrieTypeahead";
import TrieTypeahead from "./Task8/TrieTypeahead";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Showprojects />} path="/"></Route>
      <Route element={<StarRating />} path={"/star-rating"}></Route>
      <Route element={<Popover />} path={"/design-pop-over"}></Route>
      <Route element={<Accordion />} path={"/design-accordion"}></Route>
      <Route element={<Carousal />} path={"/design-carousel"}></Route>
      <Route element={<GridLayout />} path={"/design-grid"}></Route>
      <Route element={<App />} path={"/typeahead-autocomplete"}></Route>


    </Routes>
  );
};

export default AppRoutes;
