$(function() {
  populate_food_list();
});

// Displays water information for food
function display_content(item) {
  var gallon_info = item.water_use.water_gallons;
  reset_content();
  $(".water-footprint .result .heading").html(item.food_name);

  var result;

  if (gallon_info) {
    if (gallon_info.per_lb) {
      var bulk_gallons_lbs = food_water_use("lb", gallon_info.per_lb, "gallons");
      $(".water-footprint .result .bulk-weight").html(bulk_gallons_lbs).addClass("primary");
    }

    if (gallon_info.per_gallon) {
      var bulk_gallons_gallons = food_water_use("gallon", gallon_info.per_gallon, "gallons");
      $(".water-footprint .result .bulk-volume").html(bulk_gallons_gallons).addClass("primary");
      $(".water-footprint .result .bulk-weight").removeClass("primary").addClass("secondary");
    }
  } else {
    $(".water-footprint .result .no-info").html("<p>No information available.</p>");
  }
}

// Populates list of foods inside input
function populate_food_list() {
  var food_names = [];

  $.each(foods, function (food, food_info) {
    if (food_info.water_use.water_gallons) {
      food_names.push({label: food_info.food_name, value: food});
    }
  });

  $(".choose-item").autocomplete({
    source: food_names,
    focus: function (event, ui) {
      $(".choose-item").val(ui.item.label);
      return false;
    },
    select: function (event, ui) {
      item = foods[ui.item.value];
      display_content(item);
      return false;
    }
  });
}

function reset_content() {
  $(".water-footprint .result .heading").html("");
  $(".water-footprint .result .bulk-volume").html("").removeClass("primary");
  $(".water-footprint .result .bulk-weight").html("").removeClass("primary secondary");
  $(".water-footprint .result .one-serving").html("");
}

// Displayed content per each food
function food_water_use(food_unit, water_amount, water_unit) {
  text = "<div class='bulk-readout'><p class='water-amount'>" + water_amount + " " + water_unit + " " + of_water + "</p><p>is used to produce " + 1 + " " + food_unit + "</p></div>";
  return text;
}

function serving_water_use(serving, serving_amount, serving_unit, water_amount, water_unit) {
  text = "<div class='serving-readout'><p>" + serving + " (" + serving_amount + " " + serving_unit + ")</p>" + "<p>" + water_amount + " " + water_unit + " " + of_water + "</p></div>";
  return text;
}
