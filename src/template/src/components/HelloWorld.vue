<template>
  <div class="hello">
    <h1 @click="sendTest">{{ msg }}</h1>
  </div>
</template>

<script>
import services from '../services'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Mock-Vue app'
    }
  },
  methods: {
    sendTest () {
      services.apiIn({data:'123'},13).then((res)=>{
        log.green('line 20',res)
      })
      services.apiIn2({data:'123'},13).then((res)=>{
        log.blue(res)
      })
      services.apiIn3({data:'123'},13)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
