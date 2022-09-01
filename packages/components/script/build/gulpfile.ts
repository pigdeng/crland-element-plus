import { series, parallel } from 'gulp'
import { removeDist, buildStyle, buildComponent, buildImg } from './index'


export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildImg(),
    async () => buildComponent()
  )
)

