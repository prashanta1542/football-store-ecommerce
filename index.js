const express=require('express')
const app=express();
const port = 2300
const db=require('./db');
const user=require('./models/User');
const sequelize = require('./db');
const bodyParser=require('body-parser');
const userRoutes=require('./routes/users');
const postRoutes=require('./routes/posts');
//sync all models
sequelize.sync({alter:true})
  .then(()=>{
    console.log('All models were synchronous successfully');
  })
  .catch(err=>{
    console.log('Error syncing models: ',err);
  });
//global middleware
app.use(bodyParser.json());

//Routes
app.use('/api',userRoutes);
app.use('/api/posts',postRoutes);

app.listen (port,()=>{
    console.log(`App is running on port :${port}`);
})