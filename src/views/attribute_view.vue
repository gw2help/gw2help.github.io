<template>
    <div id="outerdivFullPage" class="roundedz d-block my-0 w-100 float-center mx-auto">      
				<iframe 
	    			id="innerdivAttribute"
	    			src="https://wiki.guildwars2.com/wiki/Attribute_combinations" 
	    			scrolling="yes" 
	    			frameborder="0" 
	    			class="border border-primary roundedz w-100"></iframe>
		</div>	
</template>

<script>
import display_component from '../components/display_component.vue'

export default {
    name: 'armor_view',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
#innerdivAttribute{
		position: absolute;
		height: inherit; 
	}

</style>