//var product_classes = ['auto','mortgage','home+equity','credit+card','boat','motorhome','motorhome','unsecured','money+market','savings','checking','cd','ira'];
var product_classes = [
	"auto",
	"credit+card",
	//"mortgage",
	"unsecured",
	"home+equity",
	"cd",
	"checking",
	"motorhome",
	"boat",
	"money+market",
	"savings",
];

// var market_ids = [16919, 17669];
// var default_mkt_id = 16919;
var market_ids = [16933, 17466, 16917, 17083];
var default_mkt_id = 16933;

var company_website = "http://www.kfcu.org";
var company_rates_url = "https://www.kfcu.org/rates/";

var cta_url_auto =
	"https://app.loanspq.com/vl/VehicleLoan.aspx?enc=Kw21Wblm1yxpjJabdoZaD0gMFAspVL9rHFaIkIY3BMNclyV4usMCvivivLXuL8WCUKaRA1eA3BYfjv1ypEbpu_Xb0pI2sbSWzoWPET5bryM&_ga=2.64681903.1615096894.1685482240-835017434.1678731920&_gl=1*78ng9r*_ga*ODM1MDE3NDM0LjE2Nzg3MzE5MjA.*_ga_XNTGGNYHEL*MTY4NTU2MzA4OC43LjEuMTY4NTU2MzEyNy4wLjAuMA..";
var cta_txt_auto = "Apply Now";
var rates_url_auto = "https://www.kfcu.org/auto-loans/";

var cta_url_mortgage =
	"https://kfcu-pos.co.otdigitals.bkicloud.com/landingPage";
var cta_txt_mortgage = "Apply Now";
var rates_url_mortgage = "https://abcfinancial.org/mortgage/rates";

var cta_url_homeequity = "https://app.consumer.meridianlink.com/he/HomeEquityLoan.aspx?enc=Kw21Wblm1yxpjJabdoZaD0gMFAspVL9rHFaIkIY3BMNclyV4usMCvivivLXuL8WCy1xgKLLaMjj1I_5CVWFcCw&_gl=1*o8fy9b*_ga*MTUyODk4NjQ5Ni4xNjk0NDQ5OTk2*_ga_XNTGGNYHEL*MTcyNDY5MzkzNS4xNzcuMS4xNzI0NjkzOTU1LjAuMC4w";
var cta_txt_homeequity = "Apply Now";
var rates_url_homeequity = "https://abcfinancial.org/homeequity/rates";

var cta_url_creditcard =
	"https://app.loanspq.com/cc/CreditCard.aspx?enc=Kw21Wblm1yxpjJabdoZaD0gMFAspVL9rHFaIkIY3BMNclyV4usMCvivivLXuL8WCUKaRA1eA3BYfjv1ypEbpu_Xb0pI2sbSWzoWPET5bryM&_ga=2.240734339.1615096894.1685482240-835017434.1678731920&_gl=1*1f9r079*_ga*ODM1MDE3NDM0LjE2Nzg3MzE5MjA.*_ga_XNTGGNYHEL*MTY4NTU2MzA4OC43LjEuMTY4NTU2MzQ4OC4wLjAuMA..";
var cta_txt_creditcard = "Apply Now";
var rates_url_creditcard = "https://abcfinancial.org/cc/rates";

var cta_url_boat =
	"https://app.loanspq.com/vl/VehicleLoan.aspx?enc=Kw21Wblm1yxpjJabdoZaD0gMFAspVL9rHFaIkIY3BMNclyV4usMCvivivLXuL8WCUKaRA1eA3BYfjv1ypEbpu_Xb0pI2sbSWzoWPET5bryM&_ga=2.195819948.1615096894.1685482240-835017434.1678731920&_gl=1*1u70iwz*_ga*ODM1MDE3NDM0LjE2Nzg3MzE5MjA.*_ga_XNTGGNYHEL*MTY4NTU2MzA4OC43LjEuMTY4NTU2MzI3Ny4wLjAuMA..";
var cta_txt_boat = "Apply Now";
var rates_url_boat = "https://www.kfcu.org/vehicle-loans/";

var cta_url_motorhome =
	"https://app.loanspq.com/vl/VehicleLoan.aspx?enc=Kw21Wblm1yxpjJabdoZaD0gMFAspVL9rHFaIkIY3BMNclyV4usMCvivivLXuL8WCUKaRA1eA3BYfjv1ypEbpu_Xb0pI2sbSWzoWPET5bryM&_ga=2.195819948.1615096894.1685482240-835017434.1678731920&_gl=1*1u70iwz*_ga*ODM1MDE3NDM0LjE2Nzg3MzE5MjA.*_ga_XNTGGNYHEL*MTY4NTU2MzA4OC43LjEuMTY4NTU2MzI3Ny4wLjAuMA..";
var cta_txt_motorhome = "Apply Now";
var rates_url_motorhome = "https://www.kfcu.org/vehicle-loans/";

var cta_url_unsecured =
	"https://app.loanspq.com/pl/PersonalLoan.aspx?enc=Kw21Wblm1yxpjJabdoZaD0gMFAspVL9rHFaIkIY3BMNclyV4usMCvivivLXuL8WCUKaRA1eA3BYfjv1ypEbpu_Xb0pI2sbSWzoWPET5bryM&_ga=2.2299824.1615096894.1685482240-835017434.1678731920&_gl=1*1hjj9zf*_ga*ODM1MDE3NDM0LjE2Nzg3MzE5MjA.*_ga_XNTGGNYHEL*MTY4NTU2MzA4OC43LjEuMTY4NTU2MzUzMS4wLjAuMA..";
var cta_txt_unsecured = "Apply Now";
var rates_url_unsecured = "https://abcfinancial.org/unsecured/rates";

var cta_url_moneymarket =
	"https://www.kfcu.org/save-spend-borrow/savings/open-a-savings-account/";
var cta_txt_moneymarket = "Apply Now";
var rates_url_moneymarket = "https://abcfinancial.org/money-market/rates";

var cta_url_savings =
	"https://www.kfcu.org/save-spend-borrow/savings/open-a-savings-account/";
var cta_txt_savings = "Apply Now";
var rates_url_savings = "https://abcfinancial.org/savings/rates";

var cta_url_checking = "https://www.kfcu.org/save-spend-borrow/checking/";
var cta_txt_checking = "Apply Now";
var rates_url_checking = "https://abcfinancial.org/checking/rates";

var cta_url_cd = "https://www.kfcu.org/help/";
var cta_txt_cd = "Apply Now";
var rates_url_cd = "https://abcfinancial.org/cd/rates";

var cta_url_ira = "https://www.kfcu.org/help/";
var cta_txt_ira = "Apply Now";
var rates_url_ira = "https://abcfinancial.org/ira/rates";

//var apply_url = company_website + "/marqueeyourapplication/";

// Jan 10, 2023 - ability to pass in prod classes, markets via URL param,
// example: ...?product_classes=auto,checking&market_ids=17097,16938
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const passed_products = urlParams.get("product_classes");
const passed_market_ids = urlParams.get("market_ids");

if (passed_products && passed_products.length > 0) {
	product_classes = passed_products.split(",");
}
if (passed_market_ids && passed_market_ids.length > 0) {
	market_ids = passed_market_ids.split(",");
	default_mkt_id = market_ids[0];
}

var market_names = {};
var api_key = "b6f23e7e-bb2e-439f-8f14-572ad7e5aad4";

var thresholdsFeedUrl =
	"https://api.datatrac.net/api/Thresholds.json?MarketID=" +
	market_ids.toString() +
	"&ProductClass=" +
	product_classes.toString() +
	"&ApiKey=" +
	api_key;

var monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
var mm_name = monthNames[mm];

if (dd < 10) {
	dd = "0" + dd;
}
if (mm < 10) {
	mm = "0" + mm;
}

jQuery(document).ready(function ($) {
	"use strict";

	//console.log('DOMready ');

	// today's date for 'Verified as of'
	var today_long = mm_name + " " + dd + ", " + yyyy;
	$(".date_today").html(today_long);

	// get today's date, get the proper dated GRA seal
	var today_short = mm + dd + yyyy;
	$(".gra_seal").attr(
		"src",
		"https://delivery.datatrac.net/content/seals/Seal-" +
			today_short +
			"-300.png"
	);
}); // end on docready

var productsLoaded = 0;
var markets_loaded = 0;
var defaultOptionUl = $("#market_id_default_ul");

$(document).ajaxComplete(function () {
	"use strict";

	markets_loaded++;

	//console.log("Triggered ajaxComplete handler. Markets loaded: " + markets_loaded );

	// make def mkt active
	$("#market_id")
		.find("option[value=" + default_mkt_id + "]")
		.prop("selected", true)
		.addClass("default_mkt");
	// initialize the default market id here
	// ================================
	// Create a new <li> element with the desired content
	var $newLi = $(
		`<li data-value=${default_mkt_id}><div class='option'><p>${market_names[default_mkt_id]}</p></div></li>`
	);

	// Replace the existing <li> with the new one
	defaultOptionUl.find("li").replaceWith($newLi);
	// ================================
	selectDropdownItem(default_mkt_id);
});

function updateDropdown() {
	"use strict";

	//console.log('updateDropdown ran');

	var options = $(".select_mkt");
	var newOptionsUl = $("#market_id_ul");
	var defaultOptionUl = $("#market_id_default_ul");

	var mktsWithOutperformingProds = 0;

	$.each(market_ids, function (index, value) {
		var mkt_class = "";
		// find how many outperforming prods are in each mkt
		var thisMktProdsQuan = $('[data-market-id="' + value + '"]').length;
		//console.log('outperforming prods in market ID '+value+': '+thisMktProdsQuan);

		if (thisMktProdsQuan == 0) {
			mkt_class = "empty";
		}
		if (thisMktProdsQuan > 0) {
			mktsWithOutperformingProds++;
		}

		options.append(
			$("<option class='" + mkt_class + "' />")
				.val(value)
				.text(market_names[value])
		);

		// update the options here for the new dropdown
		// ================================
		newOptionsUl.append(
			`<li data-value=${value}><div class='option'><p>${market_names[value]}</p></div></li>`
		);
		// ================================
	});

	//console.log('total mkts with outperforming prods: '+ mktsWithOutperformingProds );

	if (mktsWithOutperformingProds < 2) {
		$(".app_wrap").addClass("single_market");
		var onlyMarketName = $("#market_id option:not(.empty)").text();
		var selectLabelText = $(".market_ids label")
			.text()
			.replace("Select a Product to ", "");
		$(".market_ids label").text(selectLabelText + " " + onlyMarketName);
	}

	selectDropdownItem(market_ids[0]);
	// set the initial market id here for the new dropdown
	// ================================
	var $newLi = $(
		`<li data-value=${market_ids[0]}><div class='option'><p>${
			market_names[market_ids[0]]
		}</p></div></li>`
	);

	// Replace the existing <li> with the new one
	defaultOptionUl.find("li").replaceWith($newLi);
	// ================================
}

// new code for the custom dropdown
$(".default_option").click(function () {
	$(this).parent().toggleClass("active");
});

$("#market_id_ul").on("click", "li", function () {
	var currentele = $(this).html();
	$(".default_option li").html(currentele);
	$(".select_ul li").removeClass("active");
	$(this).addClass("active");
	$(this).parents(".select_wrap_custom").removeClass("active");

	selectOnChange($(this).attr("data-value"));
});

// end new code for the custom dropdown.

function selectOnChange(selectedValue) {
	"use strict";
	// is last to run when market is changed via the select menu
	// var value = selectObject.value;

	// unslick the sliders before changing the slider to show.
	const sliderIds = [];
	for (var i = 0; i < market_ids.length; i++) {
		sliderIds.push(`#slider_${market_ids[i]}`);
	}
	for (var i = 0; i < sliderIds.length; i++) {
		try {
			$(sliderIds[i]).slick("unslick");
			$(sliderIds[i]).removeClass("show").removeClass("js_revealed");
		} catch (e) {}
	} // end unslick slider

	selectDropdownItem(selectedValue);

	// // pause all slideshows, go to slide 1
	$(".dt_api").addClass("sliderPaused");
	$(".slick-slider")
		.slick("slickSetOption", "autoplay", true)
		.slick("slickPause");
	$(".slick-slider").slick("slickGoTo", 0);

	//console.log('selectOnChange ran, value: ' + value);
}

function selectDropdownItem(marketId) {
	"use strict";
	//this one runs initially on page load (a few times)
	//console.log('selectDropdownItem ran. MarketID: '+marketId);

	// what is the below for? data-market-id is an attrib on the slider slides
	// this is used below to point the nav items to each slider slide
	var selector = '[data-market-id="' + marketId + '"]';

	$(".mtk_name_long").html(market_names[marketId]);

	// hide all the products
	$(".productcontainer").removeClass("show");
	// hide all the nav links
	$(".prod_link").removeClass("show");

	// hide all sliders, then show the active one
	$(".slider_wrap").removeClass("show");
	$("#slider_" + marketId).addClass("show js_revealed");

	$("#slider_" + marketId).on("init", function (event, slick) {
		// console.log(marketId + " count: " + slick.slideCount);
		// console.log("slick");
		// console.log(slick);

		const slideCount = slick.slideCount;
		$(this).attr("data-slide-count", slideCount);

		$(this).removeClass("no_arrows").removeClass("has_arrows");

		const arrowCount = $(this).find(".slick-arrow").length;
		//console.log(marketId+ ' arrows count: '+ arrowCount);
		if (arrowCount == 0) {
			$(this).addClass("no_arrows");
		}
		if (arrowCount > 0) {
			$(this).addClass("has_arrows");
		}
	});

	$("#slider_" + marketId)
		.not(".slick-initialized")
		.slick({
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			pauseOnHover: true,
			responsive: [
				{
					breakpoint: 900,
					settings: {
						//infinite: false,
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 500,
					settings: {
						//infinite: false,
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
			],
		});

	// play/pause functionality
	// $(".dt_api").addClass("sliderPaused");

	if ($("#" + marketId + "_slider_play").length == 0) {
		//console.log('no play button found- appending...');
		$("#slider_" + marketId)
			.find(".slick-dots")
			.append(
				' <a class="button small slider_play" id="' +
					marketId +
					'_slider_play">play</a>'
			);
	}

	$("body").on("click", "#" + marketId + "_slider_play", function (e) {
		//console.log('play click');
		$(".dt_api").removeClass("sliderPaused");
		$("#slider_" + marketId)
			.slick("slickSetOption", "autoplay", true)
			.slick("slickPlay");
		e.preventDefault();
	});

	if ($("#" + marketId + "_slider_pause").length == 0) {
		//console.log('no pause button found- appending...');
		$("#slider_" + marketId)
			.find(".slick-dots")
			.append(
				' <a class="button small slider_pause" id="' +
					marketId +
					'_slider_pause">pause</a>'
			);
	}

	$("body").on("click", "#" + marketId + "_slider_pause", function (e) {
		//console.log('pause click');
		$(".dt_api").addClass("sliderPaused");
		$("#slider_" + marketId)
			.slick("slickSetOption", "autoplay", false)
			.slick("slickPause");
		e.preventDefault();
	});

	$("#slider_" + marketId).slick("slickGoTo", 0);

	// before the slider advances, set the right prod nav to active
	$("#slider_" + marketId).on(
		"beforeChange",
		function (event, slick, currentSlide, nextSlide) {
			//console.log('beforeChange > current slide: '+currentSlide+', next slide: '+nextSlide);
			if (nextSlide == 0) {
				if (!$(".dt_api").hasClass("sliderPaused")) {
					//console.log('playing, about to hit first slide again');
				}
			}
			// check how many slides are being shown at a time at any screen size
			// in order to get the next slide visible
			var slidesToShow = $("#slider_" + marketId).slick(
				"slickGetOption",
				"slidesToShow"
			);

			// the next couple of if blocks check which slide would be the next to show in order to animate it.
			// If the slide count is less then the current slide the next elment will the next in line.
			if (Number(currentSlide) < Number(slick.slideCount - 1)) {
				// remove the badge class to hide the badge before the slide comes into view.
				// $("#slider_" + marketId)
				//   .find(".slick-slide")
				//   .eq(currentSlide + slidesToShow + slidesToShow)
				//   .find(".badge")
				//   .removeClass("badge-visible");
				// hide the bars of the next slide before it comes into view.
				$("#slider_" + marketId)
					.find(".slick-slide")
					.eq(currentSlide + slidesToShow + slidesToShow)
					.removeClass("bars_active bar_labels_active");
			}

			// if the current slide count is 1 less then the slide count, the slider will reset.
			if (Number(currentSlide) === Number(slick.slideCount - 1)) {
				// remove the badge class to hide the badge before the slide comes into view.
				// $("#slider_" + marketId)
				// 	.find(".slick-slide")
				// 	.eq(slidesToShow + slidesToShow - 1)
				// 	.find(".badge")
				// 	.removeClass("badge-visible");
				// hide the bars of the next slide before it comes into view.
				// $("#slider_" + marketId)
				//   .find(".slick-slide")
				//   .eq(slidesToShow + slidesToShow - 1)
				//   .removeClass("bars_active bar_labels_active");
				$("#slider_" + marketId)
					.find(".slick-slide")
					.eq(currentSlide + slidesToShow + slidesToShow)
					.removeClass("bars_active bar_labels_active");
				$("#slider_" + marketId)
					.find(".slick-slide")
					.eq(Number(slidesToShow) + Number(slidesToShow) - 1)
					.removeClass("bars_active bar_labels_active");
			}
		}
	);

	function fixSlickStyle(event, slick) {
		if (slick.slideCount <= slick.options.slidesToShow) {
			slick.$slideTrack.css("transform", "");
		}
	}

	// This functions check if the slides have started to repeat or not in infinite slider
	// it will check if the first slides have come in the view while the first slide it still from the end
	// it will then automativally highlight the tabs above for the first few slides that are in the view
	function checkActiveTabsHighlights(slick, slick_index) {
		// check how many tabs we need to highlight
		var tabsToHighlight = Number(slick_index) - (Number(slick?.slideCount) - 1);
		for (var i = 0; i < tabsToHighlight; i++) {
			$(".prod_link.show").eq(i).addClass("active");
		}
	}

	$("#slider_" + marketId).on(
		"afterChange",
		function (event, slick, currentSlide) {
			//console.log('afterChange 1.01 > current slide: '+currentSlide+'');

			// de-activate all prod-navs
			$(".prod_link.show").removeClass("active");
			// activate the ones for the visible slick slides
			$(".productcontainer.slick-active").each(function () {
				var slick_index = $(this).attr("data-slick-index");
				$(".prod_link.show").eq(slick_index).addClass("active");
				// run the function below when the first few slides appearing again in infinite slider
				if (Number(slick_index) >= Number(slick?.slideCount)) {
					checkActiveTabsHighlights(slick, slick_index);
				}
			});

			setTimeout(function () {
				// add the animating classes to the last element
				$("#slider_" + marketId)
					.find(".slick-slide")
					.addClass("bars_active");
				// $("#slider_" + marketId).addClass("bars_active");

				setTimeout(function () {
					$("#slider_" + marketId)
						.find(".slick-slide")
						.addClass("bar_labels_active");
					// $("#slider_" + marketId).addClass("bar_labels_active");
				}, 600);
				setTimeout(function () {
					$("#slider_" + marketId)
						.find(".badge")
						.addClass("badge-visible");
				}, 800);
			}, 50);

			if (currentSlide == 0) {
				if (!$(".dt_api").hasClass("sliderPaused")) {
					//console.log('playing, ---- BACK TO THE BEGINNING -----');
				}
			} // end if currentSlide==0
		}
	);

	$(".prod_link").on("click", function (e) {
		e.preventDefault();
		// XXX- the below must be overridden by an onchange in the slider because its always the leftmost visible slide's tab button, not the clicked one...
		$(this).addClass("active").siblings().removeClass("active");

		var slide_num = $(this).attr("data-slide");
		var prod_name = $(this).text();
		//console.log('nav clicked (-'+ prod_name +'), slide: '+ slide_num);
		$("#slider_" + marketId).slick("slickGoTo", slide_num - 1);
		var tgt_slide_id = slide_num - 1;
		tgt_slide_id = "#slick-slide" + tgt_slide_id.toString().padStart(2, "0");
		//console.log(tgt_slide_id);

		$(".slick-slide").removeClass("last_clicked");
		$(tgt_slide_id).addClass("last_clicked");
	});

	// show the products for the current market, then show the right navs
	$(".prod_link").removeAttr("data-slide");
	var x = 1;
	//console.log('x: '+ x);

	// selector is estab above, selecting slider slides for the current mkt ID, right?
	$(selector)
		.addClass("show")
		.each(function () {
			if ($(this).hasClass("slick-cloned")) {
				//console.log('CLONE - selector: '+ selector +', product: '+product+', x: '+ x);
				return;
			}

			var product = $(this).data("prod");
			//console.log('selector: '+ selector +', product: '+product+', x: '+ x);
			// now, find the navs that correspond and show them
			$("#nav_" + product)
				.removeClass("active")
				.addClass("show js_revealed")
				.attr("data-slide", x);

			if (x === 1) {
				$("#nav_" + product).addClass("active");
			}

			x++;
		});

	// update the search count
	var new_search_ct = $(selector).attr("data-total-search-count");
	$(".mkt_inst_total").html(new_search_ct);
} // end selectDropdownItem()

function assignDataOrderAttribs() {
	"use strict";

	//console.log('assignDataOrderAttribs() ran');

	var target_prod;

	$.each(product_classes, function (index, value) {
		target_prod = value.replace("+", "_");
		$(".prod_links_wrap #nav_" + target_prod).attr("data-order", index + 100);
		$('.productcontainer[data-prod="' + target_prod + '"]').attr(
			"data-order",
			index + 200
		);
	});
}

function sortProdNav() {
	"use strict";

	//console.log('sortProdNav() ran');

	var prodLinks = $(".prod_links_wrap a");
	prodLinks.sort(function (a, b) {
		return $(a).data("order") - $(b).data("order");
	});
	$(".prod_links_wrap").html(prodLinks);
}

function sortProds() {
	"use strict";

	//console.log('sortProds() ran');

	var prodDivs = $(".productcontainer");

	// sort first by marketID, then order
	prodDivs.sort(function (a, b) {
		return (
			$(a).data("market-id") - $(b).data("market-id") ||
			$(a).data("order") - $(b).data("order")
		);
	});

	$("#products_wrap").html(prodDivs);

	// ====> removed the below because client asked to remove i for the tooltips
	// $(".productcontainer").each(function (i) {
	//   if (i == 0) {
	//     return;
	//   }
	//   $(this)
	//     .find(".badge_text .highlight")
	//     .append("<sup class='tooltip-info-icon'><span>i</span></sup>");
	// });
}

function wrapSameMktIdProds() {
	"use strict";

	//console.log('wrapSameMktIdProds() ran');

	$.each(market_ids, function (index, value) {
		//console.log(value);
		$(".productcontainer[data-market-id='" + value + "']").wrapAll(
			'<div class="slider_wrap" id="slider_' + value + '"/>'
		);
	});
}

function refreshData() {
	"use strict";

	//console.log('refreshData ran');

	$(function () {
		var $prod_template = $("#product_template");

		$.get(thresholdsFeedUrl, function (data) {
			// data from $.get is an array - sort it by market ID
			data.sort(function (a, b) {
				return a.MarketID - b.MarketID;
			});
			//console.log(data);

			$.each(data, function (index, value) {
				//console.log(value);
				var product = value;
				//console.log( product.MarketID );
				var prod_class_underscored = product.ProductClass.replace(
					" ",
					"_"
				).toLowerCase();

				market_names[product.MarketID] = product.MarketName.replace(
					"Orlando-Kissimmee Metro",
					"Orlando Metro"
				);
				// XXXX
				if (
					typeof product !== "undefined" &&
					product.ThresholdType != "DoesNotOutPerform" &&
					product.ThresholdType != "OutpeformsBelowThresholds"
				) {
					// ----------- prod outperforms and should show

					//console.log("got " + product.ProductClass + " in " + product.MarketID );

					var market_id = product.MarketID;
					var new_content_id =
						"prod_" + prod_class_underscored + "_" + market_id;

					// populate data-order
					var order_num = 0;

					// dup the template
					var new_prod_content = $prod_template
						.clone()
						.addClass("block_" + prod_class_underscored)
						.prop("id", new_content_id)
						.attr("data-market-id", market_id)
						.attr("data-prod", prod_class_underscored);
					$("#products_wrap").append(new_prod_content);

					$(".block_" + prod_class_underscored).addClass("show");
					$(".block_" + prod_class_underscored).removeClass("template");

					var savings_chunks = product.SavingsOrEarningsText.split("up to ");
					var savingsAmount = savings_chunks[1];

					// var apyApr = "APR<sup>XX</sup>";
					var apyApr = "APR<sup class='tooltip-info-icon'><span>i</span></sup>";
					var lowerHigher = "lower";

					var verifiedDateRaw = product.Verified_As_Of;
					var date = new Date(verifiedDateRaw);
					var verfiedDateFormatted =
						date.getMonth() +
						1 +
						"/" +
						date.getDate() +
						"/" +
						date.getFullYear();

					var detailsEnd =
						'<span class=\'dt_note\'>Analysis by <a href="http://www.datatrac.net" target="_blank">Datatrac</a> as of ' +
						verfiedDateFormatted +
						".</span>";

					if (product.ProductType === "deposit") {
						apyApr = "APY<sup class='tooltip-info-icon'><span>i</span></sup>";
						lowerHigher = "higher";
					}

					var market_name = product.MarketName;
					var fi_name = product.InstitutionLongName;
					var fi_shortname = product.InstitutionShortName;
					var total_search_ct = product.Total_Search_Count;
					var prod_type = product.ProductType; // loan OR deposit

					var rate = fi_name + " " + product.Rate.toFixed(2) + "% " + apyApr;
					var rate_fi = product.Rate.toFixed(2) + "% " + apyApr;
					// special 3-digits rates for mortgages below...

					var prodname = apyApr + " " + product.FriendlyName + " ";
					var prodclass = product.ProductClass + " ";
					var market =
						market_name +
						" " +
						product.Average_Market_Rate.toFixed(2) +
						"% " +
						apyApr;
					market_name = market_name + " ";
					var rate_mkt =
						"" + product.Average_Market_Rate.toFixed(2) + "%  " + apyApr;
					if (prod_class_underscored == "mortgage") {
						rate = fi_name + " " + product.Rate.toFixed(3) + "% " + apyApr;
						rate_fi = product.Rate.toFixed(3) + "% " + apyApr;
						rate_mkt =
							"" + product.Average_Market_Rate.toFixed(3) + "% " + apyApr;
					}

					var lower = product.FootNoteText;
					var title_text = product.TitleText;
					var sort_order = product.SortOrder;
					var outperform_pct = product.Outperform;
					var prodlabel = product.ProductLabelPlural;

					var cta_text = product.OutperformText;
					if (product.OutperformText.length < 2) {
						cta_text = product.ThresholdCTAText;
					}

					var prodTerm = product.Term;

					// --------- POPULATE ROUND BADGE CONTENT, ICON ---------

					// get correct icon image - /img/icon-car-white.svg
					var iconFilename = "icon-car.svg";

					if (prod_class_underscored == "auto") {
						iconFilename = "icon-car.svg";
					}
					if (prod_class_underscored == "mortgage") {
						iconFilename = "icon-home.svg";
					}
					if (prod_class_underscored == "home_equity") {
						iconFilename = "icon-home.svg";
					}
					if (prod_class_underscored == "credit_card") {
						iconFilename = "icon-creditcard.svg";
					}
					if (prod_class_underscored == "boat") {
						iconFilename = "icon-boat.svg";
					}
					if (prod_class_underscored == "motorhome") {
						iconFilename = "icon_motorhome_f06f22.svg";
					}
					if (prod_class_underscored == "unsecured") {
						iconFilename = "icon-palmtree.svg";
					}
					if (prod_class_underscored == "money_market") {
						iconFilename = "icon_mm_4d86c5.svg";
					}
					if (prod_class_underscored == "savings") {
						iconFilename = "icon_savings_00a97e.svg";
					}
					if (prod_class_underscored == "checking") {
						iconFilename = "icon_checking_9fcd58.svg";
					}
					if (prod_class_underscored == "cd") {
						iconFilename = "icon_certificates_f37160.svg";
					}
					if (prod_class_underscored == "ira") {
						iconFilename = "icon-barchart.svg";
					}
					$("#" + new_content_id + " .icon")
						.addClass("js_mod")
						.attr("src", "img/" + iconFilename);

					// populate the tooltips here
					// populate details link footnote - get <FootNoteText> from feed
					var footnote_text = product.FootNoteText.replace(
						/<(?:.|\n)*?>/gm,
						""
					).replace(/&nbsp;/g, " ");
					$("#" + new_content_id + " .bar_label")
						.addClass("js_mod")
						.attr(
							"data-tooltip",
							product.FriendlyName.replace(
								"Motorhome",
								"RVs & Campers"
							).replace("CD", "Certificate") +
								": " +
								footnote_text
									.replace("motorhome", "RV or camper")
									.replace("certificate of deposit", "certificate")
						);

					$("#" + new_content_id + " .badge_text_wrap")
						.addClass("js_mod")
						.attr(
							"data-tooltip",
							product.FriendlyName.replace(
								"Motorhome",
								"RVs & Campers"
							).replace("CD", "Certificate") +
								": " +
								footnote_text
									.replace("motorhome", "RV or camper")
									.replace("certificate of deposit", "certificate")
						);

					// populate 'save up to'
					var savingsPrefix = "Lifetime Savings";

					if (product.ProductType === "deposit") {
						savingsPrefix = "Lifetime Earnings";
					}
					if (
						prod_class_underscored == "auto" ||
						prod_class_underscored == "boat" ||
						prod_class_underscored == "motorhome" ||
						prod_class_underscored == "home_equity" ||
						prod_class_underscored == "mortgage" ||
						prod_class_underscored == "unsecured" ||
						prod_class_underscored == "credit_card"
					) {
						if (Number(prodTerm) > 0) {
							var prodTermYears = Math.floor(prodTerm / 12);
							savingsPrefix = "Savings Over " + prodTermYears + " Years:";
						}
					}

					$("#" + new_content_id + " .save_up_to")
						.addClass("js_mod")
						.text(savingsPrefix);

					// populate savings amount ($999)
					var savingsAmount = product.SavingsOrEarningsText.replace(
						"Save up to ",
						""
					).replace("Earn up to ", "");
					// 08.18.23 - use the '#x more...' string instead if available
					if (product.OutperformTimesMore.length > 0) {
						savingsAmount = product.OutperformTimesMore.replace("Earn ", "");
						$("#" + new_content_id + " .savings_amt").addClass("times_more");
					}
					$("#" + new_content_id + " .savings_amt")
						.addClass("js_mod")
						.text(savingsAmount);
					//$("#"+new_content_id+' .badge_text').addClass('js_mod').append( $counter );

					// populate 'with a lower interest rate'
					var lowerHigher = "lower";
					if (product.ProductType === "deposit") {
						lowerHigher = "higher";
					}
					$("#" + new_content_id + " .lower_higher")
						.addClass("js_mod")
						.text(lowerHigher);

					// populate details link footnote - get <FootNoteText> from feed
					var footnote_text = product.FootNoteText.replace(
						/<(?:.|\n)*?>/gm,
						""
					).replace(/&nbsp;/g, " ");
					//console.log(footnote_text);

					$("#" + new_content_id).attr(
						"data-footnote",
						product.FriendlyName + ": " + footnote_text
					);

					// --------- END POPULATE ROUND BADGE CONTENT, ICON ---------

					// --------- POPULATE RATE BARS ---------
					$("#" + new_content_id + " .rate_fi").html(rate_fi);
					$("#" + new_content_id + " .rate_mkt").html(rate_mkt);

					// --------- START POPULATE OLD SLIDER CONTENT ---------

					// populate data attr for total search count - for use in onchange to populate footer search count
					$("#" + new_content_id)
						.attr("data-total-search-count", total_search_ct)
						.attr("data-order", sort_order);

					// globals
					$(".fi_name").html(fi_name);

					// PRODUCTS
					$("#" + new_content_id).addClass("type_" + prod_type);
					$("#" + new_content_id + " .driver-title").html(prodlabel);
					$("#" + new_content_id + " .mtk_name_long").html(market_name);
					$("#" + new_content_id + " #SavingsOrEarningsText").html(
						savingsAmount
					);
					$("#" + new_content_id + " .fi_name").html(fi_name);
					$("#" + new_content_id + " .fi_shortname").html(fi_shortname);
					$("#" + new_content_id + " .savings_amt").html(savingsAmount);
					$("#" + new_content_id + " #Rate").html(rate);
					//$( "#"+new_content_id+" #Rate_only" ).html( fi_rate );
					$("#" + new_content_id + " .market_name").html(market_name);
					$("#" + new_content_id + " #Market").html(market);

					// default disclosure link URL
					var disclosuresURL = company_website;

					// 04.10.23 - apply new onboarding fields to populate CTA text and URL
					var cta_url = "";
					var cta_text = "";
					var rates_url = "";
					rates_url = company_rates_url;

					/* ------ set the button destination URLs per-product --------*/
					if (prod_class_underscored == "auto") {
						cta_url = cta_url_auto;
						cta_text = cta_txt_auto;
						if (rates_url_auto.length > 0) {
							// override the global rates URL if the per-prod setting is available
							rates_url = rates_url_auto;
						}
					}
					if (prod_class_underscored == "mortgage") {
						cta_url = cta_url_mortgage;
						cta_text = cta_txt_mortgage;
						if (rates_url_mortgage.length > 0) {
							rates_url = rates_url_mortgage;
						}
					}
					if (prod_class_underscored == "home_equity") {
						cta_url = cta_url_homeequity;
						cta_text = cta_txt_homeequity;
						if (rates_url_homeequity.length > 0) {
							rates_url = rates_url_homeequity;
						}
					}
					if (prod_class_underscored == "credit_card") {
						cta_url = cta_url_creditcard;
						cta_text = cta_txt_creditcard;
						if (rates_url_creditcard.length > 0) {
							rates_url = rates_url_creditcard;
						}
					}
					if (prod_class_underscored == "boat") {
						cta_url = cta_url_boat;
						cta_text = cta_txt_boat;
						if (rates_url_boat.length > 0) {
							rates_url = rates_url_boat;
						}
					}
					if (prod_class_underscored == "motorhome") {
						cta_url = cta_url_motorhome;
						cta_text = cta_txt_motorhome;
						if (rates_url_motorhome.length > 0) {
							rates_url = rates_url_motorhome;
						}
					}
					if (prod_class_underscored == "unsecured") {
						cta_url = cta_url_unsecured;
						cta_text = cta_txt_unsecured;
						if (rates_url_unsecured.length > 0) {
							rates_url = rates_url_unsecured;
						}
					}
					if (prod_class_underscored == "money_market") {
						cta_url = cta_url_moneymarket;
						cta_text = cta_txt_moneymarket;
						if (rates_url_moneymarket.length > 0) {
							rates_url = rates_url_moneymarket;
						}
					}
					if (prod_class_underscored == "savings") {
						cta_url = cta_url_savings;
						cta_text = cta_txt_savings;
						if (rates_url_savings.length > 0) {
							rates_url = rates_url_savings;
						}
					}
					if (prod_class_underscored == "checking") {
						cta_url = cta_url_checking;
						cta_text = cta_txt_checking;
						if (rates_url_checking.length > 0) {
							rates_url = rates_url_checking;
						}
					}
					if (prod_class_underscored == "cd") {
						cta_url = cta_url_cd;
						cta_text = cta_txt_cd;
						if (rates_url_cd.length > 0) {
							rates_url = rates_url_cd;
						}
					}
					if (prod_class_underscored == "ira") {
						cta_url = cta_url_ira;
						cta_text = cta_txt_ira;
						if (rates_url_ira.length > 0) {
							rates_url = rates_url_ira;
						}
					}

					if (cta_text.length > 0) {
						$("#" + new_content_id + " .apply_now").html(cta_text);
					}
					if (cta_url.length > 0) {
						$("#" + new_content_id + " .apply_now").attr("href", cta_url);
					}

					// insert rates & disclosures link
					$("#" + new_content_id + " .details .lower")
						.html(
							lower +
								" <a class='link_disclosures' href='" +
								rates_url +
								"' target='_blank'>view " +
								prodclass +
								" rates &amp; disclosures</a>" +
								detailsEnd
						)
						.addClass("js_touched");

					$("#" + new_content_id + " .prodname").html(
						prodclass
							.replace("Motorhome", "RVs &amp; Campers")
							.replace("CD", "Certificates")
					);

					$("#" + new_content_id + " .prod_term").html(prodname);

					//$( "#"+new_content_id+" #marketrate" ).html( market_rate );
					$("#" + new_content_id + " .cta_text").html(cta_text);
					$("#" + new_content_id + " .title_text").html(title_text);
					$("#" + new_content_id + " .outperf").html(outperform_pct + "%");

					$("#" + new_content_id + " .view_rates").attr(
						"href",
						company_website
					);
					$("#" + new_content_id + " .learn_more").attr(
						"href",
						company_website
					);

					if (prod_type === "deposit") {
						$("#" + new_content_id + " .view_rates").html("Open Account Now");
						$("#" + new_content_id + " .comparison_term").html("up to");
					}

					// --------- END POPULATE OLD SLIDER CONTENT ---------

					productsLoaded++;
				} else {
					// if prod doesnt outperform or is not in the JSON, hide it

					$(".block_" + prod_class_underscored).removeClass("show");
					console.log(
						"DOES NOT OUTPERFORM: vert bars - " +
							product.ProductClass +
							" in " +
							product.MarketID +
							" (or is below thresholds)"
					);
				} // end if prod outperforms
			}); // end each on prods in the JSON

			updateDropdown();
			assignDataOrderAttribs();
			sortProdNav();
			sortProds();
		})
			.fail(function () {
				//console.log( "error" );
			})
			.always(function () {
				//console.log( "----------- finished 1.02 -----------" );

				// ----- wrap all same-mkt-id prods
				wrapSameMktIdProds();

				$(".loading-overlay").fadeOut(1000, function () {
					$(".loading-overlay").css("height", 0);
				});
			}); // end get of JSON
	}); // end func def
} // end refreshData func decl

refreshData();
