<template>
    <ContentWrapper>
        <header-tools link="/testlayout" title="Home"/>
        <div class="row">
            <header-payment product_title="Bayar Tagihan Gas" product_tag="Pembayaran Tagihan Gas"/>
        </div>
    </ContentWrapper>
</template>

<script>
    import HeaderTools from "../../../components/Utils/HeaderTools";
    import HeaderPayment from "../../../components/Utils/HeaderPayment";
    export default {
        name: "MultiPayment",
        components: {HeaderTools, HeaderPayment}
    }
</script>

<style scoped>

</style>
