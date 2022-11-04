<template>
    <ContentWrapper>
        <div class="menu-icon">
            <div v-for="dataMenu in dataMenus" :key="dataMenu.text">
                <img :src="dataMenu.icon">
                <div><small>{{dataMenu.text}}</small></div>
            </div>
        </div>
    </ContentWrapper>
</template>

<script>
    export default {
        name: "MenuPayment",
        data () {
            return {
                dataMenus: [
                    { icon: "../../../../icons/ICN_PDAM.png", text: "PDAM" },
                    { icon: "../../../../icons/ICN_PLN.png", text: "PLN" },
                    { icon: "../../../../icons/ICN_PGN.png", text: "PGN" },
                    { icon: "../../../../icons/ICN_TELKOM.png", text: "Telkom" },
                    { icon: "../../../../icons/ICN_PASCA_BAYAR.png", text: "Pasca Bayar" },
                    { icon: "../../../../icons/ICN_ADIRA.png", text: "ADIRA" },
                    { icon: "../../../../icons/ICN_FIF.png", text: "FIF" },
                    { icon: "../../../../icons/ICN_WOM.png", text: "WOM" },
                    { icon: "../../../../icons/ICN_MCF.png", text: "MFC" },
                    { icon: "../../../../icons/ICN_MAF.png", text: "MAF" },
                    // { icon: "beenhere", text: "Status", route: "/status" },
                ],
            }
        }
    }
</script>

<style scoped>
</style>
