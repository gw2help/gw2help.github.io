<template>
    <div id="outerdivFullPage" class="roundedz d-block float-center mx-auto">      
	    	<iframe 
	    		id="innerdivBreakbar"
	    		src="https://wiki.guildwars2.com/wiki/Defiance_bar#Mob-specific_defiance_bars" 
	    		scrolling="yes" 
	    		frameborder="0" 
	    		class="border border-primary roundedz w-100"></iframe>
	</div>
</template>

<script>
import display_component from '../components/display_component.vue'

export default {
    name: 'breakbar_view',
    data(){
        return{

        }
    },
	methods:{
	}
    
}
</script>

<style scoped>

#innerdivBreakbar{
		position: absolute;
		height: inherit;
        background-color: #f8f9fa!important;
	}

</style>
