<template>
    <Teleport to="body">
        <div v-if="isOpen" class="dialog-backdrop">
            <dialog :open="isOpen" class="dialog">
                <header>
                    <slot name="header"></slot>
                    <button @click="closeDialog" class="close-icon">
                    </button>
                </header>
                <slot></slot>
            </dialog>
        </div>
    </Teleport>
</template>
<script setup lang="ts">
interface ModalDialogProps {
    text: string;
    isOpen: boolean;
}

defineProps<ModalDialogProps>();

const emits = defineEmits(['closed']);

const closeDialog = () => emits('closed')
</script>
<style scoped>
.dialog {
    background-color: rgba(187, 188, 182, 0.8);
    max-height: 60%;
    max-width: 60%;
    overflow: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0;
    z-index: 1000;
    border-radius: 2rem;
    padding: 5rem 6rem;
    font-size: 1.6rem;
    line-height: 180%;
}

.dialog-backdrop {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.8);
    z-index: 999;
}

dialog header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    font-size: 2.8rem;
    position: relative;
}

.close-icon {
    top: 50%;
    transform: translateY(-50%);
    height: 1.8rem;
    width: 1.8rem;
    position: absolute;
    right: 0;
    opacity: 0.5;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: inline-block;
}

.close-icon:hover {
    opacity: 1;
}

.close-icon:before,
.close-icon:after {
    position: absolute;
    top: 0;
    right: 0;
    content: ' ';
    height: 2.4rem;
    width: 2px;
    background-color: #333;
}

.close-icon:before {
    transform: rotate(45deg);
}

.close-icon:after {
    transform: rotate(-45deg);
}

@media screen and (max-width: 1000px) {
    .dialog {
        width: 80%;
    }
}
</style>