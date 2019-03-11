const { registerBlockType } = wp.blocks;
import css from 'astroturf'

const styles = css`
  .bold {
    font-weight: bold;
    font-family: sans-serif;
  }
`

registerBlockType("wp-js-plugin-starter/hello-world", {
  title: "Hello World",
  description: "Just another Hello World block",
  icon: "admin-site",
  category: "common",

  edit: function() {
    return <p className={styles.bold}>Hello Editor!</p>;
  },

  save: function() {
    return <p className={styles.bold}>Hello Frontend</p>;
  }
});