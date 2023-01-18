import { useContext, useEffect, useState } from "react";
import "./profile.css";
import MyContext from "../../store/context";
const Profile = function () {
  // const [user, setUser] = useState(null);
  const ctx = useContext(MyContext);
  // useEffect(() => {
  //   const getUser = async function () {
  //     try {
        
  //       const getUser = async function () {
  //         const response = await fetch("http://localhost:5000/user", {
  //           method: "GET",

  //           headers: {
  //             "Content-type": "application/json; charset=UTF-8",
  //             Authorization: `Bearer ${ctx.token}`,
  //           },
  //         });
  //         const data = await response.json();
  //         setUser(data.user);
  //       };
  //     } catch (error) {}
  //   };
  //   getUser();
  // }, []);

  console.log(ctx.user);

  return (
    <main className="container">
      <div className="card">
        <img
          src="https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"
          alt="User image"
          className="card__image"
        />
        <div className="card__text">
          <h2>dsdsdssd</h2>
          <p>email</p>
        </div>
        <ul className="card__info">
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
        </ul>
        <div className="card__action">
          <button className="card__action__button card__action--follow">
            disconnect
          </button>
          <button className="card__action__button card__action--message">
            start
          </button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
