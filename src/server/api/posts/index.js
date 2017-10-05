import { Router } from 'express'

// Mock posts
import posts from './data.json'

const router = Router()

/* GET posts listing. */
router.get('/posts', function (req, res, next) {
  res.json(posts)
})

/* GET post by ID. */
router.get('/posts/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0) {
    var post = posts.find(x => x.id == id)
    if (!post) {
      res.sendStatus(404)
    }
    else {
      res.json(post)
    }
  } else {
    res.sendStatus(404)
  }
})

export default router
