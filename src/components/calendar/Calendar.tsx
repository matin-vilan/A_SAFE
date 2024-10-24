import React from "react";
import DatePicker, { DatepickerType } from "react-tailwindcss-datepicker";

const Calendar = (props: DatepickerType) => {
  return <DatePicker {...props} />;
};

export default Calendar;
