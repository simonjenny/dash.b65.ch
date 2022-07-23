<script setup>
import apps from './components/apps.vue'
import greetings from './components/greetings.vue'
import bookmarks from './components/bookmarks.vue'
import countdown from './components/countdown.vue'
import news from './components/news.vue'
</script>
<template>
    <main class="fade p-4 sm:p-8 md:p-18 lg:p-28">
        <greetings></greetings>
        <apps></apps>
        <bookmarks></bookmarks>
        <countdown></countdown>
    </main>
</template>