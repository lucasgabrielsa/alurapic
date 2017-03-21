import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import Relatorios from './components/relatorios/Relatorios.vue';

export const routes = [
    { path:'', component: Home, name:'Home',nome:'Home Page', id:1},
    { path:'/cadastro', component:Cadastro, name:'Cadastro', nome:'Cadastro de Foto', id:2 },
    { path:'/relatorios', component:Relatorios, name:'Relatorios', nome:'Relatórios Sistema' ,id:3 }
];