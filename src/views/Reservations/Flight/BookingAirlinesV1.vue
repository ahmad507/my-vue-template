<template>
    <ContentWrapper>
        <header-tools class="green_border" link="/testlayout" title="Home"/>
        <div class="container-fluid ">
            <div class="row">
                <div class="col-md-12 d-lg-flex d-xl-flex">
                    <div class="md-col-5 col-lg-5 col-xl-5">
                        <div class="mt-2 mb-2">
                            <div class="col-md-12 ">
                                <span><em class="fas mr-2 fa-map-marked-alt"></em></span>
                                <strong class="mt-2 mb-4">Destination</strong>
                            </div>
                        </div>
                        <div class="col-md-12 mt-2 mb-2 red_border">Origin</div>
                        <div class="col-md-12 mt-2 mb-2 red_border">Destination</div>
                    </div>

                    <div class="container-fluid d-lg-flex d-xl-flex">
                        <div class="md-col-5 col-lg-5 col-xl-5">
                            <div class="col-md-12 mt-2 mb-2">
                                <span><em class="fas mr-2 fa-calendar-alt"></em></span>
                                <strong class="mt-2 mb-4">Date</strong>
                            </div>
                            <div class="col-md-12 mt-2 mb-2 red_border">Date Origin</div>
                            <div class="col-md-12 mt-2 mb-2 red_border">Date Return</div>
                        </div>
                        <div class="md-col-2 col-lg-2 col-xl-2">
                            <div class="mt-2 mb-2">
                                <strong class="mr-2">Trip Type</strong>
                                <toggle-button v-model="one_way" :value="true" color="#82C7EB" :sync="true" :labels="{ checked: 'One Way', unchecked: 'Return' }" style="width: 50px; height: 25px; margin-top: 10px"/>
                            </div>
                        </div>
                        <div class="md-col-5 col-lg-5 col-xl-5">
                            <div class="col-md-12 mt-2 mb-2">
                                <span><em class="fas mr-2 fa-user"></em></span>
                                <strong class="mt-2 mb-4">Num of Passengers</strong>
                            </div>
                            <div class="col-md-12 mt-2 mb-2 red_border">Pax</div>
                            <div class="col-md-12 mt-2 mb-2 p-0 red_border">
                                <button class="btn-search">Search</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </ContentWrapper>
</template>

<script>
    import HeaderTools from "../../../components/Utils/HeaderTools";
    import {Multiselect} from 'vue-multiselect';
    import Datepicker from 'vue2-datepicker';
    import moment from 'moment';
    export default {
        name: "BookingAirlinesV1",
        components:{HeaderTools, Multiselect,Datepicker},
        data () {
            return {
                one_way: true,
                departureDate: { from_date : moment().toDate() },
                returnDate: { to_date : moment().toDate() },
                origin: { name: 'CGK', city: 'Jakarta' },
                destination: { name: 'DPS', city: 'Denpasr' },
                options: [
                    { name: 'DPS', city: 'Denpasr' },
                    { name: 'CGK', city: 'Jakarta' },
                    { name: 'KNO', city: 'Medan' },
                    { name: 'AMQ', city: 'Ambon' },
                    { name: 'PLM', city: 'Palembang' }
                ],
                searchPayload : {},
                fare_matrix : {},
                schedule_matrix : {},
                // flight_matrix : FlightMatrixRow
            }
        },
        methods:{
            destinationTrip ({ name, city }) {
                return `${name} — [${city}]`
            },
        }
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>

</style>
