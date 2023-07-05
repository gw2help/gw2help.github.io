<template>
    <div id="outerdivFullPage" class="roundedz d-block float-center mx-auto">      
	    <iframe 
	    	id="innerdivGemStore"
	    	src="https://thatshaman.com/tools/gemstore" 
	    	scrolling="yes" 
	    	frameborder="0" 
	    	class="border border-primary roundedz w-100"></iframe>
	</div>
</template>

<script>
import display_component from '../components/display_component.vue'

export default {
    name: 'gem_store_view',
    data(){
        return{

        }
    }
}
</script>

<style scoped>

#innerdivGemStore{
		position: absolute;
		height: inherit;
	}

</style>
