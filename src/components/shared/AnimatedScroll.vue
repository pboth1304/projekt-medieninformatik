<template>
    <svg class="mouse-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.5 7C12.5 6.44772 12.0523 6 11.5 6C10.9477 6 10.5 6.44772 10.5 7V10C10.5 10.5523 10.9477 11 11.5 11C12.0523 11 12.5 10.5523 12.5 10V7Z"
            fill="black" class="dot" />
        <path clip-rule="evenodd"
            d="M3 8C3 4.13401 6.13401 1 10 1H13C16.866 1 20 4.13401 20 8V16C20 19.866 16.866 23 13 23H10C6.13401 23 3 19.866 3 16V8ZM10 3H13C15.7614 3 18 5.23858 18 8V16C18 18.7614 15.7614 21 13 21H10C7.23858 21 5 18.7614 5 16V8C5 5.23858 7.23858 3 10 3Z"
            fill="black" fill-rule="evenodd" />
    </svg>
</template>

<style scoped>
.mouse-icon path {
    fill: var(--white-transparent);
}

.dot {
    animation-name: slide-down;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}

@keyframes slide-down {
    0% {
        transform: translateY(0);
    }

    80% {
        transform: translateY(5px);
    }

    100% {
        transform: translateY(0);
    }
}
</style>