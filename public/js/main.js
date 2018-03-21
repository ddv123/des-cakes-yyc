$( document ).ready(function(){

	var feed = new Instafeed({
	        get: 'user',
	        userId: '790050572',
	        limit: 12,
	        resolution: 'standard_resolution',
	        accessToken: '790050572.1677ed0.9e6d1dc5d97d4466a9b077130c0150b1',
	        sortBy: 'most-recent',
	        template: '<div class="col-lg-3 col-md-4 cake-instagram"><a href="{{image}}" title="{{caption}}" target="_blank"><div class="cake-target" style="background-image: url({{image}});"></div></a></div>'
	});
	feed.run();















});