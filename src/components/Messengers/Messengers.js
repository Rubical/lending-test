import tgIcon from "./tg-icon.svg";
import viberIcon from "./viberIcon.svg";
import whatsappIcon from "./whatsappIcon.svg";
import cl from "./Messengers.module.css";

const Messengers = ({ colGap, justContent }) => {
  return (
    <div
      style={{ columnGap: colGap, justifyContent: justContent }}
      className={cl.messengers}
    >
      <a style={{ paddingTop: "2px" }} href="#!">
        <img src={tgIcon}></img>
      </a>
      <a style={{ paddingTop: "1px" }} href="#!">
        <img src={viberIcon}></img>
      </a>
      <a href="#!">
        <img src={whatsappIcon}></img>
      </a>
    </div>
  );
};

export default Messengers;
