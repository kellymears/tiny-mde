const { Component, RawHTML } = wp.element
import * as Showdown from 'showdown'
import { StyledReactMde, visibility } from './styled'
class Edit extends Component {
  constructor() {
    super(...arguments)

    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true,
      ghMentions: true,
    })

    this.state = {
      tab: '',
      value: '',
      markdownRendered: '',
    }

    this.handleRender = this.handleRender.bind(this)
    this.handleTabChange = this.handleTabChange.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      tab: 'write',
      value: this.props.attributes.markdownRaw,
    })
  }

  handleTabChange(tab) {
    this.setState({ tab })
  }

  handleRender(markdown) {
    return this.converter.makeHtml(markdown)
  }

  handleValueChange(value) {
    this.props.setAttributes({
      markdownRaw: value,
      markdownRendered: this.converter.makeHtml(value),
    })
    this.setState({
      value,
      markdownRendered: this.converter.makeHtml(value),
    })
  }

  render() {
    const {
      className,
      attributes,
    } = this.props

    return (
      <div>
          <StyledReactMde
            onChange={this.handleValueChange}
            onTabChange={this.handleTabChange}
            value={attributes.markdownRaw}
            selectedTab={this.state.tab}
            generateMarkdownPreview={markdown => Promise.resolve(this.converter.makeHtml(markdown))}
          />
        <div className={`md__render_pane ${visibility.hidden}`}>
          <RawHTML>{ attributes.markdownRendered }</RawHTML>
        </div>
        <div className={`md__rendered ${visibility.hidden}`}>
          <RawHTML>{ attributes.markdownRendered }</RawHTML>
        </div>
        <div className={`md__raw ${visibility.hidden}`}>
          { attributes.markdownRaw }
        </div>
      </div>
    )
  }
}

export default Edit
