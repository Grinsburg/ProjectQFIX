$(".tab_item").not(":first").hide();
$(".main .tab").click(function() {
	$(".main .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");