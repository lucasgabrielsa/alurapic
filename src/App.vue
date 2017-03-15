<template>
 <div class="corpo">
  <h1 v-text="titulo" class="texto-centralizado"></h1>
  <ul class="lista-fotos">
    <li v-for="foto in fotos" class="lista-fotos-item">
      <meu-painel :titulo="foto.titulo">
         <img :src="foto.url" :alt="foto.titulo" class="imagem-responsiva"/>
      </meu-painel>       
    </li>
  </ul>  
 </div>  
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';

export default {

  components: {
    'meu-painel': Painel
  },

  data() {
    return {
      titulo: 'AluraPic',
      fotos: []       
    }
  },

  methods: {
    pegarFotos() {
      this.$http.get('http://localhost:3000/v1/fotos')    
      .then(res => res.json())
      .then(data => this.fotos = data, erro => console.log(erro));
    }
  },

  created() {
      this.pegarFotos();
  } 
}
</script>

<style scoped>
.corpo {
  font-family: 'Roboto',sans-serif;
  width: 70%;
  margin:0 auto;
}
.texto-centralizado {
  text-align: center;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.imagem-responsiva  {
  width: 100%;
}

ul {
  list-style-type: none;
}


</style>
