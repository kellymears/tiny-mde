import styled, { css } from 'astroturf'
import ReactMde from 'react-mde'
import 'react-mde/lib/styles/css/react-mde-all'

export const StyledReactMde = styled(ReactMde)`
  background: rgba(0, 0, 0, 0.05);

  :global(.mde-header button svg) {
    width: 15px;
    height: 15px;
    min-height: 15px;
    max-height: 15px;
    max-width: 15px;
    min-width: 15px;
    margin-right: 15px;
    fill: rgba(0, 0, 0, 0.7);
  }

  :global(.md__raw),
  :global(.md__render_pane),
  :global(.md__rendered),
  :global(.mde-header .mde-tabs) {
    display: none;
  }
`

export const visibility = css`
  .hidden {
    display: none;
  }
`