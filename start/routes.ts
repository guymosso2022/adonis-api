/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";
import AuthsController from "App/Controllers/Http/AuthsController";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.group(() => {
  Route.get("/cards", "NationalIdentityCardsController.index");
  Route.get("/cards/:id", "NationalIdentityCardsController.show");
  Route.put("/cards/:id", "NationalIdentityCardsController.edit");
  Route.delete("/cards/:id", "NationalIdentityCardsController.destroy");
}).middleware("auth");

Route.post("/cards", "NationalIdentityCardsController.create");
Route.post("register", "AuthsController.register");
Route.post("login", "AuthsController.login");