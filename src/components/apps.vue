<script>
export default {
    data() {
        return {
            apps: this.Data.apps
        }
    }
}
</script>
<template>
    <h2 class="my-6 font-semibold text-xl text-gray-100 leading-tight">Applications</h2>
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <a :href="app.url" target="_blank" v-for="app in apps" class="flex items-center relative p-4 w-full bg-gray-800 text-gray-200 rounded overflow-hidden shadow border-gray-600 border-l-8 hover:bg-gray-600 hover:no-underline hover:text">
            <Icon :icon="'mdi-' + app.icon" class="w-12 h-12 p-2 rounded bg-gray-700 " />
            <div class="ml-3">
                <p class="text-lg font-medium">{{ app.name }}</p>
                <p class="text-xs text-gray-400">{{ app.url }}</p>
            </div>
        </a>
    </div>
</template>