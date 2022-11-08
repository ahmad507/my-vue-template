<template>
    <ContentWrapper>
        <div class="row p-4 mt-n4 shadows_sm">
            <div class="col-12">
                <router-link to="/mainlayout" style="text-decoration: none">
                    <a class="btn btn-circle">
                        <em class="fas fa-2x fa-arrow-alt-circle-left text-white">
                        </em>
                    </a>
                    <small class="text-decoration-none text-white">Back</small>
                </router-link>
            </div>
            <div class="col-12 mt-2 mb-2">
            </div>
        </div>
        <div class="container row mt-n4 ml-auto mr-auto p-2 shadow-sm bg-white rounded">
            <div class="col-md-4 mt-2 mb-2 bg-white">
                <div class="row">
                    <div class="col-12 mt-2 mb-2">
                        <span><em class="fas mr-2 fa-map-marked-alt"></em></span>
                        <strong class="mt-2 mb-4">Destination</strong>
                    </div>
                    <div class="col-12 mb-2">
                        <ContentWrapper>
                            <div class="search_border row mb-2">
                                <div class="col-2 search_border_001 p-1 text-center">
                                    <em class="fas fa-w-2 fa-plane-departure"></em>
                                    <div class="m-auto">From</div>
                                </div>
                                <div class="col-10 p-0 m-0 border-0 search_box">
                                    <multiselect v-model="origin" :options="options" :custom-label="destinationTrip" :multiple="false" :close-on-select="true"
                                                 :clear-on-select="false"
                                                 :hide-selected="false"
                                                 track-by="name"
                                                 label="name"
                                                 :preserve-search="true"
                                                 placeholder="Origin"/>
                                </div>
                            </div>
                            <div class="search_border row mb-2">
                                <div class="col-2 search_border_001 p-1 text-center">
                                    <em class="fas fa-w-2 fa-plane-arrival ml-1"></em>
                                    <div class="m-auto">To</div>
                                </div>
                                <div class="col-10 p-0 m-0 border-0 search_box">
                                    <multiselect v-model="destination" :options="options" :custom-label="destinationTrip" :multiple="false" :close-on-select="true"
                                                 :clear-on-select="false"
                                                 :hide-selected="false"
                                                 track-by="name"
                                                 label="name"
                                                 :preserve-search="true"
                                                 placeholder="Destination"/>
                                </div>
                            </div>
                        </ContentWrapper>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mt-2 mb-2 bg-white">
                <div class="row">
                    <div class="col-12 mt-2 mb-2">
                        <span><em class="fas mr-2 fa-calendar-alt"></em></span>
                        <strong class="mt-2 mb-4">Date</strong>
                    </div>
                    <div class="col-12 mb-2">
                        <ContentWrapper>
                            <div class="mb-2">
                                <div class="search_border row">
                                    <div class="col-2 search_border_001 p-1">
                                        <em class="fas fa-w-2 fa-calendar-check ml-1"></em>
                                        <div class="m-auto">Depart</div>
                                    </div>
                                    <div class="col-10 p-0 m-0 border-0">
                                        <datepicker
                                                v-model="departureDate.from_date"
                                                :full-month-name="true"
                                                :disabled-date="disabledBeforeToday"
                                                class="datepicker_001">
                                        </datepicker>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2" v-if="!one_way">
                                <div class="search_border row">
                                    <div class="col-2 search_border_001 p-1">
                                        <em class="fas fa-w-2 fa-calendar-check ml-1"></em>
                                        <div class="m-auto">Return</div>
                                    </div>
                                    <div class="col-10 p-0 m-0 border-0">
                                        <datepicker
                                                v-model="returnDate.to_date"
                                                :full-month-name="true"
                                                :disabled-date="disabledBeforeToday"
                                                class="datepicker_001">
                                        </datepicker>
                                    </div>
                                </div>
                            </div>
                        </ContentWrapper>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mt-2 mb-2 bg-white">
                <div class="row">
                    <div class="col-12 mt-2 mb-2">
                        <span><em class="fas mr-2 fa-user"></em></span>
                        <strong class="mt-2 mb-4">Num of Passengers</strong>
                    </div>
                    <div class="col-12 mb-2">
                        <card-passenger/>
                    </div>
                    <div class="col-12 mb-2 p-2 border-top">
                        <small class="mr-2"><strong>One Way/Return:</strong></small>
                        <toggle-button v-model="one_way" :value="true" color="#82C7EB" :sync="true" :labels="{checked: 'One Way', unchecked: 'Return'}" style="width: 50px; height: 22px; margin: 3px;" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container row mt-2 ml-auto mr-auto  shadow-sm bg-white rounded">
            <card-airline
                    title="Airlines"
                    :dataPayload="{
                    trip_type : setTripType(one_way),
                    from_code : setOriginCode(origin),
                    to_code : setDestinationCode(destination),
                    return_code: setReturnCode(origin),
                    from_date : setDepartureDate(departureDate),
                    return_date : setReturnDate(returnDate)}"/>
        </div>
    </ContentWrapper>
</template>

<script>
    import CardDestination from "../../../components/Common/Travel/Partials/CardDestination";
    import CardPassenger from "../../../components/Common/Travel/Partials/CardPassenger";
    import CardDatePicker from "../../../components/Common/Travel/Partials/CardDatePicker";
    import CardAirline from "../../../components/Common/Travel/CardAirline";
    import { Multiselect } from 'vue-multiselect';
    import { ToggleButton } from 'vue-js-toggle-button'
    import Datepicker  from 'vue2-datepicker';
    import moment from 'moment';
    import 'vue2-datepicker/index.css';
    export default {
        data () {
            return {
                one_way: true,
                departureDate: { from_date : moment().toDate() },
                returnDate: { to_date : moment().toDate() },
                origin: { name: 'CGK', city: 'Jakarta, Soetta Int. Airport' },
                destination: { name: 'DPS', city: 'Denpasr, I Gusti Ngurah Rai' },
                options: [
                    { name: 'DPS', city: 'Denpasr' },
                    { name: 'CGK', city: 'Jakarta' },
                    { name: 'KNO', city: 'Medan' },
                    { name: 'AMQ', city: 'Ambon' },
                    { name: 'PLM', city: 'Palembang' }
                ],
                searchPayload : {
                }
            }
        },
        name: "BookingAirlines",
        components: {CardAirline, CardPassenger, CardDestination, CardDatePicker,Multiselect, Datepicker , ToggleButton},
        methods: {
            setTripType(one_way){
                return one_way ? 'OW' : 'RT'
            },
            setOriginCode(origin){
                return origin.name
            },
            setDestinationCode(destination){
                return destination.name
            },
            setReturnCode(origin){
                return origin.name
            },
            setDepartureDate(departureDate){
                return moment(departureDate.from_date).format('DD-MM-YYYY')
            },
            setReturnDate(returnDate){
                return moment(returnDate.to_date).format('DD-MM-YYYY')
            },
            destinationTrip ({ name, city }) {
                return `${name} — [${city}]`
            },
            disabledBeforeToday(date) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < new Date(today.getTime());
            },
        },
    }
</script>

<style scoped> </style>
