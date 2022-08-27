const circularProgress = document.querySelectorAll('.circular-progress');
const num = document.querySelector('.num');

// This isWorking object will be used to track if the animation is running. Will be used to prevent glitches.
var isWorking = {working: false};

const options = {
  root: null,
  threshold: 0.5, 
  rootMargin: "0px",
}

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
		if (isWorking.working == false) {
			console.log("y")
			isWorking.working = true;
			animateProgress();
		}
	} 
  })
}, options)

// Creating circular progress bar animation
// Pass the isWorking object and the receiving element
observer.observe(num);

function animateProgress() {
	circularProgress.forEach(item => {
		let numElement = item.querySelector('.num');
		let num = parseInt(numElement.innerText);
		let count = 0;
		let time = 2000 / num;
		let circle = item.querySelector('.circle');
		setInterval(() => {
			if(count == num){
			clearInterval();
			} else {
			count += 1;
			numElement.innerText = count;
			}
		}, time)
		circle.style.strokeDashoffset = 503 - ( 503 * ( num / 100 ));
		let dots = item.querySelector('.dots');
		dots.style.transform = 
			`rotate(${360 * (num / 100)}deg)`;
	});
	isWorking.working = false;

}
