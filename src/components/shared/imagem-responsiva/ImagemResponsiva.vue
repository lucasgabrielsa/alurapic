<template>   
    <img :src="url" :alt="titulo" class="imagem-responsiva"/>  
</template>

<script>
   export default {

         props:['url', 'titulo'], 

    }   
</script>


<style scoped>
.imagem-responsiva  {
  width: 100%;
}
</style>