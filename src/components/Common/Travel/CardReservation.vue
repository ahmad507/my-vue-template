<template>
    <div class="container-fluid">
        <div class="content-heading">
            <div>Pesan Tiket Pesawat
                <small>Cari dan Pesan Tiket Pesawat Sekarang</small>
            </div>
        </div>
        <hr>
        <div class="container shadows">
            <b-card-body class="flex-wrap">
                <div class="card-body col-md-6">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" id="inlineRadio1" type="radio" name="inlineRadioOptions" value="Oneway" />
                        <label class="form-check-label" for="inlineRadio1"><strong>One Way</strong></label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" id="inlineRadio2" type="radio" name="inlineRadioOptions" value="Roundtrip" />
                        <label class="form-check-label" for="inlineRadio2"><strong>Round Trip</strong></label>
                    </div>
                </div>
            </b-card-body>
            <b-card-group columns>
                <b-card class="col-row-md-6 shadow-none bg-transparent">
                    <div class="card-body mb-3 p-0">
                        <strong>From</strong>
                        <multiselect
                                v-model="origin"
                                :options="options"
                                :custom-label="nameWithLang"
                                :multiple="false"
                                :close-on-select="true"
                                :clear-on-select="false"
                                :hide-selected="false"
                                track-by="name"
                                label="name"
                                :preserve-search="true"
                                placeholder="Origin"/>
                    </div>
                    <div class="card-body p-0">
                        <strong class="mt-3">To</strong>
                        <multiselect
                                v-model="destination"
                                :options="options"
                                :custom-label="nameWithLang"
                                :multiple="false"
                                :close-on-select="true"
                                :clear-on-select="false"
                                :hide-selected="false"
                                track-by="name"
                                label="name"
                                :preserve-search="true"
                                placeholder="Destination"/>
                    </div>
                </b-card>
                <b-card class="col-row-md-6 shadow-none bg-transparent">
                    <div class="card-body p-0">
                        <strong class="my-2">Departure Date</strong>
                        <datepicker
                                v-model="departureDate"
                                :bootstrapStyling="true"
                                :full-month-name="true"
                                :calendar-button="true"
                                :clear-button="true"
                                calendar-button-icon="far fa-calendar">
                        </datepicker>
                        <br>
                        <strong class="my-4">Return Date</strong>
                        <datepicker
                                v-model="returnDate"
                                :bootstrapStyling="true"
                                :full-month-name="true"
                                :calendar-button="true"
                                :clear-button="true"
                                calendar-button-icon="far fa-calendar">
                        </datepicker>
                    </div>
                </b-card>
                <b-card class="col-row-md-6 shadow-none bg-transparent">
                    <div class="card-body p-0">
                        <strong class="my-2">No. of Passengers</strong>
                        <div class="d-flex">
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
                                    placeholder="Adult" class="mr-1"/>
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
                                    placeholder="Adult"/>
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
                                    placeholder="Adult" class="ml-1"/>
                        </div>
                        <br>
                        <b-button class="mt-3 btn-block bg-info font-weight-bolder">
                            <em class="fa mr-2 fas fa-search"></em>
                            <span>
                                <strong>Search</strong>
                            </span>
                        </b-button>
                    </div>
                </b-card>
            </b-card-group>
        </div>
    </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
    import Multiselect from 'vue-multiselect'
    import moment from 'moment'
    import Datepicker from 'vuejs-datepicker'
    export default {
        name: "CardReservation",
        components: {
            Multiselect,
            Datepicker,
        },
        data () {
            return {
                adult: { qty : 1 },
                child: { qty : 0 },
                infant: { qty : 0 },

                adult_count : [{qty : 1}, {qty : 2}, {qty : 3}, {qty : 4}, {qty : 5}, {qty : 6}, {qty : 7}, {qty : 8}, {qty : 9}],
                child_count : [{qty : 1}, {qty : 2}, {qty : 3}, {qty : 4}, {qty : 5}],
                infant_count : [{qty : 1}, {qty : 2}],

                origin: { name: 'CGK', language: 'Jakarta, Soetta Int. Airport' },
                destination: { name: 'DPS', language: 'Denpasr, I Gusti Ngurah Rai' },

                options: [
                    { name: 'DPS', language: 'Denpasr' },
                    { name: 'CGK', language: 'Jakarta' },
                    { name: 'KNO', language: 'Medan' },
                    { name: 'AMQ', language: 'Ambon' },
                    { name: 'PLM', language: 'Palembang' }
                ],

                departureDate: moment().toDate(),
                returnDate: moment().toDate(),
            }
        },
        created () {
            console.log(this.departureDate)
        },
        methods: {
            nameWithLang ({ name, language }) {
                return `${name} — [${language}]`
            },
        }
    }
</script>
<style scoped>
</style>

