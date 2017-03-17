import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import Relatorios from './components/relatorios/Relatorios.vue';

export const routes = [
    { path:'', component: Home, name:'Home', id:1},
    { path:'/cadastro', component:Cadastro, name:'Cadastro', id:2 },
    { path:'/relatorios', component:Relatorios, name:'Relatorios', id:3 }
];