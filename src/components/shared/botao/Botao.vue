<template>
    <button @click="disparaAcao"
            class="botao"
            :class="estiloDoBotao"
            :type="tipo">
        {{ rotulo }}</button>
</template>

<script>
export default {

    //props: ['tipo', 'rotulo', 'confirmacao', 'template'], 

    props: {

        tipo: {
            required: true,
            type: String
        },

        rotulo: {
            required: true,
            type: String
        },

        confirmacao: Boolean,

        template: String

    },


    methods: {

        disparaAcao() {
            if (this.confirmacao) {
                if (confirm('Deseja Excluir?')) {
                    this.botaoAtivado()     //somente para nao repetir codigo
                }
                return;
            } else {
                this.botaoAtivado()
            }
        },
        botaoAtivado() {
            this.$emit('botaoAtivado', { msg: 'qualquer coisa' })
        }
    },

    computed: {
        estiloDoBotao() {
            if (this.template == "padrao" || !this.template) return 'botao-padrao button is-danger';
            if (this.template == "perigo") return 'botao-perigo button is-danger';
        }
    }

}
</script>

<style lang="scss" scoped>

$cor: red;

.botao {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
}

.botao-perigo {
    background: $cor;
    color: white;
}

.botao-padrao {
    background: darkcyan;
    color: white;
}
</style>