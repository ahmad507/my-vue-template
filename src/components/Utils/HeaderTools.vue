<template>
    <div class="row mt-2 my-2">
        <div class="col-12">
            <router-link :to="link" style="text-decoration: none">
                <a class="btn btn-circle">
                    <em class="fas fa-2x fa-home text-primary">
                    </em>
                </a>
                <small class="text-decoration-none text-primary">{{title}}</small>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            title : String,
            link: String
        },
        name: "BackButton"
    }
</script>

<style scoped>

</style>
