<template>
    <ContentWrapper>
        <div>
            <span><em class="fas fa-w-1 fa-plane mr-2"></em></span>
            <strong>{{title}}</strong>
        </div>
        <div class="menu-icon mt-4">
            <div v-for="airline in airlines" :key="airlines.text"  @click.prevent="searchSchedule( {detailPath: airline.text ,detailSearch:dataPayload})">
                <img :src="airline.icon" alt="logo_airlines"/>
                <br>
                <small class="text-dark">{{airline.text}}</small>
            </div>
        </div>
<!--        <div><code>{{dataPayload}}</code></div>-->
    </ContentWrapper>
</template>

<script>
    export default {
        name: "CardAirline",
        props :{
            title : String,
            dataPayload:{}
        },
        data () {
            return {
                data_Payloads:{},
                airlines: [
                    { icon: "../../../../airlines/airasia.png", text: "Air Asia", path: '/airasia' },
                    { icon: "../../../../airlines/citilink.png", text: "Citilink", path: '/citilink' },
                    { icon: "../../../../airlines/garuda.png", text: "Garuda", path: '/garuda' },
                    { icon: "../../../../airlines/lion.png", text: "Lion Air", path: '/lion' },
                    { icon: "../../../../airlines/sriwijaya.png", text: "Sriwijaya", path: '/sriwijaya' },
                    { icon: "../../../../airlines/trigana.png", text: "Trigana", path: '/trigana' },
                ],
            }
        },
        methods : {
            searchSchedule(dataParams) {
                const api = 'bookingairlines/';
                const detailParams = {
                    airlines : dataParams.detailPath,
                    trip_type : dataParams.detailSearch.trip_type,
                    from_code : dataParams.detailSearch.from_code,
                    to_code : dataParams.detailSearch.to_code,
                    return_code : dataParams.detailSearch.return_code,
                    from_date : dataParams.detailSearch.from_date,
                    return_date : dataParams.detailSearch.return_date
                };
                console.log(detailParams);
            }
        }
    }
</script>

<style scoped>

</style>
