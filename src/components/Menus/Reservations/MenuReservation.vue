<template>
    <ContentWrapper>
        <div class="mb-2">
            <span><em class="fas fa-ticket-alt"></em></span>
            {{title}}
        </div>
        <div class="menu-icon mt-1">
            <div v-for="dataMenu in dataMenus" :key="dataMenu.text">
                <router-link :to="dataMenu.link" style="text-decoration: none">
                    <img :src="dataMenu.icon" alt="menu-icon.png" />
                    <br>
                    <small class="text-dark">{{dataMenu.text}}</small>
                </router-link>
            </div>
        </div>
    </ContentWrapper>
</template>
<script>
    export default {
        name: "MenuReservation",
        props :{
            title : String,
        },
        data () {
            return {
                dataMenus: [
                    { icon: "../../../../icons/ICN_FLIGHT.png", text: "Pesawat", link: '/bookingairlines' },
                    { icon: "../../../../icons/ICN_INT_FLIGHT.png", text: "International", link: '/bookinginternationalairlines' },
                    { icon: "../../../../icons/ICN_BUS.png", text: "Bus", link: '/bookingbus' },
                    { icon: "../../../../icons/ICN_TRAIN.png", text: "KAI", link: '/bookingkai' },
                    { icon: "../../../../icons/ICN_SHIP.png", text: "PELNI", link: '/bookingpelni' },
                    { icon: "../../../../icons/ICN_HOTEL.png", text: "Hotel", link: '/bookinghotel' },
                ],
            }
        }
    }
</script>

<style scoped>
</style>
