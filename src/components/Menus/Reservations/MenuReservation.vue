<template>
    <ContentWrapper>
            <div class="menu-icon">
                <div v-for="dataMenu in dataMenus" :key="dataMenu.text">
                    <router-link :to="dataMenu.link" style="text-decoration: none">
                        <img :src="dataMenu.icon">
                        <div><small>{{dataMenu.text}}</small></div>
                    </router-link>
                </div>
            </div>
    </ContentWrapper>
</template>
<script>
    export default {
        name: "MenuReservation",
        data () {
            return {
                dataMenus: [
                    { icon: "../../../../icons/ICN_FLIGHT.png", text: "Pesawat", link: '/bookingairlines' },
                    { icon: "../../../../icons/ICN_INT_FLIGHT.png", text: "International", link: '/bookinginternationalairlines' },
                    { icon: "../../../../icons/ICN_BUS.png", text: "Bus", link: '/bookingbus' },
                    { icon: "../../../../icons/ICN_TRAIN.png", text: "KAI", link: '/bookingkai' },
                    { icon: "../../../../icons/ICN_SHIP.png", text: "PELNI", link: '/bookingpelni' },
                    { icon: "../../../../icons/ICN_HOTEL.png", text: "Hotel", link: '/bookinghotel' },
                    // { icon: "beenhere", text: "Status", route: "/status" },
                ],
            }
        }
    }
</script>

<style scoped>
</style>
