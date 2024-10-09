function capturarDatos() {
    const nombre = document.getElementById('names').value;
    const lastname = document.getElementById('lastname').value;
    let types = document.querySelector('#types');
    let typesValue = types.value;
    

    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const cellphone = document.getElementById('cellphone').value;
    let gender = document.querySelector('#gender');
    let genderValue = gender.value;
    const formulario =  document.getElementById('formulario').textContent;

const informacion = `${formulario}
    <p><strong>Nombre</strong>${names}</p>
    <p><strong>Apellido</strong>${lastname}</p>
    <p><strong>Tipo de Identificación</strong>${typesValue}</p>
    <p><strong>Número de Identificación</strong>${number}</p>
    <p><strong>Correo Electrónico</strong>${email}</p>
    <p><strong>Número de Contacto</strong>${cellphone}</p>
    <p><strong>Género</strong>${genderValue}</p>
`;

document.getElementById('resultado').innerHTML = informacion;
document.getElementById('formulario').reset();


}