import React from "react";
import ReactDOM from "react-dom/client";

const restoList = [
  {
    type: "restaurant",
    info: {
      resId: 20598223,
      name: "ZYTHUM Brewing Co.",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/20598223/a67b4025b919f4ea9dfa27e90d979c83_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/3/20598223/a67b4025b919f4ea9dfa27e90d979c83_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/20598223/69cd0228be8c677454f9e12c6541b006_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,106",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.5",
            reviewCount: "1,070",
            reviewTextSmall: "1,070 Reviews",
            subtext: "1,070 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.5",
            reviewCount: "36",
            reviewTextSmall: "36 Reviews",
            subtext: "36 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.5",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,500 for two",
      },
      cfo: {
        text: "₹1,000 for one",
      },
      locality: {
        name: "Jubilee Hills, Hyderabad",
        address:
          "74 A, Park View Enclave, Check Post Road, Jubilee Hills, Hyderabad",
        localityUrl: "hyderabad/jubilee-hills-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA3M1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/grilled-chicken/",
          name: "Grilled Chicken",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pasta/",
          name: "Pasta",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,500 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/hyderabad/zythum-brewing-co-jubilee-hills/info",
      clickActionDeeplink: "",
    },
    distance: "9.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"afcc786a-430b-4cbc-a751-0bb3b575ba2e","location_type":"delivery_cell","location_id":"4308704762854899712","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20598223","element_type":"listing","rank":10}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/hyderabad/zythum-brewing-co-jubilee-hills/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19797553,
      name: "AnTeRa Kitchen And Bar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/19797553/c398782475e8bc2f829915819a1b79f0_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/3/19797553/c398782475e8bc2f829915819a1b79f0_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/19797553/f940fdc6c86036f1327d2936c3deafe3_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "6,299",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.4",
            reviewCount: "4,152",
            reviewTextSmall: "4,152 Reviews",
            subtext: "4,152 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.4",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "2,147",
            reviewTextSmall: "2,147 Reviews",
            subtext: "2,147 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,600 for two",
      },
      cfo: {
        text: "₹650 for one",
      },
      locality: {
        name: "Jubilee Hills, Hyderabad",
        address: "Plot 265, G/A, Road 10, Jubilee Hills, Hyderabad",
        localityUrl: "hyderabad/jubilee-hills-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,600 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/hyderabad/antera-kitchen-and-bar-jubilee-hills/info",
      clickActionDeeplink: "",
    },
    distance: "10.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"afcc786a-430b-4cbc-a751-0bb3b575ba2e","location_type":"delivery_cell","location_id":"4308704762854899712","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19797553","element_type":"listing","rank":11}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/hyderabad/antera-kitchen-and-bar-jubilee-hills/book",
      },
      {
        type: "chain_cta",
        text: "View all outlets",
        clickUrl: "/hyderabad/restaurants/antera-kitchen-and-bar?category=2",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20165957,
      name: "Authentic Belgian Waffles",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/19825617/df14857d7497bb3518319defcc0b5d68_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/7/19825617/df14857d7497bb3518319defcc0b5d68_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/19825617/6329e2811cbc5c893d8cc5ae91f8f681_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "0",
        rating_text: "-",
        rating_subtitle: "Not rated",
        rating_color: "CBCBCB",
        votes: "2",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "2",
            reviewTextSmall: "2 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Sangareddy, Hyderabad",
        address:
          "House 4-7-3/2/A/B/B, Plot 32, Survey 374/1, Near Tara College, Sangareddy, Hyderabad",
        localityUrl: "hyderabad/sangareddy-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2N1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/waffle/",
          name: "Waffle",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2OFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pancake/",
          name: "Pancake",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹300 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/hyderabad/authentic-belgian-waffles-sangareddy-hyderabad/info",
      clickActionDeeplink: "",
    },
    distance: "49.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"afcc786a-430b-4cbc-a751-0bb3b575ba2e","location_type":"delivery_cell","location_id":"4308704762854899712","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20165957","element_type":"listing","rank":12}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20037678,
      name: "Onegolf Brewery",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/20037678/dc575d1e6e17458b0f0679f95b4f617a_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/8/20037678/dc575d1e6e17458b0f0679f95b4f617a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/20037678/dfc14b95d5cbb01be2bb7634a49c969d_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.5",
        rating_text: "4.5",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "1,481",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.5",
            reviewCount: "1,481",
            reviewTextSmall: "1,481 Reviews",
            subtext: "1,481 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,500 for two",
      },
      cfo: {
        text: "₹1,000 for one",
      },
      locality: {
        name: "Gachibowli, Hyderabad",
        address: "237 & 251, Vattinagulapally, Narsingi, Gachibowli, Hyderabad",
        localityUrl: "hyderabad/gachibowli-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,500 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/hyderabad/onegolf-brewery-gachibowli/info",
      clickActionDeeplink: "",
    },
    distance: "16.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"afcc786a-430b-4cbc-a751-0bb3b575ba2e","location_type":"delivery_cell","location_id":"4308704762854899712","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20037678","element_type":"listing","rank":13}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/hyderabad/onegolf-brewery-gachibowli/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19982534,
      name: "Makau",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/19982534/b10325b554ab79c19207b13639e9894c_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/4/19982534/b10325b554ab79c19207b13639e9894c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: false,
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,383",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: {
          text: "Newly Opened",
          color: "#FFFFFF",
          bgColor: "#F4A266",
          bgColorV2: {
            type: "green",
            tint: "100",
          },
          subtitle: "OUTLET",
          ratingV2: "New",
        },
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "1,381",
            reviewTextSmall: "1,381 Reviews",
            subtext: "1,381 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "2",
            reviewTextSmall: "2 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: true,
          },
        },
      },
      cft: {
        text: "₹2,500 for two",
      },
      cfo: {
        text: "₹1,000 for one",
      },
      locality: {
        name: "Road 36, Jubilee Hills, Hyderabad",
        address:
          "Plot 732, 8-2-293/82/A/732, CBI Colony, Road 36, Jubilee Hills, Hyderabad",
        localityUrl: "hyderabad/restaurants/in/road-36-jubilee-hills",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/thai/",
          name: "Thai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/mediterranean/",
          name: "Mediterranean",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/modern-indian/",
          name: "Modern Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/oriental/",
          name: "Oriental",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,500 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/hyderabad/makau-jubilee-hills/info",
      clickActionDeeplink: "",
    },
    distance: "11.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"afcc786a-430b-4cbc-a751-0bb3b575ba2e","location_type":"delivery_cell","location_id":"4308704762854899712","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19982534","element_type":"listing","rank":14}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/hyderabad/makau-jubilee-hills/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20758702,
      name: "The Glass House",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/20758702/7af227ea35906ec471248b0773960a80_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/2/20758702/7af227ea35906ec471248b0773960a80_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/20758702/c389dff7766928e8e43acb0f346dc862_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "381",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "369",
            reviewTextSmall: "369 Reviews",
            subtext: "369 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "12",
            reviewTextSmall: "12 Reviews",
            subtext: "12 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,000 for two",
      },
      cfo: {
        text: "₹800 for one",
      },
      locality: {
        name: "Jubilee Hills, Hyderabad",
        address:
          "403/1, Door 8-2-293/82/A/1059, Plot 1059, Road 53, Jubilee Hills, Hyderabad",
        localityUrl: "hyderabad/jubilee-hills-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/modern-indian/",
          name: "Modern Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/cafes/",
          name: "Cafe",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/coffee/",
          name: "Coffee",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,000 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/hyderabad/the-glass-house-jubilee-hills/info",
      clickActionDeeplink: "",
    },
    distance: "10.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"afcc786a-430b-4cbc-a751-0bb3b575ba2e","location_type":"delivery_cell","location_id":"4308704762854899712","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20758702","element_type":"listing","rank":15}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/hyderabad/the-glass-house-jubilee-hills/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20857068,
      name: "Chirp",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/20857068/dfe26cbca1c7cd62127a083b732803cc_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/8/20857068/dfe26cbca1c7cd62127a083b732803cc_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: false,
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "473",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "473",
            reviewTextSmall: "473 Reviews",
            subtext: "473 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,000 for two",
      },
      cfo: {
        text: "₹400 for one",
      },
      locality: {
        name: "SLN Terminus, Gachibowli, Hyderabad",
        address: "2nd Floor, SLN Terminus Indira Nagar, Gachibowli, Hyderabad",
        localityUrl: "hyderabad/restaurants/in/sln-terminus-gachibowli",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/modern-indian/",
          name: "Modern Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/sushi/",
          name: "Sushi",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,000 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/hyderabad/chirp-gachibowli/info",
      clickActionDeeplink: "",
    },
    distance: "15.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"afcc786a-430b-4cbc-a751-0bb3b575ba2e","location_type":"delivery_cell","location_id":"4308704762854899712","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20857068","element_type":"listing","rank":16}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/hyderabad/chirp-gachibowli/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20788521,
      name: "Burma Burma - Hitech City",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/20788521/9f94abf1aaa1a5bdbbe56f0b4d0e1283_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/1/20788521/9f94abf1aaa1a5bdbbe56f0b4d0e1283_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/20788521/f9f8ec8326dd396095600acedc624aed_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "142",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.5",
            reviewCount: "93",
            reviewTextSmall: "93 Reviews",
            subtext: "93 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "49",
            reviewTextSmall: "49 Reviews",
            subtext: "49 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,800 for two",
      },
      cfo: {
        text: "₹750 for one",
      },
      locality: {
        name: "Hitech City, Hyderabad",
        address:
          "Shop CD-01-02, Survey 83/1, Ground Floor, Octave Block, Hitech City, Hyderabad",
        localityUrl: "hyderabad/hitech-city-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/burmese/",
          name: "Burmese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/salad/",
          name: "Salad",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjQ3XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/bubble-tea/",
          name: "Bubble Tea",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/tea/",
          name: "Tea",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,800 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/hyderabad/burma-burma-hitech-city-hitech-city/info",
      clickActionDeeplink: "",
    },
    distance: "12.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"afcc786a-430b-4cbc-a751-0bb3b575ba2e","location_type":"delivery_cell","location_id":"4308704762854899712","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20788521","element_type":"listing","rank":17}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18221507,
      name: "Air Live",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/18221507/bf91aa5a3c1105283a58a072341050c1_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/7/18221507/bf91aa5a3c1105283a58a072341050c1_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/18221507/b65cc0d86d8b8f8f26197b9a4e70a35e_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "3,283",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "3,272",
            reviewTextSmall: "3,272 Reviews",
            subtext: "3,272 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "11",
            reviewTextSmall: "11 Reviews",
            subtext: "11 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹3,500 for two",
      },
      cfo: {
        text: "₹1,400 for one",
      },
      locality: {
        name: "Road 36, Jubilee Hills, Hyderabad",
        address: "5th Floor, Odyssey Mall, Road 36, Jubilee Hills, Hyderabad",
        localityUrl: "hyderabad/restaurants/in/road-36-jubilee-hills",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/bar-food/",
          name: "Bar Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹3,500 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/hyderabad/air-live-jubilee-hills/info",
      clickActionDeeplink: "",
    },
    distance: "10 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"afcc786a-430b-4cbc-a751-0bb3b575ba2e","location_type":"delivery_cell","location_id":"4308704762854899712","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18221507","element_type":"listing","rank":18}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/hyderabad/air-live-jubilee-hills/book",
      },
      {
        type: "chain_cta",
        text: "View all outlets",
        clickUrl: "/hyderabad/restaurants/air-live?category=2",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18487737,
      name: "36 Downtown Brew Pub",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/18487737/9721e25633b2b043c301f7f64faafe72_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/7/18487737/9721e25633b2b043c301f7f64faafe72_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: false,
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "6,088",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "6,088",
            reviewTextSmall: "6,088 Reviews",
            subtext: "6,088 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹3,000 for two",
      },
      cfo: {
        text: "₹1,200 for one",
      },
      locality: {
        name: "Road 36, Jubilee Hills, Hyderabad",
        address: "Plot 753, Road 36, Jubilee Hills, Hyderabad",
        localityUrl: "hyderabad/restaurants/in/road-36-jubilee-hills",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/hyderabadi/",
          name: "Hyderabadi",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcxXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/finger-food/",
          name: "Finger Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹3,000 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/hyderabad/36-downtown-brew-pub-jubilee-hills/info",
      clickActionDeeplink: "",
    },
    distance: "11.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"afcc786a-430b-4cbc-a751-0bb3b575ba2e","location_type":"delivery_cell","location_id":"4308704762854899712","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18487737","element_type":"listing","rank":19}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/hyderabad/36-downtown-brew-pub-jubilee-hills/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20514854,
      name: "Naatu Kitchen And Bar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/20514854/8cd5588c9d1e61a08cc8d7845e79703b_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/4/20514854/8cd5588c9d1e61a08cc8d7845e79703b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/20514854/a1f66911a9fa18657ef99fa7adfaf43d_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,522",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.5",
            reviewCount: "1,334",
            reviewTextSmall: "1,334 Reviews",
            subtext: "1,334 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "188",
            reviewTextSmall: "188 Reviews",
            subtext: "188 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,000 for two",
      },
      cfo: {
        text: "₹400 for one",
      },
      locality: {
        name: "Jubilee Hills, Hyderabad",
        address:
          "8-2-293/82, Plot 1217 A, Road 36, Juubilee Hills, Hyderabad, Jubilee Hills, Hyderabad",
        localityUrl: "hyderabad/jubilee-hills-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/andhra/",
          name: "Andhra",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,000 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/hyderabad/naatu-kitchen-and-bar-jubilee-hills/info",
      clickActionDeeplink: "",
    },
    distance: "9.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"afcc786a-430b-4cbc-a751-0bb3b575ba2e","location_type":"delivery_cell","location_id":"4308704762854899712","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20514854","element_type":"listing","rank":20}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/hyderabad/naatu-kitchen-and-bar-jubilee-hills/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18808521,
      name: "Krishnapatnam",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/18808521/11fa8f30e1ec4b2caea6a4c9c91f4ed7_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/1/18808521/11fa8f30e1ec4b2caea6a4c9c91f4ed7_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/18808521/28f2282eba1397e35947750a5ef6523a_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "4,149",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "2,255",
            reviewTextSmall: "2,255 Reviews",
            subtext: "2,255 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "1,894",
            reviewTextSmall: "1,894 Reviews",
            subtext: "1,894 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,300 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "Road 36, Jubilee Hills, Hyderabad",
        address: "3rd Floor, Shreshta Aura, Road 36, Jubilee Hills, Hyderabad",
        localityUrl: "hyderabad/restaurants/in/road-36-jubilee-hills",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/andhra/",
          name: "Andhra",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/hyderabad/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/hyderabad/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,300 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/hyderabad/krishnapatnam-jubilee-hills/info",
      clickActionDeeplink: "",
    },
    distance: "9.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"afcc786a-430b-4cbc-a751-0bb3b575ba2e","location_type":"delivery_cell","location_id":"4308704762854899712","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18808521","element_type":"listing","rank":21}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/hyderabad/krishnapatnam-jubilee-hills/book",
      },
      {
        type: "chain_cta",
        text: "View all outlets",
        clickUrl: "/hyderabad/restaurants/krishnapatnam?category=2",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestoCard = (props) => {
  const { resData } = props;
  const { name, o2FeaturedImage, rating, cft } = resData?.info;

  return (
    <div className="resto-card">
      <img className="food-image" src={o2FeaturedImage.url}></img>
      <h3 className="resto-name">{name}</h3>
      <h4 className="resto-rating">{rating.aggregate_rating} rating</h4>
      <h4 className="time">{cft.text}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resto-container">
        {restoList.map((restaurant) => (
          <RestoCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
