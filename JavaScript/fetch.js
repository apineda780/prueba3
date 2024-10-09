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

const informacion = `<tr>
    <td><strong>Nombre</strong>${names}</td>
    <td><strong>Apellido</strong>${lastname}</td>
    <td><strong>Tipo de Identificación</strong>${typesValue}</td>
    <td><strong>Número de Identificación</strong>${number}</td>
    <td><strong>Correo Electrónico</strong>${email}</td>
    <td><strong>Número de Contacto</strong>${cellphone}</td>
    <td><strong>Género</strong>${genderValue}</td>
`;

document.getElementById('resultado').innerHTML = informacion;
document.getElementById('formulario').reset();


}