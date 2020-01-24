import * as express from 'express'
import * as multer from 'multer'

const upload = multer({ dest: 'uploads/' })

const memosCtrl = require('./memo.ctrl')

const router = express.Router();

router.get('/:userId', memosCtrl.list)
router.post('/',upload.none(), memosCtrl.write)
// router.get('/:id', memosCtrl.read);
router.delete('/:id', memosCtrl.remove);
// router.put('/:id', memosCtrl.replace);
router.patch('/:id', memosCtrl.update);

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