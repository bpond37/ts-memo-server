import express = require('express');
import postsRouter from './routes/posts'
// import cors = require('cors')

const app = express();
//req body에 json형태로 보내면 이를 파싱
app.use(express.json())
// app.use(cors())

//router posts
app.use('/api/posts', postsRouter)


app.get('/', (req,res)=>{
  res.send(
    '홈'
  )
})

const port = 4000;
app.listen(port, () => {
  console.log('listening to port %d',port);
});
