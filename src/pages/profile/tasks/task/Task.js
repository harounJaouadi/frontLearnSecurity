import { useRef, useState } from "react";
import Modal from "../../../../components/modal/Modal";
import "./Task.css";
const Task = function (props) {
  const [text, settext] = useState("");
  const [title, settitle] = useState("");
  const [modal, setModal] = useState(false);
  const closeHandler = () => {
    setModal(false);
  };

  const elRef = useRef(new Array());
  const token = localStorage.getItem("reacttoken");
  const onSubmitHandler = async function (e) {
    e.preventDefault();
    // console.log(elRef.current[0].value) ;
    console.log(elRef);
    const answer = props.task.questions.map((el, index) => {
      return {
        id: el.id,
        answer: elRef.current[index].value,
      };
    });
    console.log(answer);

    const response = await fetch(
      "http://localhost:5000/task/" + props.task.id,
      {
        method: "PATCH",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(answer),
      }
    );
    const data = await response.json();
    if (data.taskSolved == true) {
      console.log("solved") ;
      settitle("you solved the task");
      // alert("you solved the task ");
      setModal(true);
    } else {
      const solved = data.solved;
      console.log(solved[0]);
      if (solved.length == 0) {
        setModal(true);
        settitle("you didn't solve any question");
        settext("");
        // alert("you didn't solve any task ");
      } else {
        let text = "you have solved only ";
        for (let i = 0; i < solved.length; i++) {
          text = text + "question " + solved[i];
        }
        setModal(true);
        settitle("you didn't solve the hole task");
        settext(text);
      }
    }
  };

  return (
    <div className="body1">
      {modal && (
        <Modal closeHandler={closeHandler} text={text} title={title}></Modal>
      )}
      <form className="form">
        <div className="task-name">
          <h3>{props.task.name}</h3>
        </div>
        {props.task.questions.map((question) => {
          return (
            <div key={question.id}>
              <label htmlFor={question.name}>{question.name}</label>
              <input
                type="text"
                id={question.id}
                name={question.name}
                ref={(element) => elRef.current.push(element)}
              />
              <br />
            </div>
          );
        })}

        <button type="submit" onClick={onSubmitHandler}>
          submit task
        </button>
      </form>
    </div>
  );
};
export default Task;
