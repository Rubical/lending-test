import cl from "./Header.module.css";

const Header = () => {
  return (
    <header className={cl.row}>
      <div className={cl.main}>
        <div className={cl.title}>Зарабатывайте больше</div>
        <h1 className={cl.titleLogo}>с WELBEX</h1>
        <p className={cl.titleText}>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className={cl.advertising}>
        <h2>Вместе с бесплатной консультацией мы дарим:</h2>
        <div>
          <div>
            <h3></h3>
            <p></p>
          </div>
          <div>
            <h3></h3>
            <p></p>
          </div>
          <div>
            <h3></h3>
            <p></p>
          </div>
          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>
        <button>Получить консультацию</button>
      </div>
    </header>
  );
};

export default Header;
