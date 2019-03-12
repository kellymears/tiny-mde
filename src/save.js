const { RawHTML } = wp.element
import { visibility } from './styled'

export const save = ({
  attributes: {
    markdownRaw,
    markdownRendered,
   },
}) => {
  return (
      <div className='md__editor'>
        <div className='md__rendered'>
          <RawHTML>
            { markdownRendered }
          </RawHTML>
        </div>
        <div className={visibility.hidden}>
          <div className={`md__raw`}>
              { markdownRaw }
          </div>
        </div>
      </div>
  )
}