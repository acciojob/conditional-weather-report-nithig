import React from "react";

const WeatherDisplay = ({ data }) => {
  const { temperature, conditions } = data;

  // Conditional color for temperature
  const tempColor = temperature > 20 ? "red" : "blue";

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

  const temperatureStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: tempColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px"
  };

  const conditionStyle = {
    fontSize: "1.2rem",
    color: "#333",
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      <p style={temperatureStyle}>
        {temperature}°C
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
      <p style={conditionStyle}>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;