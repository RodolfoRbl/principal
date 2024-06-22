
const form = document.getElementById('form-to-aws');
const successMessage = document.querySelector('.success');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const description = document.getElementById('row-desc').value;
  const cost = document.getElementById('row-cost').value;
  const urlCode = document.getElementById('url-code').value;
  const last = urlCode.substr(-2);
  const apiEndpoint = `https://iek42z${last}tm4ip27cnkf4bw3${urlCode.substr(0,3)}0dzpyd.lambda-url.eu-central-1.on.aws/`

  if (description && cost && urlCode) {
    const concatenatedMessage = `${description} ${cost}`;

    const updateObject = {
      update_id: Math.floor(Math.random() * 1000000),
      message: {
        message_id: Math.floor(Math.random() * 1000000),
        from: {
          id: 458923115, // Your bot or user ID here
          is_bot: false,
          first_name: "R",
          username: "rr_01_rr"
        },
        chat: {
          id: 458923115, // Your chat ID here
          first_name: "R",
          username: "rr_01_rr",
          type: "private"
        },
        date: Math.floor(Date.now() / 1000),
        text: concatenatedMessage
      }
    };

    try {
      const response = await fetch(apiEndpoint, {
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