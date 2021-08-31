import React from "react";
import { defaults } from "../config/colors";

const AllDayHeader = ({ title = "" }) => {
  return (
    <div style={styles.container}>
      <p style={styles.characters}>{title}</p>
    </div>
  );
};

const styles = {
  characters: {
    fontFamily: '"Bungee", cursive',
    color: defaults.secondary,
  },
  container: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-evenly",
  },
};

export default AllDayHeader;
