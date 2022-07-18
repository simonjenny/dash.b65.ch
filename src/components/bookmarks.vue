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
   <div class="mb-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <dl v-for="category in bookmarks">
            <dt class="text-1xl font-bold text-indigo-300 uppercase mb-2">{{category.category}}</dt>
            <dd v-for="bookmark in category.links">
                <a :href="bookmark.url" target="_blank">{{ bookmark.name }}</a>
            </dd>
        </dl>
   </div>

</template>