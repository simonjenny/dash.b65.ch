<script>
export default {
    data() {
        return {
            countdown: this.Moment('2022-11-13T12:00:00.000').fromNow()
        }
    }
}
</script>

<template>
    <span>🇹🇭 Nächster Flug {{ countdown }}</span>
</template>