<template>
	<div class="container">
    <div class="row mx-auto mt-3">
        <mfComp v-for="x in json.array"
            :key="x"
            :name="x.main.name"
            :img="x.main.img"
            :wiki="x.main.wiki"
            
            :name1="x.one.name"
            :img1="x.one.img"
            :amount1="x.one.amount"
            :wiki1="x.one.wiki"

            :name2="x.two.name"
            :img2="x.two.img"
            :amount2="x.two.amount"
            :wiki2="x.two.wiki"

            :name3="x.three.name"
            :img3="x.three.img"
            :amount3="x.three.amount"
            :wiki3="x.three.wiki"

            :name4="x.four.name"
            :img4="x.four.img"
            :amount4="x.four.amount"
            :wiki4="x.four.wiki"
        >
        </mfComp>
    </div>
	</div>
</template>

<script>
import jsonData from '../assets/gw2_mf_upgrade.json'
import mfComp from '../components/mf_upgrade_component.vue'

export default {
    name: 'mf_upgrade_view',
    data(){
        return{
            json: jsonData
        }
    },
	components:{
		mfComp
	}
}
</script>

<style scoped>

</style>