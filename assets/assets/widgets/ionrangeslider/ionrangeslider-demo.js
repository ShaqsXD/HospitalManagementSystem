$(function(){
	"use strict";
	$("#ion-slider-basic").ionRangeSlider({
		min:0,
		max:5e3,
		type:"double",
		prefix:"$",
		maxPostfix:"+",
		prettify:!1,hasGrid:!0,gridMargin:7
	})}),
$(function(){
	"use strict";
	$("#ion-slider-money").ionRangeSlider({min:1e3,max:1e5,from:3e4,to:9e4,type:"double",step:500,postfix:" €",hasGrid:!0,gridMargin:15})}),
$(function(){
	"use strict";
	$("#ion-slider-carat").ionRangeSlider({
		min:0,
		max:100,
		type:"single",
		step:.1,
		postfix:" %",
		prettify:!1,
		hasGrid:!0
	})}),
$(function(){"use strict";$("#ion-slider-date").ionRangeSlider({values:["January","February","March","April","May","June","July","August","September","October","November","December"],type:"single",hasGrid:!0})}),$(function(){"use strict";$("#ion-slider-console").ionRangeSlider({min:1e6,max:1e8,type:"double",postfix:" pounds",step:1e4,from:25e6,to:35e6,onChange:function(a){delete a.input,delete a.slider;var b="Range Slider value: "+JSON.stringify(a,"",2);$("#result").html(b)},onLoad:function(a){delete a.input,delete a.slider;var b="Range Slider value: "+JSON.stringify(a,"",2);$("#result").html(b)}}),$("#updateLast").on("click",function(){$("#example_8").ionRangeSlider("update",{min:Math.round(1e4+4e4*Math.random()),max:Math.round(2e5+1e5*Math.random()),step:1,from:Math.round(4e4+4e4*Math.random()),to:Math.round(15e4+8e4*Math.random())})})});