<template>
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
</template>

<script>
    export default {
        name: "CradTrip"
    }
</script>

<style scoped>

</style>
