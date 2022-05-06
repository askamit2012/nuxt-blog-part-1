<template>
  <div class="posts-page">
      <PostList :posts="posts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue'
export default {
    components: {
        PostList
    },
    // data(){
    //     return {
    //         posts: []
    //     }
    // },
    // created(){
    //     this.posts = [
    //             {
    //                 id: 1,
    //                 title: "1st Post",
    //                 previewText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa expedita, quos eligendi quisquam, provident enim officia impedit a labore tenetur eum. Beatae nemo sunt error laborum consectetur harum minus, mollitia quo laudantium fugit ab itaque praesentium eum vero doloribus quod omnis repellat debitis ad assumenda. Aut dolor commodi cupiditate sequi?",
    //                 thumbnail: "https://img.etimg.com/thumb/msid-80263701,width-1070,height-580,imgsize-161986,overlay-ettech/photo.jpg"
    //             },
    //             {
    //                 id: 2,
    //                 title: "2nd Post",
    //                 previewText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa expedita, quos eligendi quisquam, provident enim officia impedit a labore tenetur eum. Beatae nemo sunt error laborum consectetur harum minus, mollitia quo laudantium fugit ab itaque praesentium eum vero doloribus quod omnis repellat debitis ad assumenda. Aut dolor commodi cupiditate sequi?",
    //                 thumbnail: "https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05"
    //             }
    //     ] 
    // },
    // asyncData(context){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //         resolve({
    //             posts: [
    //             {
    //                 id: 1,
    //                 title: "1st Post",
    //                 previewText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa expedita, quos eligendi quisquam, provident enim officia impedit a labore tenetur eum. Beatae nemo sunt error laborum consectetur harum minus, mollitia quo laudantium fugit ab itaque praesentium eum vero doloribus quod omnis repellat debitis ad assumenda. Aut dolor commodi cupiditate sequi?",
    //                 thumbnail: "https://img.etimg.com/thumb/msid-80263701,width-1070,height-580,imgsize-161986,overlay-ettech/photo.jpg"
    //             },
    //             {
    //                 id: 2,
    //                 title: "2nd Post",
    //                 previewText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa expedita, quos eligendi quisquam, provident enim officia impedit a labore tenetur eum. Beatae nemo sunt error laborum consectetur harum minus, mollitia quo laudantium fugit ab itaque praesentium eum vero doloribus quod omnis repellat debitis ad assumenda. Aut dolor commodi cupiditate sequi?",
    //                 thumbnail: "https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05"
    //             }
    //         ]
    //         })
    //     }, 2000)
    //     })
    //     .then(data => {
    //         return data
    //     })
    //     .catch(e => {
    //         context.error(new Error())
    //     })
    //     // setTimeout(() => {
    //     //     callback(null, {
    //     //         posts: [
    //     //         {
    //     //             id: 1,
    //     //             title: "1st Post",
    //     //             previewText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa expedita, quos eligendi quisquam, provident enim officia impedit a labore tenetur eum. Beatae nemo sunt error laborum consectetur harum minus, mollitia quo laudantium fugit ab itaque praesentium eum vero doloribus quod omnis repellat debitis ad assumenda. Aut dolor commodi cupiditate sequi?",
    //     //             thumbnail: "https://img.etimg.com/thumb/msid-80263701,width-1070,height-580,imgsize-161986,overlay-ettech/photo.jpg"
    //     //         },
    //     //         {
    //     //             id: 2,
    //     //             title: "2nd Post",
    //     //             previewText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa expedita, quos eligendi quisquam, provident enim officia impedit a labore tenetur eum. Beatae nemo sunt error laborum consectetur harum minus, mollitia quo laudantium fugit ab itaque praesentium eum vero doloribus quod omnis repellat debitis ad assumenda. Aut dolor commodi cupiditate sequi?",
    //     //             thumbnail: "https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05"
    //     //         }
    //     //     ]
    //     //     })
    //     // }, 2000)
    // },
    // created(){
    //     console.log("posts page created");
    //     this.$store.dispatch('setPosts', this.posts);
    //     console.log(this.$store)
    // },
    fetch(context){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve({
                posts: [
                {
                    id: 1,
                    title: "1st Post",
                    previewText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa expedita, quos eligendi quisquam, provident enim officia impedit a labore tenetur eum. Beatae nemo sunt error laborum consectetur harum minus, mollitia quo laudantium fugit ab itaque praesentium eum vero doloribus quod omnis repellat debitis ad assumenda. Aut dolor commodi cupiditate sequi?",
                    thumbnail: "https://img.etimg.com/thumb/msid-80263701,width-1070,height-580,imgsize-161986,overlay-ettech/photo.jpg"
                },
                {
                    id: 2,
                    title: "2nd Post",
                    previewText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa expedita, quos eligendi quisquam, provident enim officia impedit a labore tenetur eum. Beatae nemo sunt error laborum consectetur harum minus, mollitia quo laudantium fugit ab itaque praesentium eum vero doloribus quod omnis repellat debitis ad assumenda. Aut dolor commodi cupiditate sequi?",
                    thumbnail: "https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05"
                }
            ]
            })
        }, 2000)
        })
        .then(data => {
            context.store.commit('setPosts', data.posts)
        })
        .catch(e => {
            context.error(new Error())
        })
    },
    computed: {
        posts(){
            return this.$store.getters.loadedPosts
        }
    }
}
</script>

<style scoped>
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
</style>