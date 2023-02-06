<template>
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
        <div class="mb-2">
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
</template>

<script>
    import Datepicker from 'vue2-datepicker'
    import moment from 'moment'
    import 'vue2-datepicker/index.css'
    export default {
        data() {
            return {
                departureDate: moment().toDate(),
                returnDate: moment().toDate(),
            }
        },
        name: "CardDatePicker",
        components: {Datepicker},
        methods: {
            disabledBeforeToday(date) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < new Date(today.getTime());
            },
        }
    }
</script>

<style scoped>

</style>
