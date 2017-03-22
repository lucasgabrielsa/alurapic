//import Cadastro from './components/cadastro/Cadastro.vue';
//lazyloading - carregamento apenas qdo o usuario usar o recurso
//gera dois arquivos de build - dento da pasta dist
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');

import Home from './components/home/Home.vue';

import Relatorios from './components/relatorios/Relatorios.vue';

export const routes = [
    { path:'', component: Home, name:'Home', id:1, menu: true, nome:'Home'},

    { path:'/cadastro', component:Cadastro, name:'Cadastro', id:2 , menu: true, nome:'Cadastro'},

    { path:'/cadastro/:id', component:Cadastro, name:'Altera', id:3 , menu: false, nome:'Altera'},

    { path:'/relatorios', component:Relatorios, name:'Relatorios', id:4, menu: true, nome:'Relatórios'},

    { path:'/teste', name:'Teste', id:5, menu: false, nome:'Teste'}
];