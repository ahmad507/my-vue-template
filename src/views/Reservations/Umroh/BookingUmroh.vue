<template>
    <ContentWrapper>
        <div class="container-fluid bg-white rounded p-md-5">
            <umroh-card :all-umroh="allUmroh" paket-title="Paket Rekomendasi"/>
            <umroh-card :all-umroh="allUmroh" paket-title="Paket Hemat"/>
            <umroh-card :all-umroh="allUmroh" paket-title="Paket Promo"/>
            <umroh-card :all-umroh="allUmroh" paket-title="Paket Umroh & Tour"/>
        </div>
    </ContentWrapper>
</template>
<script>
    import UmrohCard from "../../../components/Common/Umroh/UmrohCard";
    import HeaderTools from "../../../components/Utils/HeaderTools";
    import ContentWrapper from "../../../components/Layout/ContentWrapper";
    import useUmroh from "../../../api/useUmroh";
    export default {
        name: "BookingUmroh",
        components: {ContentWrapper, HeaderTools, UmrohCard},
        setup(){
            const  {allUmroh:dataUmroh, dataError} = useUmroh();
            return {allUmroh:dataUmroh, dataError};
        },
    }
</script>

<style scoped>
</style>
