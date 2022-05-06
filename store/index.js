import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
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
                        ]);
                        resolve();
                    }, 1000)
                })
            },
            setPosts(vuexContext, posts){
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore