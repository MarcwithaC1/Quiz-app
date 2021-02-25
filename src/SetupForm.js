/** @format */

import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              classname="form-input"
              min={1}
              max={50}
            />
          </div>
          {/* Category */}
          <div className="form-control">
            <label htmlFor="category">Select Category </label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">Sports</option>
              <option value="History">History</option>
              <option value="Politics">Politics</option>
            </select>
          </div>
          {/* Difficulty */}
          <div className="form-control">
            <label htmlFor="difficulty">Select Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              Can't generate questions, please try differnt options
            </p>
          )}
          <button className="submit-btn" type="submit" onClick={handleSubmit}>
            Start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
