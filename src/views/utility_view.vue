<template>
    <div id="outerdivFullPage" class="roundedz d-block float-center mx-auto">      
	    <iframe 
	    	id="innerdivProvisioner"
	    	src="https://wiki.guildwars2.com/wiki/Utility_item" 
	    	scrolling="yes" 
	    	frameborder="0" 
	    	class="border border-primary roundedz w-100"></iframe>
	</div>
</template>

<script>
import display_component from '../components/display_component.vue'

export default {
    name: 'utility_view',
    data(){
        return{

        }
    }
    
}
</script>

<style scoped>

#innerdivProvisioner{
		position: absolute;
		height: inherit;
        background-color: #f8f9fa!important;
	}

</style>
