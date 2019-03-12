<?php
/**
 * Plugin Name:     Tiny MDE
 * Plugin URI:      https://github.com/pixelcollective/tiny-mde
 * Description:     Markdown editor for Gutenberg
 * Version:         0.1.0
 * Author:          Pixel Collective
 * Author URI:      https://tinypixel.io
 * License:         MIT License
 * Text Domain:     tiny-pixel
 * Domain Path:     /resources/lang
 **/

add_action(
    'init', function () {
        wp_register_script(
            'tinyblocks-tiny-mde-js',
            plugin_dir_url(__FILE__) .'dist/block.js',
            [
                'wp-element',
                'wp-i18n',
                'wp-blocks',
            ],
            '',
            null,
            true
        );
        wp_register_style(
            'tinyblocks-tiny-mde-public-css',
            plugin_dir_url(__FILE__) .'dist/block.css',
            [],
            null
        );
        register_block_type(
            'tinyblocks/markdown', [
                'editor_script' => 'tinyblocks-tiny-mde-js',
                'editor_style'  => 'tinyblocks-tiny-mde-public-css',
                'style'         => 'tinyblocks-tiny-mde-public-css',
            ]
        );
    }
);
