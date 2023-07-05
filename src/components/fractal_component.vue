<template>
	<div class="col-15 px-1">
	    <div class="frac fracDaily roundedz bg-darkz text-white px-0 border border-primary">
	    	<a href="#" target="_blank">
	    		<h5 class="text-center pt-3 pb-3 roundedz-top">DAILY</h5>
	    	</a>
	    	<div v-for="daily in dailies" :key="daily" class="row my-2 mx-3 border border-primary roundedz px-0">
				<p v-if="!hover" @mouseover="hover = true" class="w-100 my-1 text-center px-0">{{daily.level}}</p>
                <p v-if="hover" @mouseleave="hover = false" class="w-100 my-1 text-center px-0">{{daily.name}}</p>
			</div>
	    	<div class="row pt-2"><img class="d-none" src="#"></div>
	    </div>
    </div>
    <div class="col-15 px-1">
	    <div class="frac fracRec roundedz bg-darkz text-white px-0 border border-primary">
	    	<a href="#" target="_blank">
	    		<h5 class="text-center pt-3 pb-3 roundedz-top">REC</h5>
	    	</a>
	    	<div v-for="rec in recs" :key="rec" class="row my-2 mx-3 border border-primary roundedz px-0">
				<p v-if="!hover" @mouseover="hover = true" class="w-100 my-1 text-center px-0">{{rec.level}}</p>
                <p v-if="hover" @mouseleave="hover = false" class="w-100 my-1 text-center px-0">{{rec.name}}</p>
			</div>
	    	<div class="row pt-2"> </div>
	    </div>
    </div>
</template>
<script>
  export default {
    name: 'fractal_component',
    data(){
      return{
            hover: false,
      }
    },
    components:{
        
    },
	props:
	{
		dailies: {
			type: Array,
			required: true
		},
        recs: {
            type: Array,
            required: true
        }
    },
    methods:{
       
	}
  }
  </script>
  <style scoped>
.frac a h5{
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

  .fracDaily h5{
    background: url(../img/fractals/fractals_cm.png);
  }

  .fracRec h5{
    background: url(../img/fractals/fractals.png);
  }
  </style>