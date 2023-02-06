<template>
    <section class="match-height mt-2 mb-2">
        <!----------------------------------------------------------------------------------------------------------------------------------------->
        <div class="p-2"><h4>{{paketTitle}}</h4></div> <!--COMPONENT 1-->
        <!----------------------------------------------------------------------------------------------------------------------------------------->
        <swiper class="wiper-centered-slides" :options="swiperOptions">
            <swiper-slide v-for="(data,index) in allUmroh" :key="index">
                <div class="card shadow-sm rounded-lg rounded-bottom">
                    <div class="rounded-lg">
                        <img :src="data.paketumroh_title_img" class="rounded-lg img-fluid"/>
                    </div>
                    <div class="col-12 rounded-lg  text-black-500 mt-1">
                        <div class="card-title text-truncate">{{data.paketumroh_title}}</div>
                        <!----------------------------------------------------------------------------------------------------------------------------------------->
                        <div class="row d-flex align-items-center justify-content-between">
                            <div class="col-3"><em class="fas fa-calendar-alt"></em></div>
                            <div class="col-9">
                                <div class="card-subtitle">31-Jan-2023</div>
                            </div>
                        </div>
                        <!----------------------------------------------------------------------------------------------------------------------------------------->
                        <div class="row d-flex align-items-center justify-content-between">
                            <div class="col-3"><em class="fas fa-map-marker-alt"></em></div>
                            <div class="col-9">
                                <div class="card-text">{{data.paketumroh_departure.toUpperCase()}}</div>
                            </div>
                        </div>
                        <!----------------------------------------------------------------------------------------------------------------------------------------->
                        <div class="row d-flex align-items-center justify-content-between">
                            <div class="col-3"><em class="fas fa-plane-departure"></em></div>
                            <div class="col-9">
                                <div class="card-text">Lion Air</div>
                            </div>
                        </div>
                        <!----------------------------------------------------------------------------------------------------------------------------------------->
                        <div class="card-text text-danger">Quad : Rp 31.250.300</div>
                        <div class="row mt-1">
                            <div class="col-6 btn-link mb-2">Details</div>
                            <div class="col-6 btn-link mb-2">Select</div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <div slot="button-next" class="swiper-button-next"><div class="btn-sm"></div></div>
            <div slot="button-prev" class="swiper-button-prev">Prev</div>
        </swiper>
    </section>
</template>
<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    export default {
        name: "UmrohCard",
        components:{
            Swiper,
            SwiperSlide,
        },
        props:{
            allUmroh:{},
            paketTitle: String
        },
        data(){
            return{
                swiperOptions: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    centeredSlides: true,
                    initialSlide: 3,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                            initialSlide: 3,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                            initialSlide: 3,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            initialSlide: 3,
                        },
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            initialSlide: 3,
                        },
                    },
                },
            }
        },
    }
</script>
<style src="swiper/css/swiper.css"></style>
<style scoped>
    .swiper-button-next::after, .swiper-button-prev::after {
        content: "";
    }
    img{
        height: 175px;
        width: 100%;
        object-fit: cover;
    }
</style>
