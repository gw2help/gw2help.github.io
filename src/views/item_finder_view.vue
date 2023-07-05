<template>
	<input id="searchText" type="text">
    <button @click="getBank">1 getBank</button>
	<button @click="getChars">2 getChar</button>
	<button @click="getCharBagUrls">3 getUrls</button>
	<button @click="getCharBags">4 getBags</button>
	<button @click="mergeBankAndCharBags">5 MERGE</button>
	<button @click="itemSearchBank">6 BANK</button>
	<button @click="itemSearchBags">7 BAG</button>
	<br>
	<button @click="main">short</button>
</template>

<script>
import display_component from '../components/display_component.vue'

export default {
    name: 'item_finder_view',
    data(){
        return{
            api_account_bank: "https://api.guildwars2.com/v2/account/bank?access_token=",
			api_shared_bag: "https://wiki.guildwars2.com/wiki/API:2/account/inventory?access_token=",
            api_characters: "https://api.guildwars2.com/v2/characters?access_token=",
			api_char_bag: "https://api.guildwars2.com/v2/characters/",
            api_items: "https://api.guildwars2.com/v2/items?ids=",

			url_item_ids: "",
			url_item_bag_ids: [],
			
			allItems: [],	
			bankList: [],
			charList: [],
			charBagUrls: [],
			charBagList: [],
			
			searchItem: "",
			searchId: "",
			api_key: "88393C62-1357-F345-B581-C83C32A1267423AEEBCA-A378-4E3F-A966-5D4D9C273D60",
						          
        }
    },
	methods:{
		getBank(){
			let url_bank = this.api_account_bank;
				//url_bank += "10A33C63-85D8-D743-ABCD-B0219626D384F1D1A5B1-BADF-484D-81D4-65FF16D6B218";
				// EMPY API KEY => 88393C62-1357-F345-B581-C83C32A1267423AEEBCA-A378-4E3F-A966-5D4D9C273D60
				url_bank += this.api_key;

        	fetch(url_bank)
        	  .then(res => res.json())
        	  .then((out) =>{
				  for(var x = 0; x < out.length; x++){
					  if(out[x] != null) {
						//console.log(out[x].id);
					  	this.bankList.push(out[x].id);
						this.url_item_ids += out[x].id + ",";
					  }					
				  }
					//this.url_item_ids = this.url_item_ids.slice(0,-1);
					//console.log(this.url_item_ids);
					//this.bankList = list;
					
				  	console.log("getBank");
					console.log(this.bankList);
				  	
			  })		
		},
		getChars(){
			let url_char = this.api_characters;
				//url_char += "10A33C63-85D8-D743-ABCD-B0219626D384F1D1A5B1-BADF-484D-81D4-65FF16D6B218";
				url_char += this.api_key;
        	
			console.log(" ");
        	fetch(url_char)
        	  .then(res => res.json())
        	  .then((out) =>{
				  console.log("getChars");
				 // console.log(out);
				  for(var x=0; x < out.length; x++){
					  
					  this.charList.push(out[x]);				  
					}
				  console.log(this.charList);
			  })	
		},
		getCharBagUrls(){
			for(var x = 0; x < this.charList.length ; x++){
				let url_char_bag = this.api_char_bag;
				//console.log(this.charList[x])
				
				url_char_bag += this.charList[x] + "/inventory?access_token=" + this.api_key;
				//console.log(url_char_bag);
				this.charBagUrls[x] = url_char_bag;
			}
			console.log(" ");
			console.log("getCharBagUrls");
			console.log(this.charBagUrls);
		},
		getCharBags: async function(){
			
			console.log(" ");
			console.log("getCharBags");
			for(var y = 0; y < this.charBagUrls.length; y++){
				await fetch(this.charBagUrls[y])
				.then(res => res.json())
				.then((out)=>{
					//console.log(this.charBagUrls[y-1]);
					console.log("bag " + y +":"+ this.charList[y]);
					console.log(out);
					this.charBagList.push(out);
				})
				//await new Promise(resolve => setTimeout(resolve,2000));
			}
		},
		mergeBankAndCharBags(){
			this.allItems.push(this.bankList);
			this.allItems.push(this.charBagList);
			console.log(" ");
			console.log("ALL ITEMS");
			console.log(this.allItems);
		},
		getSearchId(){
			/*let url = this.api_items;
			this.searchItem = document.getElementById("searchText").value;

			fetch(url)
        	  .then(res => res.json())
        	  .then((out) =>{
				  for(var x = 0; x < out.length; x++){
					  if(out[x] != null) {
						//console.log(out[x].id);
					  	this.bankList.push(out[x].id);
						this.url_item_ids += out[x].id + ",";
					  }					
				  }
					//this.url_item_ids = this.url_item_ids.slice(0,-1);
					//console.log(this.url_item_ids);
					//this.bankList = list;
					*/
				  	//console.log("getBank");
					//console.log(this.bankList);
				  	
			  //})	
			

		},
		itemSearchBank(){
			let bank = this.allItems[0];
			let chars = this.charList;
			let searchID = this.searchId;
			let searchName = document.getElementById("searchText").value;
				//let capital = searchName[0];
				//let capitals = capital.toUpperCase();
				//console.log(capital);
				//searchName[0] = capital;
				//capitals + searchName zonder 1ste letter
				//console.log("Capital: " + searchName);
			//let searchName = "Obsidian";

			let urlItemsBank = this.api_items;
			

			let bankNames = [];

			// BANK ---------------------------------
			for(var x = 0; x < bank.length; x++){
				urlItemsBank += bank[x] + ",";
			}

			fetch(urlItemsBank)
				.then(res => res.json())
        	  	.then((out) =>{
				for(var x = 0; x < out.length; x++)
				{
					//console.log(out[x]);
					let name = out[x].name;
					//console.log("SEARCH  " + searchName);
					//bankNames.push(out[x]); 
					if(name.includes(searchName)){
						var nr = x+1;
						console.log("Your item " + searchName + " is in ");
						console.log("     BANK: " + nr + "th item.");
					}
				}  		
				//console.log(bankNames);
			})

		},
		itemSearchBags(){
			let bags = this.allItems[1];
			let chars = this.charList;
			let searchID = this.searchId;
			let searchName = document.getElementById("searchText").value;

			let urlItemsBag = this.api_items;
			// BAG ------------------------------------
			console.log("HALLO ???");
			console.log("bags: ");
			console.log(bags);
			console.log("bags[x]: ");
			console.log(bags[1]);
			console.log("bags[x].bags[y]: ");
			console.log(bags[1].bags[1]);
			console.log("bags[1].bags[1].inventory: ");
			console.log(bags[1].bags[1].inventory);
			
			for(var x = 0; x < bags.length; x++){ 								// per char , allBag	>> x
				for(var y=0; y < bags[x].bags.length; y++){ 					// per allBag , bag		>> y	//console.log(bags[x].bags[y]);
					if(y == 2 || y == 4 || y == 6 || y== 9){
						
						fetch(urlItemsBag)
						.then(res => res.json())
        	  			.then((out) =>{
							  console.log("ITEM SEARCH SHIZELEL ::: " + [y]);
							  console.log(out);
							  

							for(var x = 0; x < out.length; x++)
							{
								console.log(out[x]);
								//this.url_item_ids.push(out[x]);
							}
							console.log("DER ENTRESULTAT");
							console.log(this.url_item_ids);
						})
						urlItemsBag = this.api_items;
						/*
						console.log("NEW" + y);
						console.log(this.charList[x]);
						console.log(bags);
						console.log(bags[x].bags[y]);
						console.log(urlItemsBag);
						*/
						//console.log(out);

						//-------------------------------------------
					}	
					//else{
						for(var z =0; z < bags[x].bags[y].inventory.length; z++){	// per bag , itemSlot 	>> z
							if(bags[x].bags[y].inventory[z] != null){
								urlItemsBag += bags[x].bags[y].inventory[z].id + ",";
								}
						}
					//}
				}
			}

			console.log("URL");
			console.log(urlItemsBag);
	
		},
		main: async function(){
			this.getBank();await new Promise(resolve => setTimeout(resolve,1000));
			this.getChars();await new Promise(resolve => setTimeout(resolve,1000));
			this.getCharBagUrls();await new Promise(resolve => setTimeout(resolve,1000));
			await this.getCharBags();await new Promise(resolve => setTimeout(resolve,12000));
			this.mergeBankAndCharBags();await new Promise(resolve => setTimeout(resolve,1000));
			this.itemSearchBank();
			this.itemSearchBags();
		}
	}

}
</script>

<style scoped>
#innerdivAttribute{
		position: absolute;
		height: 90vh; 
	}

</style>