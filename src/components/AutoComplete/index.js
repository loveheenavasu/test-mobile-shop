import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllProducts } from "../../functions/products";
import "./styles.css";

const AutoComplete = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState();
  const [suggestions, setSuggestions] = useState([]);

  const history = useHistory();

  const onChangeHandler = (term) => {
    let matches = [];
    if (term.length > 0) {
      matches = products.filter((product) => {
        const regex = new RegExp(`${term}`, "gi");
        return product.title.match(regex);
      });
    }
    setSuggestions(matches);
    setTerm(term);
  };

  const onSuggestHandler = (q) => {
    setTerm(q);
    setSuggestions([]);
    // history.push(`/search?${q}`);
    // console.log("am inside this loop", q)
  };

  const fetchAllProducts = () => {
    setLoading(true);
    getAllProducts().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="container">
      <input
        type="text"
        className="col-md-12 input"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={term}
        onBlur={() => setSuggestions([])}
      />
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div className="suggestion col-md-12 justify-content-md-center"
            onClick={() => onSuggestHandler(suggestion.title)}
          >
            {suggestion.title}
          </div>
        ))}
    </div>
  );
};

export default AutoComplete;
