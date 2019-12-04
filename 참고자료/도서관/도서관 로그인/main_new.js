/*텍스트형 메뉴*/
function top2menuView(a) //2차메뉴보기
{
	if(this.id){
		eidStr = this.id;
		eidNum=eidStr.substring(eidStr.lastIndexOf("m",eidStr.length)+1,eidStr.length);
		a = parseInt(eidNum);
	}
	top2menuHideAll();
	top1Menu = document.getElementById("top1m"+a);
	top2Menu = document.getElementById("top2m"+a);
	ann = (a<10)? "0"+a : ""+a;
	if(a==0){ //메인은2차메뉴활성화안함
	}else{
		if (top1Menu){ top1Menu.parentNode.className="on";
			if (top2Menu) { top2Menu.style.display = "inline"; }
//			document.getElementById("id_gnb_bg").style.height = '250px';
		}
	}
}
function top2menuHide(a) //2차메뉴감추기
{
	if(this.id){
		eidStr = this.id;
		eidNum=eidStr.substring(eidStr.lastIndexOf("m",eidStr.length)+1,eidStr.length);
		a = parseInt(eidNum);
	}
	//top2menuHideAll();
	top1Menu = document.getElementById("top1m"+a);
	top2Menu = document.getElementById("top2m"+a);
	top1MenuCurr = document.getElementById("top1m"+d1n);
	top2MenuCurr = document.getElementById("top2m"+d1n);
	ann = (a<10)? "0"+a : ""+a;
	onn = (d1n<10)? "0"+d1n : ""+d1n;

	if (top1Menu) {
		top1Menu.className="";
		if(top1MenuCurr){ 
			top1MenuCurr.className="on";
		}
	}
	for (i=1;i<=8;i++)
	{
		top2Menu = document.getElementById("top2m"+i);
		if (top2Menu) { top2Menu.style.display = "none";}
	}
//	document.getElementById("id_gnb_bg").style.height = '0px';
}
function top2menuHideAll() //2차메뉴모두감추기
{
	for (i=1;i<=11;i++)//메뉴삭제시 1차메뉴수가 안맞아 top1menuEl.length 대신 숫자로 넣음
	{
		top1Menu = document.getElementById("top1m"+i);
		top2Menu = document.getElementById("top2m"+i);
		if(top1Menu){ top1Menu.parentNode.className="";
			if (top2Menu) { top2Menu.style.display = "none"; }
//			document.getElementById("id_gnb_bg").style.height = '0px';
		}
	}
}
function initTopMenu(d1,d2,d3) {//1,2차메뉴초기화,마우스키보드이벤트할당
	d1n=d1; d2n=d2;//전역변수로설정
	d1nn = (d1n<10)? "0"+d1n : ""+d1n;
	d2nn = (d2n<10)? "0"+d2n : ""+d2n;
 	top1menuEl = document.getElementById("top1menu").childNodes;

	for (i=1;i<=8;i++)//메뉴삭제시 1차메뉴수가 안맞아 top1menuEl.length 대신 숫자로 넣음
	{
		top1Menu = document.getElementById("top1m"+i);
		top2Menu = document.getElementById("top2m"+i);
		if (top1Menu) {
			inn = (i<10)? "0"+i : ""+i;
			if(i == d1){
				top1Menu.className="on";
			}
			top1Menu.onmouseover = top1Menu.onfocus = top2menuView;
			top1Menu.onmouseout = top2menuHide;//onblur이벤트 제거 : IE에서 2차메뉴선택할 수 없어서..
			if (top2Menu) {
				top2Menu.onmouseover = top2Menu.onfocus = top2menuView;
				top2Menu.onmouseout = top2Menu.onblur = top2menuHide;
			}
		}
	}

	//3차메뉴활성
	if(d1 == 2 && d2 == 5 && d3 == 2){ d3 = 1; }//ebook의 경우 3차메뉴가 상단메뉴에 노출되지않아 강제로 d3값을 지정

	top2MenuCurrAct = document.getElementById("top2m"+d1+"m"+d2+"m"+d3);
	if (top2MenuCurrAct) { top2MenuCurrAct.getElementsByTagName("a")[0].className="on"; }
}

$(document).ready(function(){
	//Remove outline from links
	$(".Script_first_li").bind('mouseover focusin', function(){
		var gnb_height1 = $("> ul",this).height();
		gnb_height1 = gnb_height1+10;
		var gnb_height2 = gnb_height1+50;

		$("#gnbmn").stop().animate({opacity:'1',height:gnb_height2+'px'},{queue:false, duration:50, easing: 'easeInSine'});
		$("#id_gnb_bg").stop().animate({opacity:'1',height:gnb_height1+'px'},{queue:false, duration:50, easing: 'easeInSine'});
//		$("#rebon").stop().animate({top:'293px'},{queue:false, duration:400, easing: 'easeInSine'});
	});

	$("#top1menu").bind('mouseout focusout', function(){
		$("#gnbmn").stop().animate({height:'60px',opacity:'1'},{duration:250, easing: 'easeInSine'});
		$("#id_gnb_bg").stop().animate({height:'0px',opacity:'1'},{duration:250, easing: 'easeInSine'});
//		$("#rebon").stop().animate({top:'97px'},{queue:false, duration:400, easing: 'easeInSine'});
	});
});


function MM_popupMsg(msg) { //v1.0
  alert(msg);
}
//메인검색탭
function onSearchShow(n) {
	for(i=1;i<=3;i++) {
		if(document.getElementById('search0'+i+'_menu') != null) {
			if(n == i) {
				document.getElementById('search0'+i+'_menu').style.visibility = 'visible';
				if(document.getElementById('search0'+i) != null) {
					var re = new RegExp('_off');
					document.getElementById('search0'+i).className = document.getElementById('search0'+i).className.replace(re,'_on');
				}
			}else{
				document.getElementById('search0'+i+'_menu').style.visibility = 'hidden';
				if(document.getElementById('search0'+i) != null) {
					var re = new RegExp('_on');
					document.getElementById('search0'+i).className = document.getElementById('search0'+i).className.replace(re,'_off');

				}
			}
			if(n == 1){
				$('.guidebtn > a.script_ico1').show();
				$('.guidebtn > a.script_ico2').hide();
			}else{
				$('.guidebtn > a.script_ico1').hide();
				$('.guidebtn > a.script_ico2').show();
			}
		}
	}
	setCookie( "KUDOS_MAIN_SEARCH", n, 1 );
}


//메인검색탭_심플버전
function onTabShowSP(n) {
	for(i=1;i<=3;i++) {
		if(document.getElementById('setab0'+i+'_menu') != null) {
			if(n == i) {
				document.getElementById('setab0'+i+'_menu').style.display = '';
				if(document.getElementById('setab0'+i) != null) {
					var re = new RegExp('_off');
					document.getElementById('setab0'+i).className = document.getElementById('setab0'+i).className.replace(re,'_on');
				}
			}else{
				document.getElementById('setab0'+i+'_menu').style.display = 'none';
				if(document.getElementById('setab0'+i) != null) {
					var re = new RegExp('_on');
					document.getElementById('setab0'+i).className = document.getElementById('setab0'+i).className.replace(re,'_off');

				}
			}
		}
	}		
}


//메인서비스 탭
function onServiceShow(n) {
	hh = 0;
	for(i=1;i<=9;i++) {
		if(document.getElementById('service0'+i+'_menu') != null) {
			if(n == i) {
				if(document.getElementById('service0'+i).className == "tab_on"){
					document.getElementById('service0'+i+'_menu').style.display = '';
					if(document.getElementById('service0'+i) != null) {
						var re = new RegExp('_on');
						document.getElementById('service0'+i).className = document.getElementById('service0'+i).className.replace(re,'_off');
						$("#mservice").stop().animate({height:'120px',opacity:'1'},400,'swing',function(){$("#mservice").css('border-bottom','none');});
						
					}
					setCookie( "KUDOS_MAIN_SERVICE", "", 1 );
				}else{
					document.getElementById('service0'+i+'_menu').style.display = '';	
					if(document.getElementById('service0'+i) != null) {
						var re = new RegExp('_off');
						document.getElementById('service0'+i).className = document.getElementById('service0'+i).className.replace(re,'_on');
						var hh = $('#service0'+i+'_menu').height(); 
						//alert(hh);
						if(i == 2){
							if($("#selectcont").css('display') != "none"){
								hh = hh+$('#selectcont').height(); 
							}
						}
						$("#mservice").css('border-bottom','2px solid #DA2127');
						$("#mservice").stop().animate({height:hh+140,opacity:'1'},400);
					}
					setCookie( "KUDOS_MAIN_SERVICE", n, 1 );
				}
			}else{
				document.getElementById('service0'+i+'_menu').style.display = 'none';
				if(document.getElementById('service0'+i) != null) {
					var re = new RegExp('_on');
					document.getElementById('service0'+i).className = document.getElementById('service0'+i).className.replace(re,'_off');
				}
			}
		}
	}
}

//메인서비스 이용자별 안내
function onService01Show(n) {
	for(i=1;i<=4;i++) {
		if(document.getElementById('script_mservice_cont'+i) != null) {
			if(n == i) {
				$('#script_mservice_a'+i).attr('class','on');
				document.getElementById('script_mservice_cont'+i).style.display = '';
			}else{
				$('#script_mservice_a'+i).attr('class','');
				document.getElementById('script_mservice_cont'+i).style.display = 'none';
			}
		}
	}
	
	var hh = $('#service01_menu').height(); 
	//alert(hh);
	$("#mservice").css('border-bottom','2px solid #DA2127');
	$("#mservice").stop().animate({height:hh+140,opacity:'1'},400);

	setCookie( "KUDOS_MAIN_SERVICE_SUB", n, 1 );
}

function onService05Show(n) {
	for(i=1;i<=3;i++) {
		if(document.getElementById('script_mservice5_cont'+i) != null) {
			if(n == i) {
				$('#script_mservice5_a'+i).attr('class','on');
				document.getElementById('script_mservice5_cont'+i).style.display = '';
			}else{
				$('#script_mservice5_a'+i).attr('class','');
				document.getElementById('script_mservice5_cont'+i).style.display = 'none';
			}
		}
	}
	
	var hh = $('#service05_menu').height(); 
	//alert(hh);
	$("#mservice").css('border-bottom','2px solid #DA2127');
	$("#mservice").stop().animate({height:hh+140,opacity:'1'},400);

	setCookie( "KUDOS_MAIN_SERVICE5_SUB", n, 1 );
}

function onService09Show(n) {
	for(i=1;i<=4;i++) {
		if(document.getElementById('script_mservice9_cont'+i) != null) {
			if(n == i) {
				$('#script_mservice9_a'+i).attr('class','on');
				document.getElementById('script_mservice9_cont'+i).style.display = '';
			}else{
				$('#script_mservice9_a'+i).attr('class','');
				document.getElementById('script_mservice9_cont'+i).style.display = 'none';
			}
		}
	}
	
	var hh = $('#service09_menu').height(); 
	//alert(hh);
	$("#mservice").css('border-bottom','2px solid #DA2127');
	$("#mservice").stop().animate({height:hh+140,opacity:'1'},400);

	setCookie( "KUDOS_MAIN_SERVICE5_SUB", n, 1 );
}

//메인서비스 이용자별 안내2
function onServiceUserShow(str,n) {
	for(i=1;i<=10;i++) {
		if(document.getElementById('script_mservice_'+str+'_'+i) != null) {
			if(n == i) {
				$('#script_mservice_a'+str+'_'+i).attr('class','on');
				document.getElementById('script_mservice_'+str+'_'+i).style.display = '';
			}else{
				$('#script_mservice_a'+str+'_'+i).attr('class','');
				document.getElementById('script_mservice_'+str+'_'+i).style.display = 'none';
			}
		}
	}
	
	var hh = $('#service01_menu').height(); 
	//alert(hh);
	$("#mservice").css('border-bottom','2px solid #DA2127');
	$("#mservice").stop().animate({height:hh+140,opacity:'1'},400);

	setCookie( "KUDOS_MAIN_SERVICE_SUB2", str, 1 );
	setCookie( "KUDOS_MAIN_SERVICE_SUB2_1", n, 1 );

}

//메인서비스 서비스신청
function selectShow() {
	$('#selectcont').show();
	var hh = $('#selectcont').height(); 
	$("#mservice").css('border-bottom','2px solid #DA2127');
	$("#mservice").stop().animate({height:hh+220,opacity:'1'},400);
	setCookie( "KUDOS_MAIN_SERVICE_SELECT", 1, 1 );
}

function selectHide() {
	$('#selectcont').hide();
	var hh = $('#service02_menu').height(); 
	$("#mservice").css('border-bottom','2px solid #DA2127');
	$("#mservice").stop().animate({height:hh+140,opacity:'1'},400);
	setCookie( "KUDOS_MAIN_SERVICE_SELECT", "", -1 );
}


//메인게시판 탭
function onNoticeShow(n) {
	for(i=1;i<=8;i++) {
		if(document.getElementById('notice0'+i+'_menu') != null) {
			if(n == i) {
				document.getElementById('notice0'+i+'_menu').style.visibility = 'visible';
				document.getElementById('notice0'+i+'_add').style.visibility = 'visible';	
				if(document.getElementById('notice0'+i) != null) {
					var re = new RegExp('_off');
					document.getElementById('notice0'+i).className = document.getElementById('notice0'+i).className.replace(re,'_on');
				}
			}else{
				document.getElementById('notice0'+i+'_menu').style.visibility = 'hidden';
				document.getElementById('notice0'+i+'_add').style.visibility = 'hidden';
				if(document.getElementById('notice0'+i) != null) {
					var re = new RegExp('_on');
					document.getElementById('notice0'+i).className = document.getElementById('notice0'+i).className.replace(re,'_off');
				}
			}
		}
	}
	setCookie( "KUDOS_MAIN_NOTICE", n, 1 );
}



/*//이미지홍보 **************************************************************************************************/
function rotatePicpr(prcon_height,interval) {//이미지홍보 순환
	var prcon = document.getElementById("popupcon");
	var prcon_a = prcon.getElementsByTagName("a");
	var prcon_inner = prcon.getElementsByTagName("ul")[0];
	if (prcon_inner.move) clearTimeout(prcon_inner.move);
	if (pr_onnum) prcon_inner.count = pr_onnum;
	if (!picprOver) {
		if (prcon_inner.count<prcon_a.length) { prcon_inner.count++; }
		else { prcon_inner.count = 1; }
		picprOnNum(prcon_inner.count);
	}
	pr_onnum = 0;
	var repeat = "rotatePicpr("+prcon_height+","+interval+")";
	prcon_inner.move = setTimeout(repeat,interval);
}
function picprOnNum(a) {//이미지홍보 n번째 보기 - 순환용으로 사용
	var onnum = a;
	var etype=null;
	movePicpr(onnum);
}
function picprOn(e) {//이미지홍보 n번째 보기 할당 - 홍보이미지 포커스, 버튼이미지 클릭시 사용
	stopPicpr();
	var e=e?e:window.event;
	var etype=e.type;
	var onnum = this.className.replace("n","");
	movePicpr(onnum,etype);
}
function movePicpr(onnum,etype) {//이미지홍보 위치이동
	var onnum = parseInt(onnum)-1;
	var prcon = document.getElementById("popupcon");
	var prcon_inner =	prcon.getElementsByTagName("ul")[0];
	var brName = navigator.appName.charAt(0);
	if (etype=="focus"&&brName=="M"&&onnum!=0) {//IE에서 focus일때
//		prcon_inner.style.top = 0;
	}else{
		prcon_inner.style.top = onnum*(-250) + "px";
	}
	var prnum = document.getElementById("popupbtn");
	var prnum_img = prnum.getElementsByTagName("img");
	for (var i=0;i<prnum_img.length;i++)	{ 
		var where = prnum_img[i].src.indexOf("_on.gif",0)
		if (where!=-1) { prnum_img[i].src = prnum_img[i].src.replace("_on.gif", ".gif"); }
	}
	prnum_img[onnum].src = prnum_img[onnum].src.replace(".gif", "_on.gif");
	pr_onnum = parseInt(onnum)+1;
//	var test = document.getElementById("test");
//	test.innerHTML = prcon_inner.style.top +"  pr_onnum="+pr_onnum;
}
function playPicpr() {//이미지홍보 순환 시작
	picprOver = false;
}
function stopPicpr() {//이미지홍보 순환 멈춤
	picprOver = true;
}
function initPicpr() {//이미지홍보 초기화
  var prnum = document.getElementById("popupbtn");
  var prnum_img = prnum.getElementsByTagName("img");
	for (var i=0;i<prnum_img.length;i++)	{
		prnum_img[i].onclick = picprOn;
	}
  var prcon = document.getElementById("popupcon");
	var prcon_inner =	prcon.getElementsByTagName("ul")[0];
  var prcon_a = prcon.getElementsByTagName("a");
	for (var i=0;i<prcon_a.length;i++)	{ 
		prcon_a[i].onfocus = picprOn;
		prcon_a[i].onblur =  playPicpr;//포커스아웃시다시재생
	}
	var prcon_img =	prcon_inner.getElementsByTagName("img");
	var prcon_img0 =	prcon_img[0];
	var prcon_height = parseInt(prcon_img0.getAttribute("height"));
	prcon_inner.count = 0;
	pr_onnum = 0;
	playPicpr();
	rotatePicpr(prcon_height,5000);//간격1/1000초
  var picpr = document.getElementById("popupzone");
//  prcon.onmouseover = prnum.onmouseover = stopPicpr;
//  prcon.onmouseout = prnum.onmouseout = playPicpr;//마우스아웃시다시재생
}
//addLoadEvent(initPicpr);//페이지전체로딩이느리면문제발생
//initPicpr();

/*//이미지홍보 ***********************************************************************************/

//마우스 드래그 차단
(function(){
 var cancel=function(e){
  if (window.event) {
   window.event.cancelBubble = true;
   window.event.returnValue = false;
  }
  if (e && e.stopPropagation && e.preventDefault) {
   e.stopPropagation();
   e.preventDefault();
  }
  return false;
 };
 var block=function(e){
  e = e || window.event;
  var t=e.srcElement || e.target;
  var tag=t.tagName;
  if (e && tag==='HTML' || tag==='INPUT' || tag==='TEXTAREA' || tag==='BUTTON' || tag==='SELECT' || tag==='OPTION' || tag==='EMBED' || tag==='OBJECT') { return; }
  if (e.type==='keydown' || e.type=='keyup') {
   // keyboard event : only block ctrl-A, ctrl-a, ctrl-C, ctrl-c, meta-A, meta-a, meta-C, meta-c
   if ((e.ctrlKey || e.metaKey) && (e.keyCode == 65 || e.keyCode == 97 || e.keyCode == 67 || e.keyCode == 99)) { return cancel(e); }
  } else if(e.type == "contextmenu"){
//   alert('무단복사를 막기 위해 마우스 드래그 금지가 설정되어 있습니다');
   return cancel(e);
  } else {
   return cancel(e);
  }
 }
 var addEvent = function(el, type, fn){
     if (window.addEventListener) {
         el.addEventListener(type, fn, false);
     }
     else if (window.attachEvent) {
         el.attachEvent('on' + type, fn);
     }
     else {
         el['on' + type] = fn;
     }
 }
 var addBlockEvent = function(){
//  addEvent(document.body,'keydown',block);
  addEvent(document.body,'keyup',block);
//  addEvent(document.body,'mouseup',block);
//  addEvent(document.body,'mousedown',block);
//  addEvent(document.body,'dragstart',block);
//  addEvent(document.body,'selectstart',block);
//  addEvent(document.body,'copy',block);
  addEvent(document.body,'contextmenu', block);
 }
 addEvent(window,'load',addBlockEvent);
})();

/* 관련사이트 바로가기 */
function goSelectUrl(num){
	var obj = document.getElementById('menu'+num);

	if(obj.value == '' || obj.value == 'total'){
	
	}else{
		if(num == 5){
			location.href = obj.value;
		}else{
			window.open(obj.value);
		}
	}
}

//특수문자 입력제한
function inputCheckSpecial(strobj){
  re = /[!%&|<>≠=\'\"]/gi;
  if(re.test(strobj.value)){
    alert("해당 특수문자(!%&|<>≠=\'\")는 입력 하실 수 없습니다.");
    strobj.value=strobj.value.replace(re,"");
  }
}

function go_select(str){
	if(str != ""){
		location.href=str;
	}
}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

//타이틀 대신 이미지 노출
window.mouseEventFunc = function( layer, type ) {
	if( type == 'over' ) {
		jQuery("."+layer).fadeIn();
	} else if( type == 'out' ) {
		jQuery("."+layer).fadeOut();
	}
}