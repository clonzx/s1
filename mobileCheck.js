function MobileCheck() {
      var isMobile={
	  Android:function(){
		  return navigator.userAgent.match(/Android/i);
		},
	  iOS:function(){
		  return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
	  BlackBerry:function(){
		  return navigator.userAgent.match(/BlackBerry/i);
		},
	  Opera:function(){
		  return navigator.userAgent.match(/Opera Mini/i);
		},
	  Windows:function(){
		  return navigator.userAgent.match(/IEMobile/i);
		},

	  any:function(){
		  return (isMobile.Android()||isMobile.iOS()||isMobile.BlackBerry()||isMobile.Opera()||isMobile.Windows());
		},
	}
      var gk=document.getElementById("webglContent");
      var mk=document.getElementById("mobileContainer");
      var ns=document.getElementById("notSupported");
      if (isMobile.any()){
	if (!isMobile.Android()){
	  if (mk) mk.style.display = "none";
        }else{
	  if (ns) ns.style.display = "none";
	}
	return null;
      }else{
	 if (ns) ns.style.display = "none";
	 if (gk) gk.style.display = "inline";
      	 var gameInstance = UnityLoader.instantiate("gameContainer", "https://clonzx.github.io/s1/Build/BntGL.json", {onProgress: UnityProgress});
	 if (mk) mk.style.display = "none";
	 return gameInstance;
      }
}