<template>
    <header class="header">
        <div class="heading-container">
            <img src="/img/logo.png" alt="Felsengartenkellerei Besigheim Logo" class="logo animated" />
            <div class="heading animated">
                <h1>Felsengartenkellerei Besigheim</h1>
                <span class="subheading animated">Premium Weine aus Steillagen seit 1938.</span>
            </div>
        </div>
        <div class="scroll-indicator animated">
            <AnimatedScroll />
            <span>Scroll</span>
        </div>
    </header>
</template>

<script setup lang="ts">
import AnimatedScroll from './shared/AnimatedScroll.vue';
</script>

<style scoped>
.header {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image:
        linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 40%, rgba(66, 66, 66, 0.73) 100%),
        url('/img/hero-img.jpg');
    background-size: cover;
    background-position: center center;
}

.heading-container {
    display: flex;
    align-items: center;
    column-gap: 3rem;
    margin: auto 5rem;
}

.heading {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.heading h1 {
    font-size: 4.8rem;
    font-weight: 400;
    line-height: 5rem;
    color: #fff;
}

.subheading {
    color: var(--white-transparent);
    font-size: 2rem;
    animation-delay: 0.8s;
}

.logo {
    height: 15rem;
    width: 15rem;
    animation-delay: 1.6s;
}

.scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.5rem;
    color: var(--white-transparent);
    font-size: 1.6rem;
    letter-spacing: 1px;
    margin-bottom: 2rem;
    animation-delay: 2.4s;
}
</style>