const CentralBody = ({ children }: any) => {
  return (
    
      <div
        style={{
          display: "flex",
          backgroundColor: "#1E1E1E",
          width: "100%",
          flexDirection: "row",
          justifyContent:"flex-start",
          marginTop:"100px",
          
        }}
      >
        {children}
      </div>

  );
};

export default CentralBody;
