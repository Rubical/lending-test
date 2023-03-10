import Messengers from "../../Messengers/Messengers";
import cl from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className={cl.row}>
        <div
          style={{ marginRight: "98px" }}
          className={`${cl.column} ${cl.aboutCompany}`}
        >
          <h4 className={cl.title}>О КОМПАНИИ</h4>
          <ul className={cl.list}>
            <li className={cl.item}>
              <a className={cl.link} href="#!">
                Партнёрская программа
              </a>
            </li>
            <li className={cl.item}>
              <a className={cl.link} href="#!">
                Вакансии
              </a>
            </li>
          </ul>
        </div>
        <div style={{ marginRight: "52px" }} className={cl.column}>
          <h4 className={cl.title}>МЕНЮ</h4>
          <ul className={cl.list}>
            <li className={cl.item}>
              <a className={cl.link} href="#!">
                Расчёт стоимости
              </a>
            </li>
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
                Наши клиенты
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{ marginRight: "163px", paddingTop: "37px" }}
          className={cl.column}
        >
          <ul className={cl.list}>
            <li className={cl.item}>
              <a className={cl.link} href="#!">
                Кейсы
              </a>
            </li>
            <li className={cl.item}>
              <a className={cl.link} href="#!">
                Благодарственные письма
              </a>
            </li>
            <li className={cl.item}>
              <a className={cl.link} href="#!">
                Сертификаты
              </a>
            </li>
            <li className={cl.item}>
              <a className={cl.link} href="#!">
                Блог на Youtube
              </a>
            </li>
            <li className={cl.item}>
              <a className={cl.link} href="#!">
                Вопрос / Ответ
              </a>
            </li>
          </ul>
        </div>
        <div className={`${cl.column} ${cl.contacts}`}>
          <h4 className={cl.title}>КОНТАКТЫ</h4>
          <ul className={cl.list}>
            <li style={{ marginBottom: "12px" }} className={cl.item}>
              <a className={cl.link} href="#!">
                +7 555 555-55-55
              </a>
            </li>
            <li className={cl.item}>
              <Messengers colGap={"14px"} justContent={"flex-end"} />
            </li>
            <li style={{ marginTop: "12px" }} className={cl.item}>
              Москва, Путевой проезд 3с1, к 902
            </li>
          </ul>
        </div>
      </div>
      <div className={cl.copyright}>
        <p style={{ marginBottom: "5px" }}>©WELBEX 2022. Все права защищены.</p>
        <p style={{ textDecoration: "underline" }}>
          <a className={cl.link} href="#!">
            Политика конфиденциальности
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
