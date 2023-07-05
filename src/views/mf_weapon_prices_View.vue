<template>
  <div id="app" class="container roundedz mt-lg-5 mt-3">
    <div class="row rowWidth mx-auto roundedz bg-darkz border border-primary pt-2 pb-3">
      <div class="col-2 text-light text-center"> 
        <!--<img style="width:90px;height:auto;transform:scaleX(-1)" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a0cc9a25-af59-40ce-9f2a-b64fd58fb071/d51tsmu-37f89a2b-68c3-45ae-94a8-6627bd108806.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EwY2M5YTI1LWFmNTktNDBjZS05ZjJhLWI2NGZkNThmYjA3MVwvZDUxdHNtdS0zN2Y4OWEyYi02OGMzLTQ1YWUtOTRhOC02NjI3YmQxMDg4MDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wTAe-cFSxZKnqOJivrzdVEB49tBARykbCU1y85Qi1f0">--> 
         <p class="font-weight-bold"><u>API'S USED</u></p>
          <div class="border-0 mx-auto">
            <a href="https://wiki.guildwars2.com/wiki/API:Main">
              <button class="border border-primary bg-dark roundedz text-white text-bold py-2 px-3 mb-1 hoverLink"> API DOCS </button>
            </a><br>
            <a href="https://api.guildwars2.com/v2/items?ids=19717">
              <button class="border border-primary bg-dark roundedz text-white text-bold py-2 px-3 mb-1 hoverLink"> Get Items </button>
            </a><br>
            <a href="https://api.guildwars2.com/v2/commerce/prices/31062" >
              <button class="border border-primary bg-dark roundedz text-white text-bold py-2 px-3 mb-1 hoverLink"> Get Prices </button>
            </a><br>
            <a href="http://gw2profits.com/json/v3?output_ids=73452" >
              <button class="border border-primary bg-dark roundedz text-white text-bold py-2 px-3 mb-1 hoverLink"> Get Ingred </button>
            </a>
          </div>  
      </div>
      <div class="col-8 row">
        <div class="col-12 mx-0"><h3 class="text-center w-100 mt-2 mb-0">GW 2</h3></div>
        <div class="col-12 mx-0"><h3 class="text-center w-100 mt-0">Mystic Forge Weps</h3></div>
        <div class="col-12 row mx-0">
          <div class="col-12 mt-1">
            <input type="text" v-model="requestNumber" width="50px" class="border-primary mx-auto text-center text-white d-block bg-black roundedz" placeholder="profit > xx Gold" rows="1"/>
              
          </div>
          <div class="col-12 mt-2"><button id="mainBtn"
                  @click="functionsInRightOrder();music();" 
                  @mouseover="trueHoverer"
                  @mouseleave="falseHoverer"
                  :class="{'btn-main-hover': hovered}"
                   class="d-block mx-auto btn-main hoverLinkWide border border-primary bg-dark roundedz text-white text-bold py-2 px-3"
                  > OTO MATIC </button>
          </div>
        </div>
      </div>
      <div class="col-2 text-light text-center">
        <!--<img style="width:90px;height:auto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a0cc9a25-af59-40ce-9f2a-b64fd58fb071/d51tsmu-37f89a2b-68c3-45ae-94a8-6627bd108806.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EwY2M5YTI1LWFmNTktNDBjZS05ZjJhLWI2NGZkNThmYjA3MVwvZDUxdHNtdS0zN2Y4OWEyYi02OGMzLTQ1YWUtOTRhOC02NjI3YmQxMDg4MDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wTAe-cFSxZKnqOJivrzdVEB49tBARykbCU1y85Qi1f0"> -->
          <p class="font-weight-bold "><u> SHOW LIST </u></p>
          <button class="border border-primary bg-dark roundedz text-white text-bold py-2 px-3 mb-1 hoverLink" @click="showItems"> items </button><br>
          <button class="border border-primary bg-dark roundedz text-white text-bold py-2 px-3 mb-1 hoverLink" @click="showItemPrice"> item/price </button><br>
          <button class="border border-primary bg-dark roundedz text-white text-bold py-2 px-3 mb-1 hoverLink" @click="showIngredient"> ingredients </button><br>
          <button class="border border-primary bg-dark roundedz text-white text-bold py-2 px-3 mb-1 hoverLink" @click="showIngredientPriceB"> ingred/price </button>
      </div>
  
      <div class="col-12 mx-auto hidden">
        <h5> GET DATA </h5>
        <button @click="readLocalJson"> READ LOCAL</button>
        <button @click="getLocalData"> LOCAL DATA </button>
        <button @click="getLocalPrice"> LOCAL PRICE </button>
        <button @click="getCraftItems"> CRAFT </button>
        <button @click="getCraftItemsPrices"> CRAFT - price </button>
        <hr>
        
        <h5> SHOW DATA </h5>
        <button @click="showItems"> items/data </button>
        <button @click="showItemPrice"> item/price </button>
        <button @click="showIngredient"> ingredients </button>
        <button @click="showIngredientPriceB"> ingres-price </button>
        
        <hr>
        <h5> SHOW COMPACT buy/sell LISTS </h5>
        <button @click="showItemPriceB"> item  </button>
        <button @click="showIngredientPriceB"> ingredients </button>
        <hr>
        <h5> MERGE ARRAYS </h5>
        <button @click="merger"> MERGE </button>
        <h5> AUDIO lol why i make title for it?? </h5>
          <audio id="radio" controls>
            <source src="../music/otomatic.ogg" type="audio/ogg">
          </audio>
      </div>        

    </div>
    <div id="list" class="text-center mt-3">
          <!--<GwCraftTableComponent></GwCraftTableComponent>-->
      <mf_weapon_prices_Component v-for="x in itemMerged"
                            :key="x.id"
                            class="mx-1 roundedz"
                            :id="x.id"
                            :name="x.name"
                            :icon="x.icon"
                            :buy="x.buy"
                            :buyA="x.buyA"
                            :sell="x.sell"
                            :sellA="x.sellA"
                            :profit="x.profit"
                            :mats="addMats(x.id)"
                            :requestNumber="requestNumber"
                            :class="{'hidden': x.profit < 0}"

    >
      
      </mf_weapon_prices_Component>
    </div>
 

  </div>
</template>

<script>
  import mf_weapon_prices_Component from '../components/mf_weapon_prices_Component.vue'
  
  export default {
    name: 'mf_weapon_prices_View',
    data(){
      return{
        jsonResult:'',
        jsonArray: [],

        api_mf_recipes: "https://gw2profits.com/json/v3?output_ids=",
        api_prices: "https://api.guildwars2.com/v2/commerce/prices?ids=", // buy-sell price
        api_items: "https://api.guildwars2.com/v2/items?ids=",

        items: [],
        itemPrice: [],         // tussenstap naar itemprice array
        itemPriceArray: [],
        itemMerged: [],

        ingredient: [], 
        ingredientz: [],
        ingredientPrices: [],  //tussenstap naar ingredientpricearray
        ingredientPriceArray: [],
        ingredientDataArray: [],
        ingredientMerged: [],

        matList: [],
        ingredList: [],

        clicked: 'false',
        hovered: false,

        requestNumber: '',

      }
    },
    props:{
     
    },
    components:{
      mf_weapon_prices_Component
    },
    methods:{
      readLocalJson: function(){
        let jsonData = require('../assets/gw2_mystic_coin.json');
        this.items = jsonData.items;

        // return jsonData.items;
      },
      getLocalData: function(){   // .id .name .icon 
        let url = this.api_items;
        let itemz = this.items;

        for(let i=0;i<itemz.length;i++){
            url += itemz[i].id + ",";
        }
        
        fetch(url)
        .then(res => res.json())
        .then((out) =>{
            this.items = out;
            // return out;
        })
      },
      getLocalPrice: function(){
        let url = this.api_prices;
        let itemz = this.items;

        for(let i =0; i<itemz.length;i++){
          url += itemz[i].id + ",";
        }

        fetch(url)
          .then(res => res.json())
          .then((out =>{
            this.itemPrice = out;

            for(let i = 0;i<this.itemPrice.length;i++){
              let x = this.itemPrice[i];

              let id = x.id;

              let buy = x.buys.unit_price;
              let buyAmount = x.buys.quantity;

              let sell = x.sells.unit_price;
              let sellAmount = x.sells.quantity;

              let profit = (sell * 0.85)-buy;
                  profit = profit/10000;
                  profit = profit.toFixed(4);
              
              let item = {
                id: id,
                buy: buy,
                buyA: buyAmount,
                sell: sell,
                sellA: sellAmount,
                profit: profit
              }

              this.itemPriceArray.push(item);
              //console.log("id:" + id + " profit:" + profit);
            }
            //console.log(this.itemPriceArray);

          }))
      },
      getCraftItems: function(){    //ingredients
        let url = this.api_mf_recipes;

        for(let i=0;i<this.items.length;i++){
          url += this.items[i].id + ",";
        }
        
        
        url = url.slice(0,-1);
        fetch(url)
          .then(res => res.json())
          .then((out) =>{
            this.ingredient = out;

            for(let i=0;i<this.ingredient.length;i++){
              let x = this.ingredient[i];
              let id = x.output_item_id;
              let ingreds = x.ingredients;
  
              let item = {
                id: id,
                ingredients: ingreds,
              }
              this.ingredientz.push(item);
            }
          })
          .catch(err => { throw err });
      },
      getCraftItemsPrices: function(){
        let url = this.api_prices;
        let urlz = this.api_prices;

        this.ingredientz.push(
          {}
        )

        for(let i =0;i<83;i++){       // 84 = max data request in single line
          for(let u=0;u<this.ingredientz[i].ingredients.length;u++){
            url += this.ingredientz[i].ingredients[u].item_id + ",";
          }
        }
        
        for(let i=0;i<this.ingredientz[0].ingredients.length;i++){
          urlz += this.ingredientz[83].ingredients[i].item_id + ",";
          urlz += this.ingredientz[84].ingredients[i].item_id + ",";
        }

        fetch(url)
          .then(res => res.json())
          .then((out) =>{
            
            this.ingredientPrices = out;
            //console.log(this.ingredientPrices);

            for(let i = 0; i < this.ingredientPrices.length; i++){
              let x = this.ingredientPrices[i];

              let id = x.id;
              let buy = x.buys.unit_price;
              let buyAmount = x.buys.quantity;

              let sell = x.sells.unit_price;
              let sellAmount = x.sells.quantity;

              let profit = (sell * 0.85)-buy;
                  profit = profit/10000;
                  profit = profit.toFixed(4);

              let item = {
                id: id,
                buy: buy,
                buyA: buyAmount,
                sell: sell,
                sellA: sellAmount,
                profit: profit
              }

              this.ingredientPriceArray.push(item);
            }
            //console.log(this.ingredientPriceArray);
          }) 
        fetch(urlz)
          .then(res => res.json())
          .then((out) =>{
            this.ingredientPrices = out;

             for(let i = 0; i < this.ingredientPrices.length; i++){
              let x = this.ingredientPrices[i];

              let id = x.id;
              let buy = x.buys.unit_price;
              let buyAmount = x.buys.quantity;

              let sell = x.sells.unit_price;
              let sellAmount = x.sells.quantity;

              let profit = (sell * 0.85)-buy;
                  profit = profit/10000;
                  profit = profit.toFixed(4);

              let item = {
                id: id,
                buy: buy,
                buyA: buyAmount,
                sell: sell,
                sellA: sellAmount,
                profit: profit
              }
              
              this.ingredientPriceArray.push(item);
            }
              
              //console.log(this.ingredientPriceArray);
          })
      },
      getCraftItemsData: function(){
        let url = this.api_items;
        let craftArray = this.ingredientPriceArray;

        for(let i=0;i<craftArray.length;i++) url += craftArray[i].id + ",";
        //url += 24305 + "," + 19701 + "," + 19732;

        fetch(url)
          .then(res => res.json())
          .then((out) =>{
            let array = out;
            let result = [];

            for(let i=0; i< array.length;i++){
              result.push({
                id: array[i].id,
                name: array[i].name,
                icon: array[i].icon
              })
            }
            this.ingredientDataArray = result;
            this.ingredientDataArray.push(
              {
                id: 20852,
                name:"Eldritch Scroll",
                icon: "https://render.guildwars2.com/file/57B5F0CE02092248CDA26C7A54EF01EE2209A5FC/434427.png",
                buy: 0
              },
              {
                id: 23025,
                name: "Foraging Sickle",
                icon: "https://render.guildwars2.com/file/AA1BD042F1EAB6A0F5D614DC6113E356C4B836C1/66591.png",
                buy: 0
              },
              {
                id: 19624,
                name: "Gift of Ice",
                icon: "https://render.guildwars2.com/file/00710B342569B4A818387FEF63B876476B0BB84B/455805.png",
                buy: 0
              },
              {
                id: 19925,
                name: "Obsidian Shard",
                icon: "https://render.guildwars2.com/file/AE16FCC326D80A3906B17B6A75E8A91980BE4670/434362.png",
                buy: 0
              },
              {
                id: 8596,
                name: "Stein of Highlander Beer",
                icon: "https://render.guildwars2.com/file/D92A6B09614BCD0DC5BD30159374C3222A7B5E2D/63101.png",
                buy: 0
              },
              {
                id: 66608,
                name: "Pile of Silky Sand",
                icon: "https://render.guildwars2.com/file/4AA6F8CB30973B9A6E4C310124EFB5BFF42036E5/63273.png",
                buy: 0
              },
              {
                id: 20799 ,
                name: "Mystic Crystal",
                icon: "https://render.guildwars2.com/file/045C05C2F83A59FC4B6F15073465C5D3040E4DF5/65674.png",
                buy: 0
              },
              {
                id: 9257,
                name: "Bag of Jewels",
                icon: "https://render.guildwars2.com/file/350D02EDC4D2025C162107C60E78490C710EDDCF/63180.png",
                buy: 0
              },
              {
                id: 20798,
                name: "Siege Novice's Guide",
                icon: "https://render.guildwars2.com/file/DBF694D7189D1005B29106DD453326DB69222A18/65636.png",
                buy: 0
              },
              {
                id: 20797,
                name: "Bloodstone Shard",
                icon: "https://render.guildwars2.com/file/D9F626FA79AA0C49436337B1C767023CCF14EFF9/434426.png",
                buy: 0
              },
              {
                id: 19717,
                name: "Sun Bead",
                icon: "https://render.guildwars2.com/file/582641FE0D5FD2AB0903CA0050049167A89CB97C/67028.png",
                buy: 0
              },
              {
                id: 19630,
                name: "Gift of Music",
                icon: "https://render.guildwars2.com/file/6843F44BDB117AC7DD063EF6E35392B027672C69/455811.png",
                buy: 200000,
                count: 1
              },
              {
                id: 19631,
                name: "Gift of Darkness",
                icon: "https://render.guildwars2.com/file/255A5E0CC05144DD5638D9A8E4A25FA12FA042DA/455812.png",
                buy: 1500000,
                count: 1
              },
              {
                id: 19632,
                name: "Gift of Light",
                icon: "https://render.guildwars2.com/file/9BBF3A1FF80564570D5569EC7FA8F17858C63EC9/455813.png",
                buy: 1500000,
                count: 1
              },
              {
                id: 19633,
                name: "Vial of Quicksilver",
                icon: "https://render.guildwars2.com/file/F32944C40CF6FC54B204CACDE5071BA0B69BEAFC/455814.png",
                buy: 2300000,
                count: 1
              },
              {
                id: 19634,
                name: "Vial of Liquid Flame",
                icon: "https://render.guildwars2.com/file/F9D5E42CEA6EED2DA16E036065E0D6F90E027CF8/455815.png",
                buy: 1200000,
                count: 1
              },
              {
                id: 19635,
                name: "Gift of Entertainment",
                icon: "https://render.guildwars2.com/file/B76A2E537E10A4BE336CC6B3471CEE0F075AE290/455816.png",
                buy: 150000,
                count: 1
              },
              {
                id: 19636,
                name: "Gift of Stealth",
                icon: "https://render.guildwars2.com/file/6154279FB19D312725F942332F9F50C771D007E3/455817.png",
                buy: 600000,
                count: 1
              },
              {
                id: 19637,
                name: "Gift of Weather",
                icon: "https://render.guildwars2.com/file/070D78427B06100C1203BB280C056BF2FEE2E006/455818.png",
                buy: 950000,
                count: 1
              },
              {
                id: 19638,
                name: "Gift of Color",
                icon: "https://render.guildwars2.com/file/EFADF9A7924FD4F1FB01A6284EEE0CED6F7BA2E4/455819.png",
                buy: 500000,
                count: 1
              },
              {
                id: 19639,
                name: "Gift of Lightning",
                icon: "https://render.guildwars2.com/file/B646B519AB469FF074C25E6C0CC55D5C64F496ED/455820.png",
                buy: 700000,
                count: 1
              }
            );
            /*
            {
              id: xx,
              name: "xx",
              icon: "xx"
            }
            */
            //mergeMatArrays()
            //return result;
          })
      },
      showItems: function(){
        console.log("item::");
        console.log(this.items);
      },
      showItemPrice: function(){
        console.log("item-price::");
        console.log(this.itemPriceArray);
      },
      showIngredient: function(){
        console.log("ingredient::");
        console.log(this.ingredientz);
      },
      showIngredientPrices : function(){
        console.log("ingredientPrices::");
        console.log(this.ingredientPrices);
      },
      showItemPriceB: function(){
        //
        console.log(this.itemPriceArray);
      },
      showIngredientPriceB: function(){
        //
        console.log(this.ingredientPriceArray);
      },
      addMats: function(id){
        let list = this.ingredientz;
        let sendList = [];
        let temporary;
        let result;
        
        for(let i=0;i<list.length;i++)  if(list[i].id == id) sendList = list[i].ingredients;

        for(let i=0; i <sendList.length; i++){
          for(let u=0; u < this.ingredientPriceArray.length; u++){
            if(sendList[i].item_id == this.ingredientPriceArray[u].id){
              
              temporary = this.mergeMatArrays(sendList,this.ingredientPriceArray);
              
             // after merge items in ingredList 
            }
          }
        }

        // INGREDIENTDATA ARRAY PUSH ELDERITCH SCROLL ICON

        for(let i=0; i < sendList.length; i++){
          for(let u =0; u < this.ingredientDataArray.length;u++){
            if(sendList[i].item_id == this.ingredientDataArray[u].id){
              
              result = this.mergeMatArrays(temporary,this.ingredientDataArray);
            }
            
          }
        }

        return result;
        //return sendList;
      },
      mergeArrays: function(array1,array2){
        const merge = (array1, array2) => {
          const result = []
            //console.log(array1);
            //console.log(array2);
            array1.forEach(x => {
              array2.forEach(y => {
                if (x.id === y.id) result.push({ ...x, ...y })  
              })
            })
            this.itemMerged = result;
            return result
            //jsonArray = result;
            //console.log(jsonArray);
        }
        console.log(merge(array1,array2));
      },
      mergeMatArrays: function(array1,array2){
        let merged = [];

        for(let i=0; i<array1.length; i++) {
          merged.push({
           ...array1[i], 
           ...(array2.find((itmInner) => itmInner.id === array1[i].item_id))}
          );
        }
        return merged;
      },
      merger: function(){ 
        //console.log("MATS + price + img");
        //console.log(this.ingredientDataArray);

        console.log("      -> Merge results:");
        this.mergeArrays(this.items,this.itemPriceArray);  
      },
      functionsInRightOrder: async function(){
        console.log(" AUTO - READ LOCALJSON ");
        this.readLocalJson();
        await new Promise(resolve => setTimeout(resolve,2000));

        console.log(" AUTO - GET LOCAL DATA ");
        this.getLocalData();
        await new Promise(resolve => setTimeout(resolve,2000));

        console.log(" AUTO - GET LOCAL PRICE ");
        this.getLocalPrice();
        await new Promise(resolve => setTimeout(resolve,2000));

        console.log(" AUTO - GET CRAFTITEMS ");
        this.getCraftItems();
        await new Promise(resolve => setTimeout(resolve,2000)); 

        console.log(" AUTO - GET CRAFTITEMS PRICES ");
        this.getCraftItemsPrices();
        await new Promise(resolve => setTimeout(resolve,2000));

        console.log(" AUTO - GET CRAFTITEMS DATA");
        this.getCraftItemsData();
        await new Promise(resolve => setTimeout(resolve,2000));

        console.log(" AUTO - MERGE ");
        this.merger();  //this.mergeArrays(this.items,this.itemPriceArray);
        
        //await new Promise(resolve => setTimeout(resolve,2000));
        //console.log(" AUTO - xxx");
      },
      trueClicker: function(){
        //
        this.clicked = 'true'
      },
      trueHoverer: function(){
        //
        this.hovered = true
      },
      falseHoverer: function(){
        //
        this.hovered = false
      },
      music: function(){
        let file = document.getElementById("radio");
        file.play();
      },
      getRequestNumber: function(){
        return this.requestNumber.parseInt();
      }

    }
  }
</script>
<style scoped>
  ul{
    width: 50vw;
    border: 2px solid red;
    display: inline-block;
  }

  mf_weapon_prices_Component{
    display: inline-block;
    
  }
/*
  p{
    min-width: 380px;
  }
*/
  .spanLeft{
    width: 15%;
    float: left;
    min-width: 60px;
  }

  .spanRight{
    width: 80%;
    float: right;
    text-align: left;
    min-width: 300px;
  }

  .hidden{
    display: none !important;
  }

  .hide{
    display: none;
  }

  .w-90{
    width: 100%;
  }

  .w-80{
    width: 80%;
  }

  .w-85{
    width: 85%;
  }

  .rowWidth{
    min-width: 700px;
  }

  .btn-main{
    box-shadow: 4px 4px black;
    font-weight: 600;
  }

  .btn-main-hover{
    box-shadow: 6px 6px black;
    font-weight: 800;
  }

  .text-edit p{
    line-height: 15px;
    font-style: italic;
  }

  .rowWidth > .col-2{
    font-weight: bold;
    text-shadow: 1px 1px #B8860B,-1px -1px #B8860B;
    color: rgba(50,0,0,0.5);
  }

  h3{
    text-shadow: 1px 1.5px #B8860B,-1.5px -1.5px #007bff;
    color: rgba(50,10,10,0.5);
    font-family: 'Otomanopee One', sans-serif;
    font-family: 'Yomogi', cursive;
  }

  .hoverLink{
    width: 125px;
    height: 42px;
    border-width: 1px !important;
  }

  .hoverLinkWide{
    width: 130px;
    height: 42px;
    border-width:  1px !important;
  }

  .hoverLink:hover, .hoverLinkWide:hover{
    border-width: 2px !important;
  }

  .bg-primary text-light{
    background-color: rgb(255, 210, 5);
  }


</style>