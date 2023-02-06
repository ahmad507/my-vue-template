<template>
    <div>
        <button class="btn-search"  @click.prevent="searchSchedule( {dataMatrix: matrixschedule} )">{{title}}</button>
        <code>{{data_matrix}}</code>
    </div>
</template>

<script>
    export default {
        name: "SubmitButton",
        props:{
            title : String,
            matrixschedule: {}
        },
        data() {
            return {
                data_matrix : {}
            }
        },
        methods:{
            searchSchedule(dataParams){
                this.data_matrix = dataParams.dataMatrix;
                console.log(this.data_matrix)
            }
        }
    }
</script>

<style scoped>

</style>
