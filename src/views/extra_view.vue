<template>
    <div class="row py-0 mx-0 navBary" style="min-width:800px">
        <div class="col-3"></div>
        <div class="col-3 ms-auto row bg-nav border-top-0 border-start border-primary border-end border-primary navMenu py-3" style="min-width: 380px;">
            <router-link :to="{name: 'booster'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/gui_exp_boost.png"></div> </router-link>
            <router-link :to="{name: 'mounts'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/mount.png"></div> </router-link>
            <!--<router-link :to="{name: 'itemfinder'}" class="mf_upgradeBtn navBtn grow"><div class="col-2 mx-auto border border-primary bg-dark roundedz text-white navBtn grow"><img class="w-100 roundedz" src="../img/main/map_bank.png"></div></router-link>-->
			<router-link :to="{name: 'salvage'}" class="mf_upgradeBtn navBtn grow"><div class="col-2 mx-auto border border-primary bg-dark roundedz text-white navBtn grow"><img class="w-100 roundedz" src="../img/main/salvage_kit.png"></div></router-link>
            <router-link :to="{name: 'converters'}" class="convertersBtn navBtn grow"><div width="42px" height="42px" class="col-2 mx-auto border border-primary bg-dark roundedz text-white navBtn grow"><img class="w-100 roundedz" src="../img/main/herta.png"></div></router-link>
            <router-link :to="{name: 'combo'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/gui_combo.png"></div> </router-link>
            <router-link :to="{name: 'breakbar'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/gui_stun.png"></div> </router-link>
        </div>
        <div class="col-1 d-md-none d-lg-block"></div>
    </div>
    <div class="row rounded py-0 mx-0 navBarx" style="min-width:800px">
        <div class="col-3"></div>
        <div class="col-3 ms-auto row bg-nav border-top-0  border-start border-primary border-end border-primary navMenu py-3" style="min-width: 380px;">
            <router-link :to="{name: 'hardstuck'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/hardstuck.png"></div> </router-link>
            <router-link :to="{name: 'discretize'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/gui_discretize.png"></div> </router-link>
            <router-link :to="{name: 'snowcrows'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/gui_snowcrows.png"></div> </router-link>
            <router-link :to="{name: 'guildjen'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/gui_guildjen.png"></div> </router-link>
            <router-link :to="{name: 'mukluk'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/gui_mukluk.png"></div> </router-link>
            <!--<router-link :to="{name: 'test'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/test.png"></div> </router-link>-->
        </div>
        <div class="col-1 d-md-none d-lg-block"></div>
    </div>
    <div class="row rounded py-0 mx-0 navBarw" style="min-width:800px">
        <div class="col-3"></div>
        <div class="col-3 ms-auto row bg-nav border-top-0  border-start border-primary border-end border-primary navMenu py-3" style="min-width: 380px;">
            <router-link :to="{name: 'build'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/gui_build_editor.png"></div> </router-link>
            <router-link :to="{name: 'gemstore'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/gui_tp.png"></div> </router-link>
            <router-link :to="{name: 'music'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/gui_music.png"></div> </router-link>
            <router-link :to="{name: 'tekkit'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/gui_tekkit.png"></div> </router-link>
            <router-link :to="{name: 'effiency'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/gui_effiency.png"></div> </router-link>
          </div>
        <div class="col-1 d-md-none d-lg-block"></div>
    </div>
	<div class="row rounded py-0 mx-0 navBarz" style="min-width:800px">
        <div class="col-3"></div>
        <div class="col-3 ms-auto row bg-nav border-top-0 border border-primary roundedz-btm navMenu py-3" style="min-width: 380px;">
            <router-link :to="{name: 'mf_upgrade'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/mystic_forge.png" alt="MF upgrades"></div> </router-link>
            <router-link :to="{name: 'mf_weapon_prices'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/gui_mf_weapons.png"></div> </router-link>
            <router-link :to="{name: 'provisioner'}" class="provisionBtn ml-2 navBtn grow"><div width="42px" height="42px" class="col-2 mx-auto border border-primary bg-dark roundedz text-white navBtn grow"><img class="w-100 roundedz" src="../img/main/provisioner_token.png"></div></router-link>
            <router-link :to="{name: 'leggyshard'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/leggyshard.png"></div> </router-link>
            <router-link :to="{name: 'legendary'}" class="navBtn mfBtn grow"> <div class="col-2 mx-auto border border-primary bg-darkz roundedz text-white navBtn grow"><img class="w-100" src="../img/main/gui_legendary.png"></div> </router-link>
        </div>
        <div class="col-1 d-md-none d-lg-block"></div>
    </div>
</template>

<script>

export default {
    name: 'extra_view',
    data(){
        return{

        }
    },
	components:{

	}
}
</script>

<style scoped>
 .navBtn{
		width: 40px;
    	height: 40px;
        margin-right: 15px;
        margin-left: auto;
        margin-right: auto;
        padding: 2px;
	}

    .navBarw{
        position: fixed;
		top: 214px;
		width: 100%;
		z-index: 1000;
		height: 70px;
    }

	.navBarz{
		position: fixed;
		top: 284px;
		width: 100%;
		z-index: 1000;
		height: 70px;
	}

    .navBary{
        position: fixed;
        top: 74px;
		width: 100%;
		z-index: 1000;
		height: 70px;
    }

    .navBarx{
		position: fixed;
		top: 144px;
		width: 100%;
		z-index: 1000;
		height: 70px;
    }

    .bg-nav{
		background-color:  #2E303E;
	}

	.navBtn:hover, .btnGo:hover {
		border-width: 2px !important;
	}

    .navMenu{
        border-top: 0 !important;
    }

    .navBtnz:hover {
        transform: scale(1.15);
		border-width: 2px !important;
	}
</style>