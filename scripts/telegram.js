import { getTelegramMessage, getTelegramCommand} from "../utils/telegram_updates.js";

const form = document.getElementById('form-to-aws');
const successMessage = document.querySelector('.success');
const lastRecordsButton = document.querySelector('.js-last-records');

//ENDPOINT
function buildUrl () {
const urlCode = document.getElementById('url-code').value;
const last = urlCode.substr(-2);
const apiEndpoint = `https://iek42z${last}tm4ip27cnkf4bw3${urlCode.substr(0,3)}0dzpyd.lambda-url.eu-central-1.on.aws/`
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
      const response = await fetch(buildUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateObject)
      });
      
      if (response.ok) {
        const responseData = await response.text();
        console.log(responseData);
        successMessage.textContent = responseData + ' ' + description + ' ' + cost;
        successMessage.style.color = 'green';
      } else {
        successMessage.textContent = 'Failed to send message.';
        successMessage.style.color = 'red';
      }
    } catch (error) {
      successMessage.textContent = 'Error: ' + error.message;
      successMessage.style.color = 'red';
    }
  } else {
    successMessage.textContent = 'Please fill out all fields.';
    successMessage.style.color = 'red';
  }
});


lastRecordsButton.addEventListener('click', async () => {
  
  const updateObject = getTelegramCommand('last_records');
  try {
  const response = await fetch(buildUrl(),{
    method: 'POST',
    headers:  {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateObject)
  });

  const responseData = await response.text();
  console.log(responseData);
  if (responseData === 'Success') {
    showSuccessCheckmark();
  }

} catch (error) {
  textArea.textContent = 'Error: ' + error.message;
  setTimeout(() => textArea.textContent = "",1000)
}
}
);

