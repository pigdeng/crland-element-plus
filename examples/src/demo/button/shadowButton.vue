<script lang="ts" setup>
    import { CrlandButton } from 'bui-element-plus';
</script>

<template>

    <crland-button shadow  size="large" >crland-btn</crland-button>
    <crland-button shadow  >crland-btn</crland-button>
    <crland-button shadow  size="small">crland-btn</crland-button>

    <br/><br/>

    <crland-button shadow type="primary"  size="large" >crland-btn</crland-button>
    <crland-button shadow type="primary"  >crland-btn</crland-button>
    <crland-button shadow type="primary"  size="small">crland-btn</crland-button>

    <br/><br/>

    <crland-button type="success" :shadow="true" size="large" >crland-btn</crland-button>
    <crland-button type="success" :shadow="true" >crland-btn</crland-button>
    <crland-button type="success" :shadow="true" size="small">crland-btn</crland-button>
    <br/><br/>

    <crland-button type="info" :shadow="true" size="large" >crland-btn</crland-button>
    <crland-button type="info" :shadow="true" >crland-btn</crland-button>
    <crland-button type="info" :shadow="true" size="small">crland-btn</crland-button>
    <br/><br/>

    <crland-button type="warning" :shadow="true" size="large" >crland-btn</crland-button>
    <crland-button type="warning" :shadow="true" >crland-btn</crland-button>
    <crland-button type="warning" :shadow="true" size="small">crland-btn</crland-button>
    <br/><br/>

    <crland-button type="danger" :shadow="true" size="large" >crland-btn</crland-button>
    <crland-button type="danger" :shadow="true" >crland-btn</crland-button>
    <crland-button type="danger" :shadow="true" size="small">crland-btn</crland-button>
</template>
