import { Router } from 'express'

import posts from './posts/index'

const router = Router()

// Add POSTS Routes
router.use(posts)

export default router
