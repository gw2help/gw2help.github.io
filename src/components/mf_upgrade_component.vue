<template>
    <div class="col-md-6 col-lg-4 col-xl-3 px-2">
        <div class="text-white border border-primary roundedz bg-darkz px-0 my-2">               
                <div class="wrapper text-center bg-primary roundedz-top pt-2 pb-1">
                    <a class="text-white fw-bold" :href="wiki" title="Master's Salvage Kit">
                        <img alt="Master's Salvage Kit.png" decoding="async" width="64" height="64" style="vertical-align: bottom" data-file-width="64" data-file-height="64"
                            class="roundedz"
                            :src="img" ><br>
                        <span id="recipe1">{{name}}</span>
                    </a>
                </div>

                <div class="clear" style="clear: both;"></div>

                <!--<div class="text-center">Ingredients</div>-->
                <div class="ingredients text-white p-2 pt-3 pb-2">
                    <div class="row pb-2"> <!-- 1 -->
                        <div class="col-4">
                            <a :href="wiki1" :title="name1">
                                <img class="roundedz" :alt="name1" :src="img1" decoding="async" width="64" height="64" style="vertical-align: bottom" data-file-width="64" data-file-height="64">
                            </a>
                        </div>
                        <div class="col-6">
                            <a :href="wiki1" :title="name1">{{name1}}</a> 
                        </div>
                        <div class="col-2" style="margin-left: auto; margin-right: 0">
                            <span> {{amount1}} </span>
                        </div>
                    </div>
                    <div class="row pb-2"> <!-- 2 -->
                        <div class="col-4">
                            <a :href="wiki2" :title="name2">
                                <img class="roundedz" :alt="name2" :src="img2" decoding="async" width="64" height="64" style="vertical-align: bottom" data-file-width="64" data-file-height="64">
                            </a>
                        </div>
                        <div class="col-6">
                                <a :href="wiki2" :title="name2">{{name2}}</a> 
                        </div>
                        <div class="col-2" style="margin-left: auto; margin-right: 0">
                            <span> {{amount2}} </span>
                        </div>
                    </div>
                    <div class="row pb-2" v-if="name3.lenght > 0"> <!-- 3 -->
                        <div class="col-4">
                            <a :href="wiki3" :title="name3">
                                <img class="roundedz" :alt="name3" :src="img3" decoding="async" width="64" height="64" style="vertical-align: bottom" data-file-width="64" data-file-height="64">
                            </a>
                        </div>
                        <div class="col-6">
                            <a :href="wiki3" :title="name3">{{name3}}</a> 
                        </div>
                        <div class="col-2" style="margin-left: auto; margin-right: 0">
                            <span>{{amount3}}</span>
                        </div>
                    </div>
                     <div class="row pb-2" v-else> <!-- 3 -->
                        <div class="col-4">
                            <a :href="wiki3" :title="name3">
                                <img class="roundedz" :alt="name3" :src="img3" decoding="async" width="64" height="64" style="vertical-align: bottom" data-file-width="64" data-file-height="64">
                            </a>
                        </div>
                        <div class="col-6">
                            <a :href="wiki3" :title="name3">{{name3}}</a> 
                        </div>
                        <div class="col-2" style="margin-left: auto; margin-right: 0">
                            <span>{{amount3}}</span>
                        </div>
                    </div>
                    <div class="row" v-if="name4.length > 0"> <!-- 4 -->
                        <!-- IMG -->
                        <div class="col-4" >                     
                            <a :href="wiki4" :title="name4">
                                <img class="roundedz" :alt="name4" :src="img4" decoding="async" width="64" height="64" style="vertical-align: bottom" data-file-width="64" data-file-height="64">
                            </a>
                        </div> 
                        <!-- NAME -->
                        <div class="col-6">                                             
                            <a :href="wiki4" :title="name4">{{name4}}</a> 
                        </div>
                        <!-- AMOUNT -->
                        <div class="col-2" style="margin-left: auto; margin-right: 0">   
                            <span>{{amount4}}</span>
                        </div>
                    </div>
                    <div class="row" v-else> <!-- 4 -->
                        <div class="col-4">
                            <a :href="wiki4" :title="name4">
                                <img class="roundedz bg-darkz" :alt="name4" decoding="async" width="64" height="64" style="vertical-align: bottom" data-file-width="64" data-file-height="64">
                            </a>
                        </div>
                        <div class="col-6">
                            <a :href="wiki4" :title="name4"></a> 
                        </div>
                        <div class="col-2" style="margin-left: auto; margin-right: 0">
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="clear" style="clear: both;"></div>
        </div>
    </div>
</template>
<script>
    //import jsonData from "../assets/test.json"

  export default {
    name: 'mf_upgrade_component',
    data(){
      return{
      }
    },
    props:{
        name:{
            type: String,
            required: true
        },
        img:{
            type: String,
            required: true
        },
        wiki:{
            type: String,
            required: true
        },
        name1:{
            type: String,
            required: true
        },
        img1:{
            type: String,
            required: true
        },
        amount1:{
            type: String,
            required: true
        },
        wiki1:{
            type: String,
            required:true
        },
        name2:{
            type: String,
            required: true
        },
        img2:{
            type: String,
            required: true
        },
        amount2:{
            type: String,
            required: true
        },
        wiki2:{
            type: String,
            required:true
        },
        name3:{
            type: String,
            required: true
        },
        img3:{
            type: String,
            required: true
        },
        amount3:{
            type: String,
            required: true
        },
        wiki3:{
            type: String,
            required:true
        },
        name4:{
            type: String,
            required: true
        },
        img4:{
            type: String,
            required: true
        },
        amount4:{
            type: String,
            required: true
        },
        wiki4:{
            type: String,
            required:true
        }
    },
    methods:{
        show(){
            console.log("JSON: ");
            console.log(jsonData);
            /*
            console.log("------------------------------------------------------");
            for(var x = 0; x < jsonData.length ; x++){
                console.log("obj" + x);
                for(var y = 0; y < jsonData[x].length ; y++){
                    console.log("   obj" + x +  " line" + y );
                    console.log("   " + jsonData[x][y]);
                }
            }
            */
        }
    },

  }

</script>
<style scoped>
    a{
        text-decoration: none;
        color: white;
    }
</style>