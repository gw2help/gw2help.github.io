<template>
    <div class="row bg-nav rounded py-3 mx-0 border-bottom border-primary navBar" style="min-width:800px">
		<div class="col-1 d-md-none d-lg-block"></div>
		<div class="col-3 row" style="min-width:380px">
			<router-link :to="{ name: 'progress' }" class="navBtn growBig achievBtn"> <div class="col-2 px-auto mx-auto border border-primary bg-darkz roundedz text-white navBtn"> <img class="w-100" src="../img/main/gui_achievements2.png"></div> </router-link>
        	<router-link :to="{ name: 'join' }" class="navBtn growBig armorBtn"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn"><img class="w-100" src="../img/main/gui_armor2.png"></div> </router-link>
			<router-link :to="{ name: 'builds' }" class="navBtn growBig buildBtn"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn"><img class="w-100" src="../img/main/gui_build2.png"></div> </router-link>
			<router-link :to="{ name: 'crafting' }" class="navBtn growBig craftBtn"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn"><img class="w-100" src="../img/main/gui_crafting2.png"></div> </router-link>
			<router-link :to="{ name: 'timers' }" class="navBtn growBig masteryBtn"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn"><img class="w-100" src="../img/main/gui_mastery2.png"></div> </router-link>
			<router-link :to="{ name: 'killproof' }" class="navBtn growBig storyBtn"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn"><img class="w-100" src="../img/main/gui_story2.png"></div> </router-link>
		</div>

		<div class="col-3 ms-auto row" style="min-width:380px">	
			<router-link :to="{name: 'foodies'}" class="foodiesBtn navBtnz growBig">
				<div width="42px" height="42px" class="col-2 mx-auto border border-primary bg-dark roundedz text-white navBtn"><img class="w-100 roundedz" src="../img/main/map_craft_cooking.png"></div>
			</router-link>
			
			<router-link :to="{name: 'utilities'}" class="mf_upgradeBtn navBtnz growBig">
				<div width="42px" height="42px" class="col-2 px-auto mx-auto border border-primary bg-dark roundedz text-white navBtn"><img class="w-100 roundedz" src="../img/main/utility.png" alt="MF upgrades"></div>
			</router-link>
			
			<router-link :to="{name: 'attribute'}" class="attributeBtn navBtnz growBig">
				<div width="42px" height="42px" class="col-2 mx-auto border border-primary bg-dark roundedz text-white navBtn"><img class="w-100 roundedz" src="../img/main/map_vendor_weapons.png"></div>
			</router-link>

			<router-link :to="{name: 'rune'}" class="testBtn navBtnz growBig">
				<div width="42px" height="42px" class="col-2 mx-auto border border-primary bg-dark roundedz text-white navBtn"><img class="w-100 roundedz" src="../img/main/rune.png"></div>
			</router-link>
				
			<router-link :to="{name: 'sigil'}" class="testBtn navBtnz growBig">
				<div width="42px" height="42px" class="col-2 mx-auto border border-primary bg-dark roundedz text-white navBtn"><img class="w-100 roundedz" src="../img/main/sigil.png"></div>
			</router-link>

			<router-link :to="{name: 'extra'}" class="extraBtn navBtnz growBig">
				<div width="42px" height="42px" class="col-2 mx-auto border border-primary bg-dark roundedz text-white navBtn"><img class="w-100 roundedz" src="../img/main/gui_extra.png"></div>
			</router-link>

		</div>
		<div class="col-1 d-md-none d-lg-block"></div>
	</div>
	<div class="fakeNav py-4"></div>
</template>

<script>
export default {
    name: 'Nav',
    data(){
      return{
      	

      }
    },
    props:{
        
    },
    methods:{
    }
}
</script>

<style scoped>
	

    .navBtn{
		width: 40px;
    	height: 40px;
        /*margin-left: 15px;*/
		margin-left: auto;
		margin-right: auto;
        padding: 2px;
	}

	.navBtnz{
		width: 40px;
    	height: 40px;
        /*margin-right: 15px;*/
		margin-left: auto;
		margin-right: auto;
        padding: 2px;
	}

	.fakeNav{
		height: 75px;
	}

	.navBar{
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1000;
		height: 75px;
	}

    .bg-nav{
		background-color:  #2E303E;
	}

	.navBtn:hover, .btnGo:hover {
		border-width: 2px !important;
	}



</style>
    
