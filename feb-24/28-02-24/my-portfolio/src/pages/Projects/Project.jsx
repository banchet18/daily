import "./Project.css";
import { FaGithub } from "react-icons/fa";
const Project = () => {
  return (
    <>
      <div className="projectPage">
        <div className="card first">
          <div>
            <img
              src="https://t4.ftcdn.net/jpg/04/97/80/99/360_F_497809944_FMo3DO6j7XSlb9rZKOlnqaaWoJhuZXBm.jpg"
              alt=""
            />
          </div>
          <div className="weatherName">
            Redux Cart
            <div className="projectsicon">
              <span>
                <FaGithub />
              </span>
              <span>Live</span>
            </div>
          </div>
        </div>
        <div className="card first">
          <div>
            <img
              src="https://t4.ftcdn.net/jpg/04/97/80/99/360_F_497809944_FMo3DO6j7XSlb9rZKOlnqaaWoJhuZXBm.jpg"
              alt=""
            />
          </div>
          <div></div>
        </div>
        <div className="card third">
          <div>
            <img
              src="https://t4.ftcdn.net/jpg/04/97/80/99/360_F_497809944_FMo3DO6j7XSlb9rZKOlnqaaWoJhuZXBm.jpg"
              alt=""
            />
          </div>
          <div></div>
        </div>
        <div className="card third">
          <div>
            <img
              src="https://t4.ftcdn.net/jpg/04/97/80/99/360_F_497809944_FMo3DO6j7XSlb9rZKOlnqaaWoJhuZXBm.jpg"
              alt=""
            />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Project;
