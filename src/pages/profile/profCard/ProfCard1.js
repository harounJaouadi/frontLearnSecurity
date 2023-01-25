import Score3 from "../score/Score3";
import "./ProfCard.css";
const ProfCard1 = function () {


  return (
    <main className="container2">
      <div className="card">
        <img
          src="/ProfImages/prof2.jpg"
          alt="User image"
          className="card__image"
        />
        <div className="card__text">
          <h2>mike</h2>
          <p>mike@email.com</p>
        </div>
        {/* <ul className="card__info">
          <li>
            <span className="card__info__stats">1</span>
            <span>{"scoreweb"}</span>
          </li>
          <li>
            <span className="card__info__stats">47</span>
            <span>{"scoreNetwork"}</span>
          </li>
          <li>
            <span className="card__info__stats">20</span>
            <span>{"scoreOther"}</span>
          </li>
        </ul> */}
        <div className="card__action">
          {/* <button className="card__action__button card__action--follow">
            disconnect
          </button>
          <button className="card__action__button card__action--message">
            start
          </button> */}
          <Score3></Score3>
        </div>
      </div>
    </main>
  );
};

export default ProfCard1;