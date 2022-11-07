<template>
    <div class="row p-4 d-flex flex-wrap shadows_sm">
        <div class="col-md-3 bg-white p-2 col-4 mt-2 mb-2 rounded-left shadow-sm">
            <div class="row my-1 mx-2">
                <em class="fas fa-1x ml-2 mr-2 fa-user-circle"></em>
                <small>User Name</small>
            </div>
            <div class="row ml-2 mr-2 ">
                <small class="text-truncate text-center">{{user_name}}</small>
            </div>
        </div>
        <div class="col-md-3 bg-white p-2 col-4 mt-2 mb-2 border-left border-right shadow-sm">
            <div class="row my-1 mx-2">
                <em class="fas fa-1x ml-2 mr-2 fa-credit-card"></em>
                <small>Deposit</small>
            </div>
            <div class="row ml-2 mr-2 ">
                <small class="text-truncate">Rp {{numberFormat(user_deposit)}}</small>
            </div>
        </div>
        <div class="col-md-3 bg-white p-2 col-4 mt-2 mb-2 rounded-right shadow-sm">
            <div class="row my-1 mx-2">
                <em class="fas fa-1x ml-2 mr-2 fa-exchange-alt"></em>
                <small>Transaction</small>
            </div>
            <div class="row ml-2 mr-2 ">
                <small class="text-truncate">Rp {{numberFormat(user_transaction)}}</small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardDeposit",
        props : {
            user_name : String,
            user_deposit : 0,
            user_transaction : 0
        },
        methods : {
            numberFormat (data_value){
                return data_value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    }
</script>

<style scoped>

</style>
