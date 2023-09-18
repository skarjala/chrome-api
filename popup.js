function performOCR() {
  const fileInput = document.getElementById('imageInput');
  const resultDiv = document.getElementById('result');

  const file = fileInput.files[0];
  if (!file) {
    resultDiv.innerText = 'Please select an image.';
    return;
  }

  const formData = new FormData();
  formData.append('image', file);

  fetch('http://localhost:5000/', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    resultDiv.innerText = 'OCR Result:\n' + data.result;
  })
  .catch(error => {
    resultDiv.innerText = 'Error: ' + error.message;
  });
}
