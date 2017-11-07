myApp.factory("$userData",["$http",function($http){
	return {
		//获取用户信息
		getUser:function(callback){ 
			var that=this;      //谁调用此函数 谁就是this
			$http.get("http://www.520mg.com/member/ajax_login.php")
				.success(function(data){
					that.user=data;   //把得到的数据赋给此函数的调用者的属性user
					//即把自定义服务中 getUser方法中获取的数据 赋给服务中的user属性
//					nick=data; //???  如何换一种传data的方式
					if(callback){callback()} //如果存在回调函数 就执行回调函数
				})
		},
		user:{}
	}
}])
