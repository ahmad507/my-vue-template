<template>
    <ContentWrapper>
        <div class="row">
            <div class="col-12 col-md-8 col-lg-12 col-xl-12">
                <div class="card rounded shadows mt-1 mb-2 bg-white" v-for="(matrix_row, index) in dataMatrix">
                    <!--                    <code>{{matrix_row}}</code>-->
                    <div class="card-body">
                        <div v-if="matrix_row.length > 1" v-for="(row_1) in matrix_row" :key="row_1.id">
                            <small><em class="fas fa-w-2 fa-plane-departure"></em></small>
                            <hr>
                            <div class="row">
                                <div class="col-12 cyan_border">
                                    <strong class="d-flex text-uppercase">Route : {{row_1.flight_route}} {{row_1.flight_operating}}</strong>
                                    <strong class="d-flex text-uppercase">Time : {{row_1.flight_time}}</strong>
                                    <strong class="d-flex text-uppercase">Duration : {{row_1.flight_duration}}</strong>
                                    <strong class="d-flex text-uppercase">Direction : {{row_1.flight_info}}</strong>
                                    <strong class="d-flex text-uppercase">Class Avail : </strong>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div v-if="matrix_row.length === 1" v-for="row_1 in matrix_row" :key="row_1.id">
                            <small><em class="fas fa-w-2 fa-plane-departure"></em></small>
                            <hr>
                            <div class="row">
                                <div class="col-12 cyan_border">
                                    <strong class="d-flex text-uppercase">Route : {{row_1.flight_route}} {{row_1.flight_operating}}</strong>
                                    <strong class="d-flex text-uppercase">Time : {{row_1.flight_time}}</strong>
                                    <strong class="d-flex text-uppercase">Duration : {{row_1.flight_duration}}</strong>
                                    <strong class="d-flex text-uppercase">Direction : {{row_1.flight_info}}</strong>
                                    <strong class="d-flex text-uppercase">Class Avail : </strong>
                                </div>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ContentWrapper>
</template>

<script>
    import moment from 'moment';
    export default {
        name: "FlightMatrix",
        props: {
            dataMatrix : {}
        },
        methods:{
            flightTimeFormat(data_value){
                return moment(data_value).format('LT')
            },
            flightDateFormat(data_value){
                return moment(data_value).format('DD-MM-YYYY')
            },
            numberFormat (data_value){
                return data_value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            },
        }
    }
</script>

<style scoped>

</style>




<!--            <div class="col-12 card-body shadow-sm shadow-sm box-info-regulation-info rounded mt-3 mb-1" v-for="schedule_matrix_ref in dataMatrix.schedule_row" :key="schedule_matrix_ref.id">-->
<!--                <div class="card-text blue_border bg-white rounded">-->
<!--                    {{schedule_matrix_ref.Operating}}-->
<!--                    <br>-->
<!--                    Flight Date : {{flightDateFormat(schedule_matrix_ref.Departure.Dep_Time)}} to {{flightDateFormat(schedule_matrix_ref.Arrival.Arr_Time)}}-->
<!--                    <br>-->
<!--                    Flight at : {{flightTimeFormat(schedule_matrix_ref.Departure.Dep_Time)}} to {{flightTimeFormat(schedule_matrix_ref.Arrival.Arr_Time)}}-->
<!--                    <br>-->
<!--                    Flight route : {{schedule_matrix_ref.Departure.Dep_IATA}} - {{schedule_matrix_ref.Arrival.Arr_IATA}}-->
<!--                    <br>-->
<!--                    Seat Avail  : {{schedule_matrix_ref.ClassAvail}}-->
<!--                    <br>-->
<!--                    Flight duration : {{schedule_matrix_ref.Duration}}-->
<!--                    <div class="row card-body" v-for="fare_matrix_ref in dataMatrix.fare_row" :key="fare_matrix_ref.id">-->
<!--                        <div class="col-6 card-text red_border">-->
<!--                            Fare Code : {{fare_matrix_ref.FareBasisCodes}}-->
<!--                            <br>-->
<!--                            Class : {{fare_matrix_ref.ResBookDesigCode}}-->
<!--                            <br>-->
<!--                            Price : Rp {{numberFormat(fare_matrix_ref.TotalFare)}} / Pax (Include Tax)-->
<!--                            <br>-->
<!--                            Cabin :{{fare_matrix_ref.ClassSeat}}</div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
