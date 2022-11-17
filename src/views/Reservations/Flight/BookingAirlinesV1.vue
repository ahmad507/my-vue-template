<template>
    <ContentWrapper>
        <header-tools link="/testlayout" title="Home"/>
        <div class="container-fluid green_border bg-white rounded shadows">
            <div class="row p-4">
                <div class="col-12 d-lg-flex d-xl-flex justify-content-md-center">
                    <div class="col-12 col-lg-5 mt-2 mb-2 red_border">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <span><em class="fas fa-w-2 fa-plane-departure"></em><strong> From : </strong></span>
                                    <div class="col-md-11 p-0 blue_border">
                                        <multiselect v-model="origin" :options="options" :custom-label="destinationTrip" :multiple="false" :close-on-select="true"
                                                     :clear-on-select="false"
                                                     :hide-selected="false"
                                                     track-by="name"
                                                     label="name"
                                                     :preserve-search="true"
                                                     placeholder="Origin"/>
                                    </div>
                                    <div class="col-md-1 p-0 blue_border">

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 p-0 blue_border">
                                <span><em class="fas fa-w-2 fa-plane-arrival"></em><strong> To : </strong></span>
                                <multiselect v-model="destination" :options="options" :custom-label="destinationTrip" :multiple="false" :close-on-select="true"
                                             :clear-on-select="false"
                                             :hide-selected="false"
                                             track-by="name"
                                             label="name"
                                             :preserve-search="true"
                                             placeholder="Destination"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 mt-2 mb-2 red_border">
                        <div class="row">
                            <span><em class="fas mr-2 fa-calendar-alt"></em></span>
                            <strong>Date | <span v-if="one_way">Oneway</span><span v-if="!one_way">Return</span></strong>
                            <div class="col-md-12 d-md-flex d-lg-flex d-xl-flex justify-content-md-start p-0 blue_border">
                                <datepicker
                                        v-model="departureDate.from_date"
                                        :full-month-name="true"
                                        :disabled-date="disabledBeforeToday" class="mb-2 mr-1"/>
                                <datepicker
                                        v-model="departureDate.from_date"
                                        :full-month-name="true"
                                        :disabled-date="disabledBeforeToday" class="mb-2 mr-1" v-if="!one_way"/>
                                <toggle-button v-model="one_way" :value="true" color="#82C7EB" :sync="true" :labels="{ checked: 'One Way', unchecked: 'Return' }" style="width: 50px; height: 25px; margin-top: 10px"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 mt-2 mb-2 red_border">
                        <div class="row">
                            <div class="col-md-4 p-0 blue_border">
                                <span><em class="fas fa-w-2 mr-2 fa-male ml-1"></em><strong>Adult</strong></span>
                                <multiselect
                                        v-model="adult"
                                        :options="adult_count"
                                        :multiple="false"
                                        :close-on-select="true"
                                        :clear-on-select="false"
                                        :hide-selected="false"
                                        :preserve-search="true"
                                        track-by="qty"
                                        label="qty"
                                        placeholder="Adult" @input="getPaxAdult"/>
                            </div>
                            <div class="col-md-4 p-0 blue_border">
                                <span><em class="fas fa-w-2 mr-2 fa-child ml-1"></em><strong>Child</strong></span>
                                <multiselect
                                        v-model="child"
                                        :options="child_count"
                                        :multiple="false"
                                        :close-on-select="true"
                                        :clear-on-select="false"
                                        :hide-selected="false"
                                        :preserve-search="true"
                                        track-by="qty"
                                        label="qty"
                                        placeholder="Child"/>
                            </div>
                            <div class="col-md-4 p-0 blue_border">
                                <span><em class="fas fa-w-2 mr-2 fa-baby ml-1"></em><strong>Infant</strong></span>
                                <multiselect
                                        v-model="infant"
                                        :options="infant_count"
                                        :multiple="false"
                                        :close-on-select="true"
                                        :clear-on-select="false"
                                        :hide-selected="false"
                                        :preserve-search="true"
                                        track-by="qty"
                                        label="qty"
                                        placeholder="Infant"/>
                            </div>
                            <div class="container-fluid mt-2 mb-2 red_border">
                                <button class="btn btn-primary btn-block btn-search" :loading="loading[0]" @click.prevent="createMatrix" data-style="zoom-in">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h5 v-if="!isLoading">Loading</h5>
        <flight-matrix  :data-matrix="schedule_matrix"/>
        <!--        <div v-for="(pax_adt, index) in passenger_data.pax_adult">-->
        <!--            {{index +1 }} .-->
        <!--            <b-input class="form-control" type="text" v-model="passenger_adult.name"></b-input>-->
        <!--            <code>{{pax_adt}}</code>-->
        <!--        </div>-->
    </ContentWrapper>
</template>

<script>
    import HeaderTools from "../../../components/Utils/HeaderTools";
    import FlightMatrix from "../../../components/Common/Travel/Flights/FlightMatrix";
    import MockData from '../../../services/MockDataLion.js'
    import {Multiselect} from 'vue-multiselect';
    import Datepicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import moment from 'moment';
    import LaddaButton from 'vue-ladda';

    export default {
        name: "BookingAirlinesV1",
        components:{HeaderTools, Multiselect, Datepicker, FlightMatrix, LaddaButton},
        data () {
            return {
                one_way: true,
                departureDate: { from_date : moment().toDate() },
                returnDate: { to_date : moment().toDate() },
                origin: { name: 'CGK', city: 'Jakarta' },
                destination: { name: 'DPS', city: 'Denpasar' },
                adult: { qty : 1 },
                child: { qty : 0 },
                infant: { qty : 0 },
                /* Data Reference For Multiselect */
                options: [
                    { name: 'DPS', city: 'Denpasr' },
                    { name: 'CGK', city: 'Jakarta' },
                    { name: 'KNO', city: 'Medan' },
                    { name: 'AMQ', city: 'Ambon' },
                    { name: 'PLM', city: 'Palembang' }
                ],
                adult_count : [{qty : 1}, {qty : 2}, {qty : 3}, {qty : 4}, {qty : 5}, {qty : 6}, {qty : 7}],
                child_count : [{qty : 1}, {qty : 2}, {qty : 3}, {qty : 4}, {qty : 5}, {qty : 6}, {qty : 7}],
                infant_count : [{qty : 1}, {qty : 2}],
                /* Data Reference For Multiselect */
                searchPayload : {},
                fare_matrix : {},
                schedule_matrix : null,
                isLoading : true,
                loading: [ false ],
                flight_matrix_data : MockData.data_7,
                passenger_adult :[{name:''}],
                passenger_data : {
                    pax_adult :{},
                    pax_child : {},
                    pax_infant : {},
                },
            }
        },
        mounted(){
            this.getPaxAdult()
        },
        methods:{
            getPaxAdult(){
                this.passenger_data.pax_adult = this.adult.qty
            },
            createMatrix(){
                this.schedule_matrix = this.flight_matrix_data.message.data_matrix.flight_matrix;
                // const matrix_array = Array.isArray(schedule_matrix_data_x);
                // if (!matrix_array){
                //
                // } else if (matrix_array) {
                //     const matrix_group = this.matrixGroup(schedule_matrix_data_x, flight_matrix => flight_matrix.flight_id);
                //     this.schedule_matrix = matrix_group.values();
                // } else {
                //     this.schedule_matrix = schedule_matrix_data_x;
                // }
                // console.log(this.schedule_matrix);
                // console.log(matrix_array)
            },
            matrixGroup(list, keyGetter){
                const map = new Map();
                list.forEach((item) => {
                    const key = keyGetter(item);
                    const collection = map.get(key);
                    if (!collection) {
                        map.set(key, [item]);
                    } else {
                        collection.push(item);
                    }
                });
                return map;
            },
            // createMatrix1(){
            //     if (this.loading[0]) return
            //     this.updateLoadingValue(0, true)
            //     this.isLoading = false;
            //     setTimeout(() => {
            //         const data_schedule_matrix = this.flight_matrix_data['message'];
            //         this.schedule_matrix = {
            //             schedule_row :data_schedule_matrix['matrix_ref'],
            //             fare_row:data_schedule_matrix['fare_ref']
            //         };
            //         console.log(this.schedule_matrix);
            //         this.isLoading = true;
            //         this.updateLoadingValue(0, false)
            //     }, 3000);
            // },
            updateLoadingValue (index, value) {
                this.loading[index] = value
                this.loading = this.loading.slice(0)
            },
            destinationTrip ({ city, name }) {
                return `${city}(${name})`
            },
            disabledBeforeToday(date) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < new Date(today.getTime());
            },
        },
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>

</style>




<!--<div class="container-fluid shadow-sm rounded mt-2 mb-2">-->
<!--    <div class="row">-->
<!--        <div class="col-md-6 d-lg-flex d-xl-flex">-->
<!--            <div class="md-col-4 col-lg-4 col-xl-4">-->
<!--                <div class="mt-2 mb-2">-->
<!--                    <div class="col-md-12 ">-->
<!--                        <span><em class="fas mr-2 fa-map-marked-alt"></em></span>-->
<!--                        <strong class="mt-2 mb-4">Destination</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="mt-2 mb-2 red_border">-->
<!--                    <multiselect v-model="origin" :options="options" :custom-label="destinationTrip" :multiple="false" :close-on-select="true"-->
<!--                                 :clear-on-select="false"-->
<!--                                 :hide-selected="false"-->
<!--                                 track-by="name"-->
<!--                                 label="name"-->
<!--                                 :preserve-search="true"-->
<!--                                 placeholder="Origin"/>-->
<!--                </div>-->
<!--                <div class="mt-2 mb-2 red_border">-->
<!--                    <multiselect v-model="destination" :options="options" :custom-label="destinationTrip" :multiple="false" :close-on-select="true"-->
<!--                                 :clear-on-select="false"-->
<!--                                 :hide-selected="false"-->
<!--                                 track-by="name"-->
<!--                                 label="name"-->
<!--                                 :preserve-search="true"-->
<!--                                 placeholder="Destination"/>-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="d-lg-flex d-xl-flex">-->
<!--                <div class="md-col-5 col-lg-5 col-xl-5">-->
<!--                    <div class="col-md-12 mt-2 mb-2">-->
<!--                        <span><em class="fas mr-2 fa-calendar-alt"></em></span>-->
<!--                        <strong class="mt-2 mb-2">Date</strong>-->
<!--                    </div>-->
<!--                    <div class="col-md-12 mt-2 mb-2 red_border">-->
<!--                        <datepicker-->
<!--                                v-model="departureDate.from_date"-->
<!--                                :full-month-name="true"-->
<!--                                :disabled-date="disabledBeforeToday" class="mb-2"/>-->
<!--                    </div>-->
<!--                    <div class="col-md-12 mt-2 mb-2 red_border">-->
<!--                        <datepicker-->
<!--                                v-model="returnDate.to_date"-->
<!--                                :full-month-name="true"-->
<!--                                :disabled-date="disabledBeforeToday" class="mb-2"/>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="md-col-2 col-lg-2 col-xl-2">-->
<!--                    <div class="mt-2 mb-2">-->
<!--                        <strong class="mr-2">Trip Type</strong>-->
<!--                        <toggle-button v-model="one_way" :value="true" color="#82C7EB" :sync="true" :labels="{ checked: 'One Way', unchecked: 'Return' }" style="width: 50px; height: 25px; margin-top: 10px"/>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="md-col-5 col-lg-5 col-xl-5">-->
<!--                    <div class="col-md-12 mt-2 mb-2">-->
<!--                        <span><em class="fas mr-2 fa-user"></em></span>-->
<!--                        <strong class="mt-2 mb-4">Num of Passengers</strong>-->
<!--                    </div>-->
<!--                    <div class="col-md-12 mt-2 mb-2 red_border">Pax</div>-->
<!--                    <div class="col-md-12 mt-2 mb-2 p-0 red_border">-->
<!--                        <button class="btn-search">Search</button>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->

