<template class="enableScroll">
<div class="container">
    <div class="row border border-2 border-primary bg-primary roundedz mt-2">
        <div class="col-xl-1 col-2 p-1 pt-2 ps-2 roundedz-left">
            <img v-if="type == pdps" class="w-100" src="../img/main/builds/pdps.png">
            <img v-else-if="type == condi" class="w-100" src="../img/main/builds/condi.png">
            <img v-else-if="type == heal" class="w-100" src="../img/main/builds/heal.png">
            <img v-else src=""> 
        </div>
        <div class="col-xl-1 col-2 p-1">
            <img v-if="support == alac" class="w-100" src="../img/main/builds/alacrity.png">
            <img v-else-if="support == quick" class="w-100" src="../img/main/builds/quickness.png">
            <img v-else src="">
            <!--
            <img v-if="imgSupport.length > 0" :src="imgSupport">
            <div v-else class="w-100 bg-grey"></div>
            -->
        </div>
        <div class="col-xl-8 col-6 p-1 text-center bg-dark"><a :href="link" target="_blank"><h5 class="my-2 my-xl-1">{{name}}</h5></a></div>
        <div class="col-xl-1 col-0 d-xs-none d-sm-none d-md-none d-lg-none d-xl-inline-block p-1 text-center bg-primary">
            <img v-if="profession == 'dragonhunter'" class="w-100" src="../img/main/professions/dragonhunter.png">
            <img v-else-if="profession == 'firebrand'" class="w-100" src="../img/main/professions/firebrand.png">
            <img v-else-if="profession == 'willbender'" class="w-100" src="../img/main/professions/willbender.png">
            <img v-else-if="profession == 'herald'" class="w-100" src="../img/main/professions/herald.png">
            <img v-else-if="profession == 'renegade'" class="w-100" src="../img/main/professions/renegade.png">
            <img v-else-if="profession == 'vindicator'" class="w-100" src="../img/main/professions/vindicator.png">
            <img v-else-if="profession == 'druid'" class="w-100" src="../img/main/professions/druid.png">
            <img v-else-if="profession == 'soulbeast'" class="w-100" src="../img/main/professions/soulbeast.png">
            <img v-else-if="profession == 'untamed'" class="w-100" src="../img/main/professions/untamed.png">
            <img v-else-if="profession == 'scrapper'" class="w-100" src="../img/main/professions/scrapper.png">
            <img v-else-if="profession == 'holosmith'" class="w-100" src="../img/main/professions/holosmith.png">
            <img v-else-if="profession == 'mechanist'" class="w-100" src="../img/main/professions/mechanist.png">
            <img v-else-if="profession == 'chronomancer'" class="w-100" src="../img/main/professions/chronomancer.png">
            <img v-else-if="profession == 'mirage'" class="w-100" src="../img/main/professions/mirage.png">
            <img v-else-if="profession == 'virtuoso'" class="w-100" src="../img/main/professions/virtuoso.png">
            <img v-else-if="profession == 'daredevil'" class="w-100" src="../img/main/professions/daredevil.png">
            <img v-else-if="profession == 'deadeye'" class="w-100" src="../img/main/professions/deadeye.png">
            <img v-else-if="profession == 'specter'" class="w-100" src="../img/main/professions/specter.png">
            <img v-else-if="profession == 'reaper'" class="w-100" src="../img/main/professions/reaper.png">
            <img v-else-if="profession == 'scourge'" class="w-100" src="../img/main/professions/scourge.png">
            <img v-else-if="profession == 'harbringer'" class="w-100" src="../img/main/professions/harbringer.png">
            <img v-else-if="profession == 'berserker'" class="w-100" src="../img/main/professions/berserker.png">
            <img v-else-if="profession == 'spellbreaker'" class="w-100" src="../img/main/professions/spellbreaker.png">
            <img v-else-if="profession == 'bladesworn'" class="w-100" src="../img/main/professions/bladesworn.png">
            <img v-else-if="profession == 'tempest'" class="w-100" src="../img/main/professions/tempest.png">
            <img v-else-if="profession == 'weaver'" class="w-100" src="../img/main/professions/weaver.png">
            <img v-else-if="profession == 'catalyst'" class="w-100" src="../img/main/professions/catalyst.png">
            <img v-else src="">

        </div>
        <div class="col-xl-1 col-2 p-1 roundedz-right bg-primary"><img @click="copyTag" class="w-100 p-1 invertColor" src="../img/main/copy.png"></div>
    </div>
</div>
</template>
<script>
  export default {
    name: 'build_component',
    data(){
      return{
          imgDmg: "",
          imgSupport: "",

          pdps: "power",
          condi: "condi",
          heal: "heal",

          alac: "alac",
          quick: "quick"
      }
    },
    props:{
        /*
        objs:{
            type: Object,
            required: true
        }
        */
        
            name:{
                type: String,
                required: false
            },
            link:{
                type: String,
                required: false
            },
            chatCode:{
                type: String,
                required: false
            },
            type:{
                type: String,
                required: false
            },
            support:{
                type: String,
                required: false
            },
            profession: {
                type: String,
                required: false
            }
        
    },
    methods:{
        copyTag(){
            // this tag copy to clipboard
            var tag = this.chatCode;
            console.log(this.chatCode)
            navigator.clipboard.writeText(tag);
        },
        enableScroll(){
            var outerDiv = document.getElementById('outerdivFullPage');
                outerDiv.style.overflowY = "scroll";
            
            window.onscroll=function(){return true};
        }
    },
    mounted(){
        this.enableScroll();
    }
  }
</script>
<style scoped>
   a{
        text-decoration: none;
        color: white;
    }

    .invertColor{
        filter: invert(100%);
        opacity: 0.75;
    }

    .invertColor:hover,h5:hover{
        transform: scale(1.1);
    }

</style>