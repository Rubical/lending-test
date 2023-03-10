import cl from "./BackgroundImg.module.css";

const BackgroundImg = () => {
  return (
    <div className={cl.backgroundImg}>
      <div className={cl.purpleCircle}></div>
      <div className={cl.purpleCircleBig}></div>
      <div className={cl.purpleCircleSmall}></div>
      <div className={cl.purpleCircleMobile}></div>
      <div className={cl.redCircleMobile}></div>
    </div>
  );
};

export default BackgroundImg;
