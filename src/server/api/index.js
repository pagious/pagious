import { Router } from 'express'

import posts from './posts'

const router = Router()

// Add POSTS Routes
router.use(posts)

export default router
