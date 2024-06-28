import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Book = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleClickdelete = async (id) => {
    //ga pakeprevent defgault krn kita mau ngereload page after delete
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Nessa's Book Shop</h1>
      <div className="bookshop">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img className="img" src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <p>{book.price}</p>
            <button
              className="delete"
              onClick={() => handleClickdelete(book.id)}
            >
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new books</Link>
      </button>
    </div>
  );
};

export default Book;
