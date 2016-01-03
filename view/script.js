var $list = $(".prtViewTopicList");

var maxListItems = 4;

nodecg.listenFor("addTopic", function(newTopic){
	var newTopicPar = '<p class="topicItem">' + newTopic + '</p>';
	$(newTopicPar).hide().prependTo('.prtViewTopicList').slideDown("fast", function(){
	var len = $('.prtViewTopicList').children().length;
	if(len > maxListItems){
		$('.prtViewTopicList').children().last().fadeOut('fast', function(){
			$('.prtViewTopicList').children().last().remove();
		});	
	}
	nodecg.sendMessage("operationSuccess");
	});
});

nodecg.listenFor("removeLastTopic", function(){
	$('.prtViewTopicList').children().first().slideUp('slow', function() {
		$('.prtViewTopicList').children().first().remove();
	});
	nodecg.sendMessage("operationSuccess");
});

nodecg.listenFor("setMaxListItems", function(newMax){
	maxListItems = newMax;
	nodecg.sendMessage("maxOperationSuccess");
});
