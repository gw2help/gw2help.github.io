<template>
    <div id="outerdivFullPage" class="roundedz d-block float-center mx-auto">      
	    	<iframe 
	    		id="innerdivCraft"
	    		src="https://wiki.guildwars2.com/wiki/Enormous_Chest_of_Legendary_Shards" 
	    		scrolling="yes" 
	    		frameborder="0" 
	    		class="border border-primary roundedz w-100"></iframe>
	</div>
</template>

<script>
import display_component from '../components/display_component.vue'

export default {
    name: 'leggyshard_view',
    data(){
        return{

        }
    }
}
</script>

<style scoped>

#innerdivCraft{
		position: absolute;
		height: inherit;
	}

</style>