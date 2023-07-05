<template>
    <div id="outerdivFullPage" class="roundedz d-block float-center mx-auto">      
	    <iframe 
	    	id="innerdivSnowCrows"
	    	src="https://snowcrows.com/en/builds?profession=any&category=recommended" 
	    	scrolling="yes" 
	    	frameborder="0" 
	    	class="border border-primary roundedz w-100"></iframe>
	</div>
</template>

<script>
import display_component from '../components/display_component.vue'

export default {
    name: 'snowcrows_view',
    data(){
        return{

        }
    },
	methods:{
	}
    
}
</script>

<style scoped>

#innerdivSnowCrows{
		position: absolute;
		height: inherit;
        background-color: #f8f9fa!important;
	}

</style>
