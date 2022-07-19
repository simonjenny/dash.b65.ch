<script>
export default {
    data() {
        return {
            today: this.Moment().format("LLLL") ,
            strings: this.Data.strings[Math.floor(new Date().getHours()/6)]
        }
    }
}
</script>
<template>
    <span class="mt-8 text-1xl font-bold">{{ today }}</span>
    <h1 class="mt-4 text-5xl font-bold">{{ strings }}</h1>
</template>