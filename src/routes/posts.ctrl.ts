import Post from '../models/Post';
import Joi = require('Joi');

// let postId = 1;

const posts =[
  {
    id:1,
    title:'제목',
    body:'내용',
  }
];

/* create post
POST /api/posts
{title,body}
*/

exports.write = async (req, res) => {
  //validation 
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
  })
  const result = Joi.validate(req.body, schema)
  if (result.error){
    return res.status(400).json({msg:result.error})
  }

  //write
  const post = req.body
  const {id, title, body} = post
  
  try {
    const post = await Post.create({
      id: id,
      title: title,
      body: body,
    })
    return res.status(200).json({ data: post, msg: '글 등록 성공..' });
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
}

// exports.write = (req,res) =>{
//   console.log(req)
//   const {title,body} = req.body;
//   postId += 1;
//   const post = {id:postId, title, body};
//   posts.push(post);
//   res.json(post)
// } 

/* post list 조회 
GET /api/posts
*/

exports.list = async ( req,res ) =>{
  try {
      const posts = await Post.findAll()
      return res.status(200).json({ data:posts })
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }

}

// exports.list = (req,res) =>{
//   res.json(posts)

// }

/*
특정 포스트 조회
GET /api/posts/:id
*/

exports.read = async (req, res) =>{
  const {id} = req.params
  try {
    const post = await Post.findByPk(id)
    if(!post){
      return res.status(404).json({msg: '해당하는 글이 없습니다.' })
    }
    return res.status(200).json({data:post})
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
}

// exports.read = (req,res) =>{
//   const {id} = req.params;
//   const post = posts.find(p=> p.id.toString() === id);
//   if(!post) {
//     return res.status(404).json({ msg: '포스트가 존재하지 않습니다.' });
//   }
//   res.json(post)
// }

/*
delete post
DELETE /api/posts/:id
 */

exports.remove = async (req,res) =>{
  const { id } = req.params
  // abortion 처리 어떻게?
  try {
    const post = await Post.destroy({
      where: {
        id: id
      }
    })
    if(!post){
      return res.status(404).json({msg: '해당하는 글이 없습니다.' })
    }
    return res.status(204)
  } catch (e) {
    return res.status(500).json({ msg: e.message });

  }

}
// exports.remove = (req,res) =>{
//   const {id} = req.params;
//   //해당 아이디가 몇번째인지?
//   const index = posts.findIndex(p => p.id.toString() === id);
//   //포스트가 없으면 오류 반환
//   if(index ===-1){
//     return res.status(404).json({msg:'포스트가 존재하지 않습니다.'})
//   }
//   posts.splice(index,1);
//   res.status(204);
// }

/*
update post(replace)
PUT /api/posts/:id
{title, body}
*/

exports.replace = (req,res) =>{
  const {id} = req.params;
  const index = posts.findIndex(p => p.id.toString() === id);
  if(index === -1){
    return res.status(404).json({msg:'포스트가 존재하지 않습니다.'})
  }
  posts[index] = {id, ...req.body,}
  res.json(posts[index])
  
}

/*
포스트 수정(특정 필드 변경)
PATCH /api/posts/:id
{title, body}
*/

exports.update = async (req, res) =>{

  //validation
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string()
  })
  const result = Joi.validate(req.body, schema);
  if (result.error){
    return res.status(400).json({msg:result.error})
  }

  const { id } = req.params;
  const post = req.body
  const { title, body } = post
  console.log("update...",title, body)
  try {
    const post = await Post.update({
      title: title,
      body: body,
      updatedAt: null,
    },{
      where: {
        id:id
      }
    })
    if(!post){
      return res.status(404).json({msg: '해당하는 글이 없습니다.' })
    }
    return res.status(200).json({msg:'글 수정 성공'})
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
}

// exports.update = (req,res) => {
//   //patch method 는 주어진 필드만 교체하는 메서드
//   const {id} = req.params;
//   const index = posts.findIndex(p => p.id.toString() ===id);
//   if(index === -1){
//     return res.status(404).json({msg:'포스트가 존재하지 않습니다.'})
//   }
//   //기존 값에 정보를 덮어 씌우기
//   posts[index] = {
//     ...posts[index],
//     ...req.body
//   };
//   res.json(posts[index])
// }