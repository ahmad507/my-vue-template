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
        name: "MenuTopup",
        data () {
            return {
                dataMenus: [
                    { icon: "../../../../icons/ICN_GOPAY.png", text: "Gopay" },
                    { icon: "../../../../icons/ICN_GOPAY_DRIVER.png", text: "Gopay Driver" },
                    { icon: "../../../../icons/ICN_OVO.png", text: "OVO" },
                    { icon: "../../../../icons/ICN_MANDIRI.png", text: "Mandiri" },
                    { icon: "../../../../icons/ICN_GAMES.png", text: "Games" },
                    { icon: "../../../../icons/ICN_TOKEN_LISTRIK.png", text: "Token Listrik" },
                    { icon: "../../../../icons/ICN_PAKET_DATA.png", text: "Paket Data" },
                    { icon: "../../../../icons/ICN_PULSA.png", text: "Pulsa" },
                    // { icon: "beenhere", text: "Status", route: "/status" },
                ],
            }
        }
    }
</script>

<style scoped>
</style>
