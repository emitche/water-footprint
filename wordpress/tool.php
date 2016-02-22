<?php $url = plugins_url(); ?>

<link rel="stylesheet" type="text/css" href="<?php echo $url ?>/water-footprint/css/water-footprint.css" />
<link rel="stylesheet" type="text/css" href="<?php echo $url ?>/water-footprint/css/water-footprint-theme.css" />
<link rel="stylesheet" type="text/css" href="<?php echo $url ?>/water-footprint/css/got-drought.css" />

<!-- jQuery -->
<script src="<?php echo $url ?>/water-footprint/vendor/jquery/jquery-1.11.3.min.js"></script>

<link rel="stylesheet" type="text/css" href="<?php echo $url ?>/water-footprint/vendor/jquery-ui/jquery-ui.min.css" />
<link rel="stylesheet" type="text/css" href="<?php echo $url ?>/water-footprint/vendor/jquery-ui/jquery-ui.structure.min.css" />
<link rel="stylesheet" type="text/css" href="<?php echo $url ?>/water-footprint/vendor/jquery-ui/jquery-ui.theme.min.css" />

<script src="<?php echo $url ?>/water-footprint/vendor/jquery-ui-autocomplete/jquery-ui.min.js"></script>

<!-- Got Drough Data Set and Calculations -->
<script src="<?php echo $url ?>/water-footprint/js/got-drought/gd_foods.js"></script>
<script src="<?php echo $url ?>/water-footprint/js/units.js"></script>
<script src="<?php echo $url ?>/water-footprint/js/got-drought/gd_calculator.js"></script>

<section class="water-footprint">
  <header>
    <h1>How thirsty is your food?</h1>
    <p class="instructions">Type the name of a food to display the amount of water used to produce the food.</p>
  </header>

  <input name="choose-food" class="choose-item" value="" aria-label="Type Name of Food" />

  <div class="additonal-instructions">
    <h3>Instructions</h2>
    <ol>
      <li>
        Begin by typing the name of a food. As you type, a list of foods matching will appear.
      </li>
      <li>Select the food.
        <ul>
          <li>
            Click or touch the food for which you would like water data displayed.
          </li>
          <li>
            On a keyboard, use the up and down arrows to access the matching foods. Hit "Enter" when are ready to select an item.
          </li>
        </ul>
      </li>
      <li>
        Once you have clicked or touched the food or hit "Enter", the food you selected will be displayed below.
      </li>
    </ol>
  </div>

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

<script src="<?php echo $url ?>/water-footprint/js/got-drought/gd_calculator.js"></script>
