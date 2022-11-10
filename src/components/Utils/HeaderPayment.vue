<template>
    <div class="container-fluid">
        <div class="col">
            <div class="col-12 green_border">A</div>
            <div class="col-12 red_border">B</div>
        </div>
<!--        <div class="row">-->
<!--            <div class="content-heading">-->
<!--                <div class="red_border">{{product_title}}-->
<!--                    <small class="mt-2">{{product_tag}}</small>-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="card text-white bg-success mb-3">-->
<!--                <div class="card-header">Header</div>-->
<!--                <div class="card-body">-->
<!--                    <h5 class="card-title">Success card title</h5>-->
<!--                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>-->
<!--                </div>-->
<!--            </div>-->

<!--        </div>-->
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
