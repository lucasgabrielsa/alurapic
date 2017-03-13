<template>
 <div>
  <h1 v-text="titulo"></h1>
  <ul>
    <li v-for="foto in fotos">
      <img :src="foto.url" :alt="foto.titulo" class="foto-width"/>
    </li>
  </ul>  
 </div>  
</template>

<script>
export default {
  data() {
    return {
      titulo: 'AluraPic',
      fotos: [
        {
         url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxmCGpcrjAq6DDT8hVt163lO1YulUCaunuv9Yp-BmE1IPb_P2g', 
         titulo: 'cachorro'
       },
      {
         url:'https://s-media-cache-ak0.pinimg.com/736x/32/06/fb/3206fba0ed2a3d196460765e1f650905.jpg',
         titulo: 'gato'
      }
      ]       
    }
  } 
}
</script>

<style>
.foto-width {
  width: 150px;
}
ul {
  list-style-type: none;
}
</style>
