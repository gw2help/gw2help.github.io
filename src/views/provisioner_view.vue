<template>
    <div id="outerdivFullPage" class="roundedz d-block float-center mx-auto">      
	    	<iframe 
	    		id="innerdivProvisioner"
	    		src="http://www.gw2lunchbox.com/ProvisionerHelper.html" 
	    		scrolling="yes" 
	    		frameborder="0" 
	    		class="border border-primary roundedz w-100"></iframe>
	</div>
	<div class="floatingButton border border-2 border-primary text-white roundedz p-2"
		@click="copyWaypoints"
	>
		<h5>Copy Waypoints</h5>
	</div>
</template>

<script>
import display_component from '../components/display_component.vue'

export default {
    name: 'craft_view',
    data(){
        return{

        }
    },
	methods:{
		copyWaypoints(){
			navigator.clipboard.writeText("[&BN4HAAA=] [&BNYHAAA=] [&BMwHAAA=] [&BLYEAAA=] [&BLsEAAA=] [&BP4EAAA=] [&BAwEAAA=] [&BIYDAAA=] [&BKgDAAA=]")
			console.log("Copied: [&BN4HAAA=] [&BNYHAAA=] [&BMwHAAA=] [&BLYEAAA=] [&BLsEAAA=] [&BP4EAAA=] [&BAwEAAA=] [&BIYDAAA=] [&BKgDAAA=]")
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

.floatingButton{
	position: absolute;
	bottom: 10%;
	right: 5%;
}

.floatingButton{
	background-color:  #1D1E22;
}

.floatingButton:hover{
	transform: scale(1.1);
	background-color: #0d6efd !important;
}

</style>
