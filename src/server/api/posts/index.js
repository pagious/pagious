import {Router} from 'express'
import fs from 'fs'
import Liquid from 'liquid-node'

// Mock posts
import posts from './data.json'

const engine = new Liquid.Engine()
const router = Router()

engine.registerFileSystem(new Liquid.LocalFileSystem('src/content/theme/active/blog'))

// Private

let getPostData = function (id) {
    if (id >= 0) {
        var data = posts.find(x => x.id === id)
        if (!data) {
            return null
        }
        else {
            return {
                post: data
            }
        }
    }
}

let preparePage = function (templateName, context, req, res, next) {
    engine.fileSystem.readTemplateFile(templateName).then(function (src) {
        engine
            .parseAndRender(src, context)
            .then(function (result) {
                res.json({
                    post: {
                        html : result,
                        title: 'Pagious'
                    }
                })
            })
    })
}

// Routes

// GET all posts.
router.get('/posts', function (req, res, next) {
    let context = {
        posts: posts
    }
    preparePage('index', context, req, res, next)
})

// GET post by ID.
router.get('/posts/:id', function (req, res, next) {
    const id = parseInt(req.params.id)
    let context = getPostData(id)
    preparePage('post', context, req, res, next)
})

export default router
