import express from "express";
import APIController from "../controller/APIController";

let router = express.Router();

const initAPIRoute = (app) => {
  router.get("/users", APIController.getAllUsers); // method GET => READ data
  router.post("/create-user", APIController.createNewUser); //methood POST => create data
  router.put("/update-user", APIController.updateUser); //methood put => update Edit data
  router.delete("/delete-user/:id", APIController.deleteUser); //methood delete => update data

  return app.use("/api/v1", router);
};

export default initAPIRoute;
