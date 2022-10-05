const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
arrows.forEach((arrow, i) => {
	const x = Math.floor(window.innerWidth / 260);
	const itemNumber = movieLists[i].querySelectorAll("img").length;
	let count = 0;
	arrow.addEventListener("click", () => {
		count++;
		if (itemNumber - (4 + count) + (4 - x) >= -1) {
			movieLists[i].style.transform = `translateX(${
				movieLists[i].computedStyleMap().get("transform")[0].x.value - 290
			}px)`;
		} else {
			movieLists[i].style.transform = "translateX(0)";
			count = 0;
		}
	});

	console.log(x);
});

// TOGGLE settings
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
	".container,.movie-list-title,.navbar-container,.sidebar,.movie-list-item-title,.movie-list-item-desc,.left-menu-icon,.toggle,.featured-content-1,.featured-content-2,.featured-title-desc"
);

ball.addEventListener("click", () => {
	items.forEach((item) => {
		item.classList.toggle("active");
	});
	ball.classList.toggle("active");
});
