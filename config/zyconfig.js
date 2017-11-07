myApp.config(["$httpProvider",function($httpProvider){
	// 将post传入的对象形式数据转换为 url编码形式  username=zmm&password=zmm123
	// encodeURIComponent 将字符串特殊格式如中文转换我url编码
	// 如 %E5%A4%A9%E5%A4%A9%E5%88%A9=天天利
	$httpProvider.defaults.transformRequest=function(obj){
        var str=[];
        for(var p in obj){
           str.push(encodeURIComponent(p)+"="+encodeURIComponent(obj[p]));
        }
        return str.join("&");
       
    };
    $httpProvider.defaults.withCredentials=true;
    // 服务端允许跨域  但是本地cookie不会被发送过去，这句话的意思是 发生数据并带cookie（跨域）
          
  $httpProvider.defaults.headers.post={
      'Content-Type':'application/x-www-form-urlencoded'
  }
  // post 格式用url编码
}])
