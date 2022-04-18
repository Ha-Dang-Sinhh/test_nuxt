<template>
  <div class="container w-full">
    <div class=" w-full" >
      <!--    -->
      <div class="w-full p-12 bg-gray-100 rounded-xl">
        <form action="" @submit.prevent="searchArticles()" class="mt-6">
          <div class="w-full">
            <input type="text" placeholder="Tìm kiếm" class="w-2/3 h-10 text-center mx-auto block mb-6" v-model="keyword">
          </div>

        </form>
          <h1 class="w-80 mx-auto block text-4xl uppercase font-bold from-current mb-8">Trang tin tức</h1>
          <!-- Box-1 -->
<!--        v-if="listArticle.length>0"-->
          <div v-if="listArticle.length>0">
            <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
              <div v-for="( articleItem,articleIndex ) in listArticle" :key="articleIndex" class="bg-white">
                <div>
                  <div class="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                    <div>
                      <img class="w-full" :src="articleItem.urlToImage"/>
                      <div class="px-4 py-2">
                        <h1 class="text-xl font-gray-700 font-bold">{{ articleItem.author }}</h1>
                        <div class="flex space-x-2 mt-2 w-full">
                          <a :href="articleItem.url" class="text-lg text-blue-600 font-semibold mb-2 w-full text-center">{{ articleItem.title }}</a>
                        </div>
                        <p class="text-sm tracking-normal ">{{ articleItem.content }}</p>
                        <p class="text-sm tracking-normal text-gray-500">{{ articleItem.description }}</p>
                        <a :href="articleItem.url" class="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg mr-6">
                          Đọc tin tức</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      keyword: '',
      listArticle: [],
    }
  },
  methods: {
    async searchArticles() {
      try {
        const resp = await this.$repositories.home.getHome(this.keyword);
        this.listArticle = resp.data.articles;
      } catch (e) {
        console.log(e);
      }
    }
  },
}
</script>
