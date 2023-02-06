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
                    { icon: "../../../../icons/ICN_PDAM.png", text: "PDAM", link: '/orderpdam' },
                    { icon: "../../../../icons/ICN_PLN.png", text: "PLN", link: '/orderpln' },
                    { icon: "../../../../icons/ICN_PGN.png", text: "PGN", link: '/orderpgn' },
                    { icon: "../../../../icons/ICN_TELKOM.png", text: "Telkom", link: '/ordertelkom' },
                    { icon: "../../../../icons/ICN_PASCA_BAYAR.png", text: "Pasca Bayar", link: '/orderpascabayar' },
                    { icon: "../../../../icons/ICN_ADIRA.png", text: "ADIRA", link: '/orderadira' },
                    { icon: "../../../../icons/ICN_FIF.png", text: "FIF", link: '/orderfif' },
                    { icon: "../../../../icons/ICN_WOM.png", text: "WOM", link: '/order' },
                    { icon: "../../../../icons/ICN_MCF.png", text: "MFC", link: '/order' },
                    { icon: "../../../../icons/ICN_MAF.png", text: "MAF", link: '/order' },
                    // { icon: "beenhere", text: "Status", route: "/status" },
                ],
            }
        }
    }
</script>

<style scoped>
</style>
