// DOM Selections
const TextInput = document.getElementById('text-input');
const TextOutput = document.getElementById('text-output');
const boldBtn = document.getElementById('bold');
const italicBtn = document.getElementById('italic');
const underline = document.getElementById('underline');
const leftAlign = document.getElementById('left-align');
const centeralign = document.getElementById('center-align');
const rightAlign = document.getElementById('right-align');



// Event Listeners
TextInput.addEventListener('keyup', updateText);

boldBtn.addEventListener('click',makeBold);
italicBtn.addEventListener('click', makeItalic);
underline.addEventListener('click', makeUnderline);
leftAlign.addEventListener('click', makeaTextAlignLeft);
centeralign.addEventListener('click', makeaTextAlignCenter);
rightAlign.addEventListener('click', makeaTextAlignRight);


function updateText() {
TextOutput.innerText = TextInput.value;
}



function makeBold() {
  //CODE GOES HERE
  TextOutput.classList.toggle('bold');
}



function makeItalic() {
   TextOutput.classList.toggle('italic');
}

function makeUnderline() {
  //CODE GOES HERE
   TextOutput.classList.toggle('underline');
}

function makeaTextAlignRight() {
  // CODE GOES HERE
  //  TextOutput.classList.toggle('align-right');
   TextOutput.className = 'bg-light align-right';
}
function makeaTextAlignCenter() {
  // CODE GOES HERE
  // TextOutput.classList.toggle('align-center');
  TextOutput.className = 'bg-light align-center';
}
function makeaTextAlignLeft() {
  // CODE GOES HERE
  // TextOutput.classList.toggle('align-left');
  TextOutput.className = 'bg-light align-left';
}

