 <!-- 
 <template>
    <el-tree-select
      v-model="valueStrictly"
      :data="data"
      multiple
      :render-after-expand="false"
      show-checkbox
      :props="defaultProps"
      filterable
    />
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const valueStrictly = ref()

  interface Tree {
    valueStrictly: string
    label: string
    children?: Tree[]

//    valueStrictly: string,
//    label: string,
    // "parentCode": string,
    // "type": object,
    // "level": string,
    // "selectable": boolean,
}

const defaultProps = {
    children: 'children',
    // label: 'label',
    valueStrictly: 'code',
    label: 'name',
    // parentCode: 'parentCode',
    // type: 'type',
    // level: 'level',
    // selectable: 'selectable',
}

const data: Tree[] =
    [
        {
            "code": "1006717",
            "name": "重庆万象汇店",
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
                            "code": "1005435DB",
                            "name": "长租公寓东北",
                            "parentCode": "1005435",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1005435HX",
                            "name": "长租公寓华西",
                            "parentCode": "1005435",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1005435HZ",
                            "name": "长租公寓华中",
                            "parentCode": "1005435",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1005435ZB",
                            "name": "长租公寓总部",
                            "parentCode": "1005435",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1005435HD",
                            "name": "长租公寓华东",
                            "parentCode": "1005435",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
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
                    "children": [
                        {
                            "code": "1000822",
                            "name": "杭州片区公司",
                            "parentCode": "2000483",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1004066",
                            "name": "零号项目",
                            "parentCode": "2000483",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1001190",
                            "name": "南京片区公司",
                            "parentCode": "2000483",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000067",
                            "name": "上海片区公司",
                            "parentCode": "2000483",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1001026",
                            "name": "合肥片区公司",
                            "parentCode": "2000483",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000856",
                            "name": "宁波片区公司",
                            "parentCode": "2000483",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1001203",
                            "name": "苏州片区公司",
                            "parentCode": "2000483",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
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
                            "code": "1012381",
                            "name": "佛山公司",
                            "parentCode": "2000401",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000684",
                            "name": "福建公司",
                            "parentCode": "2000401",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
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
                {
                    "code": "2000481",
                    "name": "东北大区",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1006005",
                            "name": "呼和浩特公司",
                            "parentCode": "2000481",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000728",
                            "name": "大连公司",
                            "parentCode": "2000481",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000762",
                            "name": "沈阳公司",
                            "parentCode": "2000481",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "2000292",
                            "name": "长春公司",
                            "parentCode": "2000481",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                },
                {
                    "code": "2001050",
                    "name": "建设事业部",
                    "parentCode": "1000001",
                    "type": "SPECIAL",
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1001104",
                            "name": "装饰北方",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1007327",
                            "name": "东安湖体育公园公司",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "2000778",
                            "name": "家私业务单元",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1003152",
                            "name": "建筑西南分公司",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1003153",
                            "name": "建筑南方分公司",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1003151",
                            "name": "建筑华东分公司",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1001128",
                            "name": "装饰南方",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1003149",
                            "name": "建筑北方分公司",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1003148",
                            "name": "机电业务单元",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1004074",
                            "name": "西安体育会展平台公司",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1006046",
                            "name": "南方区域",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1006045",
                            "name": "西南区域",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1006044",
                            "name": "华东区域",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1006043",
                            "name": "北方区域",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1001148",
                            "name": "装饰华东",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "2001493",
                            "name": "装饰设计中心",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1001169",
                            "name": "装饰西南",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "2000984",
                            "name": "幕墙业务单元",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                },
                {
                    "code": "2000416",
                    "name": "华中大区",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1001066",
                            "name": "郑州公司",
                            "parentCode": "2000416",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000956",
                            "name": "武汉公司",
                            "parentCode": "2000416",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000998",
                            "name": "长沙片区公司",
                            "parentCode": "2000416",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": [
                                {
                                    "code": "2000160",
                                    "name": "南昌项目公司",
                                    "parentCode": "1000998",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                }
                            ]
                        }
                    ]
                },
                {
                    "code": "1005336",
                    "name": "文化体育公司",
                    "parentCode": "1000001",
                    "type": "SPECIAL",
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1020677",
                            "name": "成都东安湖体育公园",
                            "parentCode": "1005336",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1005422",
                            "name": "上海静安体育中心",
                            "parentCode": "1005336",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1005421",
                            "name": "深圳湾体育中心",
                            "parentCode": "1005336",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1007368",
                            "name": "深圳坪山文化中心",
                            "parentCode": "1005336",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                },
                {
                    "code": "1012908",
                    "name": "长租公寓事业部",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1012934",
                            "name": "广深业务部",
                            "parentCode": "1012908",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1012941",
                            "name": "成都业务部",
                            "parentCode": "1012908",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1012915",
                            "name": "北京业务部",
                            "parentCode": "1012908",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1012923",
                            "name": "上海业务部",
                            "parentCode": "1012908",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                },
                {
                    "code": "2000378",
                    "name": "华北大区",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1001078",
                            "name": "天津片区公司",
                            "parentCode": "2000378",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "2001580",
                            "name": "雄安新区专项工作小组",
                            "parentCode": "2000378",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1007929",
                            "name": "天津混改公司",
                            "parentCode": "2000378",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000925",
                            "name": "青岛片区公司",
                            "parentCode": "2000378",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1012395",
                            "name": "北京片区公司",
                            "parentCode": "2000378",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000915",
                            "name": "济南片区公司",
                            "parentCode": "2000378",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                },
                {
                    "code": "1000554",
                    "name": "置地总部",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": null
                },
                {
                    "code": "1010981",
                    "name": "华润万象生活",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1010982",
                            "name": "华润万象生活-总部",
                            "parentCode": "1010981",
                            "type": null,
                            "level": "40",
                            "selectable": true,
                            "children": [
                                {
                                    "code": "1020137",
                                    "name": "总部-影院管理部",
                                    "parentCode": "1010982",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": [
                                        {
                                            "code": "1020302",
                                            "name": "万影",
                                            "parentCode": "1020137",
                                            "type": null,
                                            "level": "70",
                                            "selectable": true,
                                            "children": [
                                                {
                                                    "code": "1007578",
                                                    "name": "坪山万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007570",
                                                    "name": "合肥万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007574",
                                                    "name": "临沂万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1015090",
                                                    "name": "南昌万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1019576",
                                                    "name": "东莞松山湖万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1014204",
                                                    "name": "沈阳皇姑万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012072",
                                                    "name": "汕头万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012076",
                                                    "name": "泰州万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012353",
                                                    "name": "大渡口万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012357",
                                                    "name": "深圳前海万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007590",
                                                    "name": "扬州万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007909",
                                                    "name": "龙岗万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1020820",
                                                    "name": "影院-万影-大连万象",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012080",
                                                    "name": "烟台万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012361",
                                                    "name": "贵阳万象汇万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012084",
                                                    "name": "西安曲江万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007582",
                                                    "name": "二十四城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012365",
                                                    "name": "兰州万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012088",
                                                    "name": "成都万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007586",
                                                    "name": "昆山万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012369",
                                                    "name": "南宁万象汇万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1011834",
                                                    "name": "宁波万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1011838",
                                                    "name": "南京江北万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1006727",
                                                    "name": "城阳万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1006722",
                                                    "name": "湾万万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007419",
                                                    "name": "深汕万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007099",
                                                    "name": "罗湖万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1013949",
                                                    "name": "武汉万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1006712",
                                                    "name": "太原万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1011491",
                                                    "name": "天津万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012068",
                                                    "name": "武汉江宸万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1011495",
                                                    "name": "北京丽泽万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1013953",
                                                    "name": "福州万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1014526",
                                                    "name": "青岛崂山万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1011499",
                                                    "name": "南昌万象汇万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1013957",
                                                    "name": "海口万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1005895",
                                                    "name": "萧山万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007435",
                                                    "name": "桂林万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1014570",
                                                    "name": "南京三山街万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007431",
                                                    "name": "哈尔滨万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1005890",
                                                    "name": "布吉万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1006737",
                                                    "name": "石家庄万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1006732",
                                                    "name": "厦门万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007427",
                                                    "name": "吴江万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1019992",
                                                    "name": "北京西三旗万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1010782",
                                                    "name": "沈阳长白万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1013414",
                                                    "name": "杭州万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1010786",
                                                    "name": "小径湾万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007423",
                                                    "name": "济南万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1013418",
                                                    "name": "合肥万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "code": "1011341",
                            "name": "华润万象生活-物业",
                            "parentCode": "1010981",
                            "type": null,
                            "level": "40",
                            "selectable": true,
                            "children": [
                                {
                                    "code": "1004210",
                                    "name": "物业成都公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004211",
                                    "name": "物业重庆公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "2001501",
                                    "name": "物业工程科技公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1015601",
                                    "name": "中南物业",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004207",
                                    "name": "物业南宁公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004208",
                                    "name": "物业沈阳公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004206",
                                    "name": "物业深圳公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004203",
                                    "name": "物业上海公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004204",
                                    "name": "物业南京公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004201",
                                    "name": "物业北京公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004202",
                                    "name": "物业济南公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004209",
                                    "name": "物业武汉公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1000405",
                                    "name": "物业经纪顾问公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1014854",
                                    "name": "禹洲物业",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                }
                            ]
                        },
                        {
                            "code": "1011340",
                            "name": "华润万象生活-商业",
                            "parentCode": "1010981",
                            "type": null,
                            "level": "40",
                            "selectable": true,
                            "children": [
                                {
                                    "code": "1003521",
                                    "name": "杭州万象城",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1005206",
                                    "name": "商业华中大区",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": [
                                        {
                                            "code": "1013762",
                                            "name": "南昌万象城",
                                            "parentCode": "1005206",
                                            "type": null,
                                            "level": "70",
                                            "selectable": true,
                                            "children": null
                                        }
                                    ]
                                },
                                {
                                    "code": "1005205",
                                    "name": "商业东北大区",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1005204",
                                    "name": "商业西北大区",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1005203",
                                    "name": "商业华南大区",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1005202",
                                    "name": "商业华东大区",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1019713",
                                    "name": "商业西南大区",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1005201",
                                    "name": "商业华北大区",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": [
                                        {
                                            "code": "1014797",
                                            "name": "西北旺万象汇",
                                            "parentCode": "1005201",
                                            "type": null,
                                            "level": "70",
                                            "selectable": true,
                                            "children": null
                                        },
                                        {
                                            "code": "1019538",
                                            "name": "济宁万象汇（筹）",
                                            "parentCode": "1005201",
                                            "type": null,
                                            "level": "70",
                                            "selectable": true,
                                            "children": null
                                        },
                                        {
                                            "code": "1014808",
                                            "name": "西三旗万象汇",
                                            "parentCode": "1005201",
                                            "type": null,
                                            "level": "70",
                                            "selectable": true,
                                            "children": null
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "code": "1004429",
                    "name": "影业公司",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "XN1005599",
                            "name": "影业公司-建设项目",
                            "parentCode": "1004429",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                },
                {
                    "code": "QCRTZH0",
                    "name": "润腾科技",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": null
                },
                {
                    "code": "1005344",
                    "name": "华润设计院",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": null
                },
                {
                    "code": "2000455",
                    "name": "华西大区",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "2000905",
                            "name": "西安片区公司",
                            "parentCode": "2000455",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1001269",
                            "name": "重庆片区公司",
                            "parentCode": "2000455",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000125",
                            "name": "成都片区公司",
                            "parentCode": "2000455",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": [
                                {
                                    "code": "1000157",
                                    "name": "绵阳项目公司",
                                    "parentCode": "1000125",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                }
                            ]
                        }
                    ]
                },
                {
                    "code": "1014581",
                    "name": "酒店事业部",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": null
                },
                {
                    "code": "1014582",
                    "name": "康养事业部",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": null
                },
                {
                    "code": "1012847",
                    "name": "深圳大区",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1012862",
                            "name": "南山片区",
                            "parentCode": "1012847",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1012863",
                            "name": "宝安片区",
                            "parentCode": "1012847",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1012860",
                            "name": "深南片区",
                            "parentCode": "1012847",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1012861",
                            "name": "深北片区",
                            "parentCode": "1012847",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1007556",
                            "name": "粤东公司",
                            "parentCode": "1012847",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1007543",
                            "name": "东莞公司",
                            "parentCode": "1012847",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                }
            ]
        },
        {
            "code": "1011912",
            "name": "厦门万象里",
            "parentCode": "1005578",
            "type": null,
            "level": "70",
            "selectable": true,
            "children": null
        }
    ]

  </script>
-->




<template>
    <treeselect 
    v-model="state.JCJGCity" 
    :multiple="true" 
    :options="state.cityTreeData" 
    :normalizer="state.normalizer"
    placeholder="默认所有"
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
                            "code": "1005435DB",
                            "name": "长租公寓东北",
                            "parentCode": "1005435",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1005435HX",
                            "name": "长租公寓华西",
                            "parentCode": "1005435",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1005435HZ",
                            "name": "长租公寓华中",
                            "parentCode": "1005435",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1005435ZB",
                            "name": "长租公寓总部",
                            "parentCode": "1005435",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1005435HD",
                            "name": "长租公寓华东",
                            "parentCode": "1005435",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
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
                    "children": [
                        {
                            "code": "1000822",
                            "name": "杭州片区公司",
                            "parentCode": "2000483",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1004066",
                            "name": "零号项目",
                            "parentCode": "2000483",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1001190",
                            "name": "南京片区公司",
                            "parentCode": "2000483",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000067",
                            "name": "上海片区公司",
                            "parentCode": "2000483",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1001026",
                            "name": "合肥片区公司",
                            "parentCode": "2000483",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000856",
                            "name": "宁波片区公司",
                            "parentCode": "2000483",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1001203",
                            "name": "苏州片区公司",
                            "parentCode": "2000483",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
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
                            "code": "1012381",
                            "name": "佛山公司",
                            "parentCode": "2000401",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000684",
                            "name": "福建公司",
                            "parentCode": "2000401",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
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
                {
                    "code": "2000481",
                    "name": "东北大区",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1006005",
                            "name": "呼和浩特公司",
                            "parentCode": "2000481",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000728",
                            "name": "大连公司",
                            "parentCode": "2000481",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000762",
                            "name": "沈阳公司",
                            "parentCode": "2000481",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "2000292",
                            "name": "长春公司",
                            "parentCode": "2000481",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                },
                {
                    "code": "2001050",
                    "name": "建设事业部",
                    "parentCode": "1000001",
                    "type": "SPECIAL",
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1001104",
                            "name": "装饰北方",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1007327",
                            "name": "东安湖体育公园公司",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "2000778",
                            "name": "家私业务单元",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1003152",
                            "name": "建筑西南分公司",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1003153",
                            "name": "建筑南方分公司",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1003151",
                            "name": "建筑华东分公司",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1001128",
                            "name": "装饰南方",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1003149",
                            "name": "建筑北方分公司",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1003148",
                            "name": "机电业务单元",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1004074",
                            "name": "西安体育会展平台公司",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1006046",
                            "name": "南方区域",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1006045",
                            "name": "西南区域",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1006044",
                            "name": "华东区域",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1006043",
                            "name": "北方区域",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1001148",
                            "name": "装饰华东",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "2001493",
                            "name": "装饰设计中心",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1001169",
                            "name": "装饰西南",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "2000984",
                            "name": "幕墙业务单元",
                            "parentCode": "2001050",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                },
                {
                    "code": "2000416",
                    "name": "华中大区",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1001066",
                            "name": "郑州公司",
                            "parentCode": "2000416",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000956",
                            "name": "武汉公司",
                            "parentCode": "2000416",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000998",
                            "name": "长沙片区公司",
                            "parentCode": "2000416",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": [
                                {
                                    "code": "2000160",
                                    "name": "南昌项目公司",
                                    "parentCode": "1000998",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                }
                            ]
                        }
                    ]
                },
                {
                    "code": "1005336",
                    "name": "文化体育公司",
                    "parentCode": "1000001",
                    "type": "SPECIAL",
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1020677",
                            "name": "成都东安湖体育公园",
                            "parentCode": "1005336",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1005422",
                            "name": "上海静安体育中心",
                            "parentCode": "1005336",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1005421",
                            "name": "深圳湾体育中心",
                            "parentCode": "1005336",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1007368",
                            "name": "深圳坪山文化中心",
                            "parentCode": "1005336",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                },
                {
                    "code": "1012908",
                    "name": "长租公寓事业部",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1012934",
                            "name": "广深业务部",
                            "parentCode": "1012908",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1012941",
                            "name": "成都业务部",
                            "parentCode": "1012908",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1012915",
                            "name": "北京业务部",
                            "parentCode": "1012908",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1012923",
                            "name": "上海业务部",
                            "parentCode": "1012908",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                },
                {
                    "code": "2000378",
                    "name": "华北大区",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1001078",
                            "name": "天津片区公司",
                            "parentCode": "2000378",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "2001580",
                            "name": "雄安新区专项工作小组",
                            "parentCode": "2000378",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1007929",
                            "name": "天津混改公司",
                            "parentCode": "2000378",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000925",
                            "name": "青岛片区公司",
                            "parentCode": "2000378",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1012395",
                            "name": "北京片区公司",
                            "parentCode": "2000378",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000915",
                            "name": "济南片区公司",
                            "parentCode": "2000378",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                },
                {
                    "code": "1000554",
                    "name": "置地总部",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": null
                },
                {
                    "code": "1010981",
                    "name": "华润万象生活",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1010982",
                            "name": "华润万象生活-总部",
                            "parentCode": "1010981",
                            "type": null,
                            "level": "40",
                            "selectable": true,
                            "children": [
                                {
                                    "code": "1020137",
                                    "name": "总部-影院管理部",
                                    "parentCode": "1010982",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": [
                                        {
                                            "code": "1020302",
                                            "name": "万影",
                                            "parentCode": "1020137",
                                            "type": null,
                                            "level": "70",
                                            "selectable": true,
                                            "children": [
                                                {
                                                    "code": "1007578",
                                                    "name": "坪山万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007570",
                                                    "name": "合肥万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007574",
                                                    "name": "临沂万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1015090",
                                                    "name": "南昌万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1019576",
                                                    "name": "东莞松山湖万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1014204",
                                                    "name": "沈阳皇姑万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012072",
                                                    "name": "汕头万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012076",
                                                    "name": "泰州万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012353",
                                                    "name": "大渡口万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012357",
                                                    "name": "深圳前海万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007590",
                                                    "name": "扬州万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007909",
                                                    "name": "龙岗万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1020820",
                                                    "name": "影院-万影-大连万象",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012080",
                                                    "name": "烟台万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012361",
                                                    "name": "贵阳万象汇万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012084",
                                                    "name": "西安曲江万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007582",
                                                    "name": "二十四城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012365",
                                                    "name": "兰州万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012088",
                                                    "name": "成都万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007586",
                                                    "name": "昆山万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012369",
                                                    "name": "南宁万象汇万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1011834",
                                                    "name": "宁波万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1011838",
                                                    "name": "南京江北万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1006727",
                                                    "name": "城阳万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1006722",
                                                    "name": "湾万万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007419",
                                                    "name": "深汕万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007099",
                                                    "name": "罗湖万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1013949",
                                                    "name": "武汉万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1006712",
                                                    "name": "太原万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1011491",
                                                    "name": "天津万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1012068",
                                                    "name": "武汉江宸万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1011495",
                                                    "name": "北京丽泽万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1013953",
                                                    "name": "福州万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1014526",
                                                    "name": "青岛崂山万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1011499",
                                                    "name": "南昌万象汇万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1013957",
                                                    "name": "海口万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1005895",
                                                    "name": "萧山万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007435",
                                                    "name": "桂林万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1014570",
                                                    "name": "南京三山街万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007431",
                                                    "name": "哈尔滨万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1005890",
                                                    "name": "布吉万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1006737",
                                                    "name": "石家庄万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1006732",
                                                    "name": "厦门万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007427",
                                                    "name": "吴江万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1019992",
                                                    "name": "北京西三旗万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1010782",
                                                    "name": "沈阳长白万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1013414",
                                                    "name": "杭州万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1010786",
                                                    "name": "小径湾万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1007423",
                                                    "name": "济南万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                },
                                                {
                                                    "code": "1013418",
                                                    "name": "合肥万象城万象影城",
                                                    "parentCode": "1020302",
                                                    "type": null,
                                                    "level": "70",
                                                    "selectable": true,
                                                    "children": null
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "code": "1011341",
                            "name": "华润万象生活-物业",
                            "parentCode": "1010981",
                            "type": null,
                            "level": "40",
                            "selectable": true,
                            "children": [
                                {
                                    "code": "1004210",
                                    "name": "物业成都公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004211",
                                    "name": "物业重庆公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "2001501",
                                    "name": "物业工程科技公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1015601",
                                    "name": "中南物业",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004207",
                                    "name": "物业南宁公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004208",
                                    "name": "物业沈阳公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004206",
                                    "name": "物业深圳公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004203",
                                    "name": "物业上海公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004204",
                                    "name": "物业南京公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004201",
                                    "name": "物业北京公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004202",
                                    "name": "物业济南公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1004209",
                                    "name": "物业武汉公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1000405",
                                    "name": "物业经纪顾问公司",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1014854",
                                    "name": "禹洲物业",
                                    "parentCode": "1011341",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                }
                            ]
                        },
                        {
                            "code": "1011340",
                            "name": "华润万象生活-商业",
                            "parentCode": "1010981",
                            "type": null,
                            "level": "40",
                            "selectable": true,
                            "children": [
                                {
                                    "code": "1003521",
                                    "name": "杭州万象城",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1005206",
                                    "name": "商业华中大区",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": [
                                        {
                                            "code": "1013762",
                                            "name": "南昌万象城",
                                            "parentCode": "1005206",
                                            "type": null,
                                            "level": "70",
                                            "selectable": true,
                                            "children": null
                                        }
                                    ]
                                },
                                {
                                    "code": "1005205",
                                    "name": "商业东北大区",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1005204",
                                    "name": "商业西北大区",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1005203",
                                    "name": "商业华南大区",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1005202",
                                    "name": "商业华东大区",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1019713",
                                    "name": "商业西南大区",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                },
                                {
                                    "code": "1005201",
                                    "name": "商业华北大区",
                                    "parentCode": "1011340",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": [
                                        {
                                            "code": "1014797",
                                            "name": "西北旺万象汇",
                                            "parentCode": "1005201",
                                            "type": null,
                                            "level": "70",
                                            "selectable": true,
                                            "children": null
                                        },
                                        {
                                            "code": "1019538",
                                            "name": "济宁万象汇（筹）",
                                            "parentCode": "1005201",
                                            "type": null,
                                            "level": "70",
                                            "selectable": true,
                                            "children": null
                                        },
                                        {
                                            "code": "1014808",
                                            "name": "西三旗万象汇",
                                            "parentCode": "1005201",
                                            "type": null,
                                            "level": "70",
                                            "selectable": true,
                                            "children": null
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "code": "1004429",
                    "name": "影业公司",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "XN1005599",
                            "name": "影业公司-建设项目",
                            "parentCode": "1004429",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                },
                {
                    "code": "QCRTZH0",
                    "name": "润腾科技",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": null
                },
                {
                    "code": "1005344",
                    "name": "华润设计院",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": null
                },
                {
                    "code": "2000455",
                    "name": "华西大区",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "2000905",
                            "name": "西安片区公司",
                            "parentCode": "2000455",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1001269",
                            "name": "重庆片区公司",
                            "parentCode": "2000455",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1000125",
                            "name": "成都片区公司",
                            "parentCode": "2000455",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": [
                                {
                                    "code": "1000157",
                                    "name": "绵阳项目公司",
                                    "parentCode": "1000125",
                                    "type": null,
                                    "level": "70",
                                    "selectable": true,
                                    "children": null
                                }
                            ]
                        }
                    ]
                },
                {
                    "code": "1014581",
                    "name": "酒店事业部",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": null
                },
                {
                    "code": "1014582",
                    "name": "康养事业部",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": null
                },
                {
                    "code": "1012847",
                    "name": "深圳大区",
                    "parentCode": "1000001",
                    "type": null,
                    "level": "40",
                    "selectable": true,
                    "children": [
                        {
                            "code": "1012862",
                            "name": "南山片区",
                            "parentCode": "1012847",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1012863",
                            "name": "宝安片区",
                            "parentCode": "1012847",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1012860",
                            "name": "深南片区",
                            "parentCode": "1012847",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1012861",
                            "name": "深北片区",
                            "parentCode": "1012847",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1007556",
                            "name": "粤东公司",
                            "parentCode": "1012847",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        },
                        {
                            "code": "1007543",
                            "name": "东莞公司",
                            "parentCode": "1012847",
                            "type": null,
                            "level": "70",
                            "selectable": true,
                            "children": null
                        }
                    ]
                }
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