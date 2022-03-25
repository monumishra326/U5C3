import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
// import { Section } from "../Components/Section/Section";
// import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
// import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";
import { NotFound } from "../Components/NotFound/NotFound";
import { Mystery } from "../Components/Section/Mystery";
import { History } from "../Components/Section/History";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { Mythology } from "../Components/Section/Mythology";
import { Technology } from "../Components/Section/Technology";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/books/:id" element={<BookDetailsPage />} />

        <Route exact path="*" element={<NotFound />} />
        <Route exact path="section/Mystery" element={<Mystery />} />
        <Route exact path="section/History" element={<History />} />
        <Route exact path="section/Technology" element={<Technology />} />
        <Route exact path="section/Mythology" element={<Mythology />} />
        <Route
          exact
          path="/bookdetailspage/:id"
          element={<BookDetailsPage />}
        />

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
