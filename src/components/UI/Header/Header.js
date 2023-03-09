import cl from "./Header.module.css";

const Header = () => {
  return (
    <header className={cl.row}>
      {/*Main */}

      <div className={cl.main}>
        <div className={cl.title}>Зарабатывайте больше</div>
        <h1 className={cl.titleLogo}>с WELBEX</h1>
        <p className={cl.titleText}>Развиваем и контролируем продажи за вас</p>
      </div>

      {/*Advertising */}

      <div className={cl.advertising}>
        <div className={cl.advertsingTitle}>
          <span className={cl.advertisingTitleDefault}> Вместе с </span>
          <span className={cl.advertsingTitleStyled}>
            БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ
          </span>
          <span className={cl.advertisingTitleDefault}> мы дарим</span>
        </div>

        <div className={cl.advertisingBlock}>
          <div className={cl.advertisingBlockCard}>
            <h3 className={cl.advertisingBlockCardTitle}>ВИДЖЕТЫ</h3>
            <p className={cl.advertisingBlockCardText}>
              30 готовых <br /> решений
            </p>
          </div>
          <div className={cl.advertisingBlockCard}>
            <h3 className={cl.advertisingBlockCardTitle}>DASHBOARD</h3>
            <p
              style={{ maxWidth: "135px" }}
              className={cl.advertisingBlockCardText}
            >
              с показателями вашего бизнеса
            </p>
          </div>
          <div className={cl.advertisingBlockCard}>
            <h3 className={cl.advertisingBlockCardTitle}>SKYPE АУДИТ</h3>
            <p className={cl.advertisingBlockCardText}>
              отдела продаж
              <br /> и CRM системы
            </p>
          </div>
          <div className={cl.advertisingBlockCard}>
            <h3 className={cl.advertisingBlockCardTitle}>35 ДНЕЙ</h3>
            <p className={cl.advertisingBlockCardText}>
              использования <br /> CRM
            </p>
          </div>
        </div>

        {/*Button*/}

        <button className={cl.button}>Получить консультацию</button>
      </div>
    </header>
  );
};

export default Header;
