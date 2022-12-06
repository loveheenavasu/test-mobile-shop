import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const AutoSuggest = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [text, setText] = useState("");

  const history = useHistory();

  const onChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's text
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setText(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick = (e) => {
    e.preventDefault();
    setFilteredSuggestions([]);
    setText("");
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
    history.push(`/search?q=${text}`);
  };

  const onKeyDown = (e) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setText(filteredSuggestions[activeSuggestionIndex]);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul class="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion.title}
            </li>
          );
        })}
      </ul>
    ) : (
      <div class="no-suggestions">
        <em>No suggestions, you're on your own!</em>
      </div>
    );
  };

  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={text}
      />
      {showSuggestions && text && <SuggestionsListComponent />}
    </div>
  );
};

export default AutoSuggest;
