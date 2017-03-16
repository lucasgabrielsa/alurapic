<template>
    <div>
    <h1 v-text="titulo" class="texto-centralizado"></h1>
    <input type="search" class="filtro" placeholder="Pesquise pelo Título" v-model="filtro"/>
    <ul class="lista-fotos">
        <li v-for="foto in fotosComFiltro" class="lista-fotos-item">
        <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
        </meu-painel>       
        </li>
    </ul>  
    </div>  
</template>

<script>
    import Painel from '../shared/painel/Painel.vue';
    import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';

    export default {

    components: {
        'meu-painel': Painel,
        'imagem-responsiva': ImagemResponsiva
    },

    data() {
        return {
        titulo: 'AluraPic',
        fotos: [], 
        filtro: ''       
        }
    },

    methods: {
        pegarFotos() {
        this.$http.get('http://localhost:3000/v1/fotos')    
        .then(res => res.json())
        .then(data => this.fotos = data, erro => console.log(erro));
        }
    },

    computed: {
    
        fotosComFiltro() {
        if(this.filtro) {
            let exp = new RegExp(this.filtro.trim(), 'i');
            return this.fotos.filter(foto => exp.test(foto.titulo));
        } else {
            return this.fotos;
        }
        }

    },
    
    created() {
        this.pegarFotos();
    } 
    }
</script>

<style scoped>

.texto-centralizado {
  text-align: center;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

ul {
  list-style-type: none;
}

.filtro {
  display: block;
  width: 100%;
}


</style>
