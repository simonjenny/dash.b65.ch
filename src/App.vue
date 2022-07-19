<script setup>
import greetings from './components/greetings.vue'
import bookmarks from './components/bookmarks.vue'
import apps from './components/apps.vue'
import countdown from './components/countdown.vue'
import news from './components/news.vue'

</script>

<template>

    <main id="container" class="fade p-4 sm:p-8 md:p-18 lg:p-28">
        <greetings></greetings>
        <apps></apps>
        <news></news>
        <bookmarks></bookmarks>
        <countdown></countdown>
        
    </main>

</template>