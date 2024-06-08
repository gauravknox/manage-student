const form = document.getElementById('studentForm');
const tableBody = document.getElementById('studentTableBody');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const phone = document.getElementById('phone').value;
    const grades = document.getElementById('grades').value;
    const email = document.getElementById('email').value;

    const row = `
        <tr>
            <td>${name}</td>
            <td>${fatherName}</td>
            <td>${phone}</td>
            <td>${grades}</td>
            <td>${email}</td>
        </tr>
    `;

    tableBody.insertAdjacentHTML('beforeend', row);
    form.reset();
});
