import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
    { path:'', component: Home, name:'Home', id:1},
    { path:'/cadastro', component:Cadastro, name:'Cadastro', id:2 }
];