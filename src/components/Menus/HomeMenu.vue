<template>
    <div>
        <section>
            <div class="menu-container">
                <em class="fa mr-3 fas fa-ticket-alt"></em>
                <strong>Reservasi</strong>
                <MenuReservation />
            </div>
        </section>
        <section>
            <div class="menu-container">
                <em class="fa mr-3 fas fa-money-bill-alt"></em>
                <strong>Pembayaran</strong>
                <MenuPayment/>
            </div>
        </section>
        <section>
            <div class="menu-container">
                <em class="fa mr-3 fas fa-arrow-alt-circle-up"></em>
                <strong>Top-Up</strong>
                <MenuTopup/>
            </div>
        </section>
        <section>
            <div class="menu-container">
<!--                <em class="fa mr-3 fas fa-bed"></em>-->
<!--                <strong>Hotel & Accomodation</strong>-->
            </div>
        </section>
    </div>
</template>

<script>
    import MenuReservation from "./Reservations/MenuReservation";
    import MenuPayment from "./Payments/MenuPayment";
    import MenuTopup from "./Topup/MenuTopup";
    export default {
        components : {
            MenuReservation,
            MenuPayment,
            MenuTopup
        },
        name: "HomeMenu"
    }
</script>

<style scoped>
</style>
