import server from "./src/app";
import sequelize from "./src/db";

const PORT = 3001;

sequelize.sequelize.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`I'm listening at ${PORT}`); // eslint-disable-line no-console
  });
});
