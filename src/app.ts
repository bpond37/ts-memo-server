import express = require('express');
import postsRouter from './routes/posts'
import * as DB from './models/index';
import Post from './models/Post';
// import cors = require('cors')



async function runServer(){
  const sequelize = DB.init()
  const app = express();

  app.use(express.json()) //req body에 json형태로 보내면 이를 파싱

  //router posts
  app.use('/api/posts', postsRouter)
  // app.use(cors())

   app.get('/', (req,res)=>{
     res.send(
       '홈'
     )
   })
   
   const port = 4000;
   app.listen(port, () => {
     console.log('listening to port %d',port);
   });

  await sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  await sequelize.sync({
    force: true
  });
  
  
  Post.create(
    {
      id:1,
      title:'aa',
      body:'aa',
    }
  )
  
  Post.create(
    {
      id:2,
      title:'aa',
      body:'aa',
    }
  )
}

runServer()