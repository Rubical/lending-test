import cl from "./NavBar.module.css";
import logo from "./logo.svg";
import Messengers from "../../Messengers/Messengers";

const NavBar = () => {
  return (
    <nav className={cl.row}>
      {/* Logo */}

      <div className={cl.logoBlock}>
        <img className={cl.logo} src={logo}></img>
        <p className={cl.logoSlogan}>
          крупный интегратор CRM
          <br /> в Росcии и ещё 8 странах
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
        <Messengers colGap={"34px"} />
      </div>
    </nav>
  );
};

export default NavBar;
