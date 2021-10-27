const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider,{
	indicators: false,
	height: 500,
	duration: 3000,
	interval: 3000
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

const materialboxx = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialboxx);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll,{
	scrollOffset: 50
});
