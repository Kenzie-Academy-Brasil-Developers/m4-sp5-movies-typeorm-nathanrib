import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("database connected");
    const nodeEnv: string | undefined = process.env.NODE_ENV;
    console.log("variavel de ambiente é", nodeEnv);
    app.listen(3000, () => {
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
