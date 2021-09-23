let xpForm = document.querySelector('.xpForm');
let levelSelect = document.querySelector('.selector');
let userText = document.querySelector('.userText');
let btnSubmit = document.querySelector('.submit');
let progress = document.querySelector('.progressCircle');
let adjustedLevel = document.querySelector('.adjustedLevel');
let progressText = document.querySelector('.ProgressText');
let whole = document.querySelector('.whole');
let calc = document.querySelector('.calc');
let totalProgress = document.querySelector('.totalProgress');
let resetbtn = document.querySelector('.resetBtn');
let percentText = document.querySelector('.percentText');
let circleTrans = document.querySelector('.circleTrans');


let level;
levelSelect.addEventListener('change', e => {
    level = e.path[0].value;
});

let xp = 0;
xpForm.addEventListener('keyup', e => {
    e.preventDefault();
    xp = e.path[0].value.trim().toLowerCase();
    if (xpForm.value === "") {
        xp = 0;
    }

});

btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    if (!level) {
        alert("please pick a level");
    } else {
        xpForm.innerHTML = `0`;
        setLevel(level);

    }
});

function separator(numb) { //adds commas to our total xp
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}


const setLevel = (Level) => { //check user level, set appropriate XP, add extra XP
    if (Level === `40`) {
        let total = parseInt(xp) + 20000000;
        updateUI(level, total);
    } else if (Level === `41`) {
        let total = parseInt(xp) + 26000000;
        updateUI(level, total);
    } else if (Level === `42`) {
        let total = parseInt(xp) + 33500000;
        updateUI(level, total);
    } else if (Level === `43`) {
        let total = parseInt(xp) + 42500000;
        updateUI(level, total);
    } else if (Level === `44`) {
        let total = parseInt(xp) + 53500000;
        updateUI(level, total);
    } else if (Level === `45`) {
        let total = parseInt(xp) + 66500000;
        updateUI(level, total);
    } else if (Level === `46`) {
        let total = parseInt(xp) + 82000000;
        updateUI(level, total);
    } else if (Level === `47`) {
        let total = parseInt(xp) + 100000000;
        updateUI(level, total);
    } else if (Level === `48`) {
        let total = parseInt(xp) + 121000000;
        updateUI(level, total);
    } else if (Level === `49`) {
        let total = parseInt(xp) + 146000000;
        updateUI(level, total);
    } else if (Level === `50`) {
        let total = parseInt(xp) + 176000000;
        updateUI(level, total);
    }
};

const updateUI = (Level, total) => {
    userText.textContent = `This Trainer is Level ${Level}, with a total xp of ${separator(total)}xp`;
    progressCalc(total);
    levelAdjust(total);
};

const levelAdjust = (total) => { //if total is less than or equal to level requiement - set it.
    console.log(total);
    if (total <= 25999999) {
        adjustedLevel.textContent = `This Trainer's ajusted level is 40`;
    } else if (total <= 33499999) {
        adjustedLevel.textContent = `This Trainer's ajusted level is 41`;
    } else if (total <= 42499999) {
        adjustedLevel.textContent = `This Trainer's ajusted level is 42`;
    } else if (total <= 53499999) {
        adjustedLevel.textContent = `This Trainer's ajusted level is 43`;
    } else if (total <= 66499999) {
        adjustedLevel.textContent = `This Trainer's ajusted level is 44`;
    } else if (total <= 81999999) {
        adjustedLevel.textContent = `This Trainer's ajusted level is 45`;
    } else if (total <= 99999999) {
        adjustedLevel.textContent = `This Trainer's ajusted level is 46`;
    } else if (total <= 120999999) {
        adjustedLevel.textContent = `This Trainer's ajusted level is 47`;
    } else if (total <= 145999999) {
        adjustedLevel.textContent = `This Trainer's ajusted level is 48`;
    } else if (total <= 175999999) {
        adjustedLevel.textContent = `This Trainer's ajusted level is 49`;
    } else if (total >= 176000000) {
        adjustedLevel.textContent = `This Trainer's ajusted level is 50`;
    }

};



const progressCalc = (total) => {
    let percent = Math.floor((total / 176000000) * 100); //calc total %
    let xpLeft = separator(176000000 - total);

    if (parseInt(xpLeft) <= 0) {
        progressText.innerHTML = `Enough XP for level 50!`;
    } else {
        progressText.innerHTML = `${xpLeft}xp left!`;

    }
    console.log(percent);

    circleTrans.innerHTML = `
        <div class="progress progressCircle mx-auto" data-value='${percent}'>
			<span class="progress-left">
						  <span class="progress-bar border-primary"></span>
			</span>
			<span class="progress-right">
						  <span class="progress-bar border-primary"></span>
			</span>
			<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
			  <div class="h2 font-weight-bold percentText">${percent}<sup class="small">%</sup></div>
			</div>
		  </div>`;


    whole.classList.add('d-none');
    totalProgress.classList.remove('d-none');

};


resetbtn.addEventListener('click', () => {
    whole.classList.remove('d-none');
    totalProgress.classList.add('d-none');


});

