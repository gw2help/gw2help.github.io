<template>
    <div id="outerdivFullPage" class="roundedz d-block my-0 w-100 float-center mx-auto">      
		<iframe 
	    	id="innerdivArmor"
	    	src="https://hardstuck.gg/gw2/guides/" 
	    	scrolling="yes" 
	    	frameborder="0" 
	    	class="border border-primary roundedz w-100"></iframe>
	</div>	
</template>

<script>
import display_component from '../components/display_component.vue'

export default {
    name: 'music_view',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
#innerdivArmor{
		position: absolute;
		height: inherit;
	}

</style>