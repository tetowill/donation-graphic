$(function(){

	var feedAmount; // amount from donation feed or form input for testing
	var startAmount = 0; // if there is a starting amount other than 0 add it here
	var donated;
	var matched; // if matching donations
	var totalDM; // total donations + matched
	var total;
	var goal = 2000000; // total goal amount
	var maxWidth = 586; // width of .donate-graphic
	var amount;
	var percentage;
	var aniTime; // animation time
	
	$("form").submit(function()
	{
		feedAmount = $("input:first").val();
	
		if (isNumber(feedAmount))
		{
			$("span.valid").text("Validated...").show().delay(1000).fadeOut(1000);
			
			// remove decimal from feed amount
			donated = parseFloat(feedAmount);
			
			// for a 50% match
			matched = (donated / 2);
			
			// add donated and matched
			totalDM = (donated + matched);
			
			// add start amount
			total = (totalDM + startAmount);
			
			// if total is less than goal get percentage
			if (total < goal)
			{
				percentage = (total / goal);
				amount = Math.round(maxWidth * percentage);
			}
			else
				amount = maxWidth;
			
			// adjust animaton time
			if (amount < 293)
				aniTime = 1000;
			else
				aniTime = 2000;
			
			// animate donations graphic
			$('.donate-graphic.front').animate({width: amount}, aniTime, 'linear');		

			// add amount text
			$('span.start-amount').text(accounting.formatMoney(startAmount));
			$('span.donated').text(accounting.formatMoney(donated));
			$('span.matched').text(accounting.formatMoney(matched));
			$('span.total').text(accounting.formatMoney(total));
			$('div.numbers').fadeIn(500);
			
			return false;
		}
		else
		{
			$("span.valid").text("Please enter a number").show().delay(1000).fadeOut(1000);
			return false;
		}
		
		// check for number
		function isNumber(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}
	});
});
