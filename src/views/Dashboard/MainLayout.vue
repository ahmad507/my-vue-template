<template>
    <ContentWrapper>
        <HomeMenu></HomeMenu>
    </ContentWrapper>
</template>

<script>
    import HomeMenu from "../../components/Menus/HomeMenu";
    export default {
        name: "MainLayout",
        components : {
            HomeMenu
        }
    }
</script>

<style scoped>

</style>
