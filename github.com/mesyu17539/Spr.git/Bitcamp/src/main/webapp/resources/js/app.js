var app=app || {};
//app=(()=>{
//	var init=x=>{
//		onCreate(x);
//		setContentView();
//	};
//	var onCreate=x=>{
//		app.router.onCreate(x);
//	};
//	var setContentView=()=>{
//		$('#wrapper').empty();
//		app.algorithm.onCreate()
//	};
//	return{
//		init : init
//	};
//})();//IPAI(이파이) 즉시 실행하는 함수
//ajax
app =(()=>{
	var init=x=>{
		$.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new Router(x));
			app.algorithm.onCreate();
		})
	};
	return {init:init}
})();
app.algorithm=(()=>{
	var $wrapper,context,algorithm,view;
	var onCreate=()=>{
		$wrapper =$('#wrapper');
		$contexts =$('#contexts');
		context = $.context();
		algo=$.javascript()+'/algo.js';
		view=$.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$wrapper.empty();
		$.getScript(view,()=>{
//			람다 ALL : 이해하기 어렵다
			$wrapper.append(navigtion());
				$(createButtonNav1st())
				.appendTo('#div-nav-list-box')
				.click(()=>{
					alert('button 클릭');
				});
//				오버라이딩
				$(createATag(createSpan('glyphicon-user','로그인')))
				.appendTo('#li-login')
				.click(()=>{
					alert('Login btn Click');
				});
				$(createATag('수열'))
				.appendTo('#li-sequence')
				.click(()=>{
//					오버로딩
					alert('알고리즘');
						$contexts
							.html($(createDiv('content','container')));
							$('#content')
							.css({'margin-top':'50px',
								'width':'80%'
							})
							.append(sequenceContext());
							
							$('#td-algo-arith').html($(createATag('등차수열의 합 : 1+2+3+4+..+100'))
									.attr('style','margin-top:50px')
									.on('click',()=>{
								$('#td-algo-arith-ans').html(createInsertTab());
									$('#result')
									.attr('style','margin-top:50px;margin-left:100px;width:200px;')
									.on('click',()=>{
										var x=$('#input-init-val').val();
										var y=$('#input-limit-val').val();
										var z=$('#input-diff-val').val();
										if(x!==''&&x>0
												&&y!==''&&y>0
												&&z!==''&&z>0){
											$.getScript(algo,()=>{
												$('#resultText').text(arith(x,y,z));
											});
										}else{
											alert('값을 넣어 주세요');
										}
									});
							}));
							$('#td-algo-switch').html($(createATag('스위치 수열의 합 : 1-2+3-4+..-100')).click(()=>{
								$('#td-algo-arith-ans').html(createInsertTab());
									$('#result')
									.attr('style','margin-top:50px;margin-left:100px;width:200px;')
									.on('click',()=>{
										var x=$('#input-init-val').val();
										var y=$('#input-limit-val').val();
										var z=$('#input-diff-val').val();
										if(x!==''&&x>0
												&&y!==''&&y>0
												&&z!==''&&z>0){
											$.getScript(algo,()=>{
												$('#resultText').text(switchSeq(x,y,z));
											});
										}else{
											alert('값을 넣어 주세요');
										}
									});
							}));
							$('#td-algo-gi').html($(createATag('등비수열의 합 : 2+6+18+54+162 = 242')).click(()=>{
								$('#td-algo-arith-ans').html(createInsertTab());
								$('#result')
								.attr('style','margin-top:50px;margin-left:100px;width:200px;')
								.on('click',()=>{
									var x=$('#input-init-val').val();
									var y=$('#input-limit-val').val();
									var z=$('#input-diff-val').val();
									if(x!==''&&x>0
											&&y!==''&&y>0
											&&z!==''&&z>0){
										$.getScript(algo,()=>{
											$('#resultText').text(gioSeq(x,y,z));
										});
									}else{
										alert('값을 넣어 주세요');
									}
								});
						}));
							$('#td-algo-gao').html($(createATag('팩토리의 합 : 1!+2!+3!+...')).click(()=>{
								$('#td-algo-arith-ans').html(createInsertTab());
								$('#result')
								.attr('style','margin-top:50px;margin-left:100px;width:200px;')
								.on('click',()=>{
									var x=$('#input-init-val').val();
									var y=$('#input-limit-val').val();
									var z=$('#input-diff-val').val();
									if(x!==''&&x>0
											&&y!==''&&y>0
											&&z!==''&&z>0){
										$.getScript(algo,()=>{
											$('#resultText').text(gioSeq(x,y,z));
										});
									}else{
										alert('값을 넣어 주세요');
									}
								});
							}));
							$('#td-algo-pibo').html($(createATag('피보나치 수열의 합 : 1+1+2+3+5+8+13...')).click(()=>{
								$('#td-algo-arith-ans').html(createInsertTab());
								$('#result')
								.attr('style','margin-top:50px;margin-left:100px;width:200px;')
								.on('click',()=>{
									var x=$('#input-init-val').val();
									var y=$('#input-limit-val').val();
									if(x!==''&&x>0
											&&y!==''&&y>0){
										$.getScript(algo,()=>{
											$('#resultText').text(piboSeq(x,y));
										});
									}else{
										alert('값을 넣어 주세요');
									}
								});
							}));
//							td-algo-fac
							
//							$('#td-algo-gi').text('(-1)*2*(-3)*4*(-5)...');
				});
				$(createATag('수학'))
				.appendTo('#li-math')
				.click(()=>{
					$.getScript(algo,()=>{
						$contexts
						.html($(createDiv('content','container')));
						$('#content')
						.css({'margin-top':'50px',
							'width':'80%'
						})
						.append($(createMathTab('test','boardered',findMath(),'수학')));
						for(;;){
							$('#td-'+i)
							.attr('style','margin-top:50px;margin-left:100px;width:200px;')
							.on('click',()=>{
								var x=$('#input-init-val').val();
								var y=$('#input-limit-val').val();
								if(x!==''&&x>0
										&&y!==''&&y>0){
									$.getScript(algo,()=>{
										$('#resultText').text(piboSeq(x,y));
									});
								}else{
									alert('값을 넣어 주세요');
								}
							});
						}
					});
				});
				$(createATag('배열'))	
				.appendTo('#li-matrix')
				.click(()=>{
					alert('배열');
					$.getScript(algo,()=>{
						$contexts
						.html($(createDiv('content','container')));
						$('#content')
						.css({'margin-top':'50px',
							'width':'80%'
						})
						.append($(createMetrixTab('test','boardered', findBymetrix(),'배열')));
						alert(findBymetrix().length);
						$.each(['선택','버블','삽입','석차','이분','병합','스택'],(i,j)=>{
							$('#a-'+i)
							.on('click',()=>{
								// j를 이용해 메소드 정할겁니닷!!
								$('#result').html(createInsertTab());
							});
							
						});
					});
				});
				$(createATag('정렬'))
				.appendTo('#li-sort')
				.click(()=>{
					alert('정렬');
//					$contexts.html(createDiv('container',sequenceContext()))
				});
				$(createATag('응용'))
				.appendTo('#li-application')
				.click(()=>{
					
				});
		});
		
	};
	return {onCreate:onCreate}
})();