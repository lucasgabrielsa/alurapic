<template>
    <div>
        <h1 class="centralizado tituloJanela">Cadastro</h1>
        <h2 class="centralizado">{{ foto.titulo }}</h2>
    
        <h2 class="centralizado" v-if="foto._id">Alterando</h2>
        <h2 class="centralizado" v-else>Incluindo</h2>
        
        <form @submit.prevent="grava">
            <div class="controle">
                <label for="titulo">TÍTULO</label>
                <input v-validate data-vv-rules="required|min:3|max:30"
                       data-vv-as="título"
                       id="titulo"
                       autocomplete="off"
                       name="titulo"
                       v-model="foto.titulo"
                       class="input">
                <span class="erro" v-show="errors.has('titulo')">{{ errors.first('titulo') }}</span>
            </div>
    
            <div class="controle">
                <label for="url">URL</label>
                <input v-validate data-vv-rules="required"
                       id="url"
                       name="url"
                       v-model="foto.url"
                       autocomplete="off"
                       class="input">
                <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo"/>
                <span class="erro" v-show="errors.has('url')">{{ errors.first('url') }}</span>
            </div>
    
            <div class="controle">
                <label for="descricao">DESCRIÇÃO</label>
                <textarea id="descricao"
                          v-model="foto.descricao"
                          autocomplete="off"
                          class="textarea"></textarea>
            </div>
    
            <div class="centralizado">
                <meu-botao rotulo="GRAVAR"
                           tipo="submit" />
                <router-link :to=" { name:'Home' }">
                    <meu-botao rotulo="VOLTAR" tipo="button" />
                </router-link>
            </div>
    
        </form>
    </div>
</template>

<script>
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';


/* classes */
import FotoService from '../../domain/foto/FotoService';
import Foto from '../../domain/foto/Foto';

export default {

    data() {
        return {
            foto: new Foto(), 
            id: this.$route.params.id
        }
    },

    methods: {
       grava() {

          this.$validator.validateAll()
            .then(success => {

                if(success) {
                    this.service
                        .cadastra(this.foto)
                        .then(() => {
                        if(this.id) this.$router.push({ name: 'Home' });
                        this.foto = new Foto();
                        }, err => console.log(err));
                }
               
            });            

      },
            

           /*
            this.resource
                .save(this.foto)
                .then(() => this.foto = new Foto(), erro => console.log(erro));
            

             this.$http.post('http://localhost:3000/v1/fotos', this.foto)
            .then(() => this.foto = new Foto(), erro => console.log(erro));            
            */         
        
    },

    components: {
        'imagem-responsiva': ImagemResponsiva,
        'meu-botao': Botao
    }, 

    created() {

        /*this.resource = this.$resource('v1/fotos');*/
        this.service = new FotoService(this.$resource);

        /* testando para ver se id tem valor */ 
        if(this.id) {           
                       
            this.service.busca(this.id)
                .then(foto => this.foto = foto);
            
        }

    }

}
</script>

<style scoped>
.tituloJanela {
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}

.centralizado {
    text-align: center;
}

.controle {
    font-size: 1.2em;
    margin-bottom: 20px;
}

.controle label {
    display: block;
    font-weight: bold;
}

.controle label+input,
.controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
}

.centralizado {
    text-align: center;
}

.erro {
    color: red;
}
</style>