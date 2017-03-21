import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import Relatorios from './components/relatorios/Relatorios.vue';

export const routes = [
    { path:'', component: Home, name:'Home',nome:'Home', id:1, menu: true},
    { path:'/cadastro', component:Cadastro, name:'Cadastro', nome:'Cadastro', id:2 , menu: true},
    { path:'/cadastro/:id', component:Cadastro, name:'Altera', nome:'Altera', id:3 , menu: false},
    { path:'/relatorios', component:Relatorios, name:'Relatorios', nome:'Relatórios' , id:4, menu: true},
    { path:'/teste', name:'Teste', nome:'Teste de Menu' , id:5, menu: false}
];