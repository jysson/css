var containUl = document.getElementById("containUl");
var myLi = containUl.getElementsByClassName("on");
for(var i=0; i<myLi.length; i++) {
	myLi[i].index = i;
	var c = -1;
	myLi[i].onclick = function() {
		for(var j=0; j<myLi.length; j++) {
			myLi[j].style.height = 40 + "px";
			myLi[j].getElementsByTagName("span")[0].classList.remove("colorC");
			myLi[j].getElementsByTagName("i")[0].classList.remove("colorC");
			myLi[j].getElementsByTagName("i")[0].style.transform = "rotate(0deg)";
		}
		var l = this.getElementsByTagName("li").length;
		if(c != this.index) {
			this.style.height = (l+1)*40 + "px";
			this.getElementsByTagName("span")[0].classList.add("colorC");
			this.getElementsByTagName("i")[0].classList.add("colorC");
			this.getElementsByTagName("i")[0].style.transform = "rotate(180deg)";
		}else {
			this.style.height = 40 + "px";
			this.getElementsByTagName("span")[0].classList.remove("colorC");
			this.getElementsByTagName("i")[0].classList.remove("colorC");
			this.getElementsByTagName("i")[0].style.transform = "rotate(0deg)";
		}
		c = this.index;
	}
}
