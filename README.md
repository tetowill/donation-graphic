donation-graphic
================

Animated donations graphic based on donation total

This is set up using a form input to manually submit a total donation amount. On submission, the graphic will adjust to show the correct amount. The donations.js file that is being used is for the manual test. Realistically this should be pulling the current donation amount from a json feed and simply updating on page load. When you're set up to do that, you can use the donations-feed.js instead of donations.js and simply enter your donations feed url in the specified location for the donationURL variable. Then just remove the form being used for manual submission and update the graphic, widths, etc. for your own needs. You can also remove the startAmount and matched variables if you do not need those added to your donation total.

I am using accounting.js v0.3.2, copyright 2011 Joss Crowcroft, MIT license, http://josscrowcroft.github.com/accounting.js, to format the dollar amounts being shown under the graphic.