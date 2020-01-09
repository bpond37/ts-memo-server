import * as express from 'express'

const postsCtrl = require('./posts.ctrl')

const router = express.Router();

router.get('/', postsCtrl.list)
router.post('/',postsCtrl.write)
router.get('/:id', postsCtrl.read);
router.delete('/:id', postsCtrl.remove);
router.put('/:id', postsCtrl.replace);
router.patch('/:id', postsCtrl.update);

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