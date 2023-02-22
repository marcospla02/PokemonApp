import server from "./src/app";
import sequelize from "./src/db";

const PORT = 3001;

sequelize.sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});
