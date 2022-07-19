<script>
export default {
    data() {
        return {
            bookmarks: this.Data.bookmarks
        }
    }
}
</script>

<template>
   <h2 class="my-6 font-semibold text-xl text-gray-100 leading-tight">Bookmarks</h2>
   <div class="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <div v-for="category in bookmarks" class="flex flex-col bg-gray-700 rounded overflow-hidden shadow p-3 border-indigo-900 border-l-8">
                <div class="text-1xl font-bold text-gray-100 uppercase m-2">{{category.category}}</div>
                <a class=" text-gray-100 px-2" v-for="bookmark in category.links" :href="bookmark.url" target="_blank">{{ bookmark.name }}</a>
            </div>
   </div>
</template>