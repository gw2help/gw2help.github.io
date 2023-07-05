<template>
    <div id="outerdivTopMenu" class="mx-auto row w-100 py-1">
        <div class="col-1"></div>
        <div class="navbtn col-2" @click="weapon"><img class="d-block mx-auto" src="../img/main/gui_legendary.png"></div>
        <div class="navbtn col-2" @click="armor"><img class="d-block mx-auto" src="../img/main/legendary_armor.png"></div>
        <div class="navbtn col-2" @click="trinket"><img class="d-block mx-auto" src="../img/main/legendary_trinket.png"></div>
        <div class="navbtn col-2" @click="rune"><img class="d-block mx-auto" src="../img/main/legendary_rune.png"></div>
        <div class="navbtn col-2" @click="sigil"><img class="d-block mx-auto" src="../img/main/legendary_sigil.png"></div>
        <div class="col-1"></div>
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
    import json from '../assets/gw2_progression_data.json'

    export default 
      {
        name: 'legendary_view',
        data(){
            return{
                src: "https://wiki.guildwars2.com/wiki/Legendary_weapon#Generation_1"
            }
        },
        methods: {
            weapon(){
                this.src= "https://wiki.guildwars2.com/wiki/Legendary_weapon"
            },
            armor(){
                this.src = "https://wiki.guildwars2.com/wiki/Legendary_armor"
            },
            trinket(){
                this.src = "https://wiki.guildwars2.com/wiki/Legendary_trinket"
            },
            rune(){
                this.src = "https://wiki.guildwars2.com/wiki/Legendary_Rune"
            },
            sigil(){
                this.src = "https://wiki.guildwars2.com/wiki/Legendary_Sigil"
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