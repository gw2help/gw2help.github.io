<template>
	<div :ref="strike.class" :id="strike.class" class="col-5 my-1 mx-3 border border-primary roundedz px-0">
		<a :href="strike.video" target="_blank" style="text-decoration: none;color:inherit;">
			<p class="w-100 my-1 text-center px-0">{{strike.name}}</p>
		</a>
	</div>
</template>
<script>

  export default {
    name: 'test_component',
    data(){
      return{
		s1: -1,
		s2: -1,
		s3: -1,
		s4: -1,
        s5: -1,
		index: -1,

      }
    },
    components:{
        
    },
	props:
	{
		strike: {
			type: Object,
			required: true
		}
    },
    methods:{
		apiMain: async function(){
			this.resetPathBgColor();
			this.getStrikes()
		},
        resetPathBgColor(){
			this.allPath = document.querySelectorAll('#s1 , #s2 , #s3 , #s4	, #s5');
			console.log("RESET");
			for(let i =0;i<this.allPath.length;i++){
				this.allPath[i].style.backgroundColor = "transparent";
				console.log(this.allPath[i]);
			}
		},
		isActive(menuItem){
			return this.activeItem === menuItem;
		},
		setActive(menuItem){
			this.activeItem = menuItem;
		}
	}
  }
  </script>
  <style scoped>
.strike a h5{
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
  .s1 h5{
	background: url(../img/strikes/ah.png);
  }

  .s2 h5{
	background: url(../img/strikes/xj.png);
  }

  .s3 h5{
	background: url(../img/strikes/ko.png);
  }

  .s4 h5{
	background: url(../img/strikes/ht.png);
  }

  .s5 h5{
	background: url(../img/strikes/olc.png);
  }

  .ibs1 a h5{
	background: url(../img/strikes/cw.png);
  }
  .ibs2 h5, .ibs4 h5 , .ibs6 h5{
	background: url(../img/strikes/foj.png);
  }
  .ibs3 h5{
	background: url(../img/strikes/sp.png);
  }
  .ibs5 h5{
	background: url(../img/strikes/woj.png);
  }
  </style>