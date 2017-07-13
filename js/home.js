
//	var opts = {            
//          lines: 7,// 花瓣数目
//          length: 1, // 花瓣长度
//          width: 5, // 花瓣宽度
//          radius: 8, // 花瓣距中心半径
//          corners: 1, // 花瓣圆滑度 (0-1)
//          rotate: 0, // 花瓣旋转角度
//          direction: 1, // 花瓣旋转方向 1: 顺时针, -1: 逆时针
//          color: '#ffffff', // 花瓣颜色
//          speed: 1, // 花瓣旋转速度
//          trail: 60, // 花瓣旋转时的拖影(百分比)
//          shadow: false, // 花瓣是否显示阴影
//          hwaccel: false, //spinner 是否启用硬件加速及高速旋转            
//          className: 'spinner', // spinner css 样式名称
//          zIndex: 2e9, // spinner的z轴 (默认是2000000000)
//          top: '50%', // spinner 相对父容器Top定位 单位 px
//          left: '50%'// spinner 相对父容器Left定位 单位 px
//      };
//		var spinner = null;
//		if(spinner==null){
//      		spinner = new Spinner(opts);
//      	}
//      document.getElementById("lodingdiv").style.display = "";
// 		$("#lodingdiv").text("");
//      var target = $("#lodingdiv").get(0);	
//      spinner.spin(target);
		var wating;
        function showloding(msg){
        	if(msg==null){
        		msg = "正在加载";
        	}
     //   plus.nativeUI.showWaiting(msg,null);
        }

		function closeloding(){
		//	plus.nativeUI.closeWaiting();
			var lodingdiv = document.getElementById("lodingdiv");
			if(lodingdiv!=null){
				lodingdiv.style.display = "none";
			}
			
					
		}
