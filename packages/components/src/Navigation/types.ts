
import { ExtractPropTypes } from 'vue'


export const DefaultActive = ['name', 'path']


export const propsData = {

  defaultActive: {
    type: String,
    default: 'name',
    validator(value: string) {
      return DefaultActive.includes(value)
    },
  },
  //   菜单数据
  menuData: {
    type: [Array, Object],
    default: () => ([]),
  }
}

export type propsData = ExtractPropTypes<typeof propsData>


