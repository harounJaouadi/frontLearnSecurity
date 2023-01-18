const Course = function () {
  return (
    <div className="course">
      <h1>How You Will Learn</h1>
      <p>through quizes , CTF and documentation</p>
      <div className="row">
        <div className="course-col">
          <h3>Quizes</h3>
          <p>
            You have a question and three possible response . 
            Only one is correct . 
            If you get a question right you will pass to the next one 
          </p>
        </div>
        <div className="course-col">
          <h3>Documents</h3>
          <p>
            you will find a lot of ressources here and documents concerning security specialization
          </p>
        </div>
        <div className="course-col">
          <h3>CTF</h3>
          <p>
            we will give you an ip address of a virtual machine and you will be asked to capture the flag 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Course;
