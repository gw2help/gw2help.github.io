<template>
<div class="col-11 row mx-auto mb-2">
  <div class="col-15 px-1" v-for="x in dungList" :key="x">
	    <div class="wing roundedz bg-darkz text-white px-0" :class="x.class">
	    	<a :href="x.fullGuide" target="_blank">
	    		<h5 class="text-center pt-3 pb-3 roundedz-top">{{x.wing}}</h5>
	    	</a>
			
	    	<div @click="w1b1Click*=-1" class="row my-2 mx-3 border border-primary roundedz px-0"><p class="w-100 my-1 text-center px-0">{{x.b1.name}}</p></div>
	    	<div @click="w1b2Click*=-1" class="row my-2 mx-3 border border-primary roundedz px-0"><p class="w-100 my-1 text-center px-0">{{x.b2.name}}</p></div>
	    	<div @click="w1b3Click*=-1" class="row my-2 mx-3 border border-primary roundedz px-0"><p class="w-100 my-1 text-center px-0">{{x.b3.name}}</p></div>
	    	<div v-if="x.b4" @click="w1b4Click*=-1" class="row my-2 mx-3 border border-primary roundedz px-0"><img class="d-none" src="../img/raid/sabetha.png"><p class="w-100 my-1 text-center px-0">{{x.b4.name}}</p></div>
            <div v-else class='row pt-2'></div>
	    	<div class="row pt-2"><img class="d-none" src="#"></div>
	    </div>
        <!--
	    <p class="subMenu text-white w-75 mx-auto text-center mb-0">
	    	<i class="fas fa-film p-0 m-0 w1Movie wingMovie"></i>
   	    	<div class="dropdown w-75 mx-auto text-center pt-0 mt-0 d-none w1Menu">
   	    		<a href="https://www.youtube.com/watch?v=qtzMDCVHlLg" class="d-block" target="_blank"> VG: Guide </a>
   	    		<a href="https://www.youtube.com/watch?v=Ni_-HkRtmm4" class="d-block" target="_blank"> SW: Guide </a>
   	    		<a href="https://www.youtube.com/watch?v=B9qbuP9kv4Q" class="d-block" target="_blank"> Gorse: Tank </a>
   	    		<a href="https://www.youtube.com/watch?v=4bqwSrZ2Sr4" class="d-block" target="_blank"> Sab: Guide </a>
	    	</div>
	    </p>
        -->
    </div>
	<div class="col-15 px-1">
		<div class="wing fractal roundedz bg-darkz border border-primary text-white px-0">
			<a href="#" ><h5 class="text-center pt-3 pb-3 roundedz-top" > FRACS </h5></a>
			<div class="row my-2 mx-3 border border-primary roundedz fracDaily px-0"><img class="d-none" :src="fractals.dailies" ><p class="w-100 my-1 text-center px-0" >Dailies</p></div>
			<div class="row my-2 mx-3 border border-primary roundedz fracRecs px-0"><img class="d-none" :src="fractals.recs" ><p class="w-100 my-1 text-center px-0" >Recs</p></div>
			<div class="row my-2 mx-3 border border-primary roundedz fracCMs px-0"><img class="d-none" :src="fractals.cms" > <p class="w-100 my-1 text-center px-0" >CMs</p></div>
			<div class="row pt-2" >
				<img class="d-none" src="#" >
			</div></div>
	</div>
</div>
</template>
<script>
import json from "../assets/gw2_progression_data.json"

console.log("RAIDS:");
console.log(json.raids);
console.log(json.raids.w1.b1.imgBoss);
console.log(json.raids.w3);

  export default {
    name: 'mf_weapon_prices_Component',
    data(){
      return{
      	raidList: json.raids,
        dungList: json.dungeons,
        fractals: json.fractals

      }
    },
    components:{
        
    },
    props:{
        /*
        wing: {
            type: String,
            required: true
        },
        fullGuide: {
            type: String,
            required: true
        },
        imgBg: {
            type: String,
            required: true
        },
        bossName: {
            type: String,
            required: true
        },
        bossVideo: {
            type: String,
            required: true
        },
        bossImg: {
            type: String,
            required: true
        },
        bossImgTank: {
            type: Array,
            required: false
        },
        bossImgToken: {
            type: String,
            required: false
        },
        bossCodeToken: {
            type: String,
            required: false
        }
        */
    },
    methods:{

    },

  }
</script>
<style scoped>
    .dung a h5,.wing a h5, .fracList > *,.fractals h5,.fractals,.kpWing{
		color: #FFFFFF;
		/*text-shadow: 1px 1px #007bff,-1px -1px #007bff;*/
		text-shadow: 1px 1px #343a40,-1px -1px #343a40;
		font-size: 15px;
		background-size: cover;
		background-repeat: no-repeat;
		font-family: 'Work Sans', sans-serif;
		font-weight: bold;
		letter-spacing: 1.5px;
		text-align: center;

	}

	.w1 h5 , .kpW1 , .imgW1{
		background: url(../img/raid/w1.png);
	}

	.w2 h5 , .kpW2{
		background: url(../img/raid/w2.png);
	}

	.w3 h5 , .kpW3{
		background: url(../img/raid/w3.png);
	}

	.w4 h5 , .kpW4{
		background: url(../img/raid/w4.png);
	}

	.w5 h5 , .kpW5{
		background: url(../img/raid/w5.png);
	}

	.w6 h5 , .kpW6{
		background: url(../img/raid/w6.png);
	}

	.w7 h5 , .kpW7{
		background: url(../img/raid/w7.png);
	}

	.wing .row{
		min-width: 66px;
	}

	.wing{
		min-width: 99px;

	}

    .fractal h5{
		background-image: url(../img/fractals/fractals.png);
	}

    .dung_ac{
		background: url(../img/dung/ac.png);
	}

	.dung_cm{
		background: url(../img/dung/cm.png);
	}

	.dung_ta{
		background: url(../img/dung/ta.png);
	}

	.dung_se{
		background: url(../img/dung/se.png);
	}

	.dung_cof{
		background: url(../img/dung/cof.png);
	}

	.dung_hotw{
		background: url(../img/dung/hotw.png);
	}

	.dung_coe{
		background: url(../img/dung/coe.png);
	}

	.dung_arah{
		background: url(../img/dung/arah.png);
	}

	
</style>