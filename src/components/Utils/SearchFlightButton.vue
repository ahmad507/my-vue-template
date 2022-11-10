<template>
    <div>
        <button class="btn-search" @click.prevent="searchSchedule( {detailPath: airlines ,detailSearch:dataPayload})">{{title}}</button>
        <!--div><code>{{data_Payloads}}</code></div-->
    </div>
</template>

<script>
    export default {
        name: "SearchFlightButton",
        props :{
            title : String,
            dataPayload:{}
        },
        data () {
            return {
                data_Payloads:{},
                airlines: 'bookingairlines'
            }
        },
        methods : {
            searchSchedule(dataParams) {
                this.data_Payloads = {
                    airlines: dataParams.detailPath,
                    trip_type: dataParams.detailSearch.trip_type,
                    from_code: dataParams.detailSearch.from_code,
                    to_code: dataParams.detailSearch.to_code,
                    return_code: dataParams.detailSearch.return_code,
                    from_date: dataParams.detailSearch.from_date,
                    return_date: dataParams.detailSearch.return_date };
                console.log(this.data_Payloads)
            }
        }
    }
</script>
<style scoped>
</style>
