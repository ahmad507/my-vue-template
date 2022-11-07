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
                <a class="btn btn-circle" @click="tripTypeOneWay()">
                    <em class="fas fa-2x fa-arrow-right text-white">
                    </em>
                </a>
                <small class="text-decoration-none text-white mr-3">One Oay</small>
                <a class="btn btn-circle" @click="tripTypeReturn()">
                    <em class="fas fa-2x fa-exchange-alt text-white">
                    </em>
                </a>
                <small class="text-decoration-none text-white">Return</small>
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
                                <div class="col-2 search_border_001 p-1">
                                    <em class="fas fa-w-2 fa-plane-departure ml-1"></em>
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
                                <div class="col-2 search_border_001 p-1">
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
                                                v-model="departureDate"
                                                :full-month-name="true"
                                                :calendar-button="true"
                                                :clear-button="true"
                                                :disabled-date="disabledBeforeToday"
                                                calendar-button-icon="far fa-calendar" class="datepicker_001">
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
                                                v-model="returnDate"
                                                :full-month-name="true"
                                                :calendar-button="true"
                                                :clear-button="true"
                                                :disabled-date="disabledBeforeToday"
                                                calendar-button-icon="far fa-calendar" class="datepicker_001">
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
                </div>
            </div>
        </div>
    </ContentWrapper>
</template>

<script>
    import CardDestination from "../../../components/Common/Travel/Partials/CardDestination";
    import CardPassenger from "../../../components/Common/Travel/Partials/CardPassenger";
    import CardDatePicker from "../../../components/Common/Travel/Partials/CardDatePicker";
    import Multiselect from 'vue-multiselect';
    import Datepicker from 'vue2-datepicker';
    import moment from 'moment';
    import 'vue2-datepicker/index.css';
    export default {
        data () {
            return {
                one_way: true,
                departureDate: moment().toDate(),
                returnDate: moment().toDate(),
                origin: { name: 'CGK', language: 'Jakarta, Soetta Int. Airport' },
                destination: { name: 'DPS', language: 'Denpasr, I Gusti Ngurah Rai' },
                options: [
                    { name: 'DPS', language: 'Denpasr' },
                    { name: 'CGK', language: 'Jakarta' },
                    { name: 'KNO', language: 'Medan' },
                    { name: 'AMQ', language: 'Ambon' },
                    { name: 'PLM', language: 'Palembang' }
                ],
            }
        },
        name: "BookingAirlines",
        components: {CardPassenger, CardDestination, CardDatePicker,Multiselect, Datepicker},
        methods: {
            destinationTrip ({ name, language }) {
                return `${name} — [${language}]`
            },
            disabledBeforeToday(date) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < new Date(today.getTime());
            },
            tripTypeReturn(){
                this.one_way = false;
            },
            tripTypeOneWay(){
                this.one_way = true;
                this.returnDate = this.departureDate;
            }
        },
    }
</script>

<style scoped> </style>
