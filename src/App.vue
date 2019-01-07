<template>
  <div id="app">

    <div class="main-wraper">
      
      <header id="header">
        <div class="wraper">
          <h1>Super Quiz</h1>
          <div class="status">
            <span class="points">{{ points }}</span>
            <span class="description">PONTOS</span>
          </div>
        </div>
      </header>

      <main id="main">
        <div class="wraper">
          <transition name ="animate" mode="out-in">
            <Questions
              v-if="!showResult"
              :question="questions[actualQuestion]"
              @onResult="processResult($event)">
            </Questions>
          
            <Result
              v-else
              :message="message">
            </Result>
          </transition>
        </div>
      </main>

      <footer id="footer">
        <div class="wraper">
          <button class="btn" v-if="showResult && !isOver" @click="nextQuestion">Próxima pergunta</button>
          <button class="btn" v-else-if="showResult && isOver" @click="restart">Reiniciar</button>
        </div>
      </footer>

    </div>
    
  </div>
</template>

<script>
import QuizData from './data'
import Questions from './components/Questions'
import Result from './components/Result'

export default {
  name: 'app',
  components: { Questions, Result },
  data() {
    return {
      questions: QuizData,
      actualQuestion: 0,
      message: {text: '', status: ''},
      showResult: false,
      points: 0
    }
  },
  methods: {
    processResult(e) {
      if (e.correct) {
        this.showResult = true
        this.message = {text: 'Certo!', status: 'success'}
        this.points += 5
      } else {
        this.showResult = true
        this.message = {text: 'Errado!', status: 'fail'}
      }
      if ( this.isOver ) {
        this.message.text = this.message.text + `<br><br>Fim do Jogo!<br>Você fez ${this.points} pontos.`
        // this.message.status = 'end' 
      }
    },
    nextQuestion() {
      if ( this.isOver ) {
        this.showResult = false
        this.message.text = `Fim do Jogo!<br>Você fez ${this.points} pontos.`
        this.status = 'end'
      } else {
        this.actualQuestion++
        this.showResult = false
      }
    },
    restart() {
      this.actualQuestion = 0
      this.message = {text: '', status: ''}
      this.showResult = false
      this.points = 0
    }
  },
  computed: {
    isOver() {
      if ( this.actualQuestion+1 === this.questions.length ) {
        return true 
      } else {
        return false
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,900');

:root {
  --primary: #9E00FF;
  --primary-light: #E2B3FF;
  --primary-medium: #CE7FFF;
  --primary-dark: #5E0097;

  --success: #00FFD1;
  --warning: #FFB800;
  --info: #FF00F5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, h1, h2, h3, h4, h5, h6, button, input, textarea, select, a, p, span {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.btn {
  padding: 0.85rem;
  font-size: 1.1rem;
  background-color: #fff;
  border-radius: 5px;
  border: 0;
  color: var(--primary);
}

#app {
  background-color: var(--primary);
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-items: center;
}

#app .main-wraper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 20px;
  width:100%;
  max-width: 960px;
  padding: 20px;
}

#header .wraper {
  /* padding-bottom: 20px; */
  display:grid;
  grid-gap: 20px;
}

#header h1 {
  /* color: #fff; */
  font-weight: 100;
  font-size: 3rem;
}

#header .status {
  display: grid;
  width: 100%;
  border: 1px solid var(--primary-medium);
  border-radius: 10px;
  padding: 0 10px 10px 10px;
}

#header .points {
  font-size: 4rem;
  font-weight: 900;
}

#main {
  display: grid;
}

#footer .wraper {
  display: grid;
}

@keyframes animate-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  
}

@keyframes animate-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
  
}

.animate-enter-active {
  animation: animate-in 0.5s ease;
}

.animate-leave-active {
  animation: animate-out 0.5s ease;
}

@media (min-width: 700px) {
  .alternatives {
    grid-template-columns: 1fr 1fr;
  }
}


</style>
