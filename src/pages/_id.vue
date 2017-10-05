<template>
    <section class="container">
        <h1 class="title">
            Post
        </h1>
        <h2 class="info">
            {{ post.title }}
        </h2>
        <nuxt-link class="button" to="/">
            Home
        </nuxt-link>
    </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    name: 'id',
    asyncData ({params, error}) {
      return axios.get('/api/posts/' + params.id)
        .then((res) => {
          return {post: res.data}
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Post not found'})
        })
    },
    head () {
      return {
        title: `Post: ${this.post.title}`
      }
    }
  }
</script>

<style scoped>
    .title {
        margin-top: 30px;
    }

    .info {
        font-weight: 300;
        color: #9aabb1;
        margin: 0;
        margin-top: 10px;
    }

    .button {
        margin-top: 30px;
    }
</style>
