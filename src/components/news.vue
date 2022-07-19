<script>
export default {
    data() {
        return {
            headlines : {}
        }
    },
    created() {
       fetch('https://newsapi.org/v2/everything?pageSize=6&language=de&domains=heise.de&apiKey=' + this.Data.api)
            .then(response => response.json())
            .then( (data) => {
                this.headlines = data.articles
            })
    }
}
</script>
<template>
<h2 class="my-5 font-semibold6text-xl text-gray-100 leading-tight">News</h2>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">

<a v-for="headline in headlines" class="flex flex-col content-start bg-white rounded shadow" :href="headline.url" target="_blank">
    <!-- img -->
    <img class="aspect-video rounded-t object-cover object-center" :src="headline.urlToImage" />
    <!-- text information -->
    <div class="p-4">
      <small class="text-blue-400 text-xs">{{ headline.source.name }}</small>
      <h1 class="text-1xl font-medium text-slate-600 pb-2">{{ headline.title.replace(headline.source.name, '').replace('-','') }}</h1>
    </div>
  </a>

</div>


</template>