<template>
    <ContentWrapper>
        <header-tools link="/testlayout" title="Home"/>
        <div class="container-fulid row ml-auto mr-auto  shadow-sm bg-white rounded">
            <!--AIRPORT START-->
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
            <!--DATE DESTINATION START-->
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
                                    <div class="col-8 p-0 m-0 border-0">
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
                                    <div class="col-8 p-0 m-0 border-0">
                                        <datepicker
                                                v-model="returnDate.to_date"
                                                :full-month-name="true"
                                                :disabled-date="disabledBeforeToday"
                                                class="datepicker_001 text-bold">
                                        </datepicker>
                                    </div>
                                </div>
                            </div>
                        </ContentWrapper>
                    </div>
                </div>
            </div>
            <!--PASSENGER START-->
            <div class="col-md-4 mt-2 mb-2 bg-white">
                <div class="row">
                    <div class="col-12 mt-2 mb-2">
                        <span><em class="fas mr-2 fa-user"></em></span>
                        <strong class="mt-2 mb-4">Num of Passengers</strong>
                    </div>
                    <div class="col-12 mb-2">
                        <card-passenger/>
                    </div>
                    <div class="col-12 mt-2 mb-2 p-2 border-top">
                        <div class="row mt-2 p-1">
                            <div class="col-6 border-right align-content-center">
                                <div class="align-items-center"><strong class="mr-2 w-50 h-25"><strong>One Way/Return:</strong></strong></div>
                                <div class="align-items-center"><toggle-button v-model="one_way" :value="true" color="#82C7EB" :sync="true" :labels="{ checked: 'One Way', unchecked: 'Return' }" style="width: 50px; height: 25px; margin: 3px;"/></div>
                            </div>
                            <div class="col-6">
                                <!--                                <search-flight-button-->
                                <!--                                        title="Search Flight"-->
                                <!--                                        :dataPayload="{-->
                                <!--                                trip_type : setTripType(one_way),-->
                                <!--                                from_code : setOriginCode(origin),-->
                                <!--                                to_code : setDestinationCode(destination),-->
                                <!--                                return_code: setReturnCode(origin),-->
                                <!--                                from_date : setDepartureDate(departureDate),-->
                                <!--                                return_date : setReturnDate(returnDate)}"-->
                                <!--                                />-->
                                <!--                                <submit-button  title="Search" :matrixschedule="flight_matrix" />-->
                                <button class="btn-search"  @click.prevent="createMatrix">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--        <code>{{schedule_matrix}}</code>-->
        <div class="container-fulid row col-md-10 ml-auto mr-auto">
            <div class="col-12 card-body shadow-sm shadow-sm box-info-regulation-info rounded mt-3 mb-1" v-for="schedule_matrix_ref in schedule_matrix" :key="schedule_matrix_ref.id">
                <div class="card-text blue_border bg-white rounded">
                    {{schedule_matrix_ref.Operating}}
                    <br>
                    Flight Date : {{flightDateFormat(schedule_matrix_ref.Departure.Dep_Time)}} to {{flightDateFormat(schedule_matrix_ref.Arrival.Arr_Time)}}
                    <br>
                    Flight at : {{flightTimeFormat(schedule_matrix_ref.Departure.Dep_Time)}} to {{flightTimeFormat(schedule_matrix_ref.Arrival.Arr_Time)}}
                    <br>
                    Flight route : {{schedule_matrix_ref.Departure.Dep_IATA}} - {{schedule_matrix_ref.Arrival.Arr_IATA}}
                    <br>
                    Seat Avail  : {{schedule_matrix_ref.ClassAvail}}
                    <br>
                    Flight duration : {{schedule_matrix_ref.Duration}}
<!--                    <div class="row card-body" v-for="fare_matrix_ref in fare_matrix" :key="fare_matrix_ref.id">-->
<!--                        <div class="col-6 card-text red_border">-->
<!--                            Fare Code : {{fare_matrix_ref.FareBasisCodes}}-->
<!--                            <br>-->
<!--                            Class : {{fare_matrix_ref.ResBookDesigCode}}-->
<!--                            <br>-->
<!--                            Price : Rp {{numberFormat(fare_matrix_ref.TotalFare)}} / Pax (Include Tax)-->
<!--                            <br>-->
<!--                            Cabin :{{fare_matrix_ref.ClassSeat}}</div>-->
<!--                    </div>-->
                </div>
            </div>
        </div>
    </ContentWrapper>
</template>

<script>
    import HeaderTools from "../../../components/Utils/HeaderTools";
    import CardPassenger from "../../../components/Common/Travel/Partials/CardPassenger";
    import SearchFlightButton from "../../../components/Utils/SearchFlightButton";
    import SubmitButton from "../../../components/Utils/SubmitButton";
    import {Multiselect} from 'vue-multiselect';
    import {ToggleButton} from 'vue-js-toggle-button'
    import Datepicker from 'vue2-datepicker';
    import moment from 'moment';
    import 'vue2-datepicker/index.css';
    // import FlightMatrixRow from '../../../services/FlightMatrixRows.json'
    import Buttons from "../../Elements/Buttons";

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
                searchPayload : {},
                fare_matrix : {},
                schedule_matrix : {},
                // flight_matrix : FlightMatrixRow
            }
        },
        name: "BookingAirlines",
        components: {Buttons, CardPassenger, SearchFlightButton, Multiselect, Datepicker , ToggleButton, HeaderTools, SubmitButton },
        methods: {
            createMatrix(){
                const data_schedule_matrix = this.flight_matrix['message'];
                this.fare_matrix = data_schedule_matrix['fare_ref'];
                this.schedule_matrix = data_schedule_matrix['matrix_ref']
            },
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
            numberFormat (data_value){
                return data_value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            },
            flightTimeFormat(data_value){
                return moment(data_value).format('LT')
            },
            flightDateFormat(data_value){
                return moment(data_value).format('DD-MM-YYYY')
            },
            getClassSeatAvail(data_value){
                return Object.keys(data_value);
            },
            getSeatAvail(data_value){
                return Object.values(data_value)
            }
        },
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped> </style>
