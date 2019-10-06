const Sequelize = require('sequelize');
const sequelize = new Sequelize('twelve', 'sa', 'Qwer@1234', {
  host: '192.168.1.100',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize
  .sync()
  .then(() =>
    User.create({
      username: 'janedoe',
      birthday: new Date(1980, 6, 20)
    })
  )
  .then(jane => {
    console.log(jane.toJSON());
  });
