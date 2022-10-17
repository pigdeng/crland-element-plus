<template>{{ route.meta.title }}</template>
<script lang="ts" setup>
import { useRouter, useRoute, RouterLink } from "vue-router";
const router: any = useRouter();
const route: any = useRoute();
</script>
<style lang="scss" scoped></style>
