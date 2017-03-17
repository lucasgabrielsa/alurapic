/*import Vue from 'vue';

Vue.directive('meu-transform', {*/

export default {

    bind(el, binding, vnode) {

        let current = 0;
        el.addEventListener('dblclick', function () {

            // se nao tiver valor, pega 90 como padrao
            let incremento = binding.value || 90;
            let efeito;

            /*
            if(binding.value) {
                incremento = binding.value.incremento;
                animate = binding.value.animate;
            }
            */

            if (!binding.arg || binding.arg == 'rotate') {

                //fazer reverso ser tiver o modifier 'reverse'
                if (binding.modifiers.reverse) {
                    current -= incremento;
                } else {
                    current += incremento;
                }
                efeito = 'rotate';
            } else if (binding.arg == "scale") {
                efeito = `scale(${incremento})`;
            }

            el.style.transform = efeito;
            if (binding.modifiers.animate) el.style.transition = 'transform 0.5s'
        })
    }
};

// v-if - exemplo de diretiva