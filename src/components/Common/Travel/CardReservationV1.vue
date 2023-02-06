<template>
    <ContentWrapper>
        <div class="row">
            <div class="col-md-12 d-sm-none xs_screen d-md-block mt-2">
                <card-reservation/>
            </div>
            <div class="row shadows p-2">
                <div class="col-md-6 d-md-none mt-n2">
                    <card-deposit/>
                </div>
                <div class="col-md-6 d-md-none mt-3">
                    <card-destination/>
                </div>
                <div class="col-md-6 d-md-none mt-2">
                    <card-trip />
                </div>
                <div class="col-md-3 d-md-none mt-2">
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
                </div>
                <div class="col-md-6 d-md-none mt-2">
                    <card-passenger />
                </div>
                <div class="col-md-6 d-md-none m-2">
                    <b-button class="btn-block btn-lg bg-primary font-weight-bolder">
                        <em class="fa mr-2 fas fa-search"></em>
                        <strong>Search</strong>
                    </b-button>
                </div>
            </div>
        </div>
    </ContentWrapper>
</template>

<script>
    import CardReservation from "./CardReservation";
    import CardDestination from "./Partials/CardDestination";
    import CardPassenger from "./Partials/CardPassenger";
    import CardTrip from "./Partials/CardTrip";
    import CardDeposit from "./Partials/CardDeposit";
    import moment from 'moment'
    import Datepicker from 'vuejs-datepicker'
    export default {
        name: "CardReservationV1",
        data () {
            return {
                departureDate: moment().toDate(),
                returnDate: moment().toDate(),
            }
        },
        components : {
            CardReservation,
            CardPassenger,
            CardDestination,
            CardDeposit,
            CardTrip,
            Datepicker,
        }
    }
</script>

<style scoped>
</style>
