<template><!-- v-show="((sell/10000)*0.85 - totalPriceMats) > 335" -->
  <div id="app" v-show="((sell/10000)*0.85 - totalPriceMats) > requestNumber">
  <div class="ingredients bg-dark container pt-0" >
  	<!-- 	ITEM CARD -->
  	<div class="row bg-primary text-light roundedz-top">
  		<div class="col-2 border border-primary rounded-top-left">
  			<img alt="Melandru's Gaze.png" :src="icon" class="itemImg rounded-top-left"> 
  		</div>
  		<div class="col-10 rounded-top-right">
  			
  			<h5 class="align-bottom pt-2">
  				<small><small> {{id}} </small></small>
  				{{name}}
  			</h5>

  		</div>
  	</div>
  	<!-- 	ITEM -> BUY SELL ROW -->
  	<div class="row bg-dark text-light border-top border-bottom border-primary">
  			<div class="col-2 test border-end border-primary"></div>
  			<div class="col-2 test border-start border-end border-primary"><span>BUY</span></div>
  			<div class="col-2 test border-end border-primary">QTY</div>
  			<div class="col-2 test border-start border-end border-primary">SELL</div>
  			<div class="col-2 test border-end border-primary">QTY</div>
  			<div class="col-2 test border-start border-primary">++</div>
  	</div>
  	<div class="row border-bottom border-primary text-light">
  			<div class="col-2 border-end border-primary"></div>
  			<div class="col-2 border-start border-end border-primary"
  				:class="{'bg-success': buy < sell/2 }">
  					{{(buy /10000).toFixed(1)}}
  			</div>
  			<div class="col-2 border-end border-primary">({{buyA}})</div>
  			<div class="col-2 border-start border-end border-primary bg-success"><b>{{(sell /10000).toFixed(1)}}</b></div>
  			<div class="col-2 border-end border-primary">({{sellA}})</div>
  			<div class="col-2 border-start border-primary text-center px-0" 
  				:class="{'bg-success': profit > 50}"> {{(profit/1).toFixed(1)}}</div>
  	</div>
  	<!-- 	MATERIALS LIST -->
  	<div class="row bg-dark text-light border-top border-bottom border-primary" style="height:35px">
  			<div class="col-2 test border-end border-primary">MATS</div>
  			<div class="col-6 test border-end border-primary">NAME</div>
  			<div class="col-2 test border-end border-primary">QTY</div>
  			<div class="col-2 test border-primary">€</div>
  	</div>
  	<div class="row mb-1  text-light" style="height:30px" v-for="x in mats" :key="x.id">
  			<div class="col-2 test border-end border-primary">
  				<img class="smallImg" :src="x.icon">
  			</div>
  			<div class="col-6 test border-end border-primary pt-2">
  				<small>{{x.name}}</small>
  				<!--<small v-else> {{x.name}} </small>-->
  			</div>
  			<div class="col-2 test border-end border-primary">{{x.count}}</div>
  			<div class="col-2 test border-start">{{((x.buy * x.count)/10000).toFixed(1)}}</div>
  	</div>
  	<!-- 	TOTAL ROW - if -->
  	<div class="row border-top border-primary bg-dark text-light roundedz-btm" v-if="totalPriceMats < sell/10000"> 
  			<div class="col-2 border-end border-primary rounded-btm-left bg-success"><b> {{((sell/10000)*0.85 - totalPriceMats).toFixed(1)}}</b></div>
  			<div class="col-6 text-right">
  				<b>Total Matcost</b>
  			</div>
  			<div class="col-2 border-end border-primary"><b> => </b></div>
  			<div class="col-2 bg-success text-center px-0 rounded-btm-right">
  				<b>
  					{{ 	totalPriceMats =
  						((( mats[0].buy * mats[0].count)+
  						( mats[1].buy * mats[1].count)+
  						( mats[2].buy * mats[2].count)+ 
  						( mats[3].buy * mats[3].count))/10000).toFixed(1)
  					}}
  				</b>
  			</div>
  	</div>
  	<!--	TOTAL ROW - else -->
  	<div class="row border-top border-primary bg-dark text-light" v-else> 
  			<div class="col-8 text-right">
  				<b>Buy @ black lion</b>
  			</div>
  			<div class="col-2"><b> => </b></div>
  			<div class="col-2 border-start border-primary bg-danger text-center px-0">
  				<b>
  					{{ 	totalPriceMats =
  						((( mats[0].buy * mats[0].count)+
  						( mats[1].buy * mats[1].count)+
  						( mats[2].buy * mats[2].count)+ 
  						( mats[3].buy * mats[3].count))/10000).toFixed(1)
  					}}
  				</b>
  			</div>
  	</div>
</div>
</div>
</template>

<script>
  export default {
    name: 'mf_weapon_prices_Component',
    data(){
      return{
      	totalPriceMats: 0,

      }
    },
    props:{
     	id:{
     		type: Number,
     		required: true
     	},
     	name:{
     		type: String,
     		required: true
     	},
     	icon:{
     		type: String,
     		required: true
     	},
     	buy:{
     		type: Number,
     		required: true
     	},
     	buyA:{
     		type: Number,
     		required: true
     	},
     	sell:{
     		type: Number,
     		required: true
     	},
     	sellA:{
     		type: Number,
     		required: true
     	},
     	profit:{
     		type: String,
     		required: true
     	},
     	mats:{
     		type: Array,
     		required: true
		 },
		 requestNumber:{
			 type: Number,
			 required: true
		 }

    },
    methods:{
    
    },

  }
</script>
<style scoped>
	h5{
		text-shadow: 1px 1px #B8860B;
	}

	.col-2{
		padding-left: 0px !important;
		padding-right: 0px !important;
		text-align: center;
	}

	.test{
		height: 35px;
		text-align: center;
		padding-top: 5px;
		padding-bottom: 5px;
	}

	.item-icon.small, .item-icon.small img {
    	width: 20px;
    	height: 20px;
	}

	.item-icon.small, .item-icon.medium {
	    display: inline-block;
	    overflow: hidden;
	    vertical-align: middle;
	    margin-left: -1pt;
	}
	
	.small {
	    font-size: 94%;
	}

	.ingredients{
		border: 2px solid #0d6efd;
		border-radius: 17.5px;
		padding-top: 10px;
		float:right;
		

	}

	#app{
		margin-left: 10px;
		width: 330px;
		display: inline-block;
	} 

	dt{
		float:left;
		margin-left: 3vw;
	}

	dd{
		margin-left: 10vw;
		text-align: left;
	}

	.itemImg{
		width: 100%;
		height: auto;
		max-width: 45px;
	}

	.w-90{
		width: 90%;
	}

	.hidden{
		display: none;
	}

	small
	{
		font-size: 10px;
		font-weight: 400;
		display: block;
		line-height: 100%;

	}

	.smallImg{
		width: 50%;
		height: auto;
	}

	.bg-success{
		font-weight: bold;
	}

	.bg-dark text-light{
		font-weight: bold;
	}

	

</style>








