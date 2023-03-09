import cl from "./NavBar.module.css";
import logo from "./logo.svg";
import tgIcon from "./tg-icon.svg";
import viberIcon from "./viberIcon.svg";
import whatsappIcon from "./whatsappIcon.svg";

const NavBar = () => {
  return (
    <nav className={cl.row}>
      {/* Logo */}

      <div className={cl.logoBlock}>
        <img className={cl.logo} src={logo}></img>
        <p className={cl.logoSlogan}>
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
      </div>

      {/* Link list */}

      <ul className={cl.list}>
        <li className={cl.item}>
          <a className={cl.link} href="#!">
            Услуги
          </a>
        </li>
        <li className={cl.item}>
          <a className={cl.link} href="#!">
            Виджеты
          </a>
        </li>
        <li className={cl.item}>
          <a className={cl.link} href="#!">
            Интеграции
          </a>
        </li>
        <li className={cl.item}>
          <a className={cl.link} href="#!">
            Кейсы
          </a>
        </li>
        <li className={cl.item}>
          <a className={cl.link} href="#!">
            Сертификаты
          </a>
        </li>
      </ul>

      {/*Contacts */}

      <div className={cl.contacts}>
        <p className={cl.phoneNumber}>
          <a className={cl.phoneNubmerLink} href="tel:75555555555">
            +7 555 555-55-55
          </a>
        </p>
        <div className={cl.messengers}>
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
      </div>
    </nav>
  );
};

export default NavBar;
