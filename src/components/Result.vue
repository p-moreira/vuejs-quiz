<template>
    <div
        class="result"
        :class="message.status"
    >
        <h2 v-html="message.text" />
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.result {
    display: grid;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 20px;
}

.result h2 {
    font-size: 2.25rem;
}

.success {
    background-color: var(--success);
}

.fail {
    background-color: var(--warning);
}

.end {
    background-color: var(--info);
}
</style>
