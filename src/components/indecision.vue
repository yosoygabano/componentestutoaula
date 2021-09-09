<template>
<div class="flex flex-row justify-center items-center min-h-screen bg-app bg-center bg-no-repeat bg-cover">
    <div class="flex flex-col ..">
       <h1 class="text-gray-50	">Idecision</h1>
       <img v-if="img" :src="img" alt="bg-app" class="bg-app">
    <div>
      <label class="block text-sm font-medium text-gray-50">Recuerda terminar una pregunta con</label>
    <div class="mt-1">
      <input  v-model="question" @keyup.enter="getQuestion" type="text" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md " placeholder="Hazme una pregunta" />
    </div>
    <div v-if="banderaquestion">
        <h2  class="text-gray-50">{{question}}?</h2>
        <h3  class="text-gray-50"> {{answer== 'yes' ? 'Si' : 'No' }}</h3>
   </div>
   </div>
 </div>
</div>
</template>


<script>
export default {
    setup() {
        
    },
    data(){
      return{
        question:null,
        answer: null,
        img: null,
        banderaquestion: false
        //question: 'Hola'
      }
    },
    watch:{
      question(value){
       // console.log({value, oldvalue})
      // console.log(value.includes('?'))
      this.banderaquestion=false
     
      if(!value.includes('?'))return
      this.banderaquestion=true
      this.getAswer()
      }
    },
    methods:{
        getQuestion(){
            console.log(this.question)
        },
        async getAswer(){
          this.answer= 'Pensando'
         const {answer, image}= await fetch('https://yesno.wtf/api').then(r => r.json())
          console.log(answer, image)
          this.answer= answer
          //this.answer= answer === 'yes' ? 'Si : 'No'
          this.img=image
        }
    }
}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');

	* {
		font-family: 'Noto Sans JP', sans-serif;
	}

	.bg-app {
		background-image: url('https://www.solofondos.com/wp-content/uploads/2015/12/12B.jpg');
	}
</style>