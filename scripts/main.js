setInterval(createSnowflake, 100);

function createSnowflake() {
	const snow_flake = document.createElement('i');
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');
	snow_flake.style.left = Math.random() * window.innerWidth - 30 + 'px';
	snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';
	snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
	snow_flake.style.opacity = Math.random();


	document.body.appendChild(snow_flake);

	setTimeout(() => {
		snow_flake.remove();
	}, 5000)
}