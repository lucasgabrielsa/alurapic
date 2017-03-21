<template>
 <div class="corpo"> 
 
 <!-- colocar o menu aqui -->
 <menu-navegacao :rotas="routes"></menu-navegacao>

  <transition name="pagina">
    <router-view></router-view>
  </transition>  
  
 </div>  
</template>

<script>
import { routes } from './routes.js';
import Menu from './components/shared/menu/Menu.vue';

  export default {    
    components: {
      'menu-navegacao': Menu
    },
    data() {
      return {
        routes: routes.filter(rota => rota.menu)
      }
    }
  }
</script>

<style scoped>
.corpo {
  font-family: 'Roboto',sans-serif;
  width: 50%;
  margin:0 auto;
}

/* efeitos de transicao */

.pagina-enter, .pagina-leave-active {
  opacity: 0
}

.pagina-enter-active, .pagina-leave-active {
  transition: opacity .4s
}
</style>
