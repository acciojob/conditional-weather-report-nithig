import React from "react";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setData({ temperature: 25, conditions: "Sunny" });
  }, []);

  const appContainerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef2f3",
    margin: 0,
    padding: "20px",
    fontFamily: "Segoe UI",
  };

  return (
    <div style={appContainerStyle}>
      {data && <WeatherDisplay data={data} />}
    </div>
  );
};

export default App;