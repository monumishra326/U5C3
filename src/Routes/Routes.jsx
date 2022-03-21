import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
// import { Section } from "../Components/Section/Section";
// import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
// import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";
import { NotFound } from "../Components/NotFound/NotFound";
import { Mystery } from "../Components/Section/Mystery";
import { History } from "../Components/Section/History";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<NotFound />} />
        <Route exact path="/Mystery" element={<History />} />

        {/* <Route exact path="/Mystery" element={<Home />} />
        <Route exact path="/Technology" element={<Home />} />
        <Route exact path="/Mythology" element={<Home />} />
        <Route exact path="/history" element={<Home />} /> */}

        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
      </Routes>
    </>
  );
};
//  default AllRoutes;
