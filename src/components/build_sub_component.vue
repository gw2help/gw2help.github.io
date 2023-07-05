<template>
    <div v-if="jsonz.length > 0" class="row mx-1 mb-5">
            <div class="col-4 mb-3">
                <img class="icon-xl mx-auto d-block" src="../img/main/professions/guardian.png">
                <builder v-for="x in this.jsonz.guardian"
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
                <builder v-for="x in this.jsonz.revenant"
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
                <builder v-for="x in this.jsonz.engineer"
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
                <builder v-for="x in this.jsonz.ranger"
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
                <builder v-for="x in this.jsonz.mesmer"
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
                <builder v-for="x in this.jsonz.necromancer"
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
                <builder v-for="x in this.jsonz.thief"
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
                <builder v-for="x in this.jsonz.elementalist"
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
                <builder v-for="x in this.jsonz.warrior"
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
</template>
    <script>
    import builder from '..components/build_component.vue'

      export default {
        name: 'build_sub_component',
        data(){
          return{
            jsons: []
          }
        },
        props:{
            objs:{
                type: Object,
                required: true
            }         
        },
        components:{
            build
        },
        methods:{
        },
        mounted(){
            
        }
      }
    </script>
    <style scoped>
    
    </style>