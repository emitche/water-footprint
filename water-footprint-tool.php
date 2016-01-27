<?php
/**
 * @package Water_Footprint
 * @version 0.2
 */
/*
Plugin Name: Water Footprint
Plugin URI: http://github.com/emitche/water-footprint-wp/
Description: A simple plugin to display the water footprint of specific foods.
Author: Elizabeth Mitchell
Version: 0.2
Author URI: http://github.com/emitche
*/

# defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

function water_footprint_shortcode() {
    return load_water_footprint();
}

function water_footprint_register_shortcode() {
    add_shortcode( 'water-footprint', 'water_footprint_shortcode' );
}

add_action( 'init', 'water_footprint_register_shortcode' );

function load_water_footprint(){
  ob_start();
  include('wordpress/tool.php');
  return ob_get_clean();
}

?>
