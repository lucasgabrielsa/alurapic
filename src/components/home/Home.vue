<template>
    <div>
        <div class="content is-small">
            <h1 v-meu-transform.animate
                v-text="titulo"
                class="texto-centralizado"></h1>
        </div>
        <input type="search"
               class="filtro Normal input"
               placeholder="Pesquise pelo Título"
               v-model="filtro" />
        <ul class="lista-fotos">
            <li v-for="foto in fotosComFiltro"
                class="lista-fotos-item">
                <meu-painel :titulo="foto.titulo">
                    <imagem-responsiva v-meu-transform.animate.reverse="15"
                                       :url="foto.url"
                                       :titulo="foto.titulo" />
                    <!--
                    <imagem-responsiva v-meu-transform="{ incremento:15, animate: true }"
                                       :url="foto.url"
                                       :titulo="foto.titulo" /> -->
                    <!--<meu-botao tipo="button" rotulo="Remover" @click.native="removerFoto(foto)"></meu-botao>-->
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
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

export default {

    components: {
        'meu-painel': Painel,
        'imagem-responsiva': ImagemResponsiva,
        'meu-botao': Botao
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
        },

        removerFoto(foto, $event) {
            console.log(foto.titulo + ' excluida com sucesso!');
            console.log($event.msg);
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
