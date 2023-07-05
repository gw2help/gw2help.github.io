<template>
    <div id="outerdivTopMenu" class="mx-auto row w-100 py-1">
        <div class="col-2"></div>
        <div class="navbtn col-2" @click="booster"><img class="d-block mx-auto" src="../img/main/gui_exp_boost.png"></div>
        <div class="navbtn col-2" @click="magic"><img class="d-block mx-auto" src="../img/main/gui_magic_boost.png"></div>
        <div class="navbtn col-2" @click="pvp"><img class="d-block mx-auto" src="../img/main/gui_pvp_boost.png"></div>
        <div class="navbtn col-2" @click="wvw"><img class="d-block mx-auto" src="../img/main/gui_wvw_boost.png"></div>
        <div class="col-2"></div>
    </div>
    
    <div id="outerdivSmaller" class="roundedz d-block my-0 w-100 float-center mx-auto">      
		<iframe 
	    	id="innerdivArmor"
	    	:src="src" 
	    	scrolling="yes" 
	    	frameborder="0" 
	    	class="border border-primary roundedz w-100"></iframe>
	</div>	
</template>

<script>

    export default 
      {
        name: 'legendary_view',
        data(){
            return{
                src: "https://wiki.guildwars2.com/wiki/Booster"
            }
        },
        methods: {
            booster(){
                this.src= "https://wiki.guildwars2.com/wiki/Booster"
            },
            magic(){
                this.src = "https://wiki.guildwars2.com/wiki/Magic_Find"
            },
            pvp(){
                this.src = "https://wiki.guildwars2.com/wiki/PvP_Reward_Track"
            },
            wvw(){
                this.src = "https://wiki.guildwars2.com/wiki/WvW_Reward_Track"
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>
    #outerdivTopMenu img{
        height: inherit;
    }

    #innerdivArmor{
		position: absolute;
		height: inherit;
	}

    #outerdivTopMenu{
        height: 7vh;
		position: relative;
		overflow: hidden;
		vertical-align: top;
    }

    #outerdivSmaller{
	  	height: 85vh;
		position: relative;
		overflow: hidden;
		vertical-align: top;
  }

</style>