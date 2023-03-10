import cl from "./BackgroundImg.module.css";

const BackgroundImg = () => {
  return (
    <>
      <div className={cl.purpleBlur}></div>
      <div className={cl.redBlur}></div>
      <div className={cl.purpleCircle}></div>
      <div className={cl.purpleCircleBig}></div>
      <div className={cl.purpleCircleSmall}></div>
    </>
  );
};

export default BackgroundImg;
