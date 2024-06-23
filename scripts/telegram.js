import { getTelegramMessage, getTelegramCommand } from "./telegram_updates.js";
import { postAndRetrieve } from "../utils/general.js";

const form = document.getElementById('form-to-aws');
const successMessage = document.querySelector('.success-message');
const lastRecordsButton = document.querySelector('.js-last-records');
const textArea = document.querySelector('.js-text-area');


//ENDPOINT
function buildUrl() {
  const urlCode = document.getElementById('url-code').value;
  const last = urlCode.substr(-2);
  const apiEndpoint = `https://iek42z${last}tm4ip27cnkf4bw3${urlCode.substr(0, 3)}0dzpyd.lambda-url.eu-central-1.on.aws/`
  return apiEndpoint
}


function showSuccessCheckmark() {
  const checkmark = document.getElementById('success-checkmark');
  checkmark.style.display = 'block';
  setTimeout(() => {
    checkmark.classList.add('fade-out');
    setTimeout(() => {
      checkmark.style.display = 'none';
      checkmark.classList.remove('fade-out');
    }, 500); // This should match the transition duration
  }, 2000);
}


form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const description = document.getElementById('row-desc').value;
  const cost = document.getElementById('row-cost').value;
  const urlCode = document.getElementById('url-code').value;

  if (description && cost && urlCode) {
    const concatenatedMessage = `${description} ${cost}`;
    const updateObject = getTelegramMessage(concatenatedMessage);

    try {
      const responseData = await postAndRetrieve(buildUrl(), updateObject, 'text');
      console.log(responseData);
      updateSuccessMessage(responseData, description, cost, 'green');
    } catch (error) {
      updateSuccessMessage(error.message, '', '', 'red');
    }
  } else {
    updateSuccessMessage('Please fill out all fields.', '', '', 'red');
  }
});

function updateSuccessMessage(message, description, cost, color) {
  console.log(description + cost)
  successMessage.textContent = message + ' ' + description + ' ' + cost;
  successMessage.style.color = color;
}


lastRecordsButton.addEventListener('click', async (event) => {
  event.preventDefault()
  try {
    const responseData = await postAndRetrieve(buildUrl(), getTelegramCommand('last_records'),'text')
    console.log(responseData);
    if (responseData === 'Success') {
      showSuccessCheckmark();
    }
  } catch (error) {
    textArea.textContent = 'Error: ' + error.message;
    setTimeout(() => textArea.textContent = "", 2000)
  }
}
);

