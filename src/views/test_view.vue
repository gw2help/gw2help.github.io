<template>
    <div class="col-11 row mx-auto my-2 strikeList"  style="height:110px">
        <div class="p-0">
            <a target="_blank" class="px-0" >
	    	        <h5 class="text-center py-3 roundedz-top">test</h5>
	    	</a>
            <div class="col-15 bg-darkz roundedz-left ">

            </div>
            <div class="col-15 bg-darkz roundedz-right">

            </div>
        </div>
        <div class="col-30 px-0">
            <div class="row roundedz bg-darkz text-white ibs px-0">
                <a target="_blank" class="px-0" >
	    	        <h5 class="text-center py-3 roundedz-top">IBS</h5>
	    	    </a>
                <strikes
                    v-for="strike in ibsStrikes" 

                    :key="strike.name" 
                    :is="strike.obj"

                    :json="ibsStrikes"
                    :strike="strike"
                />
            </div>
        </div>
        <div class="col-30 strike roundedz bg-darkz text-white px-0 eod">
            <a target="_blank">
	    		<h5 class="text-center pt-3 pb-3 roundedz-top">EOD</h5>
	    	</a>
            <strikes
                v-for="strike in strikez" 
                class="col-30"

                :key="strike.name" 
                :is="strike.obj"

                :json="strikez"
                :strike="strike"
            />
        </div>
        <frac></frac>
    </div>
</template>

<script>
    import strikes from '../components/test_component.vue'
    import json from '../assets/gw2_progression_data.json'
    import frac from '../views/fractal_view.vue'

export default {
    name: 'test_view',
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
            //setTimeout(this.getStrikes,3000) 
            this.getStrikes();
        }
    }
</script>

<style scoped>
a{
    color: #FFFFFF;
}

.ibs a h5{
    background: url(../img/strikes/foj.png);
}

</style>

