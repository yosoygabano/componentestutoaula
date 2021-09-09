<template>
  <div class="about">
    <h1></h1>
  </div>
   <div>
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <div class="mt-1">
      <input v-model="id" @keyup.enter="getIdpokemon" type="te" name="id" id="id" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" />
     <img class="w" :src='pokemon.img' alt="">
    </div>
  </div>
</template>

<script>
import step from '@/components/step.vue'
import axios from 'axios'
export default {
  components:{
    step
  },
  data:()=>({
    pokemon:{
        name: '',
        power:''
    },
    id: null,
    gif: null
  }),
  created(){
   // this.getPokemon()
  },
  methods:{
    getIdPokemon(event){
      this.id=event.target.value
      console.log(this.id)
    },
    getPokemon(){
      const axiosInstance=axios.create({
        headers:{ 
          "Access-Control-Allow-Origin": "*"
        }
      });
      axiosInstance
      .get(`https://api.giphy.com/v1/gifs/trending?api_key=LqIeL80SL0Dwww8KaIc1P5uqXyfxIPVr&limit=25&rating=g`)
      .then(response=>{
 this.pokemon=response.data
        console.log(this.pokemon)
        const{name, base_experience}=response.data
        console.log(name)
        console.log(base_experience)
        const habilidades=response.data.abilities
        console.log(habilidades)
        const habilidad= response.data.abilities[1].ability.name
        console.log(habilidad)

 })
    }
  }
}
</script>