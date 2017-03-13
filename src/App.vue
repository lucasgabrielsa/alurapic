<template>
 <div>
  <h1 v-text="titulo"></h1>
  <img :src="foto.url" :alt="foto.titulo"/>
 </div>  
</template>

<script>
export default {
  data() {
    return {
      titulo: 'AluraPic',
      foto: {
         url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxmCGpcrjAq6DDT8hVt163lO1YulUCaunuv9Yp-BmE1IPb_P2g', 
         titulo: 'cachorro'
      }
    }
  }
 
}
</script>

<style>

</style>
