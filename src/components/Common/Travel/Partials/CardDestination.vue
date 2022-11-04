<template>
    <ContentWrapper>
        <div class="mb-2">
            <div class="search_border row">
                <div class="col-2 search_border_001 p-1">
                    <em class="fas fa-w-2 fa-plane-departure ml-1"></em>
                    <div class="m-auto">From</div>
                </div>
                <div class="col-10 p-0 m-0 border-0 search_box">
                    <multiselect v-model="origin" :options="options" :custom-label="nameWithLang" :multiple="false" :close-on-select="true"
                            :clear-on-select="false"
                            :hide-selected="false"
                            track-by="name"
                            label="name"
                            :preserve-search="true"
                            placeholder="Origin"/>
                </div>
            </div>
        </div>
        <div class="mb-2">
            <div class="search_border row">
                <div class="col-2 search_border_001 p-1">
                    <em class="fas fa-w-2 fa-plane-arrival ml-1"></em>
                    <div class="m-auto">To</div>
                </div>
                    <div class="col-10 p-0 m-0 border-0 search_box">
                        <multiselect v-model="destination" :options="options" :custom-label="nameWithLang" :multiple="false" :close-on-select="true"
                                :clear-on-select="false"
                                :hide-selected="false"
                                track-by="name"
                                label="name"
                                :preserve-search="true"
                                placeholder="Origin"/>
                    </div>
                </div>
            </div>
    </ContentWrapper>
</template>
<script>
    import Multiselect from 'vue-multiselect'
    export default {
        name: "CardDestination",
        components: {
            Multiselect,
        },
        data () {
            return {
                origin: { name: 'CGK', language: 'Jakarta, Soetta Int. Airport' },
                destination: { name: 'DPS', language: 'Denpasr, I Gusti Ngurah Rai' },
                options: [
                    { name: 'DPS', language: 'Denpasr' },
                    { name: 'CGK', language: 'Jakarta' },
                    { name: 'KNO', language: 'Medan' },
                    { name: 'AMQ', language: 'Ambon' },
                    { name: 'PLM', language: 'Palembang' }
                ],
            }
        },
        methods: {
            nameWithLang ({ name, language }) {
                return `${name} — [${language}]`
            },
        }
    }
</script>
<style scoped>

</style>
