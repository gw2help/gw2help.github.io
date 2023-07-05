<template>
	<!--
	<div id="outerdivTimer" class="roundedz d-block my-0 w-100 float-center mx-auto">      
	    		<iframe 
	    			id="innerdivKp"
	    			src="https://killproof.me/proof/4xqb7/tokens" 
	    			scrolling="yes" 
	    			frameborder="0"

	    			class="border border-primary roundedz w-100"></iframe>
	</div>	
	<div class="" style="height:70vh"></div>
	<div class="" style="height:45vh"></div>
	-->
	
    <div class="row mt-5 mx-auto fakeKpList d-block">
		<div class="col-11 mx-auto pt-1">
			<div class="row">
				<div class="col-12">
					<div class="kpChoose row">
						<div class="col-lg-12 col-xl-6 row">
							<!-- w1 -->
								<div class="col-3 px-1">
									<div class="roundedz bg-darkz text-white px-0">
										<h5 class="text-center pt-3 pb-3 roundedz-top kpWing kpW1">WING 1</h5>
										<div class="row py-2 px-4">
										<div class="col-6 px-1 kpw1b1" @click="w1b1Click"><img src="https://wiki.guildwars2.com/images/f/f5/Vale_Guardian_Pieces.png" class="w-100"></div>
										<div class="col-6 px-1 kpw1b2"><div class="bg-grey-trans" style="width:100%;height:100%;"></div></div>
										<div class="col-6 px-1 mt-2 kpw1b3" @click="w1b3Click"><img src="https://wiki.guildwars2.com/images/e/ed/Gorseval_Tentacle.png" class="w-100"></div>
										<div class="col-6 px-1 mt-2 kpw1b4" @click="w1b4Click"><img src="https://wiki.guildwars2.com/images/c/c0/Sabetha_Flamethrower_Fragment.png" class="w-100"></div>
										</div>
									</div>
								</div>
							<!-- w2 -->
								<div class="col-3 px-1">
									<div class="roundedz bg-darkz text-white px-0">
										<h5 class="text-center pt-3 pb-3 roundedz-top kpWing kpW2">WING 2</h5>
										<div class="row py-2 px-4">
										<div class="col-6 px-1 kpw2b1" @click="w2b1Click"><img src="https://render.guildwars2.com/file/07D2F8C534312AB0D343AF21A32D08110AF9A7CA/1377340.png" class="w-100"></div>
										<div class="col-6 px-1 kpw2b2"><div class="bg-grey-trans" style="width:100%;height:100%;"></div></div>
										<div class="col-6 px-1 mt-2 kpw2b3" @click="w2b3Click"><img src="https://wiki.guildwars2.com/images/4/40/White_Mantle_Abomination_Crystal_%28trophy%29.png" class="w-100"></div>
										<div class="col-6 px-1 mt-2" @click="w2b4Click"></div>
										</div>
									</div>
								</div>
							<!-- w3 -->
								<div class="col-3 px-1">
									<div class="roundedz bg-darkz text-white px-0">
										<h5 class="text-center pt-3 pb-3 roundedz-top kpWing kpW3">WING 3</h5>
										<div class="row py-2 px-4">
										<div class="col-6 px-1 kpw3b1" @click="w3b1Click"><img src="https://wiki.guildwars2.com/images/c/c3/Turret_Fragment.png" class="w-100"></div>
										<div class="col-6 px-1 kpw3b2" @click="w3b2Click"><img src="https://wiki.guildwars2.com/images/c/cb/Keep_Construct_Rubble_%28trophy%29.png" class="w-100"></div>
										<div class="col-6 px-1 mt-2 kpw3b3"><div class="bg-grey-trans" style="width:100%;height:100%;"></div></div>
										<div class="col-6 px-1 mt-2 kpw3b4 " @click="w3b4Click"><img src="https://wiki.guildwars2.com/images/7/7a/Xera%27s_Ribbon_Scrap.png" class="w-100"></div>
										</div>
									</div>
								</div>
							<!-- w4 -->
								<div class="col-3 px-1">
									<div class="roundedz bg-darkz text-white px-0">
										<h5 class="text-center pt-3 pb-3 roundedz-top kpWing kpW4">WING 4</h5>
										<div class="row py-2 px-4">
										<div class="col-6 px-1 kpw4b1" @click="w4b1Click"><img src="https://wiki.guildwars2.com/images/6/63/Cairn_the_Indomitable_Shard.png" class="w-100"></div>
										<div class="col-6 px-1 kpw4b2" @click="w4b2Click"><img src="https://wiki.guildwars2.com/images/f/f1/Rec_Room_Floor_Tile.png" class="w-100"></div>
										<div class="col-6 px-1 mt-2 kpw4b3" @click="w4b3Click"><img src="https://wiki.guildwars2.com/images/a/aa/Impaled_Prisoner.png" class="w-100"></div>
										<div class="col-6 px-1 mt-2 kpw4b4 " @click="w4b4Click"><img src="https://wiki.guildwars2.com/images/c/cf/Fragment_of_Saul%27s_Burden.png" class="w-100"></div>
										</div>
									</div>
								</div>
						</div>
						<div class="col-lg-12 col-xl-6 row pt-lg-2 pt-xl-0">
							<!-- w5 -->
								<div class="col-3 px-1">
									<div class="roundedz bg-darkz text-white px-0">
										<h5 class="text-center pt-3 pb-3 roundedz-top kpWing kpW5">WING 5</h5>
										<div class="row py-2 px-4">
										<div class="col-6 px-1 kpw5b1" @click="w5b1Click"><img src="https://wiki.guildwars2.com/images/1/11/Desmina%27s_Token.png" class="w-100"></div>
										<div class="col-6 px-1 kpw5b2  opacity-25"><img src="https://wiki.guildwars2.com/images/2/27/River_of_Souls_Token.png" class="w-100"></div>
										<div class="col-6 px-1 mt-2 kpw5b3  opacity-25"><img src="https://wiki.guildwars2.com/images/7/7d/Statue_of_Grenth_Token.png" class="w-100"></div>
										<div class="col-6 px-1 mt-2 kpw5b4" @click="w5b4Click"><img src="https://wiki.guildwars2.com/images/thumb/2/24/Dhuum%27s_Token.png/40px-Dhuum%27s_Token.png" class="w-100"></div>
										</div>
									</div>
								</div>
							<!-- w6 -->
								<div class="col-3 px-1">
									<div class="roundedz bg-darkz text-white px-0">
										<h5 class="text-center pt-3 pb-3 roundedz-top kpWing kpW6">WING 6</h5>
										<div class="row py-2 px-4">
										<div class="col-6 px-1 kpw6b1 opacity-25"><img src="https://wiki.guildwars2.com/images/c/c4/Conjured_Amalgamate_Token.png" class="w-100"></div>
										<div class="col-6 px-1 kpw6b2 opacity-25"><img src="https://wiki.guildwars2.com/images/0/0a/Twin_Largos_Token.png" class="w-100"></div>
										<div class="col-6 px-1 mt-2 kpw6b3" @click="w6b3Click"><img src="https://wiki.guildwars2.com/images/b/ba/Qadim%27s_Token.png" class="w-100"></div>
										<div class="col-6 px-1 mt-2"></div>
										</div>
									</div>
								</div>
							<!-- w7 -->
								<div class="col-3 px-1">
									<div class="roundedz bg-darkz text-white px-0">
										<h5 class="text-center pt-3 pb-3 roundedz-top kpWing kpW7">WING 7</h5>
										<div class="row py-2 px-4">
										<div class="col-6 px-1 kpw7b1"><div class="bg-grey-trans" style="width:100%;height:100%;"></div></div>
										<div class="col-6 px-1 kpw7b2" @click="w7b2Click"><img src="https://wiki.guildwars2.com/images/1/12/Cardinal_Sabir%27s_Token.png" class="w-100"></div>
										<div class="col-6 px-1 mt-2 kpw7b3" @click="w7b3Click"><img src="https://wiki.guildwars2.com/images/2/28/Cardinal_Adina%27s_Token.png" class="w-100"></div>
										<div class="col-6 px-1 mt-2 kpw7b4" @click="w7b4Click"><img src="https://wiki.guildwars2.com/images/0/0e/Ether_Djinn%27s_Token.png" class="w-100"></div>
										</div>
									</div>
								</div>
							<!-- kpForm -->
								<div class="col-3 px-1 kpDiv">
									<div class="roundedz bg-darkz text-white px-0 mx-auto text-center border border-primary">
										<h5 class="text-center pt-3 pb-3 roundedz-top text-white kpWing w-100 text-center kpMain"> FAKE KP </h5>
										<div class="row py-2 px-3">
   											<input id="itemid" 
											   class="kpInput w-90 mx-2 text-center mb-2 roundedz border-primary mx-auto text-center text-white d-block bg-black" value="[&AgFzPAAA]"
											   @input="createChatCode" @change="createChatCode"
											   >
   											<input id="quantity" 
											class="kpInput w-90 mx-2 text-center mb-2 roundedz border-primary mx-auto text-center text-white d-block bg-black" 
											type="number" min="1" max="255" step="1" value="50"
											@input="test">

   											<div class="d-none">
   												<div><input id="upgrade1id" class="kpInput"></div>
   												<div><input id="upgrade2id" class="kpInput"></div>
   												<div><input id="skinid"></div>
   											</div>
        								<span id="code" 
											class="result text-white w-90 mx-2 roundedz border border-primary mx-auto text-center text-white d-block"
											 >result</span>
										</div>
        							</div>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-11 mx-auto text-center mt-3 text-warning ">
			<p class="mb-1">1. Enter amount.</p>
			<p class="mb-1">2. Click desired token.</p>
			<p class="mb-1">3. Paste in 'Fake KP'-block.</p>
			<p class="mb-1">4. Code is <b>auto-copied</b>.</p>
			<p class="mb-1">5. Paste in-game.</p>
		</div>
	</div>
	
</template>

<script>

export default {
    name: 'killproof_view',
    data(){
        return{
			kpForm: document.querySelector(".kpForm"),
			kpBtn: document.querySelector(".storyBtn"),
			fakeKpList: document.querySelector(".fakeKpList"),
			kpInput: document.querySelector("#itemid"),
			kpQuantity: document.querySelector(".kpQuantity"),
			seperator: 0,
			ids: 0,
			lengths: 0,
        }
	},
	methods:{
		showData(){
			console.log(this.wings);
		},
		w1b1Click(){
			navigator.clipboard.writeText("[&AgHRLwEA]");
		},
		w1b3Click(){
			navigator.clipboard.writeText("[&AgGhLwEA]");
		},
		w1b4Click(){
			navigator.clipboard.writeText("[&AgGbLwEA]");
		},
		w2b1Click(){
			navigator.clipboard.writeText("[&AgGaLwEA]");
		},
		w2b3Click(){
			navigator.clipboard.writeText("[&AgFvLwEA]");
		},
		w3b1Click(){
			navigator.clipboard.writeText("[&AgEZNAEA]");
		},
		w3b2Click(){
			navigator.clipboard.writeText("[&AgE2NAEA]");
		},
		w3b4Click(){
			navigator.clipboard.writeText("[&AgF8NAEA]");
		},
		w4b1Click(){
			navigator.clipboard.writeText("[&AgEZOgEA]");
		},
		w4b2Click(){
			navigator.clipboard.writeText("[&AgGNOQEA]");
		},
		w4b3Click(){
			navigator.clipboard.writeText("[&AgHXOAEA]");
		},
		w4b4Click(){
			navigator.clipboard.writeText("[&AgGeOgEA]");
		},
		w5b1Click(){
			navigator.clipboard.writeText("[&AgHpTwEA]");
		},
		w5b4Click(){
			navigator.clipboard.writeText("[&AgGBTgEA]");
		},
		w6b3Click(){
			navigator.clipboard.writeText("[&AgFFWgEA]");
		},
		w7b2Click(){
			navigator.clipboard.writeText("[&AgGGZAEA]");
		},
		w7b3Click(){
			navigator.clipboard.writeText("[&AgFuZAEA]");
		},
		w7b4Click(){
			navigator.clipboard.writeText("[&AgEnZAEA]");
		},
		generateChatCodeForItem( itemId, quantity, upgrade1Id, upgrade2Id, skinId ) {

   			// Figure out which header we need based on what components
   			//0x00 – Default item
   			//0x40 – 1 upgrade component
   			//0x60 – 2 upgrade components
   			//0x80 – Skinned
   			//0xC0 – Skinned + 1 upgrade component
   			//0xE0 – Skinned + 2 upgrade components
   			var separator = 16 * ((skinId ? 8 : 0) + (upgrade1Id ? 4 : 0) + (upgrade2Id ? 2 : 0));

   			// Arrange the IDs in order
   			var ids =     [2, quantity%256,itemId,separator,skinId,upgrade1Id,upgrade2Id];

   			// Byte length for each part
   			var lengths = [1,1,3,1,skinId?4:0,upgrade1Id?4:0,upgrade2Id?4:0];

   			// Build
   			var bytes = [];
   			for (var i = 0; i < ids.length; i++) {
   			    for(var j = 0; j < lengths[i]; j++) {
   			        bytes.push( (ids[i] >> (8*j)) & 0xff );
   			    }
   			}

   			// Get code
   			var output = window.btoa(String.fromCharCode.apply(null, bytes));
   			return "[&"+output+"]";
		},
		decodeChatCodeForItemOrSkin(fullcode) {
		    if( !/^\[\&/.test(fullcode) ) {
		        return 0;
		    }
		    var code = fullcode.replace(/^\[\&+|\]+$/g, '');
		    var binary = window.atob(code);
		    var octets = new Array(binary.length);
		    for (var i = 0; i < binary.length; i++) {
		        octets[i] = binary.charCodeAt(i);
		    }
		
		    if( octets ) {
		        if( octets[0] == "2" ) {
		             return (octets[2] * 1)
		                    +(octets[3] << 8)
		                    +(octets[4] ? (octets[4] << 16) : 0);
		        } else if( octets[0] == "11" ) {
		            return (octets[1] * 1)
		                    +(octets[2] << 8)
		                    +(octets[3] ? (octets[4] << 16) : 0);            
		        } else {
		            alert( fullcode + " must be a valid chat code");   
		        }
		    }
		    return 0;
		},
		createChatCode(){
			console.log("BROKOLI");
			var itemId = document.querySelector('#itemid').value;
	    	var quantity = (document.querySelector('#quantity').value * 1) || 1;
	    	var upgrade1Id = document.querySelector('#upgrade1id').value;
	    	var upgrade2Id = document.querySelector('#upgrade2id').value;
	    	var skinId = document.querySelector('#skinid').value;
	    
	    	var codeBlock = document.querySelector('#code');
	    		codeBlock.textContent = this.generateChatCodeForItem(
	        	    this.decodeChatCodeForItemOrSkin(itemId) || (itemId*1),
	        	    quantity,
	        	    this.decodeChatCodeForItemOrSkin(upgrade1Id) || (upgrade1Id*1),
	        	    this.decodeChatCodeForItemOrSkin(upgrade2Id) || (upgrade2Id*1),
	        	    this.decodeChatCodeForItemOrSkin(skinId) || (skinId*1)
			);
		
	    	navigator.clipboard.writeText(codeBlock.textContent);
		}
	}
}
</script>

<style scoped>
	#innerdivKp{
		position: absolute;
		height: 70vh;
	}


	.kpW1{
		background: url(../img/raid/w1.png);
	}

	.kpW2{
		background: url(../img/raid/w2.png);
	}

	.kpW3{
		background: url(../img/raid/w3.png);
	}

	.kpW4{
		background: url(../img/raid/w4.png);
	}

	.kpW5{
		background: url(../img/raid/w5.png);
	}

	.kpW6{
		background: url(../img/raid/w6.png);
	}

	.kpW7{
		background: url(../img/raid/w7.png);
	}

	.wing .row{
		min-width: 66px;
	}

	.wing{
		min-width: 99px;
	}

	.kpWing{
		color: #FFFFFF;
    	text-shadow: 1px 1px #343a40, -1px -1px #343a40;
    	font-size: 15px;
    	background-size: cover;
    	background-repeat: no-repeat;
    	font-family: 'Work Sans', sans-serif;
    	font-weight: bold;
    	letter-spacing: 1.5px;
    	text-align: center;
	}

	.kpMain{
		background: url(../img/kp/killproof_logo.png);
		background-size: cover;
		background-repeat: no-repeat;
		text-shadow: 1px 1px black;
	}

	#itemid,#quantity{
		height: 26px;
		font-size: 14px;
		
	}

	.result {
		height: 26px;
		font-size: 14px; 
		display: inline-block; 
		margin: 0; 
		background: rgba(0,80,255,0.2); 
		color: rgba(255,255,255,0.5); 
		border-width: 2px !important;
	}

</style>