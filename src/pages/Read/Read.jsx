import React from "react";
import "./Read.css";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import HanumanChalisa from "../../content/chalisa";
const Read = () => {
  const renderLines = (start, end) => {
    const lines = [];

    for (let i = start; i <= end; i++) {
      lines.push(
        <p key={i} className="read-book-line">
          {HanumanChalisa[`CHALISACH${i}`]}
        </p>
      );
    }

    return lines;
  };
  return (
    <>
      <HomeLayout>
        <div className="d-flex gap-2 p-3 read-div">
          <div className="read-book-div">
            <div className="p-5 read-book-content ">
              <h1 className="read-book-heading">{HanumanChalisa.CHALISATT}</h1>
              <div>
                <p className="read-book-line">{HanumanChalisa.CHALISAT1}</p>
                <p className="read-book-line">{HanumanChalisa.CHALISAT2}</p>
              </div>
              <div>
                <p className="read-book-line">{HanumanChalisa.CHALISAT3}</p>
                <p className="read-book-line">{HanumanChalisa.CHALISAT4}</p>
              </div>
            </div>

            <div className="text-center">
              <h1 className="read-book-heading">{HanumanChalisa.CHALISACHT}</h1>
              {renderLines(1, 4)}
            </div>
            <div className="text-center render-line-div">
              {renderLines(5, 16)}
            </div>
            <div className="text-center render-line-div-part-2">
              {renderLines(17, 28)}
            </div>
            <div className="text-center render-line-div-part-3">
              {renderLines(29, 40)}
            </div>
            <div className="text-center render-line-div-part-r">
              {renderLines(41, 52)}
            </div>
            <div className="text-center render-line-div">
              {renderLines(53, 64)}
            </div>
            <div className="text-center render-line-div-part-3">
              {renderLines(65, 76)}
            </div>
            <div className="text-center render-line-div-part-3 mb-5">
              {renderLines(77, 80)}
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default Read;
