import React, { useState, useEffect } from "react";
import { getRandomNumber, getRandomColor } from "./utils";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

const Quote = ({ quotes }) => {
  const [randomQuote, setRandomQuote] = useState({});
  const [color, setColor] = useState("#000");

  const getRandomQuote = () => {
    let randomIndex = getRandomNumber(quotes.length);
    const { quote, author } = quotes[randomIndex];
    setRandomQuote({ quote, author });
  };

  useEffect(() => {
    setColor(getRandomColor());
  }, [randomQuote]);

  const { quote, author } = randomQuote;
  return (
    <section>
      <div id="quote-box" className="card text-center" style={{ color: color }}>
        <div className="card-body">
          <figure class="text-center">
            <blockquote class="blockquote">
              <a
                href={`https://www.twitter.com/intent/tweet?text=${quote}`}
                id="tweet-quote"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter style={{ float: "right" }} />
              </a>
              <FaQuoteLeft className="quote-sign" />
              <p id="text">{quote}</p>
            </blockquote>
            <figcaption id="author" class="blockquote-footer">
              <cite>{author}</cite>
            </figcaption>
          </figure>
        </div>

        <button
          id="new-quote"
          className="btn float-end"
          style={{ color: "#fff", backgroundColor: color }}
          onClick={getRandomQuote}
        >
          New Quote
        </button>
      </div>
    </section>
  );
};

export default Quote;
