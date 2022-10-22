const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })
  if (response.ok) {
    this.reset()
    alert('Gracias por contactarte con nostros, te responderemos a la brevedad')
  }
}

function validateForm() {
  var a = document.forms["Form"]["nombre"].value;
  var b = document.forms["Form"]["email"].value;
  var c = document.forms["Form"]["mensaje"].value;
  if (a == null || a == "", b == null || b == "", c == null || c == "") {
    alert("Por favor completa todos los campos");
    return false;
  }
}
