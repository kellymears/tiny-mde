import { name, settings } from './schema'
const { registerBlockType } = wp.blocks

registerBlockType(name, settings)
