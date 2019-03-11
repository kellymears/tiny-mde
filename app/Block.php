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
 *
 * Note: this file is intentionally written for compatibility with PHP versions
 * which the plugin itself does not support.
 */

namespace Markdown;

class Block
{
    public $name;
    public $namespace;
    protected $dependencies;
    public $front_scripts_dir;

    public function __construct($namespace, $name)
    {
        $this->name = $name;
        $this->namespace = $namespace;
        $this->dependencies = [
            'wp-element',
            'wp-i18n',
            'wp-api-request',
            'wp-data',
            'wp-hooks',
            'wp-components',
            'wp-blocks',
            'wp-editor',
            'wp-compose',
        ];

        $this->addBlock();
    }

    public function addBlock()
    {
        add_action('enqueue_block_editor_assets', function () {
            $this->addEditorScript();
            $this->addPublicScript();
        });
    }

    public function register()
    {
        register_block_type(
            $this->namespace .'/'. $this->name,
            [
                'editor_script' => $this->name .'-editor-js',
                'editor_style'  => $this->name .'-editor-css',
            ]
        );
    }

    public function addEditorScript()
    {
        wp_enqueue_script(
            $this->name .'-editor-js',
            app('kaneda')->url .'/dist/editor/blocks/'. $this->name .'.js',
            $this->dependencies,
            '',
            null,
            true
        );
    }

    public function addPublicScript()
    {
        if (file_exists(app('kaneda')->url .'/dist/frontend/blocks/'. $this->name .'.js')) :
            wp_enqueue_script(
                $this->name .'-frontend-js',
                app('kaneda')->url .'/dist/frontend/blocks/'. $this->name .'.js',
                $this->dependencies,
                '',
                null,
                true
            );
        endif;
    }
}
