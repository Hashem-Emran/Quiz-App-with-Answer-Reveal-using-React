import React, { useState } from "react";
import {data} from '../../assets/data';

  const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const question = data[index];


  const handleOptionClick = (option) => {
    if (!showAnswer) {
      setSelectedOption(option);
      setShowAnswer(true);
    }
  };


  const handleNext = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      alert("You have completed the quiz!");
      setIndex(0);
    }

  };

  return (
    <div className="bg-amber-900 w-full h-screen flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Quiz App</h1>
        <hr className="border-t-2 border-black mb-4" />
        <p className="text-gray-700 mb-6">
          {index + 1}. {question.question}
        </p>

        <ul className="space-y-3 mb-6 list-disc list-inside">
          {question.options.map((option, i) => {
            let className =
              "border border-gray-300 rounded px-3 py-2 cursor-pointer hover:bg-amber-100";

            if (showAnswer) {
              if (option === question.answer) {
                className += " bg-green-300 border-green-600 font-bold";
              } else if (option === selectedOption) {
                className += " bg-red-300 border-red-600 font-bold";
              } else {
                className += " opacity-50 cursor-default";
              }
            }
            return (
              <li
                key={i}
                className={className}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            );
          })}
        </ul>

        <div className="flex justify-between items-center">
          <button
            onClick={handleNext}
            type="button"
            className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800"
            disabled={!showAnswer}
          >
            Next
          </button>
          <span className="text-sm text-gray-600">
            {index + 1} of {data.length} questions
          </span>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
