var foods = {
  "apple": {
    "food_name": "apple",
    "preferred_data": "water_gallons",
    "water_use": {
      "water_gallons": {
        "per_lb": 49,
      },
    },
  },

  // "apple_juice": {
  //   "food_name": "apple juice",
  //   "water_use": {
  //     "water_litres": {
  //       "per_litre": 1140,
  //       "per_serving": 230,
  //       "serving": {
  //         "description": "one glass of apple juice",
  //         "volume": {
  //           "ml": 230,
  //         }
  //       }
  //     }
  //   }
  // },

  // "avocado": {
  //   "food_name": "Avocado",
  //   "water_use": {
  //     "gallons": {
  //       "serving": "1 pound of avocados",
  //       "water": "154"
  //     }
  //   }
  // },

  // "banana": {
  //   "food_name": "banana",
  //   "water_use": {
  //     "gallons": {
  //       "serving": "1 pound of bananas",
  //       "water": "103"
  //     },
  //     "water_litres": {
  //       "per_kg": 790,
  //       "per_serving": 160,
  //       "serving": {
  //         "description": "one banana",
  //         "weight": {
  //           "g": 200,
  //         }
  //       }
  //     }
  //   }
  // },

  "beef": {
    "food_name": "beef",
    "preferred_data": "water_gallons",
    "water_use": {
      "water_gallons": {
        "per_lb": 5214,
      },
    },
  },

  // "beer": {
  //   "food_name": "beer",
  //   "water_use": {
  //     "water_litres": {
  //       "per_litre": 298,
  //       "per_serving": 74,
  //       "serving": {
  //         "description": "one glass of beer",
  //         "volume": {
  //           "ml": 250,
  //         }
  //       }
  //     }
  //   }
  // },

  // "black_tea": {
  //   "food_name": "black tea",
  //   "water_use": {
  //     "water_litres": {
  //       "per_kg": 8860,
  //       "per_litre": 108, // Calculated from serving
  //       "per_serving": 27,
  //       "serving": {
  //         "description": "one cup of black tea (steeped)",
  //         "volume": {
  //           "ml": 250,
  //         }
  //       }
  //     }
  //   }
  // },

  // "bread": {
  //   "food_name": "bread (from wheat)",
  //   "water_use": {
  //     "water_litres": {
  //       "per_kg": 1608,
  //     }
  //   }
  // },

  // "butter": {
  //   "food_name": "butter (from cow's milk)",
  //   "water_use": {
  //     "water_litres": {
  //       "per_kg": 5553
  //     }
  //   }
  // },

  // "cabbage": {
  //   "food_name": "cabbage",
  //   "water_use": {
  //     "water_litres": {
  //       "per_kg": 237
  //     }
  //   }
  // },

  "carrot": {
    "food_name": "carrots",
    "preferred_data": "water_gallons"
    "water_use": {
      "water_gallons": {
        "per_lb": 33
      }
    }
  },

  // ADD DATA
  "cheese": {
    "food_name": "cheese",
    "water_use": {
      "water_litres": {
        "per_kg": 3178
      }
    }
  },

  "chicken": {
    "food_name": "chicken",
    "preferred_data": "water_gallons",
    "water_use": {
      "water_gallons": {
        "per_lb": 815
      },
      "water_litres": {
        "per_kg": 4325
      }
    }
  },

  "chocolate": {
    "food_name": "chocolate",
    "water_use": {
      "water_litres": {
        "per_kg": 17196
      }
    }
  },

  "corn": {
    "food_name": "corn",
    "water_use": {
      "water_litres": {
        "per_kg": 1222
      }
    }
  },

  "cucumber": {
    "food_name": "cucumber",
    "water_use": {
      "water_litres": {
        "per_kg": 353
      }
    }
  },

  "dates": {
    "food_name": "dates",
    "water_use": {
      "water_litres": {
        "per_kg": 2277
      }
    }
  },

  "eggs": {
    "food_name": "eggs",
    "water_use": {
      "water_litres": {
        "per_kg": 3300,
        "per_serving": 196,
        "serving": {
          "description": "one egg",
          "weight": {
            "g": 60,
          }
        }
      }
    }
  },

  "goat": {
    "food_name": "goat (meat)",
    "water_use": {
      "water_litres": {
        "per_kg": 5521
      }
    }
  },

  "grapes": {
    "food_name": "grapes",
    "water_use": {
      "water_litres": {
        "per_kg": 610
      }
    }
  },

  "lettuce": {
    "food_name": "lettuce",
    "preferred_data": "water_gallons"
    "water_use": {
      "water_gallons": {
        "per_lb": 23
      },
      "water_litres": {
        "per_kg": 237
      }
    }
  },

  "milk": {
    "food_name": "milk (from cow)",
    "preferred_data": "water_gallons",
    "water_use": {
      "water_gallons": {
        "per_gallon": 1000,
      },
      "water_litres": {
        "per_kg": 1020,
        "per_litre": 1000, // Calculated from serving
        "per_serving": 255,
        "serving": {
          "description": "one glass of milk",
          "volume": {
            "ml": 250,
          }
        }
      }
    }
  },

  "orange": {
    "food_name": "orange",
    "water_use": {
      "water_litres": {
        "per_kg": 560
      }
    }
  },

  "orange_juice": {
    "food_name": "orange juice",
    "water_use": {
      "water_litres": {
        "per_litre": 1020,
        "per_serving": 200,
        "serving": {
          "description": "one glass of orange juice",
          "volume": {
            "ml": 200,
          }
        }
      }
    }
  },

  "pasta": {
    "food_name": "pasta (dry, from wheat)",
    "water_use": {
      "water_litres": {
        "per_kg": 1849
      }
    }
  },

  "peach": {
    "food_name": "peach or nectarine",
    "water_use": {
      "water_litres": {
        "per_kg": 910,
        "per_serving": 140,
        "serving": {
          "description": "one peach or nectarine",
          "weight": {
            "g": 150,
          }
        }
      }
    }
  },

  "pizza": {
    "food_name": "pizza (margherita)",
    "water_use": {
      "water_litres": {
        "per_kg": 1737, // Hand calculated
        "per_serving": 1259,
        "serving": {
          "description": "one pizza",
          "weight": {
            "g": 725,
          }
        }
      }
    }
  },

  "pork": {
    "food_name": "pork",
    "preferred_data": "water_gallons",
    "water_use": {
      "water_gallons": {
        "per_lb": 1630
      },
      "water_litres": {
        "per_kg": 5988,
      }
    }
  },

  "potato": {
    "food_name": "potato",
    "preferred_data": "water_gallons",
    "water_use": {
      "water_gallons": {
        "per_lb": 24
      },
      "water_litres": {
        "per_kg": 287,
      }
    }
  },

  "potato_chips": {
    "food_name": "potato chips",
    "water_use": {
      "water_litres": {
        "per_kg": 1040,
      }
    }
  },

  "rice": {
    "food_name": "rice (dry)",
    "water_use": {
      "water_litres": {
        "per_kg": 2497,
      }
    }
  },

  "sheep": {
    "food_name": "sheep (meat)",
    "water_use": {
      "water_litres": {
        "per_kg": 10412,
      }
    }
  },

  "sugar_beet": {
    "food_name": "sugar (from sugar beet)",
    "water_use": {
      "water_litres": {
        "per_kg": 920,
      }
    }
  },

  "sugar_beet": {
    "food_name": "sugar (from sugar cane)",
    "water_use": {
      "water_litres": {
        "per_kg": 1782,
      }
    }
  },

  "tomato": {
    "food_name": "tomato",
    "preferred_data": "water_gallons",
    "water_use": {
      "water_gallons": {
        "per_lb": 23
      }
      "water_litres": {
        "per_kg": 214,
        "per_serving": 50,
        "serving": {
          "description": "one tomato",
          "weight": {
            "g": 250,
          }
        }
      }
    }
  },

  "wheat": {
    "food_name": "wheat",
    "preferred_data": "water_gallons",
    "water_use": {
      "water_gallons": {
        "per_lb": 25
      }
    }
  }
}
