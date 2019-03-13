let pathData = 'M950.154 192H73.846C33.127 192 0 225.12699999999995 0 265.846v492.308C0 798.875 33.127 832 73.846 832h876.308c40.721 0 73.846-33.125 73.846-73.846V265.846C1024 225.12699999999995 990.875 192 950.154 192zM576 703.875L448 704V512l-96 123.077L256 512v192H128V320h128l96 128 96-128 128-0.125V703.875zM767.091 735.875L608 512h96V320h128v192h96L767.091 735.875z'

const MarkdownIcon = ({ width, height }) => {
  return (
    <svg className={'dashicon dashicon-grid markdown-icon'} viewBox={'0 0 1024 1024'} width={width ? width: 48} height={height ? height : 48}>
      <g fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1">
        <path fill="currentColor" stroke="currentColor" strokeMiterlimit="10" d={pathData}></path>
      </g>
    </svg>
  )
}

export { MarkdownIcon }