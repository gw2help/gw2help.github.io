<template>
	<div class="row text-white w-100 mt-5">
		<div class="col-6 mx-auto text-center roundedz bg-darkz border border-primary p-0">
			<h5 class="bg-primary roundedz-top border-bottom border-primary pt-2 pb-3">Join our database?</h5>
			<input 	v-model="name"
					type="text" 
					class="roundedz border-primary mx-auto text-center text-white d-block bg-black mt-3" 
					placeholder="choose name..." 
					style="min-width: 190px">

			<input 	v-model="api"
					type="text" 
					class="roundedz border-primary mx-auto text-center text-white d-block bg-black mt-2" 
					placeholder="api key..." 
					style="min-width: 190px">

			<input 	v-model="kpme"
					type="text" 
					class="roundedz border-primary mx-auto text-center text-white d-block bg-black mt-2" 
					placeholder="kpme key..." 
					style="min-width: 190px">

			<button 
				@click="addPerson"
				class="btnGo border border-primary bg-dark roundedz text-white text-bold py-2 mt-3 mb-3 mx-auto" >JOIN</button>
		</div>
		<p></p>
		<div class="col-6 font-italic text-warning text-center mx-auto p-0">
			<p>This will link your apiKey with your kpmeKey.</p>
			<p>Linked keys can use the kpme tool on this website.</p>
			<p>Greetings Liloo</p>
			<img class="ms-3" src="../img/main/liloola.png">
		</div>
	</div>
</template>

<script>
import crudService from "../services/crudService"

export default {
    name: 'join_view',
    data(){
        return{
			name: "",
			api: "",
			kpme: ""
        }
    },
	methods: {
		addPerson(){
			var person = {
                name: this.name,
                api: this.api,
				kpme: this.kpme
            }

            crudService.createPerson(person)
            .then(()=> { console.log(person) })
            .catch(e => { console.log(e); })
            
           this.resetForm();
		   window.alert("Successfully added!");
		},
		resetForm(){
			this.name = "",
			this.api = "",
			this.kpme = ""
		}
	}
}
</script>

<style scoped>
#innerdivArmor{
		position: absolute;
		height: inherit;
	}

.btnGo{
	max-width: 250px;
	min-width: 190px;
	height: 42px !important;
}

</style>