<template>
    <wingz :accounts="this.accounts"></wingz>
    <strikes></strikes>
</template>

<script>
import wingz from '../components/wingz_component.vue'
import strikes from '../views/strikes_view.vue'
import crudService from '../services/crudService'

export default 
  {
    name: 'progress_view',
    data(){
        return{
            result: "",
            accounts: [],
        }
    },
    components: { 
        wingz,
        strikes
    },
    methods: {
		  onDataChange(items) {
            console.log("ONDATACHANGE");
            let _accounts = [];
            items.forEach((item) => {
              let key = item.key;
              let data = item.val();
              
             _accounts.push({
                api: data.api,
                kpme: data.kpme,
                name: data.name
              });
            });
              this.accounts = _accounts;
              console.log(this.accounts);
        }
    },
    mounted(){
       this.accounts = crudService.getAllText().on("value",this.onDataChange);
    }
}
</script>

<style scoped>


</style>