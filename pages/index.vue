<template>
  <div class="home-page">
      <section class="intro">
        <h1>Get the latest Tech news!</h1>
      </section>
      <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '../components/Posts/PostList.vue'
export default {
  name: 'IndexPage',
  components: {
    PostList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  // data() {
  //   return {
  //     loadedPosts: [],
  //   }
  // },
  // created(){
  //   setTimeout(() => {
  //     this.loadedPosts = [
  //       {
  //         id: 1,
  //         title: "1st Post",
  //         previewText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa expedita, quos eligendi quisquam, provident enim officia impedit a labore tenetur eum. Beatae nemo sunt error laborum consectetur harum minus, mollitia quo laudantium fugit ab itaque praesentium eum vero doloribus quod omnis repellat debitis ad assumenda. Aut dolor commodi cupiditate sequi?",
  //         thumbnail: "https://img.etimg.com/thumb/msid-80263701,width-1070,height-580,imgsize-161986,overlay-ettech/photo.jpg"
  //       },
  //       {
  //         id: 2,
  //         title: "2nd Post",
  //         previewText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa expedita, quos eligendi quisquam, provident enim officia impedit a labore tenetur eum. Beatae nemo sunt error laborum consectetur harum minus, mollitia quo laudantium fugit ab itaque praesentium eum vero doloribus quod omnis repellat debitis ad assumenda. Aut dolor commodi cupiditate sequi?",
  //         thumbnail: "https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05"
  //       }
  //     ]
  //   }, 2000)
  // },
  // asyncData(context, callback){
  //   console.log(context)
  //   setTimeout(() => {
  //     callback(null, {
  //       loadedPosts: [
  //       {
  //         id: 1,
  //         title: "1st Post",
  //         previewText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa expedita, quos eligendi quisquam, provident enim officia impedit a labore tenetur eum. Beatae nemo sunt error laborum consectetur harum minus, mollitia quo laudantium fugit ab itaque praesentium eum vero doloribus quod omnis repellat debitis ad assumenda. Aut dolor commodi cupiditate sequi?",
  //         thumbnail: "https://img.etimg.com/thumb/msid-80263701,width-1070,height-580,imgsize-161986,overlay-ettech/photo.jpg"
  //       },
  //       {
  //         id: 2,
  //         title: "2nd Post",
  //         previewText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa expedita, quos eligendi quisquam, provident enim officia impedit a labore tenetur eum. Beatae nemo sunt error laborum consectetur harum minus, mollitia quo laudantium fugit ab itaque praesentium eum vero doloribus quod omnis repellat debitis ad assumenda. Aut dolor commodi cupiditate sequi?",
  //         thumbnail: "https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05"
  //       }
  //     ]
  //     })
  //   }, 100)    
  // }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url('~assets/images/Ed-tech-Revolution.jpg');
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}


</style>
