
//팝업스크립트


	$(document).ready(function(){
		console.log('ready');
		var pop_length = $('.pop_ck').length ;
			//console.log( pop_length);

	for(var i =0; i < pop_length ; i++){

		var key = $('.pop_ck')[i].value;

		console.log(key);

	 if( get_cookie('it_ck_pop_'+ key ) != 'done' ) {
		var tmpid = document.getElementById('pop'+key);
		$(tmpid).css('display','block');
	
	 };
	}
}



//일정 글자수 ... 처리 함수

function CheckMaxString(obj, maxNum){               
          var li_str_len = obj.length;
          var li_byte = 0;
          var li_len = 0;
          var ls_one_char = "";
          var ls_str2 = "";
          for( var j=0; j<li_str_len; j++){
                    ls_one_char = obj.charAt(j);
                    if(escape(ls_one_char).length > 4 ) {
                              li_byte += 2;
                    }else{
                              li_byte++;
                    }
                    if(li_byte <= maxNum){
                              li_len = j+1;
                    } 
          }
          if(li_byte > maxNum){
                    ls_str2 = obj.substr(0, li_len)+"...";
          }else{
                    ls_str2 = obj;
          }
          return ls_str2;
}

//숫자에 콤마표시
function addCommas(num){
          return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
}

//사용자 브라우저 판별
function getBrowserType(){     



    var _ua = navigator.userAgent;
    var rv = -1;    
    //IE 11,10,9,8
    var trident = _ua.match(/Trident\/(\d.\d)/i);
    if( trident != null ){
        if( trident[1] == "7.0" ) return rv = "IE" + 11;
        if( trident[1] == "6.0" ) return rv = "IE" + 10;
        if( trident[1] == "5.0" ) return rv = "IE" + 9;
        if( trident[1] == "4.0" ) return rv = "IE" + 8;
    }    
    //IE 7...
    if( navigator.appName == 'Microsoft Internet Explorer' ) return rv = "IE" + 7;
    //other
    var agt = _ua.toLowerCase();
    if (agt.indexOf("chrome") != -1) return 'Chrome';
    if (agt.indexOf("opera") != -1) return 'Opera';
    if (agt.indexOf("staroffice") != -1) return 'Star Office';
    if (agt.indexOf("webtv") != -1) return 'WebTV';
    if (agt.indexOf("beonex") != -1) return 'Beonex';
    if (agt.indexOf("chimera") != -1) return 'Chimera';
    if (agt.indexOf("netpositive") != -1) return 'NetPositive';
    if (agt.indexOf("phoenix") != -1) return 'Phoenix';
    if (agt.indexOf("firefox") != -1) return 'Firefox';
    if (agt.indexOf("safari") != -1) return 'Safari';
    if (agt.indexOf("skipstone") != -1) return 'SkipStone';
    if (agt.indexOf("netscape") != -1) return 'Netscape';
    if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
}





//개념 설명   소현이 누나
예시로 설명해줄게 . 

기본적으로 메소드(함수) 호출은   - > 함수명()  ex) index(); , slide();
       value를 얻을떈    - > value , index 
	   
 누나가 흔히 쓰는 태그들 div li   class 명이나 name을 같은 명칭으로 지정하면  배열로 인식돼
 
ex >  
	<div class = 'example'>

		<select  class="selectLang">

              <option value="kr" selected="selected">국어 </option>
              <option value="en">영어</option>
    </select>

	</div>
	
	<div class = 'example'>

  	<select  class="selectLang">

                <option value="jp" selected="selected">일어 </option>
                <option value="cn">중문</option>
    </select>

	</div>                              이렇게 되있을경우   >>  example이라는 배열이 생성 된거지  example[0] example[1]   길이가 2인 배열 
	
이제 스크립트로 저기를 접근해볼꺼야.

<script>
 //제이쿼리 버전 
$('.selectVisual').change(function(){   << 위에서 설명한 내장함수(이미 정의되있는 함수) change()  : 말그대로 변화가 감지되면 즉 ,셀렉트 박스에서 어떤값이 선택되면 실행 
    console.log(this);    <<this 를 찍었을떄 어떤값이 나올까요 
                           this는 일반적으로 메소드를 호출한 객체가 저장되어있는 속성 ! 
                           이 예제에서는 누나가 변화시킨 셀렉트 박스가 this에 저장되 있겠지

                           그렇다면 this의 index 를 구하려면 어떻게해야할까요   == 셀렉트박스가 몇번쨰 셀렉트 박스인지 구하기 

)};

 //스크립트 버전 
var selectname = document.getElementsByClassName(selectVisual);   << DOM이뭐냐 ! 이거다 !   DOM 안에 div 태그도 있고  p태그도있고  이것들을  DOM 객체라고합니다.
</script>



