/* Color coder for interested topics on stack overflow v0.1 - Michael Lynch - nycynik */
var interestingTags =   ["ios","php","python","c#","javascript","java","flash","c++","cocos2d"];
var interestingColors = ["#D6EBFF","#CC86FF","#eee","#C3A6CA","#D6C2AD","#FF9999","#EB9EA0","#bbb","#C5DBD9"];
$(".tagged-interesting").each(function(e,i) { 
	var wholeInteresting = this;
	var wasFound = 0;
	$(".post-tag",i).each(function(e,i) {
		var tag = $(i).html();
		var foundtag = interestingTags.indexOf(tag);
		if (foundtag !== -1) {
			if (wasFound===0) $(wholeInteresting).css("background-color",interestingColors[foundtag]); 
			$(this).css("background-color",interestingColors[foundtag]); 
			wasFound++;
		}
	});
});
