var $canvas = $('#canvas');

var $dev = $('#item-dev');
var $code = $('#item-code');
var $github = $('#item-github');
var $shippable = $('#item-shippable');
var $binoc = $('#item-binoc');
var $codeBlock = $('.codeBlock');
var $tarball = $('#item-tarball');
var $stackNew = $('#stack-new');
var $stackOld = $('#stack-old');
var $traffic = $('#item-traffic');
var $dns = $('#dns');

function clean(){
	$canvas.find('img').removeClass().addClass('item animated hide');
	$codeBlock.addClass('hide');
	$stackNew.addClass('hide');
	$stackOld.addClass('hide');
	$dns.addClass('hide');
}

function exposeCodeTest(){
	var time = 1000;

	$codeBlock.each(function(){
		var $this = $( this );
		var childTime = 100;
		setTimeout( function(){
			$this.removeClass('hide').find('h3').removeClass('hide');
			// console.log("Header", $this.find('li'));

			$this.find('li').each(function(){
				// console.log("Li", this);
				var $liThis = $( this );
				setTimeout( function(){
					var chance = Math.floor((Math.random() * 10) + 1);
					if (chance > 3 ){
						$liThis.addClass('success');
					} else if (chance > 1){
						$liThis.addClass('warning');
					} else {
						$liThis.addClass('danger');
					}
					$liThis.removeClass('hide');
				}, childTime);
				childTime += 100;
			})
		}, time);
		time += 1000;
	});
}

function stage1(){
	//Clean Stage
	clean();

	$dev.addClass('item-dev');
	$github.addClass('item-github item-right');
	$code.addClass('item-code infinite');

	//Show props
	$dev.removeClass('hide').addClass('bounceIn');
	$github.removeClass('hide').addClass('bounceIn');

	setTimeout( function(){
		$code.addClass('fadeInLeft').removeClass('hide');
	}, 1000);

}

function stage2(){
	clean();

	$github.addClass('item-github item-left').removeClass('hide item-right bounceIn');
	$shippable.addClass('item-shippable item-right');
	$binoc.addClass('item-aboveRight item-small');
	$code.addClass('item-code infinite');

	$shippable.addClass('bounceInRight').removeClass('hide');	
	setTimeout( function(){
		$binoc.addClass('bounceIn').removeClass('hide');
		setTimeout( function(){
			$github.addClass('shake');
			setTimeout( function(){
				$code.removeClass('hide').addClass('fadeInLeft');
			}, 500);
		}, 1000);
	}, 1000);
}

function stage3(){
	clean();


	$shippable.addClass('item-shippable item-left').removeClass('hide');
	exposeCodeTest();
}

function stage4(){
	clean();

	$tarball.removeClass('hide').addClass('item-middle rollIn');
	setTimeout( function(){
		$tarball.removeClass('rollIn').addClass('jello infinite');
		setTimeout( function(){
			// $tarball.removeClass('jello infinite').addClass('rollOut');
		}, 2500);
	},500);
}

function stage5(){
	clean();

	var time = 500;
	var $stackLoader = $('#stack-new .loader');

	$stackNew.removeClass('hide');
	$stackLoader.removeClass('hide').addClass('animated zoomInUp');

	setTimeout( function(){
		$stackLoader.removeClass('zoomInUp');
		setTimeout( function(){
			$stackNew.addClass('animated swing');
			setTimeout( function(){
				$stackNew.removeClass('swing').addClass('pulse infinite');
			}, 1000);
		}, 1000);
		$('#stack-new .box').each(function(){
			var $this = $( this );

			setTimeout( function(){
				$this.removeClass('hide').addClass('animated zoomInDown');
			}, time);
		// $stackNew.find.addClass('animated swing');
		time += 200;
	});
	}, 1000);
}

function stage6(){
	clean();

	$stackNew.removeClass('hide infinite swing');
	$tarball.removeClass('hide').addClass('item-middle bounceInDown');
	setTimeout( function(){
		$tarball.removeClass('bounceInDown').addClass('fadeOutDown');
		$stackNew.find('.box').addClass('box-tarred');
		$stackNew.addClass('pulse infinite');
	}, 1500);
}

function stage7(){
	clean();

	$stackNew.removeClass('hide infinite').addClass('stack-half animated bounceInRight');
	$stackOld.removeClass('hide').addClass('stack-half animated bounceInLeft');
	$stackNew.find('.box').removeClass('hide').addClass('box-tarred');
	$stackNew.find('.loader').removeClass('hide');
	$stackOld.find('.box').removeClass('hide').addClass('box-old');
	$stackOld.find('.loader').removeClass('hide');

	setTimeout( function(){
		$stackNew.removeClass('bounceInRight');
		$dns.removeClass('hide').addClass('fadeIn animated');
		$traffic.removeClass('hide').addClass('item-middle item-traffic jello infinite');
		setTimeout( function(){
			$dns.addClass('dns-right');
			$stackNew.addClass('infinite pulse');
			$traffic.removeClass('jello');
		}, 2000);
	}, 1000);
}

function stage8(){
	clean();

	$stackNew.removeClass('hide').addClass('stack-half animated');
	$stackOld.removeClass('hide').addClass('stack-half animated');
	$stackNew.find('.box').removeClass('hide').addClass('box-tarred');
	$stackNew.find('.loader').removeClass('hide');
	$stackOld.find('.box').removeClass('hide').addClass('box-old');
	$stackOld.find('.loader').removeClass('hide');
	$stackOld.addClass('hinge');
	setTimeout(function(){
		$stackNew.removeClass('pulse infinite').addClass('tada');
	}, 1500)
}