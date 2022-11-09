<template>
    <el-tree ref="treeRef" :data="data" show-checkbox  node-key="code" highlight-current
        :props="defaultProps" />
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { ElTree } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'

interface Tree {
    children?: Tree[]
    "label": string,
}

const defaultProps = {
    children: 'children',
    label: 'name',
}

const data: Tree[] =[
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
    ]
    
</script>
  