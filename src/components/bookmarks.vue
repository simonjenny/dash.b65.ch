<script>
export default {
    data() {
        return {
            bookmarks: this.Data.bookmarks
        }
    },
    domain(url) {
        let d = (new URL(url));
        return d.hostname
    }
}
</script>

<template>
   <h2 class="my-6 font-semibold text-xl text-gray-100 leading-tight">Bookmarks</h2>
   <div class="mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <div v-for="category in bookmarks" class="flex flex-col">
                <div class="text-1xl font-bold text-gray-200 uppercase ml-2 mb-2">{{category.category}}</div>
                <a class="flex flex-row text-gray-200 hover:no-underline p-2 hover:bg-gray-700 rounded-lg" v-for="bookmark in category.links" :href="bookmark.url" target="_blank">
                    <img class="w-5 h-5 mr-2 rounded" :src="'https://www.google.com/s2/favicons?sz=48&domain=https://' + $options.domain(bookmark.url)">
                    <p class="grow no-underline">{{ bookmark.name }}</p>
                </a>
        </div>
   </div>
</template>