<template>
    <div>
        <Nabvarr msg="Hola" />
    </div>
 <!--   <Indecision /> -->
  <div class=" flex justify-center items-center ">
    <div class=" w-full md:w-3/5 bg-white p-6">
     <step /> 
    <!--  <Formulario title=" Entraron"/> --> 
     <!-- <Formulario :start="1"/> --> 
     
    </div>
  </div>
</template>

<script>
import step from '@/components/step.vue'
import Nabvarr from '@/components/navbar.vue'
//import Indecision from '../components/indecision.vue'
//import Formulario from '@/components/formulario.vue'
//import card from '@/components/card.vue'

export default {
    name: 'MainLayout',
    components:{
        step,
        Nabvarr,
  //      Indecision, 
       // Formulario
       // card
    },

}
</script>