<template>
    <section>
        <h1 style="font-size: 24px; color: #0c0; font-weight: 700;">Blog Page</h1>
        <html-parser v-html="post.html"></html-parser>
    </section>
</template>

<script>
    import HtmlParser from '~/components/common/HtmlParser.vue'
    import axios from '~/plugins/axios'
    import Config from '~/content/theme/active/config.json'

    // private

    let getStyle = function () {
        let stylesToInclude = Config.styles || []
        let output          = []
        stylesToInclude.forEach(function (styleToInclude) {
            output.push({
                'rel' : 'stylesheet',
                'href': styleToInclude
            })
        })
        return output
    }

    // public

    export default {
        layout    : 'blog',
        name      : 'id',
        components: {
            HtmlParser
        },
        asyncData({params, error}) {
            return axios.get('/api/posts/' + params.id)
                .then((res) => {
                    return res.data
                })
                .catch(e => {
                    error({statusCode: 404, message: 'Post not found'})
                })
        },
        head() {
            return {
                title: this.post.title,
                meta : [
                    {name: 'description', c: 'About me', id: 'desc'}
                ],
                link : getStyle()
            }
        }
    }
</script>

