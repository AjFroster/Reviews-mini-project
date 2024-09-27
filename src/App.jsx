import people from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const nextPerson = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prevPerson = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    setIndex(randomNumber);
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"></img>
          <span className="quote-icon">
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div>
          <button type="button" className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft></FaChevronLeft>
          </button>
          <button type="button" className="next-btn" onClick={nextPerson}>
            <FaChevronRight></FaChevronRight>
          </button>
        </div>

        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise Me!
        </button>
      </article>
    </main>
  );
};
export default App;
