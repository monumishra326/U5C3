// import { BookCard } from "../BookCard/BookCard";
// import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  // const Main = styled.div`
  //   /* Apply some responsive styling to children */
  // `;
  const [bookdata, setbookdata] = useState([]);

  const getbook = () => {
    axios.get("http://localhost:8080/books").then((res) => {
      setbookdata(res.data);
    });
  };

  useEffect(() => {
    getbook();
  }, []);

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      {/* <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      /> */}

      <div className="mainContainer" border="1px solid black">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}

        {bookdata.map((el) => {
          <Link to={`/books/${el.id}`}>
            <div className="bookCard">
              <img src={`el.imageUrl`} alt="" />
              <h2 classname="title">{el.title}</h2>
              <p class="price">{el.price}</p>
            </div>
          </Link>;
        })}
      </div>
    </div>
  );
};
// export default Home;
