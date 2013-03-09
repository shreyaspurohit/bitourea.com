function onDialogSetMinWidth(dialogVal){								
	$(dialogVal).dialog("option", 'minWidth', 500);
	$(dialogVal).dialog("option", 'minHeight', 400);				
}

function loadTumblrIframe(){
	$("#newsThoughtsDiv iframe").get(0).contentWindow.location.href = "http://shreyaspurohit.tumblr.com";
}

function unloadTumblrIframe(){
	$("#newsThoughtsDiv iframe").get(0).contentWindow.location.href = "about:blank";
}

function showDialog(type, widthValPerc, heightValPerc, hideTitle, onComplete){
	var w = widthValPerc ? widthValPerc : 0.5;
	var h = heightValPerc ? heightValPerc : 0.75;
	var wWidth = $(window).width();
	var dWidth = wWidth * w;
	var wHeight = $(window).height();
	var dHeight = wHeight * h;
	
	$(type).dialog({
	  dialogClass: "no-close" + (hideTitle === true ? " noTitle" : " withTitle"),
	  modal: true,
	  buttons: {
		Close: function() {
		  $( this ).dialog( "close" );
		}
	  },
	  draggable: false,
	  width:dWidth
	});				
	if(heightValPerc){
		$(type).dialog("option", "height", dHeight);
	}
	if(onComplete){
		onComplete(type);
	}
}
