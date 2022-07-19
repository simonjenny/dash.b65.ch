<script>
export default {
    data() {
        var now = new Date().getTime();
        var countDownDate = new Date("Nov 13, 2022 12:00:00").getTime();
        var distance = countDownDate - now;
        return {
            countdown: {
                days    : Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours   : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            }
        }
    }
}
</script>
<template>
    <span>🇹🇭 Nächster Flug in {{ countdown.days }} Tagen, {{ countdown.hours }} Stunden, {{ countdown.minutes }} Minuten</span>
</template>