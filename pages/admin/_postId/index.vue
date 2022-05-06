<template>
  <div class="admin-post-page">
      <section class="update-form">
          <AdminPostForm :post="loadedPost" />
      </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
    components: {
        AdminPostForm
    },
    layout: 'admin',
    data() {
        return {
            loadedPost: {
                author: "Amit Kumar",
                title: "Intro to web3.0",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vitae magni? Laborum, fuga corporis. Doloremque vero quaerat corporis, temporibus est provident mollitia ullam, blanditiis sint magnam voluptates soluta harum et?",
                thumbnailLink: "https://i0.wp.com/www.dailyexcelsior.com/wp-content/uploads/2022/02/technology.jpg?resize=708%2C398&ssl=1"
            }
        }
    }
}
</script>

<style scoped>
    .update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>