<script setup>
import greetings from './components/greetings.vue'
import bookmarks from './components/bookmarks.vue'
import apps from './components/apps.vue'
import countdown from './components/countdown.vue'
</script>

<template>

<main id="container" class="fade p-4 sm:p-8 md:p-18 lg:p-24">
    <greetings></greetings>
    <apps></apps>
    <bookmarks></bookmarks>
    <countdown></countdown>
</main>

</template>