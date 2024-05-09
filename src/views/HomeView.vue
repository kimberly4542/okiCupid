<template>
    <div :style="{ backgroundColor: bgColor }">
        <Navbar :bgColor="bgColor" @toggleSignIn="toggleSignIn"/>
        <div>
            <TwoInOne  :btnName="'JOIN OKCUPID'"  />
        </div>
    </div>
</template>

<script setup>
import TwoInOne from '../components/TwoInOne.vue'
import useBackgroundColor from '../utils/useBackgroundColor.js'
import Navbar from '../components/TheNavbar.vue'

const { bgColor } = useBackgroundColor();
</script>

<style scoped>
.home-view {
  flex: 1; /* Fill remaining space in the viewport */
  overflow-y: auto; /* Allow vertical scrolling if content exceeds viewport height */
}

</style>