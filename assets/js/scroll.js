gsap.defaultEase = Linear.easeNone;
		
		var controller = new ScrollMagic.Controller();
		var tl = gsap.timeline();

		tl.to("#js-slideContainer", {duration: 1, xPercent: 0 }, "label1");
		tl.to("#js-slideContainer", {duration: 1, xPercent: -25 }, "label2");



		new ScrollMagic
		.Scene({
		triggerElement: "#js-wrapper",
		triggerHook: "onLeave",
		duration: "150%"

		})
		.setPin("#js-wrapper")
		.setTween(tl)
		.addIndicators({
			colorTrigger: "white",
			colorStart: "white",
			colorEnd: "white"
		})
		.addTo(controller);