export default function (context) {
    if (context.isServer) {
        console.log('Is Server')
        let req      = context.req
        let hostname = req.hostname
        if (hostname.startsWith('blog.')) {
            console.log(context.app.router.options.routes[0])
            context.route = context.app.router.options.routes[0]
        }
    }
}
