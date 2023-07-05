<template>
    <div id="outerdivFullPage" class="roundedz d-block float-center mx-auto">      
	    <iframe 
	    	id="innerdivHardstuck"
	    	src="https://hardstuck.gg/gw2/guides/" 
	    	scrolling="yes" 
	    	frameborder="0" 
	    	class="border border-primary roundedz w-100"></iframe>
	</div>
</template>

<script>
import display_component from '../components/display_component.vue'

export default {
    name: 'hardstuck_view',
    data(){
        return{

        }
    },
	methods:{
	}
    
}
</script>

<style scoped>

#innerdivHardstuck{
		position: absolute;
		height: inherit;
        background-color: #f8f9fa!important;
	}

</style>
