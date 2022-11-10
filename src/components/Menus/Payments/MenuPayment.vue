<template>
    <ContentWrapper>
        <div class="mb-2">
            <span><em class="fas fa-money-bill-alt"></em></span>
            {{title}}
        </div>
        <div class="menu-icon mt-1">
            <div v-for="dataMenu in dataMenus" :key="dataMenu.text">
                <router-link :to="dataMenu.link" style="text-decoration: none">
                    <img :src="dataMenu.icon" alt="logo-pembayaran.png" />
                    <div><small>{{dataMenu.text}}</small></div>
                </router-link>
            </div>
        </div>
    </ContentWrapper>
</template>

<script>
    export default {
        name: "MenuPayment",
        props :{
            title : String,
        },
        data () {
            return {
                dataMenus: [
                    { icon: "../../../../icons/ICN_PDAM.png", text: "PDAM", link: '/ordermultipayment' },
                    { icon: "../../../../icons/ICN_PLN.png", text: "PLN", link: '/ordermultipayment' },
                    { icon: "../../../../icons/ICN_PGN.png", text: "PGN", link: '/ordermultipayment' },
                    { icon: "../../../../icons/ICN_TELKOM.png", text: "Telkom", link: '/ordermultipayment' },
                    { icon: "../../../../icons/ICN_PASCA_BAYAR.png", text: "Pasca Bayar", link: '/ordermultipayment' },
                    { icon: "../../../../icons/ICN_ADIRA.png", text: "ADIRA", link: '/ordermultifinance' },
                    { icon: "../../../../icons/ICN_FIF.png", text: "FIF", link: '/ordermultifinance' },
                    { icon: "../../../../icons/ICN_WOM.png", text: "WOM", link: '/ordermultifinance' },
                    { icon: "../../../../icons/ICN_MCF.png", text: "MFC", link: '/ordermultifinance' },
                    { icon: "../../../../icons/ICN_MAF.png", text: "MAF", link: '/ordermultifinance' },
                    // { icon: "beenhere", text: "Status", route: "/status" },
                ],
            }
        }
    }
</script>

<style scoped>
</style>
