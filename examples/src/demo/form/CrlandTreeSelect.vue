<template>
    <treeselect 
    v-model="state.JCJGCity" 
    :multiple="true" 
    :options="state.cityTreeData" 
    :normalizer="state.normalizer"
    placeholder="默认所有"
    :limit="3"
    :limitText="count => `...`"
     style="width: 50%;">
    </treeselect>
</template>
<script lang="ts" setup>
import Treeselect from 'vue3-treeselect'
import 'vue3-treeselect/dist/vue3-treeselect.css'
import './style/CrlandTreeSelect.scss'
import {ref ,reactive} from "vue"

const state = reactive({
    cityTreeData:  [
        {
            "code": "1006717",
            "name": "华润怡宝",
            "parentCode": "1005578",
            "type": null,
            "level": "70",
            "selectable": true,
            "children": null
        },
        {
            "code": "1000001",
            "name": "华润置地",
            "parentCode": " ",
            "type": null,
            "level": "10",
            "selectable": true,
            "children": [
                {
                    "code": "1005435",
                    "name": "长租公寓大区",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1005435HB",
                            "name": "长租公寓华北",
                            "parentCode": "1005435",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1005435HN",
                            "name": "长租公寓华南",
                            "parentCode": "1005435",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                },
                {
                    "code": "2000483",
                    "name": "华东大区",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": null
                },
                {
                    "code": "2000401",
                    "name": "华南大区",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1003705",
                            "name": "广西公司",
                            "parentCode": "2000401",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1003704",
                            "name": "海南公司",
                            "parentCode": "2000401",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "2000159",
                            "name": "广州公司",
                            "parentCode": "2000401",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                },
            ]
        },
        {
            "code": "1011912",
            "name": "华润电力",
            "parentCode": "1005578",
            "type": null,
            "level": "70",
            "selectable": true,
            "children": null
        }
    ],
    JCJGCity:null,
    normalizer(node){       
        if (node.childList && !node.childList.length) {   //去掉childList=[]的情况
            delete node.childList;
        }
        return {
            id: node.code,    //字段名的替换
            label: node.name,
            children: node.children
        }
    },
})
</script>
<style scoped>
</style> 