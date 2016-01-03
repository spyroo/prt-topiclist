var $panel = $bundle.filter('.prt-topiclist');
var $sendButton = $panel.find(".prtSubmitTopicButton");
var $removeLastButton = $panel.find(".prtRemoveTopicButton");
var $newTitleTextbox = $panel.find(".prtNewTopic");
var $setMaxNumberTextbox = $panel.find(".prtMaxNumberTextBox");
var $setMaxNumberButton = $panel.find(".prtMaxNumberButton");

$sendButton.click(function() {
	nodecg.sendMessage("addTopic", $newTitleTextbox.val())
	$("#targetForm").addClass("has-warning");
});


nodecg.listenFor("operationSuccess", function(){
	$("#targetForm").removeClass("has-warning").addClass("has-success");
	setTimeout(function() {
		$("#targetForm").removeClass("has-success");	
	}, 2000);
	$(".prtNewTopic").val('');
});

nodecg.listenFor("maxOperationSuccess", function(){
	$("#maxTargetForm").removeClass("has-warning").addClass("has-success");
	setTimeout(function() {
		$("#maxTargetForm").removeClass("has-success");	
	}, 2000);
});

$removeLastButton.click(function() {	
	nodecg.sendMessage("removeLastTopic");
	$("#targetForm").addClass("has-warning");
});

$setMaxNumberButton.click(function() {
	nodecg.sendMessage("setMaxListItems", $setMaxNumberTextbox.val())
	$("#maxTargetForm").addClass("has-warning");
});
