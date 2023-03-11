import cl from "./Footer.module.css";
import tgIcon from "./../../../imgs/tg-icon.svg";
import viberIcon from "./../../../imgs/viber-icon.svg";
import whatsappIcon from "./../../../imgs/whatsapp-icon.svg";

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className={cl.row}>
        <div className={`${cl.column} ${cl.aboutCompany}`}>
          <h4 className={cl.title}>О компании</h4>
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
        <div className={`${cl.column} ${cl.menu}`}>
          <h4 className={cl.title}>Меню</h4>
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
        <div className={`${cl.column} ${cl.additionalInfo}`}>
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
        <div className={`${cl.column} ${cl.additionalInfoMobile}`}>
          <ul className={cl.list}>
            <li className={cl.item}>
              <a className={cl.link} href="#!">
                Благодарность клиентов
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
          <h4 className={cl.title}>Контакты</h4>
          <ul className={cl.list}>
            <li className={`${cl.item}  ${cl.phoneNumber}`}>
              <a className={cl.link} href="tel:75555555555">
                +7 555 555-55-55
              </a>
            </li>
            <li className={cl.item}>
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
            </li>
            <li className={`${cl.item} ${cl.address}`}>
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
