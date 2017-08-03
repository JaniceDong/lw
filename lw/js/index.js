window.onload = function(){
	$(function(){
		var _this1=null;
		console.log($(".first>li"));
		$('.first>li').hover(function(){
			_this1=$(this);
			_this1.addClass("nav_a");
			_this1.find('.second').show();
			var _this2=null;
			_this1.find('.second').find('li').hover(function(){
				_this2=$(this);
				//_this2.addClass("nav_a");
				_this2.find('.third').show();
				_this2.find('.third').hover(function(){
					$(this).show();
				},function(){
					$(this).hide();
				});
			},function(){
				_this2.find('.third').hide();
				//_this2.removeClass("nav_a");
			});
		},function(){
			_this1.find('.second').hide();
			_this1.removeClass("nav_a");
		});
	});
	
}
