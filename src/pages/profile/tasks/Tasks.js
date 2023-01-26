import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../../components/header/nav/Nav";
import SubHeader from "../../../components/subHeader/SubHeader";
import MyContext from "../../../store/context";
import Task from "./task/Task";
import axios from "axios";
import Modal from "../../../components/modal/Modal";
const Tasks = function () {

  const [text, settext] = useState("");
  const [title, settitle] = useState("");
  const [modal, setModal] = useState(false);
  const closeHandler = () => {
    setModal(false);
  };

  const token = localStorage.getItem("reacttoken");
  const startVMHnadler = async function () {
    const response = await fetch(
      "http://localhost:5000/room/scriptRoom/" + Params.roomId,
      {
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      settitle("you must use this ip to ssh :  ");
      settext(data.ip) ;
      setModal(true) ;
    } else {
      console.log("erreur");
    }
  };
  const Params = useParams();
  const [room, setRoom] = useState({});
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/room/" + Params.roomId, {
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setRoom(res.data);
        settasks(res.data.tasks);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [token]);

  return (
    <div>
      {modal && (
        <Modal closeHandler={closeHandler} text={text} title={title}></Modal>
      )}
      <SubHeader>
        <Nav></Nav>
        <h1>ROOM :</h1>
      </SubHeader>
      <div className="bg-room">
        <br></br>

        <h1>{room.name}</h1>
        <br></br>

        <img src="/vmCapture/vm.png"></img>
        <h3>{room.description}</h3>
        <button className="buttonVM" onClick={startVMHnadler}>
          starting thr virtual machine
        </button>
        <br></br>
      </div>
      {tasks.map((el) => {
        return <Task task={el} key={el.id}></Task>;
      })}
    </div>
  );
};

export default Tasks;
