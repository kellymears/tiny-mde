<?php
/**
 * Plugin Name:     WP Markdown
 * Plugin URI:      https://github.com/pixelcollective/guten-down
 * Description:     Markdown editor for Gutenberg
 * Version:         0.1.0
 * Author:          Pixel Collective
 * Author URI:      https://tinypixel.io
 * License:         MIT License
 * Text Domain:     tiny-pixel
 * Domain Path:     /resources/lang
 */

namespace WPMarkdown;

$meta = [];

add_action(
    'init',
    function () use ($meta) {
        define(strToUpper('WPMD_DIRECTORY'), rtrim(plugin_dir_path(__FILE__), '/'));
        define(strToUpper('WPMD_BASENAME'), plugin_basename(__FILE__));
        define(strToUpper('WPMD_URL'), rtrim(plugin_dir_url(__FILE__), '/'));
    }
);

add_action(
    'enqueue_block_editor_assets', function () {
        wp_enqueue_script(
            'wpmd-js',
            WPMD_URL .'/dist/index.js',
            [
                'wp-element',
                'wp-i18n',
                'wp-api-request',
                'wp-data',
                'wp-hooks',
                'wp-components',
                'wp-blocks',
                'wp-editor',
                'wp-compose',
            ],
            '',
            null,
            true
        );

        wp_enqueue_style(
            'wpmd-block-public-css',
            WPMD_URL .'/dist/index.css',
            [],
            null
        );
    }
);

add_action(
    'wp_enqueue_scripts',
    function () {
        wp_enqueue_style(
            'wpmd-block-public-css',
            WPMD_URL .'/dist/index.css',
            [],
            null
        );
    }
);
