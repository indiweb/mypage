






	function Layout () {

		this.blogLink = "#blog-link";
		this.homeMain = "#home-main";
	}


	Layout.prototype.blogLink = function(){
		_this=this;
		$(_this.blogLink).on("click", function(){
			$(_this.homeMain).hide();
		});
	}