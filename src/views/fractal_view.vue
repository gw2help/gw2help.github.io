<template>
    <!--<div class="col-11 row mx-auto my-2 fracList">-->
        <fractal
            :dailies="dailies"
            :recs="recs"
        />
    <!--</div>-->
</template>

<script>
    import fractal from '../components/fractal_component.vue'
    import fracJson from '../assets/gw2_fractals_daily.json'

    export default 
    {
        name: 'fractal_view',
        data(){
            return{
                recs: [],
                dailies: [],
            }
        },
        components: { 
            fractal
        },
        methods: {
            getFractals: function(){
			    var recs = [];
			    var dailies = [];

			    /* GET DAILY FRACTALS */
			    fetch(`https://api.guildwars2.com/v2/achievements/categories/88`)
			    .then(r => r.json())
			    .then(data => { 
			    	console.log("DATA");
			    	console.log(data.achievements);
			    	for(let i=0; i<data.achievements.length;i++){
    		    		switch(data.achievements[i]){
    				// recs				[index -1]			json
    				case 2477:
    				    recs.push(fracJson[2]);		// 2
    				    break;
    				case 2405:
    				    recs.push(fracJson[4]); 	// 4
    				    break;
    				case 2316:
    				    recs.push(fracJson[5]);		// 5
    				    break;
    				case 2229:
    				    recs.push(fracJson[6]);		// 6
    				    break;
    				case 2422:
    				    recs.push(fracJson[8]);		// 8
    				    break;
    				case 2560:
    				    recs.push(fracJson[10]);
    				    break;
    				case 2153:
    				    recs.push(fracJson[11]);
    				    break;
    				case 2597:
    				    recs.push(fracJson[12]);
    				    break;
    				case 2327:
    				    recs.push(fracJson[14]);
    				    break;
    				case 2238:
    				    recs.push(fracJson[15]);
    				    break;
    				case 2308:
    				    recs.push(fracJson[16]);
    				    break;
    				case 2467:
    				    recs.push(fracJson[18]);
    				    break;
    				case 2492:
    				    recs.push(fracJson[19]);
    				    break;
    				case 2245:
    				    recs.push(fracJson[24]);
    				    break;
    				case 2473:
    				    recs.push(fracJson[25]);
    				    break;
    				case 2239:
    				    recs.push(fracJson[27]);
    				    break;
    				case 2297:
    				    recs.push(fracJson[28]);
    				    break;
    				case 2330:
    				    recs.push(fracJson[30]);
    				    break;
    				case 2533:
    				    recs.push(fracJson[31]);
    				    break;
    				case 2363:
    				    recs.push(fracJson[32]);
    				    break;
    				case 2592:
    				    recs.push(fracJson[34]);
    				    break;
    				case 2266:
    				    recs.push(fracJson[35]);
    				    break;
    				case 2309:
    				    recs.push(fracJson[36]);
    				    break;
    				case 2377:
    				    recs.push(fracJson[37]);
    				    break;
    				case 2591:
    				    recs.push(fracJson[39]);
    				    break;
    				case 2171:
    				    recs.push(fracJson[40]);
    				    break;
    				case 2598:
    				    recs.push(fracJson[41]);
    				    break;
    				case 2394:
    				    recs.push(fracJson[42]);
    				    break;
    				case 2337:
    				    recs.push(fracJson[48]);
    				    break;
    				case 3237:
    				    recs.push(fracJson[53]);
    				    break;
    				case 3185:
    				    recs.push(fracJson[54]);
    				    break;
    				case 3192:
    				    recs.push(fracJson[58]);
    				    break;
    				case 3228:
    				    recs.push(fracJson[59]);
    				    break;
    				case 3172:
    				    recs.push(fracJson[60]);
    				    break;
    				case 3198:
    				    recs.push(fracJson[61]);
    				    break;
    				case 3213:
    				    recs.push(fracJson[62]);
    				    break;
    				case 3215:
    				    recs.push(fracJson[64]);
    				    break;
    				case 3189:
    				    recs.push(fracJson[65]);
    				    break;
    				case 3184:
    				    recs.push(fracJson[66]);
    				    break;
    				case 3201:
    				    recs.push(fracJson[67]);
    				    break;
    				case 3187:
    				    recs.push(fracJson[68]);
    				    break;
    				case 3219:
    				    recs.push(fracJson[69]);
    				    break;
    				case 3238:
    				    recs.push(fracJson[75]);
    				    break;
            // DAILIES
    				case 2956:
    				    dailies.push(fracJson[76]);
    				    break;
    				case 2892:
    				    dailies.push(fracJson[77]);
    				    break;
    				case 4494:
    				    dailies.push(fracJson[78]);
    				    break;
    				case 2923:
    				    dailies.push(fracJson[80]);
    				    break;
    				case 2947:
    				    dailies.push(fracJson[81]);
    				    break;
    				case 2967:
    				    dailies.push(fracJson[82]);
    				    break;
					case 2903:
						dailies.push(fracJson[83]);
						break;
    				case 4224:
    				    dailies.push(fracJson[84]);
    				    break;
    				case 2941:
    				    dailies.push(fracJson[85]);
    				    break;
    				case 2952:
    				    dailies.push(fracJson[86]);
    				    break;
    				case 3973:
    				    dailies.push(fracJson[87]);
    				    break;
					case 2892:
						dailies.push(fracJson[89]);
						break;
					case 2966:
						dailies.push(fracJson[90]);
						break;
					case 2939:
						dailies.push(fracJson[91]);
						break;
					case 2989:
						dailies.push(fracJson[92]);
						break;
					case 2952:
						dailies.push(fracJson[93]);
						break;
					case 2930:
						dailies.push(fracJson[94]);
						break;
					case 2932:
						dailies.push(fracJson[95]);
						break;
					case 2948:
						dailies.push(fracJson[96]);
						break;
					case 3038:
						dailies.push(fracJson[97]);
						break;
					case 3177:
						dailies.push(fracJson[98]);
						break;
					case 3458:
						dailies.push(fracJson[99]);
						break;
					case 5446:
						dailies.push(fracJson[100]);
						break;					
			    		}
			    	}
                    this.recs = recs;
                    this.dailies = dailies;
			    	console.log("RECS:"); 
                    recs.sort((a,b) => a.level - b.level);
			    	console.log(this.recs);
			    	console.log("DAILIES:");
                    dailies.sort((a,b) => a.level - b.level);
			    	console.log(this.dailies);
			    })
		    }
        },
        mounted(){
            this.getFractals();
        }
    }
</script>

<style scoped>


</style>

