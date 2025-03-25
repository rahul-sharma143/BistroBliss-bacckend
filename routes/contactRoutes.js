import { postContact } from "../controller/contactController.js";

export default (app) => {
    app.post("/contactus", postContact); 
  };