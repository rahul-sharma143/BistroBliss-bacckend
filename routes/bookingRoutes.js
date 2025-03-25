import { postBooking } from "../controller/bookingContoller.js";

export default (app) => {
    app.post("/booking", postBooking); 
  };