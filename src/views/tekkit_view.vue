<template>
    <div id="outerdivFullPage" class="roundedz d-block float-center mx-auto">      
	    <iframe 
	    	id="innerdivTekkit"
	    	src="https://www.tekkitsworkshop.net/" 
	    	scrolling="yes" 
	    	frameborder="0" 
	    	class="border border-primary roundedz w-100"></iframe>
	</div>
</template>

<script>
import display_component from '../components/display_component.vue'

export default {
    name: 'tekkit_view',
    data(){
        return{

        }
    },
	methods:{
	}
    
}
</script>

<style scoped>

#innerdivTekkit{
		position: absolute;
		height: inherit;
        background-color: #f8f9fa!important;
	}

</style>
