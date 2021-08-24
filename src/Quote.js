import React from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

const Quote = ({ randomQuote, randomColor, getRandomQuote }) => {
  const { quote, author } = randomQuote;
  return (
    <section>
      <div
        id="quote-box"
        className="card text-center"
        style={{ color: randomColor }}
      >
        <div className="card-body">
          <button
            id="new-quote"
            className="btn"
            style={{ color: "#fff", backgroundColor: randomColor }}
            onClick={getRandomQuote}
          >
            Get Quote
          </button>
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
      </div>
    </section>
  );
};

export default Quote;
