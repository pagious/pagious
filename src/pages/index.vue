<template>
    <section class="container">
        <h1 class="title">
            Blog
        </h1>
        <ul class="posts">
            <li v-for="(post, index) in posts" :key="index" class="post">
                <nuxt-link :to="{ name: 'id', params: { id: post.id }}">
                    {{ post.title }}
                </nuxt-link>
            </li>
        </ul>
    </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    layout: 'blog',
    async asyncData () {
      let {data} = await axios.get('/api/posts')
      return {posts: data}
    },
    head () {
      return {
        title: 'Posts'
      }
    }
  }
</script>

<style scoped>
    .title {
        margin: 30px 0;
    }

    .posts {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .post {
        margin: 10px 0;
    }
</style>
