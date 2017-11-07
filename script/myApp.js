var myApp=angular.module("myApp",["ionic"]);
myApp.controller("myCtrl",["$scope","$ionicHistory",
    "$ionicPopup","$state","$ionicModal","$http","$userData",
    function($scope,$ionicHistory,$ionicPopup,$state,$ionicModal,$http,$userData){
        
        $scope.host = "http://www.520mg.com"
        //返回上一次的历史记录
        $scope.back=function(){
            $ionicHistory.goBack();
        };
        //路由跳转
        $scope.goState=function(stateName,data){
            $state.go(stateName,data)
        }      
        //弹出框
        $scope.showAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: '恭喜你发表成功',
                //template: 'It might taste good'
            });
            alertPopup.then(function(res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        };
        //呼叫商家电话确认框
        $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: '您可以拨打电话联系商家',
                template: '<span class="text-center">0371-66087999</span>>'
            });
            confirmPopup.then(function(res) {
                if(res) {
                    console.log('You are sure');
                } else {
                    console.log('You are not sure');
                }
            });
        };

        //tab切换
        $scope.tab1=true;
        $scope.tab=function(num){
            if(num==1){
                $scope.tab1=true;
                $scope.tab2=false;
                $scope.tab3=false;
            }else if(num==2){
                $scope.tab1=false;
                $scope.tab2=true;
                $scope.tab3=false;
            }else{
                $scope.tab1=false;
                $scope.tab2=false;
                $scope.tab3=true;
            }
        }      
        
    //wy
    	$ionicModal.fromTemplateUrl("template/wy/modal.html", { scope: $scope})
                        .then(function(data){
                            $scope.modal = data;})
                    //兑换I心劵
                    $scope.yue = 236;
                    $scope.yuheart = 126;
					$scope.change = function (num) {
						$scope.heartnum = num;
						if($scope.yuheart*1>=num){
                            $scope.yuheart = $scope.yuheart-num;
                            $scope.yue = $scope.yue*1+num*1;
//                          $scope.modal.show();
							alert("恭喜你兑换成功，花费"+$scope.heartnum+"I心劵")
                        }else {
                            $scope.modal.hide();
						    alert("余额不足，请重新输入")
                        }
                    }
                    //修改密码
					$scope.changePassword = function () {
						alert("修改密码未成功，请与管理员联系")
                    }
                    $scope.currentQuestion={};
                    $scope.comment = function () {
						$scope.comments = $scope.currentQuestion.comment
                    }
   
   
   // 查看是否处于登录状态
// 		$scope.userData = $userData;
//		$scope.checkUser = function(){
//			if(!$scope.userData.user.M_LoginID){		
//				$scope.goState("login",null);
//			}
//		}
                    
                    
                    

    }])

//fs
.controller("secondhandCtrl",["$scope","$ionicPopover",function($scope,$ionicPopover){
					$ionicPopover.fromTemplateUrl("template/popover.html", { scope: $scope})
					.then(function(data){
						$scope.popover=data;
					})
				}])
				.controller("sharecarCtrl",["$scope","$ionicPopup",function($scope,$ionicPopup){
					$scope.showConfirm = function() {
				     var confirmPopup = $ionicPopup.confirm({
				       subTitle: '你可以拨打电话联系拼车',
				       title: '0371-66087999',
//				       template: '我不哭了',
				       cancelText: '取消',
				       okText: '呼叫'
				     });
				     confirmPopup.then(function(res) {
				       if(res) {
				         console.log('确定');
				       } else {
				         console.log('取消了');
				       }
				     });
				   };
				}])
				
.controller("saledetailCtrl",["$scope",function($scope){
					$scope.showArea = 1;
					$scope.showTab = function(index){
						$scope.showArea = index;
						
					}
				}])
				
//lyp
.controller("myCon1", function($scope) {
        $(".li-1").click(function(){
            $(this). addClass("act");
            $(this).siblings("li").removeClass("act");
        });
        $scope.deL=function () {
            $(".d-1"). show();
            $(".d-2"). hide();
            $(".d-3"). hide();

        }
        $scope.de2=function () {
            $(".d-2"). show();
            $(".d-1"). hide();
            $(".d-3"). hide();

        }
        $scope.de3=function () {
            $(".d-3"). show();
            $(".d-2"). hide();
            $(".d-1"). hide();

        }
    })
        .controller("myCon2",function($scope){
            $scope.items = [
                {   "img":"img/lyp/w-1.png",
                    "name":"小星星",
                    "p1":"小区附近哪家饭好吃？",
                    "s1":"今天 10:20",
                    "p2":356,
                    "id":68,
                },{   "img":"img/lyp/w-2.png",
                    "name":"安妮宝贝",
                    "p1":"小区附近哪个超市比较便宜？",
                    "s1":"今天 16:38",
                    "p2":120,
                    "id":20,
                },{  "img":"img/lyp/roy.jpg",
                    "name":"roy",
                    "p1":"小区附近有好玩的地方吗？",
                    "s1":"今天 18:56",
                    "p2":102,
                    "id":12,
                }
            ]
        })
        
//wy
        
//zy
.controller("loginCtrl",["$scope","$http","$state","$ionicHistory",
function($scope,$http,$state,$ionicHistory){
	$scope.user={username:"",password:""}
	$scope.login=function(){
	$http.post($scope.host+"/member/index_login.php",{
			fmdo: "login",
			dopost: "login",
			userid: $scope.user.username,
			pwd: $scope.user.password
		})
		.success(function(data){
			if(data.status){
//				alert(123)
				$scope.tip="登陆成功";
				$scope.goState("show",null);
			}else{
//				alert(123)
				$scope.tip=data.msg;
//				
			}
		})
	}
}])
.controller("regCtrl",["$scope","$http","$state","$ionicHistory",
function($scope,$http,$state,$ionicHistory){
	$scope.user = {username:"",password:"",email:""}
	$scope.regist = function(){
		$http.post($scope.host+"/member/reg_new2.php",{
			userid:$scope.user.username,
			userpwd:$scope.user.password,
			email:$scope.user.email
		})
		.success(function(data){
			if(data.status){
				$scope.tip="注册成功";
				$scope.goState("login",null);
			}
			else{
				$scope.tip=data.msg;
			}
		})
	}
}])

.controller("mainCtrl", ["$scope", "$ionicActionSheet","$ionicPopup", function($scope, $ionicActionSheet,$ionicPopup) {
	$scope.showA=function() {
		$ionicActionSheet.show( {
			buttons: [ {
				text: '<b>拍摄</b> 图片'
			}
			, {
				text: '从相册选择'
			}
			, ], destructiveText: '删除', titleText: '编辑头像', cancelText: '取消', buttonClicked: function(index) {
//				alert(index);
			}
			, destructiveButtonClicked: function() {
//				alert("我要删除");
				action();
			}
		}
		);
	}
	
	

}])
.controller("myHome", ["$scope", "$http", function($scope,$http) {
						$scope.homeList = [{
								
								homes: ["i的小区"]
							},
							{
								
								homes: ["升龙国际小区"]
							},
							{
								
								homes: ["雅星盛世小区"]
							},

							{
								
								homes: ["曼哈顿小区"]
							},

							{
								
								citys: ["花卉市场小区"]
							},
							{
								
								homes: ["陈寨小区"]
							},

							{
								homes: ["省政府小区"]
							},

							{
								
								homes: ["未来花园小区"]
							},

							{
							
								homes: ["陈寨小区"]
							},

							{
							
								homes: ["文博广场小区"]
							},

							{
								
								homes: ["新通桥小区"]
							},

							{
								
								homes: ["燕庄小区"]
							},

							]
								
						$scope.goShow=function(home){
	                     localStorage.setItem("home",home);
		            	  $scope.goState("regs",null)
		           
	}
						}])

.controller("myCity", ["$scope", "$http", function($scope,$http) {
						$scope.cityList = [{
								key: "A",
								citys: ["安徽"]
							},
							{
								key: "B",
								citys: ["北京"]
							},
							{
								key: "C",
								citys: ["重庆"]
							},

							{
								key: "F",
								citys: ["福建"]
							},

							{
								key: "G",
								citys: ["广东","甘肃"]
							},
							{
								key: "H",
								citys: ["湖南","湖北","河南","河北","海南","黑龙江"]
							},

							{
								key: "J",
								citys: ["江西", "江苏"]
							},

							{
								key: "L",
								citys: ["辽宁"]
							},

							{
								key: "N",
								citys: ["内蒙古"]
							},

							{
								key: "Q",
								citys: ["青海"]
							},

							{
								key: "S",
								citys: ["山东", "山西", "陕西", "上海"]
							},
 
							{
								key: "X",
								citys: ["新疆", "西藏"]
							},

							]
						$scope.goCity=function(){
	
		          $scope.goState("citys",null)
		
	}
}])
.controller("myCitys", ["$scope", "$http", function($scope,$http) {
						$scope.cityList = [{
								
								citys: ["河南省"]
							},
							{
								
								citys: ["巩义"]
							},
							{
								
								citys: ["开封"]
							},

							{
								
								citys: ["登封"]
							},

							{
								
								citys: ["郑州"]
							},
							{
								
								citys: ["南阳"]
							},

							{
								citys: ["周口"]
							},

							{
								
								citys: ["安阳"]
							},

							{
							
								citys: ["驻马店"]
							},

							{
							
								citys: ["新乡"]
							},

							{
								
								citys: ["焦作"]
							},

							{
								
								citys: ["信阳"]
							},

							]
								$scope.goArea=function(){
								$scope.goState("area",null)
								}
}])
.controller("myArea", ["$scope", "$http", function($scope,$http) {
						$scope.cityList = [{
								
								citys: ["河南省郑州市"]
							},
							{
								
								citys: ["二七区"]
							},
							{
								
								citys: ["金水区"]
							},

							{
								
								citys: ["管城区"]
							},

							{
								
								citys: ["中原区"]
							},
							{
								
								citys: ["陈寨小区"]
							},

							{
								citys: ["郑州东区"]
							},

							{
								
								citys: ["上街区"]
							},

							{
							
								citys: ["惠济区"]
							},

							{
							
								citys: ["经济开发区"]
							},

							{
								
								citys: ["高新区"]
							},

							{
								
								citys: ["航空港区"]
							},

							]
						        $scope.goHome=function(){
								$scope.goState("home",null)
								}
						}])
.controller("regs",function($scope){
	console.log(123);
	console.log(localStorage.getItem("home"));
	if(localStorage.getItem("home")){
		$scope.xiaoqu = localStorage.getItem("home");
	};
	
})
.controller("show",function($scope){
	console.log(123);
//	console.log(localStorage.getItem("home"));
	if(localStorage.getItem("home")){
		$scope.area = localStorage.getItem("home");
	};
	console.log($scope.area)
	
})