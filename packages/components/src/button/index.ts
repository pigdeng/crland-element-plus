import { withInstall } from 'crland-utils'

import button from './button.vue'
import crlandButton from './CrlandButton.vue'


export const Button = withInstall(button)
export const CrlandButton = withInstall(crlandButton)


// export default  ()=>{
//   return {Button,CrlandButton}
// }
