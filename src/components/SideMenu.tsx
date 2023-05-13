import AutorDetail from "./AutorDetail";
import ArticlesMenu from "./ArticlesMenu";

const SideMenu = () => {
  


  return (
    <div
      //ref={sideMenuRef}
      style={{
        display: "flex",
        position: "sticky",
        flexDirection: "column",
        backgroundColor: "rgba(82, 5, 133, 0.40)",
        width: "300px",
        paddingLeft: "2%",
        paddingRight:"2%",
        height: "710px",
        borderRadius: "50px",
        justifyContent: "space-evenly",
        alignItems: "center",
        right: "10%",
        top: "120px",
        transition: "top 0.4s linear",
        //boxSizing: "border-box",
        //...isInFooterStyle
      }}
    >
      <AutorDetail />
      <ArticlesMenu />
    </div>
  );
};

export default SideMenu;
