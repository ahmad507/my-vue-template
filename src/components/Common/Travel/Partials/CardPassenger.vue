<template>
    <ContentWrapper>
        <div class="row">
            <div class="col-4">
                <div class="row">
                    <div class="col-4 search_border_002 p-1">
                        <em class="fas fa-w-2 fa-male ml-1"></em>
                        <div class="m-auto">Adult</div>
                    </div>
                    <div class="col-7 p-0 mr-1 border-0 search_box">
                        <multiselect
                                v-model="adult"
                                :options="adult_count"
                                :multiple="false"
                                :close-on-select="true"
                                :clear-on-select="false"
                                :hide-selected="false"
                                :preserve-search="true"
                                track-by="qty"
                                label="qty"
                                placeholder="Adult"/>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="row">
                    <div class="col-4 search_border_002 p-1">
                        <em class="fas fa-w-2 fa-child ml-1"></em>
                        <div class="m-auto">Child</div>
                    </div>
                    <div class="col-7 p-0 mr-1 border-0 search_box">
                        <multiselect
                                v-model="child"
                                :options="child_count"
                                :multiple="false"
                                :close-on-select="true"
                                :clear-on-select="false"
                                :hide-selected="false"
                                :preserve-search="true"
                                track-by="qty"
                                label="qty"
                                placeholder="Child"/>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="row">
                    <div class="col-4 search_border_002 p-1">
                        <em class="fas fa-w-2 fa-baby ml-1"></em>
                        <div class="m-auto">Infant</div>
                    </div>
                    <div class="col-7 p-0 mr-1 border-0 search_box">
                        <multiselect
                                v-model="infant"
                                :options="infant_count"
                                :multiple="false"
                                :close-on-select="true"
                                :clear-on-select="false"
                                :hide-selected="false"
                                :preserve-search="true"
                                track-by="qty"
                                label="qty"
                                placeholder="Infant"/>
                    </div>
                </div>
            </div>
        </div>
    </ContentWrapper>
</template>
<script>
    import Multiselect from 'vue-multiselect'
    export default {
        name: "CardPassenger",
        components: {
            Multiselect,
        },
        data () {
            return {
                adult: { qty : 1 },
                child: { qty : 0 },
                infant: { qty : 0 },
                adult_count : [{qty : 1}, {qty : 2}, {qty : 3}, {qty : 4}, {qty : 5}, {qty : 6}, {qty : 7}, {qty : 8}, {qty : 9}],
                child_count : [{qty : 1}, {qty : 2}, {qty : 3}, {qty : 4}, {qty : 5}],
                infant_count : [{qty : 1}, {qty : 2}],
            }
        },
    }
</script>

<style scoped>

</style>
