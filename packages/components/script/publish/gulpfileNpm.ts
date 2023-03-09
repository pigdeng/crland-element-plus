import { series } from 'gulp'
import { publishNpm } from './index'

export default series(async () => publishNpm('npm'))
