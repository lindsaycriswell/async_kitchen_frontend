import React from "react";

const TimeParser = props => {
  let time = props.time
    .toString()
    .split(" ")[4]
    .split(":");

  let hour = parseInt(time[0], 10);
  let minute = time[1];
  let amPm = " A.M.";

  if (hour === 0) {
    hour += 12;
  } else if (hour === 12) {
    amPm = " P.M.";
  } else if (hour > 12) {
    hour -= 12;
    amPm = " P.M.";
  }

  console.log(hour, minute, amPm);
  return (
    <div style={{ display: "inline" }}>
      {hour}:{minute}
      {amPm}
    </div>
  );
};

export default TimeParser;
