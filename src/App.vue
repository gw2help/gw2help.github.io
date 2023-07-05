<template class="bg-black">
  
  <Nav class="mb-5" @apiSearch="callback"/>
  
  <router-view @scroll.prevent @wheel.prevent @apiSearch="apiMain"/>
  
</template>


<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  data(){
    return{
      bgColor:{
        backgroundColor:"rgb(22,22,22)"
      },
	  iframe: ""
    }
  },
  components: {
    Nav
  },
  methods: {
	apiMain(){ 
		console.log("apiMain: APP.vue")
		apikey = document.querySelector('token').value;
		console.log(apikey);
	}
  },
  mounted(){
	
  }
}
</script>

<style>
  @import'~bootstrap/dist/css/bootstrap.css';

  body,html{
    min-height: 100vh;    
    background-color: rgb(22,22,22);
	font-family:'Work Sans', sans-serif;
  }

  #app {
    background-color: rgb(22,22,22);
	  width: 100%;
  }

  #outerdivFullPage{
		height: 92vh;
		position: relative;
		overflow: hidden;
		vertical-align: top;
	}

	/* scrollbar */
		/* width */
		::-webkit-scrollbar {
		  width: 8px;
		}

		/* Track */
		::-webkit-scrollbar-track {
		  background: rgb(22,22,22)
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
		  background: #0d6efd;
		  border-radius: 17.5px;		  
		}

		/* Handle on hover */
		::-webkit-scrollbar-thumb:hover {
		  background: #555;
		}

  /* BOLSTRAP */
  	.bg-grey-trans{
		background-color: rgba(100,100,100,0.5);
	}

	.opacity-25{
		opacity: 0.25;
	}

	.small-ico{
		width: 50px;
		height: 50px;
	}

	.med-ico{
		width: 75px;
		height: 50px;
	}

	.grayedOut{
		filter: grayscale(1);
	}

	.border-thick{
		border-width: 2px;
	}

  	.roundedz{
		border-radius: 17.5px;
	}

	.roundedz-top{
		border-top-left-radius: 17.5px;
		border-top-right-radius: 17.5px;
	}

	.roundedz-btm{
		border-bottom-right-radius: 17.5px;
		border-bottom-left-radius: 17.5px;
	}

	.roundedz-left{
		border-top-left-radius: 17.5px;
		border-bottom-left-radius: 17.5px;
	}

	.roundedz-right{
		border-top-right-radius: 17.5px;
		border-bottom-right-radius: 17.5px;
	}

  .rounded-top-left{
		border-top-left-radius: 17.5px;
	}

	.rounded-top-right{
		border-top-right-radius: 17.5px;
	}

  	.rounded-btm-left{
			border-bottom-left-radius: 17.5px;
  	}

  	.rounded-btm-right{
			border-bottom-right-radius: 17.5px;
  	}

  	.bg-darkz{
		background-image: linear-gradient(225deg, #2E303E 0%, #1D1E22 100%);
	}

  	.bg-black{
		background-color: rgb(22,22,22);
	}

	.w-30px{
		width: 30px;
	}

	.w-90{
		width: 90%;
	}

	.col-075{
		flex: 0 0 auto;
		width: 6.25%;
	}

	.col-15{
    	flex: 0 0 auto;
    	width: 12.5%;
	}

	.col-225{
		flex: 0 0 auto;
		width: 18.25%;
	}

	.col-30{
		flex: 0 0 auto;
		width: 25%;
	}

	.col-85{
		flex: 0 0 auto;
    	width: 87.5%;
	}

	.text-orange{
		color: #ffa405;
	}

	.text-pink{
		color: #fb3e8d;
	}

	.icon{
		width: 40px;
		height: 40px;
		max-width: 40px;
		max-height: 40px;
	}

	.grow:hover{
		transform: scale(1.15);
	}

	.growBig:hover{
		transform: scale(1.2);
	}

	.navBtn:hover, .btnGo:hover {
		border-width: 2px !important;
	}

	.smallText{
		font-size: 11px;
	}
	
</style>
