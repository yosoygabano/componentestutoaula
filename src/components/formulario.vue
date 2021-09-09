<template>
<h2 >{{customTitle}}</h2> 
{{start}}
<p>{{contador}} <sup>4</sup> = {{ getSquareValue() }}</p>
<p>{{contador}} <sup>5</sup> = {{scuareCounter}}</p> 
<p>{{contador}} <sup>3</sup> = {{contador* contador}}</p> 
<div class=" mx-5"> 
<button @click=" getResta()" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    -
</button>

<button @click=" getSuma()" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    +
  </button>
</div> 
</template>
<script>
export default {
    name:'formulario',
   // props:['title','start'],
  props:{
      title: String, //definimos aqui el tipo de dato para poder validarlo
      //start: Number
      start:{
          type: Number,
          default: 100,
          validator(value){ //para validar los valores del componente
              return value >1
          }
      }
  },
    data(){
        return{
            contador:this.start,
            //contador:5
            contador1: 0
        }
    },
    methods:{
        getSquareValue(){
            console.log('getSquareValue')
            return this.contador *this.contador +5
        },
        getSuma(){
           //this.contador1 += cantidad
           this.contador++
            console.log(this.contador)
        },
        getResta(){
            //this.contador1 += cantidad
            this.contador--
            console.log(this.contador)
        },

    },
    computed:{
        //propiedades computadas aqui se guardan en cache.
        scuareCounter(){
            console.log('Computed scuareCounter')
            return this.contador * this.contador
        },
        customTitle(){
            console.log(this.title)
            return this.title ? this.title : 'Contador'
            //this.title || 'Counter'
        }
    }
}
</script>
