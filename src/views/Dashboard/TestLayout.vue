<template>
    <ContentWrapper>
        <header-tools link="/mainlayout" title="Home" />
        <div class="container-fluid p-2">
            <!----------------------------------------------------------------------------------------------------------------------------------------------->
            <div class="row row-cols-12 d-md-none d-lg-none d-xl-none bg-white shadow-sm rounded">
                <div class="col-5 p-1">
                    <div class="box-info p-0">
                        <section class="mb-2">
                            <div class="box-info-content rounded">
                                <em class="fas ml-2 mr-2 fa-user-alt text-primary"></em>
                                <small class="text-bold">Trading name</small>
                                <br>
                                <small class="ml-2 mr-2 text-bold text-center">Ahmad Rozak Travel</small>
                            </div>
                        </section>
                        <section class="mt-2">
                            <div class="box-info-content rounded">
                                <em class="fas ml-2 mr-2 fa-money-bill-alt text-primary"></em>
                                <small class="text-bold">Deposit</small>
                                <br>
                                <small class="ml-2 mr-2 text-bold text-center">Rp 2.500.000</small>
                            </div>
                        </section>
                        <section class="mt-2">
                            <div class="box-info-content rounded" @click="getUserTransaction">
                                <em class="fas ml-2 mr-2 fa-money-bill-alt text-primary"></em>
                                <small class="text-bold">Transaksi</small>
                                <br>
                                <small class="ml-2 mr-2 text-bold text-center">Klik & cek riwayat</small>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="col-2 text-center p-1 box-icon" @click="getTopUp">
                    <em class="text-primary text-center mt-1 mb-1 fas fa-2x fa-plus-square"></em>
                    <br>
                    <small class="text-bold">Isi Deposit</small>
                </div>
                <div class="col-2 text-center p-1 box-icon" @click="getUserProfile">
                    <em class="text-primary text-center mt-1 mb-1 fas fa-2x fa-user-circle"></em>
                    <br>
                    <small class="text-bold">Info Akun</small>
                </div>
                <div class="col-2 text-center p-1 box-icon" @click="getUserTransaction">
                    <em class="text-primary text-center mt-1 mb-1 fas fa-2x fa-list-alt"></em>
                    <br>
                    <small class="text-bold">Pesanan</small>
                </div>
            </div>
            <!----------------------------------------------------------------------------------------------------------------------------------------------->
            <div class="row row-cols-12 d-none d-md-flex col-md-7 bg-white shadow-sm rounded">
                <div class="col-5 p-1">
                    <div class="box-info p-0">
                        <section class="mb-2">
                            <div class="box-info-content rounded">
                                <em class="fas ml-2 mr-2 fa-user-alt text-primary"></em>
                                <small class="text-bold">Trading name</small>
                                <br>
                                <small class="ml-2 mr-2 text-bold text-center">Ahmad Rozak Travel</small>
                            </div>
                        </section>
                        <section class="mt-2">
                            <div class="box-info-content rounded">
                                <em class="fas ml-2 mr-2 fa-money-bill-alt text-primary"></em>
                                <small class="text-bold">Deposit</small>
                                <br>
                                <small class="ml-2 mr-2 text-bold text-center">Rp 2.500.000</small>
                            </div>
                        </section>
                        <section class="mt-2">
                            <div class="box-info-content rounded" @click="getUserTransaction">
                                <em class="fas ml-2 mr-2 fa-money-bill-alt text-primary"></em>
                                <small class="text-bold">Transaksi</small>
                                <br>
                                <small class="ml-2 mr-2 text-bold text-center">Klik & cek riwayat</small>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="col-2 text-center p-1 box-icon" @click="getTopUp">
                    <em class="text-primary text-center fas fa-plus-square"></em>
                    <br>
                    <small class="text-bold">Isi Deposit</small>
                </div>
                <div class="col-2 text-center p-1 box-icon" @click="getUserProfile">
                    <em class="text-primary text-center fas fa-user-circle"></em>
                    <br>
                    <small class="text-bold">Info Akun</small>
                </div>
                <div class="col-2 text-center p-1 box-icon" @click="getUserTransaction">
                    <em class="text-primary text-center fas fa-list-alt"></em>
                    <br>
                    <small class="text-bold">Pesanan</small>
                </div>
            </div>
            <div class="row mt-2">
                <div class="container-fluid border-top bg-white rounded-top">
                    <menu-reservation title="Reservasi Tiket"/>
                </div>
                <div class="container-fluid border-top bg-white">
                    <menu-payment title="Pembayaran & Tagihan"/>
                </div>
                <div class="container-fluid border-top bg-white rounded-bottom">
                    <menu-topup title="Topup"/>
                </div>
            </div>
        </div>
    </ContentWrapper>
</template>

<script>
    import HeaderTools from "../../components/Utils/HeaderTools";
    import MenuReservation from "../../components/Menus/Reservations/MenuReservation";
    import MenuPayment from "../../components/Menus/Payments/MenuPayment";
    import MenuTopup from "../../components/Menus/Topup/MenuTopup";
    export default {
        name: "TestLayout",
        components:{
            HeaderTools, MenuPayment, MenuTopup, MenuReservation
        },
        methods :{
            getTopUp(){
                alert('Request Top up')
            },
            getUserProfile(){
                alert('User Profile')
            },
            getUserTransaction(){
                alert('User Transaction Success Only')
            },
        }
    }
</script>

<style scoped>

</style>
