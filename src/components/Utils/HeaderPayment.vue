<template>
    <div class="container-fluid">
        <div class="col">
            <div class="col-12 container-fluid ">
                <div class="content-heading">
                    <div>{{product_title}}
                        <small class="mt-2">{{product_tag}}</small>
                    </div>
                </div>
            </div>
            <div class="col-12 container-fluid mt-n4">
                <div class="card text-black-50 border-primary box-info-regulation">
                    <div class="card-body p-1 ">
                        <div class="card-text ml-2 mr-2">
                            <strong>Keterangan</strong>
                            <p class="mt-1">1. Pembayaran Tagihan gas dapat dilakukan setelah tanggal 5 setiap bulannya</p>
                            <p class="mt-n2">2. Total tagihan yang tertera sudah termasuk denda (bila ada)</p>
                            <p class="mt-n2">3. Biaya admin adalah Rp 2500.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderPayment",
        props : {
            product_title : String,
            product_tag: String
        }
    }
</script>

<style scoped>

</style>
