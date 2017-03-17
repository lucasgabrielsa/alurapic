<template>

     <div class="nav-left">
        <a class="nav-item">
           <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
        </a>
        <router-link active-class="is-active" :key="rota.id" :to="rota.path ? rota.path : '/'" v-for="rota in rotas" class="nav-item is-tab is-hidden-mobile" exact>{{ rota.name }}</router-link>
    </div>
    <!--
    <nav>
        <ul v-for="rota in rotas">       
        <li>
            <router-link :to="rota.path ? rota.path : '/'">{{ rota.name }}</router-link>
        </li>
        </ul>
    </nav>
     -->
</template>

<script>
    export default {
        
        //props: ['rotas'],
        props: {
            rotas: {
                type: Array,
                required: true
            }    
        },

        data() {
            return {

            }
        }
    }
</script>

<style scoped>

ul {
  list-style-type: none;
  display: inline-block;
}
</style>
