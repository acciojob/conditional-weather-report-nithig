import React from "react";

const WeatherDisplay = ({ data }) => {
  const { temperature } = data;

  // Container style
  const containerStyle = {
    maxWidth: "300px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    transition: "all 0.3s ease",
  };

  // Static color for text
  const temperatureTextStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333", // This matches rgb(51, 51, 51)
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    margin: "0"
  };

  // Dynamic color for dot indicator
  const tempColor = temperature > 20 ? "red" : "blue";

  return (
    <div style={containerStyle}>
      <p style={temperatureTextStyle}>
        Temperature: {temperature}
        <span
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: tempColor,
            display: "inline-block",
          }}
        ></span>
      </p>
    </div>
  );
};

export default WeatherDisplay;