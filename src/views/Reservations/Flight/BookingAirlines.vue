<template>
    <ContentWrapper>
        <code><pre>{{payload}}</pre></code>
        <code><pre>{{namaku}}</pre></code>
        <div class="form-group">
            <input v-model="nama_depan" class="form-control" type="text" placeholder="Nama Depan">
        </div>
        <div class="form-group">
            <input v-model="nama_tengah" class="form-control" type="text" placeholder="Nama Tengah">
        </div>
        <div class="form-group">
            <input v-model="nama_belakang" class="form-control" type="text" placeholder="Nama Belakang">
        </div>
        <div class="btn btn-primary" @click="sendData(payload)">SEND DATA</div>
    </ContentWrapper>
</template>
<script>
    import {ref, reactive} from "@vue/composition-api";
    export default {
        name: "BookingAirlinesV1",
        components:{},
        data(){
            return {
              namaku: ''
            }
        },
        setup()
        {
            const nama_depan = ref('')
            const nama_tengah = ref('')
            const nama_belakang = ref('')
            const payload = reactive({nama_lengkap: {}})
            payload.nama_lengkap = {
                first : nama_depan,
                mid : nama_tengah,
                last : nama_belakang
            }
            return {nama_depan, nama_tengah, nama_belakang, payload}
        },
        methods:{
            sendData(data)
            {
                console.log(data.nama_lengkap)
                this.namaku = data.nama_lengkap.first
            },
        },
    }
</script>
<style scoped>
</style>
