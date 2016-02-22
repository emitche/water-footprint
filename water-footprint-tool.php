<?php
/**
 * @package Water_Footprint
 * @version 1.0
 */
/*
Plugin Name: Water Footprint
Plugin URI: http://github.com/emitche/water-footprint
Description: A simple tool and WordPress plugin to display the water footprint of specific foods.
Author: Elizabeth Mitchell
Version: 1.0
Author URI: http://github.com/emitche
*/

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

function water_footprint_tool_shortcode() {
    return load_water_footprint_tool();
}

function water_footprint_tool_register_shortcode() {
    add_shortcode( 'water-footprint-tool',
      'water_footprint_tool_shortcode' );

    add_shortcode( 'water-footprint',
      'water_footprint_tool_shortcode' );
}

add_action( 'init', 'water_footprint_tool_register_shortcode' );

function load_water_footprint_tool(){
  ob_start();
  include('wordpress/tool.php');
  return ob_get_clean();
}

?>
