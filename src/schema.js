const { __ } = wp.i18n

import Edit from './edit'
import { save } from './save'
import { MarkdownIcon } from './icon-md'

export const name = 'tinyblocks/markdown'

export const settings = {
  title: __('Markdown', 'tiny-pixel'),
  description: __('Express yourself', 'tiny-pixel'),
  category:    'common',
  keywords: [
    __('markdown',  'tiny-pixel'),
    __('Tiny Pixel', 'tiny-pixel'),
    __('code', 'tiny-pixel'),
  ],
  icon: {
    background: '#000',
    color:      '#fff',
    src:        <MarkdownIcon width={48} height={48} />,
  },
  edit: Edit,
  save,
  attributes: {
    markdownRendered: {
      type: 'string',
      source: 'html',
      selector: '.md__rendered',
    },
    markdownRaw: {
      type: 'string',
      source: 'text',
      selector: '.md__raw',
      default: '',
    },
  },
  supports: {
    align: [
      'full',
    ],
  },
}
