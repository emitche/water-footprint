var preferred_units;
// preferred_units = "metric";
preferred_units = "us";

var base_unit = "litre";
var display_unit = "gallon";

// var units_label = measuring_units[units].label;

var L_TO_GAL = 0.264172052358;
var KG_TO_LB = 2.205;

$.each(foods, function(food, food_info) {
  if (food_info.water_use.water_litres) {
    $('.select-item-2').append(
      "<option class='item " + food + "' value='" + food + "'>"
      + food_info.food_name +
      "</option>"
    );
  }
});

function convert_to_us_units(n) {
  n = n * L_TO_GAL / KG_TO_LB;
  n = Math.round(n);
  return n;
}

function convert_litre_to_gallon(n) {
  n = n * L_TO_GAL;
  n = Math.round(n);
  return n;
}

function convert_kg_to_lb(n) {
  n = n / KG_TO_LB;
  n = Math.round(n);
  return n;
}

function process_units(units) {
  if (units == "us") {

  } else {

  }
}

function food_water_use(food_unit, water_amount, water_unit) {
  text = "<p>" + 1 + " " + food_unit + " = " + water_amount + " " + water_unit + " " + of_water + "</p>";
  return text;
}

function serving_water_use(serving, serving_amount, serving_unit, water_amount, water_unit) {
  text = "<p>" + serving + " (" + serving_amount + " " + serving_unit + ")</p>" + "<p>" + water_amount + " " + water_unit + " " + of_water + "</p>";
  return text;
}

// Display water use on user selection

$('.select-item-2').on('change', function (e) {
  var choices = this;
  var item_key = $(choices).val();
  console.log(item_key);

  var item = foods[item_key];
  var litre_info = item.water_use.water_litres;
  console.log(item);

  $(".result-2 .heading").html(item.food_name);

  var result;

  if (litre_info) {
    if (litre_info.per_kg) {
      console.log("bulk info available for " + item_key);
      var bulk = food_water_use("kg", litre_info.per_kg, "litres");
      var bulk_gallons_lbs = food_water_use("lb", convert_to_us_units(litre_info.per_kg), "gallons");

      $(".result-2 .bulk").html(bulk + bulk_gallons_lbs);
    }

    if (litre_info.per_serving) {
      console.log("serving info available for " + item_key);

      var serving = serving_water_use(litre_info.serving.description, litre_info.serving.weight.g, "grams", litre_info.per_serving, "litres");

      $(".result-2 .one-serving").html(serving);
    }

  } else {
    $(".result-2 .no-info").html("<p>No information available.</p>");
  }
});