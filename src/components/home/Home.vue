<template>
    <div>
        <div class="content is-small">
            <h1 v-meu-transform.animate
                v-text="titulo"
                class="texto-centralizado"></h1>
            <p v-show="mensagem"
               class="texto-centralizado">{{ mensagem }}</p>
        </div>
        <input type="search"
               class="filtro Normal input"
               placeholder="Pesquise pelo Título"
               v-model="filtro" />
        <ul class="lista-fotos">
            <li v-for="foto in fotosComFiltro"
                class="lista-fotos-item">
                <meu-painel :titulo="foto.titulo">
                    <imagem-responsiva v-meu-transform:scale.animate="1.5"
                                       :url="foto.url"
                                       :titulo="foto.titulo" />
                    <!--
                                <imagem-responsiva v-meu-transform="{ incremento:15, animate: true }"
                                                   :url="foto.url"
                                                   :titulo="foto.titulo" /> -->
                    <!--<meu-botao tipo="button" rotulo="Remover" @click.native="removerFoto(foto)"></meu-botao>-->
                    <router-link :to="{ name:'Cadastro', params:{ id:foto._id }}">
                        <meu-botao tipo="button" rotulo="Alterar"></meu-botao>
                    </router-link> 
                    <meu-botao tipo="button"
                               rotulo="Remover"
                               :confirmacao="true"
                               @botaoAtivado="removerFoto(foto, $event)"
                               template="perigo"></meu-botao>
                </meu-painel>
            </li>
        </ul>
    </div>
</template>

<script>
/* components */
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

/* directives */
import transform from '../../directives/Transform';

/* classes */
import FotoService from '../../domain/foto/FotoService';

export default {

    components: {
        'meu-painel': Painel,
        'imagem-responsiva': ImagemResponsiva,
        'meu-botao': Botao
    },

    directives: {
        'meu-transform': transform
    },

    data() {
        return {
            titulo: 'AluraPic',
            fotos: [],
            filtro: '',
            mensagem: ''
        }
    },

    methods: {

        pegarFotos() {

             this.service.lista().then(fotos => this.fotos = fotos, err => console.log(err));
             console.log(this.service);

           /*
          this.resource
            .query()
            .then(res => res.json())
            .then(fotos => this.fotos = fotos, err => console.log(err));
          
            this.$http.get('http://localhost:3000/v1/fotos')
                .then(res => res.json())
                .then(data => this.fotos = data, erro => console.log(erro));
            */            
        },

        removerFoto(foto, $event) {

            this.service.apaga(foto._id)             
            .then(()=> {
                    let indice = this.fotos.indexOf(foto);
                    this.fotos.splice(indice, 1);
                    this.mensagem = 'Foto incluida com sucesso!';
                }, erro => {
                    this.mensagem = 'Não foi possível excluir a foto!'
                });


            /*
            this.resource.delete({ id: foto._id })
            .then(()=> {
                    let indice = this.fotos.indexOf(foto);
                    this.fotos.splice(indice, 1);
                    this.mensagem = 'Foto incluida com sucesso!';
                }, erro => {
                    this.mensagem = 'Não foi possível excluir a foto!'
                });

            /*
            this.$http.delete(`http://localhost:3000/v1/fotos/${foto._id}`)
                .then(()=> {
                    let indice = this.fotos.indexOf(foto);
                    this.fotos.splice(indice, 1);
                    this.mensagem = 'Foto incluida com sucesso!';
                }, erro => {
                    this.mensagem = 'Não foi possível excluir a foto!'
                })*/
        }


    },

    computed: {

        fotosComFiltro() {
            if (this.filtro) {
                let exp = new RegExp(this.filtro.trim(), 'i');
                return this.fotos.filter(foto => exp.test(foto.titulo));
            } else {
                return this.fotos;
            }
        }

    },

    created() {      

        this.service = new FotoService(this.$resource);    
        this.pegarFotos();
        
        // agora conseguimos acessar o recurso configurado em outros métodos do nosso componente
        //this.resource = this.$resource('v1/fotos{/id}');

   
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
