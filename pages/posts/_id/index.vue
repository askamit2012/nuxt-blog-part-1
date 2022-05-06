<template>
  <div class="single-post-page">
      <section class="post">
          <h1 class="post-title">{{loadedPost.title}}, Id: {{$route.params.id}}</h1>
          <div class="post-details">
              <div class="post-detail">Last updated on {{loadedPost.updatedDate}}</div>
              <div class="post-detail">{{loadedPost.author}}</div>
          </div>
          <p class="post-content">{{loadedPost.content}}</p>
      </section>
      <section class="post-feedback">
          <p>Let me Know what You Feel about The Post, Send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a></p>
      </section>
  </div>
</template>

<script>
export default {
    asyncData(context, callback){
      setTimeout(() => {
        callback(null, {
          loadedPost: {
          id: 1,
          title: "1st Post (ID:  " + context.route.params.id + ")",
          author: "Anukta S Kadakol",
          updatedDate: new Date(),
          content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ipsam quo, sed explicabo quis aperiam omnis fugiat, inventore veritatis quam, reiciendis exercitationem corrupti quod pariatur commodi. Voluptates doloremque aperiam voluptas sunt quibusdam, omnis quia minus minima assumenda dolorem quo fugit porro molestias iure totam nobis perspiciatis pariatur atque odio illum. Consequuntur nemo, error ea delectus laboriosam blanditiis aspernatur ex et minus mollitia deserunt magnam quisquam amet a iusto ab harum, rerum doloribus repellat voluptatum perspiciatis. Ratione reiciendis optio ea. Eos delectus facilis sed at alias, perferendis, id nobis quod voluptate aspernatur expedita atque? Nisi, nulla provident, quod ipsam velit officiis ab expedita temporibus similique minus placeat! Suscipit mollitia, inventore doloribus deserunt debitis minus similique consectetur asperiores impedit, neque laboriosam nulla cum perspiciatis odio aperiam voluptatum laudantium odit dicta voluptatibus vel unde! Pariatur aperiam est maiores assumenda! Eveniet, impedit aliquid! Assumenda, ea! Sit eum nam, exercitationem optio excepturi, laborum assumenda ullam aliquid vero numquam, voluptatibus laudantium inventore. Corporis non expedita et provident amet perferendis ea labore eligendi deleniti incidunt eum ut odio, illum nihil sunt, facilis, animi excepturi natus similique. Molestias magni cumque qui dolorum sed harum omnis corporis quidem voluptate praesentium obcaecati quam architecto, cum maxime dolores soluta in tenetur.",
          previewText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa expedita, quos eligendi quisquam, provident enim officia impedit a labore tenetur eum. Beatae nemo sunt error laborum consectetur harum minus, mollitia quo laudantium fugit ab itaque praesentium eum vero doloribus quod omnis repellat debitis ad assumenda. Aut dolor commodi cupiditate sequi?",
          thumbnail: "https://img.etimg.com/thumb/msid-80263701,width-1070,height-580,imgsize-161986,overlay-ettech/photo.jpg"
        },
        })
      }, 1000)
    }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>