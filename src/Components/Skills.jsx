import reactlogo from "../assets/icons/react.svg";
import github from "../assets/icons/github.svg";
import htmllogo from "../assets/icons/html-colored.svg";
import csslogo from "../assets/icons/css.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import js from "../assets/icons/js.svg";
import node from "../assets/icons/nodejs.svg";

export default function Skills() {
  return (
    <section>
      <h3>My Toolkit</h3>
      <ul>
        <li>
          <img src={htmllogo} alt="html-logo" width={75} />
        </li>
        <li>
          <img src={csslogo} alt="css-logo" width={75} />
        </li>
        <li>
          <img src={js} alt="js-logo" width={75} />
        </li>
        <li>
          <img src={node} alt="node-logo" width={75} />
        </li>
        <li>
          <img src={bootstrap} alt="bootstrap-logo" width={75} />
        </li>
        <li>
          <img src={reactlogo} alt="react-logo" width={75} />
        </li>
        <li>
          <img src={github} alt="github-logo" width={75} />
        </li>
      </ul>

    </section>
  )
}