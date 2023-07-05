<template>
    <div id="outerdivFullPage" class="roundedz d-block my-0 w-100 float-center mx-auto">   
        
        <!-- LOAD BUTTON -->
       <div v-if="jsonz.length == 0" class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <div class="row my-3 ps-2" style="height:180px;flex-shrink:0"> 
                    <div @click="getAll()"    
                        class="col-xl-3 col-4 mx-auto mt-5 mb-5 text-center text-light border border-primary border-thick roundedz pt-4 pb-3 bg-darkz grow hoverBtn">
                        <h4 class="bottom mx-auto">Load Builds</h4>
                    </div>
                </div>
            </div>
            <div class="col-3"></div>
        </div>
        
        <!-- PROFESSION LIST -->
        <div v-if="jsonz.length > 0" class="row mx-1 mb-5">
            <div class="col-4 mb-3">
                <img class="icon-xl mx-auto d-block" src="../img/main/professions/guardian.png">
                <builder v-for="x in this.jsonz[0].guardian[0]"
                    class=""
                    :key="x"
                    :name="x.name"
                    :link="x.link"
                    :chatCode="x.chatCode"
                    :type="x.type"
                    :support="x.support"
                    :profession="x.profession"
                ></builder>          
            </div>
            <div class="col-4 mb-3">
                <img class="icon-xl-xl mx-auto d-block" src="../img/main/professions/revenant.png">
                <builder v-for="x in this.jsonz[0].revenant[0]"
                    class=""
                    :key="x"
                    :name="x.name"
                    :link="x.link"
                    :chatCode="x.chatCode"
                    :type="x.type"
                    :support="x.support"
                    :profession="x.profession"
                ></builder>
            </div>
            <div class="col-4 mb-3">
                <img class="icon-xl mx-auto d-block" src="../img/main/professions/engineer.png">
                <builder v-for="x in this.jsonz[0].engineer[0]"
                    class=""
                    :key="x"
                    :name="x.name"
                    :link="x.link"
                    :chatCode="x.chatCode"
                    :type="x.type"
                    :support="x.support"
                    :profession="x.profession"
                ></builder>
            </div>
            <div class="col-4 mb-3">
                <img class="icon-xl mx-auto d-block" src="../img/main/professions/ranger.png">
                <builder v-for="x in this.jsonz[0].ranger[0]"
                    class=""
                    :key="x"
                    :name="x.name"
                    :link="x.link"
                    :chatCode="x.chatCode"
                    :type="x.type"
                    :support="x.support"
                    :profession="x.profession"
                ></builder>
            </div>
            <div class="col-4 mb-3">
                <img class="icon-xl mx-auto d-block" src="../img/main/professions/mesmer.png">
                <builder v-for="x in this.jsonz[0].mesmer[0]"
                    cclass=""
                    :key="x"
                    :name="x.name"
                    :link="x.link"
                    :chatCode="x.chatCode"
                    :type="x.type"
                    :support="x.support"
                    :profession="x.profession"
                ></builder>
            </div>
            <div class="col-4 mb-3">
                <img class="icon-xl mx-auto d-block" src="../img/main/professions/necromancer.png">
                <builder v-for="x in this.jsonz[0].necromancer[0]"
                    class=""
                    :key="x"
                    :name="x.name"
                    :link="x.link"
                    :chatCode="x.chatCode"
                    :type="x.type"
                    :support="x.support"
                    :profession="x.profession"
                ></builder>
            </div>
            <div class="col-4 mb-3">
                <img class="icon-xl mx-auto d-block" src="../img/main/professions/thief.png">
                <builder v-for="x in this.jsonz[0].thief[0]"
                    class=""
                    :key="x"
                    :name="x.name"
                    :link="x.link"
                    :chatCode="x.chatCode"
                    :type="x.type"
                    :support="x.support"
                    :profession="x.profession"
                ></builder>
            </div>
            <div class="col-4 mb-3">
                <img class="icon-xl mx-auto d-block" src="../img/main/professions/elementalist.png">
                <builder v-for="x in this.jsonz[0].elementalist[0]"
                    class=""
                    :key="x"
                    :name="x.name"
                    :link="x.link"
                    :chatCode="x.chatCode"
                    :type="x.type"
                    :support="x.support"
                    :profession="x.profession"
                ></builder>
            </div>
            <div class="col-4 mb-3">
                <img class="icon-xl mx-auto d-block" src="../img/main/professions/warrior.png">
                <builder v-for="x in this.jsonz[0].warrior[0]"
                    class=""
                    :key="x"
                    :name="x.name"
                    :link="x.link"
                    :chatCode="x.chatCode"
                    :type="x.type"
                    :support="x.support"
                    :profession="x.profession"
                ></builder>
            </div>
        </div>

        <!-- BUILD FORM -->
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6 roundedz-top mx-auto bg-primary">
                <h3 class="py-2 pt-3 text-center text-light"><b>Add Build</b></h3>
            </div>
            <div class="col-3"></div>
            
            <div class="col-3"></div>
            <div class="col-6 roundedz-btm mx-auto bg-dark border border-2 border-primary mb-5">
                <div class="row mt-3 mb-2"> <!-- CLASS -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Class</h5></div>
                    <div class="col-xl-1 col-4 text-center">
                        <label class="mx-auto">
                            <input type="radio" id="radioProfession" name="class" value="guardian">
                            <img @click="clazz = 'guardian'" class="w-100" src="../img/main/professions/guardian.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center">
                        <label>
                            <input type="radio" id="radioProfession" name="class" value="revenant">
                            <img @click="clazz = 'revenant'" class="w-100" src="../img/main/professions/revenant.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center">
                        <label>
                            <input type="radio" id="radioProfession" name="class" value="ranger">
                            <img @click="clazz = 'ranger' " class="w-100" src="../img/main/professions/ranger.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center">
                        <label>
                            <input type="radio" id="radioProfession" name="class" value="engineer">
                            <img @click="clazz = 'engineer' " class="w-100" src="../img/main/professions/engineer.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center">
                        <label>
                            <input type="radio" id="radioProfession" name="class" value="mesmer">
                            <img @click="clazz = 'mesmer' " class="w-100" src="../img/main/professions/mesmer.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center">
                        <label>
                            <input type="radio" id="radioProfession" name="class" value="thief">
                            <img @click="clazz = 'thief' " class="w-100" src="../img/main/professions/thief.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center">
                        <label>
                            <input type="radio" id="radioProfession" name="class" value="necromancer">
                            <img @click="clazz = 'necromancer' " class="w-100" src="../img/main/professions/necromancer.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center">
                        <label>
                            <input type="radio" id="radioProfession" name="class" value="warrior">
                            <img @click="clazz = 'warrior' " class="w-100" src="../img/main/professions/warrior.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center">
                        <label>
                            <input type="radio" id="radioProfession" name="class" value="elementalist">
                            <img @click="clazz = 'elementalist' " class="w-100" src="../img/main/professions/elementalist.png">
                        </label>
                    </div>
                </div>
                <div v-if="clazz == 'guardian'" class="row mb-2">      <!-- PROFESSION -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Profession</h5></div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="dragonhunter">
                            <img class="w-100" @click="profession='dragonhunter'" src="../img/main/professions/dragonhunter.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="firebrand">
                            <img class="w-100" @click="profession='firebrand'" src="../img/main/professions/firebrand.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="willbender">
                            <img class="w-100" @click="profession='willbender'" src="../img/main/professions/willbender.png">
                        </label>
                    </div>
                    <div class="col-xl-6 col-12"></div>
                </div>
                <div v-if="clazz == 'revenant'" class="row mb-2">      <!-- PROFESSION -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Profession</h5></div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="herald">
                            <img class="w-100" @click="profession='herald'" src="../img/main/professions/herald.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="renegade">
                            <img class="w-100" @click="profession='renegade'" src="../img/main/professions/renegade.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="vindicator">
                            <img class="w-100" @click="profession='vindicator'" src="../img/main/professions/vindicator.png">
                        </label>
                    </div>
                    <div class="col-xl-6 col-12"></div>
                </div>
                <div v-if="clazz == 'ranger'" class="row mb-2">      <!-- PROFESSION -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Profession</h5></div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="druid">
                            <img class="w-100" @click="profession='druid'" src="../img/main/professions/druid.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="soulbeast">
                            <img class="w-100" @click="profession='soulbeast'" src="../img/main/professions/soulbeast.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="untamed">
                            <img class="w-100" @click="profession='untamed'" src="../img/main/professions/untamed.png">
                        </label>
                    </div>
                    <div class="col-xl-6 col-12"></div>
                </div>
                <div v-if="clazz == 'engineer'" class="row mb-2">      <!-- PROFESSION -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Profession</h5></div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="scrapper">
                            <img class="w-100" @click="profession='scrapper'" src="../img/main/professions/scrapper.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="holosmith">
                            <img class="w-100" @click="profession='holosmith'" src="../img/main/professions/holosmith.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="mechanist">
                            <img class="w-100" @click="profession='mechanist'" src="../img/main/professions/mechanist.png">
                        </label>
                    </div>
                    <div class="col-xl-6 col-12"></div>
                </div>
                <div v-if="clazz == 'mesmer'" class="row mb-2">      <!-- PROFESSION -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Profession</h5></div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="chronomancer">
                            <img class="w-100" @click="profession='chronomancer'" src="../img/main/professions/chronomancer.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="mirage">
                            <img class="w-100" @click="profession='mirage'" src="../img/main/professions/mirage.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="virtuoso">
                            <img class="w-100" @click="profession='virtuoso'" src="../img/main/professions/virtuoso.png">
                        </label>
                    </div>
                    <div class="col-xl-6 col-12"></div>
                </div>
                <div v-if="clazz == 'thief'" class="row mb-2">      <!-- PROFESSION -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Profession</h5></div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="daredevil">
                            <img class="w-100" @click="profession='daredevil'" src="../img/main/professions/daredevil.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="deadeye">
                            <img class="w-100" @click="profession='deadeye'" src="../img/main/professions/deadeye.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="specter">
                            <img class="w-100" @click="profession='specter'" src="../img/main/professions/specter.png">
                        </label>
                    </div>
                    <div class="col-xl-6 col-12"></div>
                </div>
                <div v-if="clazz == 'necromancer'" class="row mb-2">      <!-- PROFESSION -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Profession</h5></div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="reaper">
                            <img class="w-100" @click="profession='reaper'" src="../img/main/professions/reaper.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="scourge">
                            <img class="w-100" @click="profession='scourge'" src="../img/main/professions/scourge.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="harbringer">
                            <img class="w-100" @click="profession='harbringer'" src="../img/main/professions/harbringer.png">
                        </label>
                    </div>
                    <div class="col-xl-6 col-12"></div>
                </div>
                <div v-if="clazz == 'warrior'" class="row mb-2">      <!-- PROFESSION -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Profession</h5></div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="berserker">
                            <img class="w-100" @click="profession='berserker'" src="../img/main/professions/berserker.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="spellbreaker">
                            <img class="w-100" @click="profession='spellbreaker'" src="../img/main/professions/spellbreaker.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="bladesworn">
                            <img class="w-100" @click="profession='bladesworn'" src="../img/main/professions/bladesworn.png">
                        </label>
                    </div>
                    <div class="col-xl-6 col-12"></div>
                </div>
                <div v-if="clazz == 'elementalist'" class="row mb-2">      <!-- PROFESSION -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Profession</h5></div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="tempest">
                            <img class="w-100" @click="profession='tempest'" src="../img/main/professions/tempest.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="weaver">
                            <img class="w-100" @click="profession='weaver'" src="../img/main/professions/weaver.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="profession" value="catalyst">
                            <img class="w-100" @click="profession='catalyst'" src="../img/main/professions/catalyst.png">
                        </label>
                    </div>
                    <div class="col-xl-6 col-12"></div>
                </div>
                <div v-if="clazz == ''" class="row mb-2">      <!-- PROFESSION -->
                   <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Profession</h5></div>
                   <div class="col-xl-9 col-12"></div>
                </div>
                <div class="row mb-2">      <!-- Type -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Type</h5></div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="type" value="power">
                            <img @click="type='power'" class="w-100" src="../img/main/builds/pdps.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto">
                            <input type="radio" id="radio" name="type" value="condi">
                            <img @click="type='condi'" class="w-100" src="../img/main/builds/condi.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto w-100">
                            <input type="radio" id="radio" name="type" value="heal">
                            <img @click="type='heal'" class="w-100 p-1" src="../img/main/builds/heal.png">
                        </label>
                    </div>
                    <div class="col-xl-6 col-12"></div>
                </div>
                <div class="row mb-2">      <!-- Support -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Support</h5></div>
                     <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto w-100">
                            <input type="radio" id="radio" name="support" value="alacrity">
                            <img @click="support='alac'" class="w-100" src="../img/main/builds/alacrity.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto w-100">
                            <input type="radio" id="radio" name="support" value="quickness">
                            <img @click="support='quick'" class="w-100" src="../img/main/builds/quickness.png">
                        </label>
                    </div>
                    <div class="col-xl-1 col-4 text-center mx-auto">
                        <label class="mx-auto w-100 h-100">
                            <input type="radio" id="radio" name="support" value="none">
                            <img @click="support=''" class="w-100" src="../img/main/blocked.png">
                        </label>
                    </div>
                    <div class="col-xl-6 col-12"></div>
                </div>
                <div class="row mb-2 text-center">      <!-- NAME -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Name</h5></div>
                    <div class="col-xl-9 col-12 text-light d-flex mx-auto">
                        <input class="w-100 roundedz text-xl-left text-light bg-dark ps-xl-3 border border-primary" type="text" name="name" v-model="name">
                    </div>
                </div>
                <div class="row mb-2">                  <!-- LINK -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">Link</h5></div>
                    <div class="col-xl-9 col-12 text-light d-flex mx-auto">
                        <input class="w-100 roundedz text-xl-left text-light bg-dark ps-xl-3 border border-primary" type="text" name="link" v-model="link">
                    </div>
                </div>
                <div class="row mb-2">                  <!-- CHATCODE -->
                    <div class="col-xl-3 col-12 text-light d-flex mx-auto"><h5 class="bottom mx-auto">chatCode</h5></div>
                    <div class="col-xl-9 col-12 text-light d-flex mx-auto">
                        <input class="w-100 roundedz text-xl-left text-light bg-dark ps-xl-3 border border-primary" type="text" name="chatcode" v-model="chatCode">
                    </div>
                </div>
                <div class="row my-3 ps-2" style="height:50px;flex-shrink:0">             <!-- BUTTON -->
                    <div    @click="addBuild"
                            class="col-xl-3 col-4 mx-auto text-center text-light border border-primary roundedz pt-2 pb-1 bg-darkz grow hoverBtn">
                        <h5 class="bottom mx-auto">Add</h5>
                    </div>
                    <!--<div class="col-xl-9 col-12"></div>-->
                </div>
            </div>
            <div class="col-3"></div><div class="col-3"></div>
        </div>
    </div>	
</template>

<script>
import builder from '../components/build_component.vue'
import crudService from "../services/crudService"


export default {
    name: 'build_view',
    data(){
        return{
            jsonz: [],

            clazz: "",
            profession: "",
            name: "",
            link: "",
            chatCode: "",
            type: "",
            support: "",

            hidden: "d-block",

            hover: false
        }
    },
    methods: {
        addBuild(){
            var object = {
                "name": this.name,
                "class": this.clazz,
                "profession": this.profession,
                "link": this.link,
                "chatCode": this.chatCode,
                "type": this.type,
                "support": this.support
            }

            crudService.create(object)
            .then(()=> { console.log(object) })
            .catch(e => { console.log(e); })
            
           this.getAll();
           this.resetForm();
           //this.getAll();
        },
        onDataChange(items){
            let _objects = [];
            items.forEach((item)=>{
                let key = item.name;
                let data = item.val();

                _objects.push({
                    name: data.name,
                    link: data.link,
                    chatCode: data.chatCode,
                    type: data.type,
                    support: data.support,
                    profession: data.profession,
                   
                })
            })
            console.log("DATACHANGE");
            console.log(_objects);
            this.jsonz = _objects;
            console.log(this.jsonz);
        },
        getAll(){
            this.jsonz = crudService.getAll();
            console.log("JSONZ");
            console.log(this.jsonz);
        },
        resetForm(){
            this.clazz = "";
            this.profession = "";
            this.type = "";
            this.support = "";
            this.name = "";
            this.link = "";
            this.chatCode = "";
        },
        show(){
            console.log("SHOW");
            console.log("something");
        }
    },
    components: {
        builder
    },
    mounted(){ //async
        console.log("MOUNTED");
        this.jsonz = crudService.getAll();
    }    
}
</script>

<style scoped>
.bottom{
    display: inline-block;
    align-self: center;
}

#innerdivArmor{
	position: absolute;
	height: inherit;
}

#outerdivFullPage{
    height:auto;
}

[type=radio] { 
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type=radio] + img {
  cursor: pointer;
}

/* CHECKED STYLES */
[type=radio]:checked + img {
  border-bottom: 2px solid #0d6efd;
  background: #0d6efd;
  border-radius: 17.5px; 
}
.hoverBtn:hover{
    border-width: 3px !important;
}


</style>