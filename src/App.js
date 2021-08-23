import React, { useState, useEffect } from "react";
import Quote from "./Quote";

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = () => {
    fetch(url)
      .then((response) => response.json())
      .then(({ quotes }) => {
        setQuotes(quotes);
      });
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <main>
      <div className="container">
        <h3>Random Quote Machine</h3>
        <Quote quotes={quotes} />
      </div>
    </main>
  );
}

export default App;
