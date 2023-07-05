<template>
    <div class="col-11 row mx-auto my-2 strikeList"  style="height:110px">
        <!--<div class="col-15"></div>-->
        <strikes
            v-for="strike in ibsStrikes" 
            
            :key="strike.name" 
            :is="strike.obj"
            
            :json="ibsStrikes"
            :strike="strike"
        />
        <frac></frac>
        <!--<div class="col-15"></div>-->
    </div>
    <div class="col-11 row mx-auto my-2 strikeList">
        <div class="col-075"></div>
        <strikes
            v-for="strike in strikez" 
            
            :key="strike.name" 
            :is="strike.obj"
            
            :json="strikez"
            :strike="strike"
        />
        <div class="col-15">

        </div>
    </div>
    <a target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=7J3VDAT6LVY7C"><img class="donateImgz mt-2 col-6 mx-auto" src="../img/donate_gem.png"></a>
</template>

<script>
    import strikes from '../components/strikes_component.vue'
    import json from '../assets/gw2_progression_data.json'
    import frac from '../views/fractal_view.vue'

    export default 
      {
        name: 'strikes_view',
        data(){
            return{
                strikez: json.strikes,
                ibsStrikes: json.ibs,
                
                dailyIBS: "",
                dailyEOD: "",
            }
        },
        components: { 
            strikes,
            frac
        },
        methods: {
            dailyEODPick(id){
                switch(id){
                    case 6353: // AH
                        document.querySelector(".s1").style.border = "1px solid yellow";
                        break;
                    case 6307: // HT
                        document.querySelector(".s4").style.border = "1px solid yellow";
                        break;
                    case 6327: // KO
                        document.querySelector(".s3").style.border = "1px solid yellow";
                        break;
                    case 6457: // XJ
                        document.querySelector(".s2").style.border = "1px solid yellow";
                        break;
                    case 6803: // OLC
                        document.querySelector(".s5").style.border = "1px solid yellow";
                        break;
                }   
            },
            dailyIBSPick(id){
                switch(id){
                    case 5328: // cold war
                        document.querySelector(".ibs1").style.border = "1px solid yellow";
                        break;
                    case 5233: // freanir of jormag
                        document.querySelector(".ibs2").style.border = "1px solid yellow";
                        break; 
                    case 5239: // shiverpeaks pass
                        document.querySelector(".ibs3").style.border = "1px solid yellow";
                        break;
                    case 5207: // voice of the fallen and claw of the fallen
                        document.querySelector(".ibs4").style.border = "1px solid yellow";
                        break;
                    case 5210: // whisper of jormag
                        document.querySelector(".ibs5").style.border = "1px solid yellow";
                        break; 
                    case 5194: // boneskinner
                        document.querySelector(".ibs6").style.border = "1px solid yellow";
                        break;
                }
            },
            getStrikes: function(){
                fetch(`https://api.guildwars2.com/v2/achievements/categories/250`)
			        .then(r => r.json())
			        .then(data => { 
                        this.dailyIBS = data.achievements[0]; 
                        this.dailyEOD = data.achievements[1];
                        
                        console.log("IBS: " + this.dailyIBS);
                        console.log("EOD: " + this.dailyEOD);

                        this.dailyIBSPick(this.dailyIBS);
                        this.dailyEODPick(this.dailyEOD);
                    });
            }          
        },
        mounted(){
            this.getStrikes();
        }
    }
</script>

<style scoped>


@media (max-width: 1899px){
    .donateImgz{
        position: fixed;
        bottom: 20px;
        right: 10px;
        max-width: 50px;
        max-height: 50px;
    }
}

@media (max-width: 1300px){
    .donateImgz{
        position: fixed;
        bottom: 15px;
        right: 10px;
        max-width: 35px;
        max-height: 35px;
    }
}

@media (min-width: 1900px){
    .donateImgz{
        position: fixed;
        bottom: 20px;
        right: 10px;
        max-width: 70px;
        max-height: 70px;
    }
}


.donateImgz:hover{
    transform: scale(1.2);
}

</style>

