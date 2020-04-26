<template>

    <div class="questions">
        <h2 class="question">
            {{ question.question }}
        </h2>
        <div class="alternatives">
            <div
                v-for="(alternative, i) in question.alternatives"
                :key="i"
                class="alternative"
                @click="emitResult(alternative)"
            >
                <p><strong>{{ i+1 }}</strong></p>
                <p>{{ alternative.answer }}</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        question: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    methods: {
        emitResult (alternative) {
            this.$emit('onResult', alternative)
        }
    }
}
</script>

<style scoped>
.questions {
    display: grid;
    grid-gap: 20px;
}

.question {
    /* color: #fff */
    font-size: 1.5rem;
    font-weight: 300;
}

.alternatives {
    display: grid;
    grid-gap: 10px;
}

.alternative {
    display: grid;
    grid-template-columns: 48px 1fr;
    width: 100%;
}

.alternative p {
    /* text-align: left; */
    padding: 0.8rem;
    font-size: 1.1rem;
    font-weight: 900;
    color: var(--primary);
}

.alternative p:nth-child(1) {
    background-color: #fff;
    border-radius: 5px 0 0 5px;
}

.alternative p:nth-child(2) {
    background-color: var(--primary);
    border-radius: 0 5px 5px 0;
    color: #fff;
    border: 1px solid var(--primary-medium);
}
</style>
