exports.daysBetween = (date1, date2) => {
  let date1_ms = date1.getTime();
  let date2_ms = date2.getTime();
  let difference_ms = date2_ms - date1_ms;
  difference_ms = difference_ms / 1000;
  difference_ms = difference_ms / 60;
  let minutes = Math.floor(difference_ms % 60);
  difference_ms = difference_ms / 60;
  let hours = Math.floor(difference_ms % 24);
  let days = Math.floor(difference_ms / 24);

  return {
    days,
    hours,
    minutes
  };
};