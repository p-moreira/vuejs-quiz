<template>
  <div class="result" :class="message.status">
    <h2 v-html="message.text"></h2>
  </div>
</template>

<script>
export default {
    props: {
        message: Object
    }
};
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
