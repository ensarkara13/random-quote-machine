import React, { useState, useEffect } from "react";
import { getRandomColor, getRandomNumber } from "./utils";
import Quote from "./Quote";

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({});
  const [randomColor, setRandomColor] = useState("#000");

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

  const getRandomQuote = () => {
    let randomIndex = getRandomNumber(quotes.length);
    const { quote, author } = quotes[randomIndex];
    setRandomQuote({ quote, author });
  };

  useEffect(() => {
    let color = getRandomColor();
    document.body.style.backgroundColor = color;
    setRandomColor(color);
  }, [randomQuote]);

  return (
    <main>
      <div className="container">
        <Quote
          randomQuote={randomQuote}
          randomColor={randomColor}
          getRandomQuote={getRandomQuote}
        />
      </div>
    </main>
  );
}

export default App;
