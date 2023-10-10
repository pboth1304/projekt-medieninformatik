<template>
    <footer>
        <div class="footer-scroll-top">
            <button @click="scrollToTop">Zum Anfang</button>
        </div>
        <div class="copyright-container">&copy; Copyright Pascal Bothner</div>
    </footer>
</template>
<script lang="ts" setup>
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>
<style scoped>
.footer-scroll-top {
    height: 12rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.95);
}

button {
    background-color: transparent;
    border: 2px solid var(--gold);
    color: var(--gold);
    padding: 0.8rem 1.4rem;
    font-size: 1.6rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

button:hover {
    background-color: var(--gold);
    color: var(--white);
}

.copyright-container {
    padding: 1.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    color: var(--white);
    font-size: 1.4rem;
}
</style>