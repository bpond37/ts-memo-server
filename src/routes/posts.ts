import * as express from 'express'

const router = express.Router();

router.get('/abc', (req,res)=>{
  res.send ('abc..')
})

router.get('/:id',(req,res)=>{
  const id = req.params.id;
  const method = req.method;
  const path = req.path;
  res.send(
    `${id},${method},${path}`
  )
})

export default router