import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../../../components/header/nav/Nav";
import SubHeader from "../../../components/subHeader/SubHeader";
import MyContext from "../../../store/context";
import classes from"./SolvedRooms.module.css";

const Rooms = function () {
  const ctx = useContext(MyContext);
  const getRooms = async function (token) {
    const response = await fetch("http://localhost:5000/room", {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      ctx.setrooms(data);
    } else {
      console.log("erreur");
    }
  };
  useEffect(() => {
    const token = ctx.token;
    getRooms(token);
  }, [ctx.token]);
  return (
    <div>
      <SubHeader>
        <Nav></Nav>
        <h1>Rooms </h1>
      </SubHeader>
      <div className={classes.body}>
        <div className={classes.container}>
          {ctx.rooms.map((el) => (
            <div className={classes.card} key={el.id}>
              <div className={classes.circle}>
                <img src={`roomsImages/${el.imagePath}.jpg`} />
              </div>
              <div className={classes.content}>
                <div>
                <h3>{el.classe}</h3>
                <p>
                  {el.description}
                </p>
                <h4>{`category : ${el.type}`}</h4>
                </div>
                <Link className={classes.a} to={"/"+el.id} >Open</Link>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Rooms;
