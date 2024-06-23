
export async function postAndRetrieve(url, data, result = 'json') {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    let responseData;
    if (result === 'json') {
      responseData = await response.json();
    } else if (result === 'text') {
      responseData = await response.text();
    }
    return responseData;
  } catch (error) {
    throw new Error('The following error occurred: ' + error)
  }
}
