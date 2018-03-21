function navigtion(){
	return '<style>'
	+'  .jumbotron {'
	+'    margin: 0 auto;'
	+'  }'
	+'  .bg {'
	+'    background-image: url("'+$.image()+'/chicago.jpg");'
	+'  }'
	+'</style>'
	+'<div class="jumbotron bg" style="padding-left: 30px;">'
	+'  <h1 style="color: white;">Welcome to Bitcamp</h1>'
	+'</div>'
	+'<nav class="navbar navbar-inverse">'
	+'      <div class="container-fluid">'
	+'        <div class="navbar-header"><div id="div-nav-list-box">'
	+'          </div><a class="navbar-brand" href="#">'
	+'          BITCAMP</a>'
	+'        </div>'
	+'        <div id="navbar" class="collapse navbar-collapse">'
	+'          <ul class="nav navbar-nav">'
	+'                    <li id="li-login">'
	+'                    </li>'
	+'            <li class="active"><a href="#">'
	+'            <span class="glyphicon glyphicon-home" aria-hidden="true"></span>&nbsp;home'
	+'            </a></li>'
	+'            <li><a href="#">'
	+'              <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>&nbsp;QA'
	+'            </a></li>'
	+'        <!-- 드롭다운 START-->'
	+'        <li class="dropdown">'
	+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true" +aria-expanded="false">'
	+'            유틸리티'
	+'            <span class="caret"></span>'
	+'          </a>'
	+'          <ul id="ul-util" class="dropdown-menu">'
	+'            <li id="li-sequence" href="#"></li>'
	+'            <li id="li-math" href="#"></li>'
	+'            <li id="li-matrix" href="#"></li>'
	+'            <li id="li-sort" href="#"></li>'
	+'            <li id="li-application" href="#"></li>'
	+'          </ul>'
	+'        </li>'
	+'        <!-- 드롭다운 END -->'
	+'          </ul>'
	+'        </div>'
	+'      </div>'
	+'    </nav>'
}
function createButtonNav1st(){
	return '<button id="btn-nav-list" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" +aria-expanded="false" aria-controls="navbar">'
	+'          <span class="sr-only">Toggle navigation</span>'
	+'            <span class="icon-bar"></span>'
	+'            <span class="icon-bar"></span>'
	+'            <span class="icon-bar"></span>'
	+'          </button>';
}
var createHTag=(x,y)=>{
	return '<h'+x+'>'+y+'</h'+x+'>';
}
var createDiv=(x,y)=>{
	return '<div id="'+x+'" class="'+y+'"></div>';
//	return '<div id="'+x+'" class="'+x+'">y</div>';
}
var createUL=(x,y)=>{
	return '<ul id="'+x+'" class="'+y+'"></ul>';
}
var createLI=(x,y)=>{
	return '<li id="'+x+'" class="'+y+'"></li>';
}
var createText=x=>{
	return '<span id="'+x+'"></span>';
}
var createTab=(x,y,json,txt,type)=>{
	var tab='<table id="'+x+'" class="'+y+'">'
			+'<tr>'
				+'<th colspan="5">'+txt+'</th>'
			+'</tr>';
	$.each(json,function(i,j){
		tab +='<tr>'
			+'<td>('+i+')'+j.a+'</td>'
			+'<td>('+i+')'+j.b+'</td>'
			+'<td>('+i+')'+j.c+'</td>'
			+'<td>('+i+')'+j.d+'</td>'
			+'<td>('+i+')'+j.e+'</td>'
			+'</tr>'
	});
	tab+='</table>';
	return tab;
}
var createMathTab=(x, y, json, txt)=>{
	var tab = '<table id="'+x+'" class="table table-'+y+'">'
	+'<tr>'
	+'<th colspan="5">' + txt + '</th>'
	+'</tr>';
	$.each(JSON.parse(json), (i, j)=>{
		tab +='<tr>'
			+'<td>'+j.a+'</td>'
			+'<td>'+j.b+'</td>'
			+'<td>'+j.c+'</td>'
			+'<td>'+j.d+'</td>'
			+'<td>'+j.e+'</td>'
			+'</tr>';
	});
	tab += '</table>';
	return tab;
}
var createMetrixTab=(x,y,json,txt)=>{
	var tab='<table id="'+x+'" class="table table-'+y+'">'
	+'<tr>'
	+'<th colspan="5">' + txt + '</th>'
	+'</tr>';
	$.each(json,(i,j)=>{
		tab +='<tr>'
			+'<td><a id="a-'+i+'">'+i+'.'+j+'</a></td>';
			if(i==0){
				tab +='<td id="result" rowspan="'+(json.length+1)+'">취중진담</td>'
			}
			tab +='</tr>';
	});
	tab+='</table>';
	return tab;
}
var createTR=x=>{
	return '<tr>'+x+'</tr>';
}
var createTH=x=>{
	return '<th id="'+x+'"></th>';
}
var createInputText=(x,y)=>{
	return '<input id="'+x+'" class="'+y+'" type="text"/>';
}
var createTD=x=>{
	return '<td id="'+x+'"></td>';
}
var createInsertTab=(x,y)=>{
	return '<table id="'+x+'" class="'+y+'">'
	+'  <tr>'
	+'    <th>초기값</th>'
	+'    <td><input id="input-init-val" type="text" name=""></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <th>제한값</th>'
	+'    <td><input id="input-limit-val"  type="text" name=""></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <th>공차</th>'
	+'    <td><input id="input-diff-val"  type="text" name=""></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td>결과값</td>'
	+'    <td id="resultText"><button id="result">결과값</button></td>'
	+'  </tr>'
	+'</table>'
}
var sequenceContext=()=>{
//	'<div class="container" style="margin-top:50px;">'
//	return x+'<table class="table table-boardered">'
	return '<table id="tab-algo" class="table table-boardered">'
	+'  <tr>'
	+'    <th colspan="4">공식</th>'
	+'    <th>등차수열 답</th>'
	+'  </tr>'
	+'  <tr>'
	+'    <td id="td-algo-arith" colspan="4"></td>'
	+'    <td id="td-algo-arith-ans">답안지</td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td id="td-algo-switch" colspan="4"></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td id="td-algo-gao" colspan="4"></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td id="td-algo-gi" colspan="4"></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td id="td-algo-pibo" colspan="4"></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td id="td-algo-fac" colspan="4"></td>'
	+'  </tr>'
	+'</table>';
}
var createATag=x=>{
	return '<a href="#"> '+x+'</a>';
}
var createSpan=(x,y)=>{
	return '<span class="glyphicon '+x+'" aria-hidden="true">&nbsp;'
	+y+'</span>';
}