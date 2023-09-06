const app = require('./app')
const { conn } = require('./DB_connection') 

const PORT = 3001;

conn.sync({alter:true}).then(() => {
   app.listen(PORT,() => {
       console.log('Server raised in port: ' + PORT);
    })
 })