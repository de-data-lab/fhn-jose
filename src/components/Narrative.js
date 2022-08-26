import React from "react";

import "../assets/Narrative.css";
import sharita from "../assets/images/sharita.jpeg";
import amanda from "../assets/images/amanda.jpeg";

export default function Narrative() {
  return (
    <>
      <div className="container">
        <h2 className="py-3">Power in Financial Planning</h2>
        <div className="card p-5 mb-3">
          <div className="d-flex">
            <div className="d-flex align-items-center flex-column pr-5">
              <img
                src={sharita}
                className="img-size"
                alt="Sharita M. Humphrey profile"
              ></img>
              <h3 className="text-center">
                Sharita M. Humphrey, Finance Expert and Money Mentor
              </h3>
            </div>
            <div className="d-flex align-items-center flex-column">
              <h5>
                Several years ago, Humphrey was a homeless single mom with two
                small children living in a motel after being evicted...
              </h5>
              <br></br>
              <blockquote className="quote-width">
                <h6 className="italic">
                  “At the time, I was living paycheck to paycheck and had no
                  savings, and my credit score plummeted because of the eviction
                  and outstanding collections, credit and medical debts...”
                </h6>
                <h6 className="italic">
                  “...I made up my mind to learn as much as I could about
                  personal finance, credit, debt elimination and saving”
                </h6>
              </blockquote>
              <h5>
                Humphrey started to save a portion of her paycheck each month,
                created a simple budget, made steps to rebuild her credit and
                eliminated her debt...
              </h5>
              <br></br>
              <blockquote className="quote-width">
                <h6 className="italic">
                  “It took me several months to start to feel financially
                  confident, but all of the hard work was worth it..."
                </h6>
                <h6 className="italic">
                  “...I would tell other women in a similar situation to{" "}
                  <strong>never lose hope</strong>,” Humphrey said.
                </h6>
              </blockquote>
            </div>
          </div>
          <p className="text-right">Authored by: Jaime Catmull</p>
          <a
            className="text-right"
            href="https://www.gobankingrates.com/money/financial-planning/inspiring-stories-women-who-overcame-financial-hardship/"
          >
            View full story
          </a>
        </div>
      </div>
      <div className="container">
        <h2 className="py-3">Preparing for Unexpected Changes</h2>
        <div className="card p-5 mb-3">
          <div className="d-flex">
            <div className="d-flex align-items-center flex-column">
              <h5>
                Disability comes quickly and very unexpectedly. One moment you
                are healthy, another moment you are having open heart surgery -
                at least that's what happened to Amanda...
              </h5>
              <br></br>
              <blockquote className="quote-width">
                <h6 className="italic">
                  “At the time I was 29, an avid runner, cyclist, and fitness
                  aficionado. In other words, healthy as a horse, and certainly
                  not thinking I would end up in the hospital for almost a
                  year...”
                </h6>
                <h6 className="italic">
                  “...I was the one in a million person that caught a virus
                  which infects blood cells and essentially tears organs apart."
                </h6>
              </blockquote>
              <h5>
                Amanda had purchased a disability insurance policy prior to
                becoming ill. 90% of her income was covered for the ten months
                she couldn’t work, preventing her from going into excessive debt
                or losing her home.
              </h5>
              <br></br>
              <blockquote className="quote-width">
                <h6 className="italic">
                  "Unfortunately many Americans are not in the same position of
                  preparedness that I was many years ago..."
                </h6>
              </blockquote>
              <blockquote className="quote-width">
                <h6 className="italic">
                  "There are nearly 100
                  million American workers today that don’t have disability
                  insurance and 72% of them don’t have enough savings to cover
                  even short-term emergencies, let alone a longer period of
                  disability."
                </h6>
              </blockquote>
              <blockquote className="quote-width">
                <h6 className="italic">
                  "What financial health means to me is being{" "}
                  <strong>aware, educated, and prepared.</strong>"
                </h6>
              </blockquote>
            </div>
            <div className="d-flex align-items-center flex-column pl-5">
              <img
                src={amanda}
                className="img-size"
                alt=" Amanda K. Letterman profile"
              ></img>
              <h3 className="text-center">
                Amanda K. Letterman, Global Business & Operations Exec
              </h3>
            </div>
          </div>
          <p className="text-right">Authored by: Amanda K. Letterman</p>
          <a
            className="text-right"
            href="https://www.linkedin.com/pulse/what-financial-health-means-me-amanda-k-lettmann-mba-cpcc/"
          >
            View full story
          </a>
        </div>
      </div>
    </>
  );
}
