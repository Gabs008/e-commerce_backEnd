const Sequelize = require('sequelize');

const sequelize= new Sequelize(
    'crud_staging',
    'root',
    '',
    {
        dialect:'mysql',
        host:'localhost',
        port: 3306,

    }
);



// const sequelize = new Sequelize(
//     process.env.DATABASE_NAME,
//     process.env.DATABASE_USERNAME,
//     process.env.DATABASE_PASSWORD,
//     { 
//         dialect:'mysql',
//         host:process.env.DATABASE_HOST,
//         port:process.env.DATABASE_PORT
//     }
// );

module.exports = sequelize;