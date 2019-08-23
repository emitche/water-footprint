<?php $url = plugins_url(); ?>

<link rel="stylesheet" type="text/css"
  href="<?php echo $url ?>/water-footprint-wp/css/water-footprint.css" />
<link rel="stylesheet" type="text/css"
  href="<?php echo $url ?>/water-footprint-wp/css/got-drought.css" />
<script src="<?php echo $url ?>/water-footprint-wp/vendor/jquery/jquery-1.11.3.min.js"></script>
<link rel="stylesheet" type="text/css" href="<?php echo $url ?>/water-footprint-wp/vendor/jquery-ui/jquery-ui.min.css" />
<link rel="stylesheet" type="text/css" href="<?php echo $url ?>/water-footprint-wp/vendor/jquery-ui/jquery-ui.structure.min.css" />
<link rel="stylesheet" type="text/css" href="<?php echo $url ?>/water-footprint-wp/vendor/jquery-ui/jquery-ui.theme.min.css" />
<script src="<?php echo $url ?>/water-footprint-wp/vendor/jquery-ui-autocomplete/jquery-ui.min.js"></script>
<script src="<?php echo $url ?>/water-footprint-wp/js/got-drought/foods.js"></script>
<script src="<?php echo $url ?>/water-footprint-wp/js/units.js"></script>

<section class="water-footprint" id="water-footprint-tool">
  <header>
    <h1>How thirsty is your food?</h1>
    <p class="instructions">Select an item below to display the amount of water used to produce the food.</p>
  </header>

  <input class="choose-item" value="" />

  <section class="result">
    <h1 class="heading"></h1>
    <div class="bulk-volume">
    </div>
    <div class="bulk-weight">
    </div>
    <div class="one-serving">
    </div>
    <div class="no-info">
    </div>
  </section>
</section>

<script src="<?php echo $url ?>/water-footprint-wp/js/got-drought/calculator.js"></script>
