
function printStudentData() {
    const name = document.getElementById("name").value;
    const num = document.getElementById("num").value;
    const email = document.getElementById("mail").value;

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    )?.value || "";

    const year = document.getElementById("Year").value;
    const date = document.getElementById("date").value;
    const semester = document.getElementById("term").value;

    const image = document.querySelector("#preview-container img");
    const imageSrc = image ? image.src : "";

    // التحقق من صحة البيانات المطلوبة
    const form = document.querySelector("fieldset").closest("body")
        .querySelector("form");

    if (!name || !num || !email || !gender || !date) {
        alert("Please fill in the required fields.");
        return;
    }

    // فتح صفحة جديدة
    const newPage = window.open("", "_blank");

    if (!newPage) {
        alert("Please allow pop-ups for this website.");
        return;
    }

    newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Student Information</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 40px;
                }
                h2 {
                    text-align: center;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid black;
                    padding: 12px;
                    text-align: left;
                }
                th {
                    background: #eee;
                    width: 35%;
                }
                img {
                    display: block;
                    max-width: 180px;
                    max-height: 200px;
                    margin: 20px auto;
                }
                @media print {
                    .no-print {
                        display: none;
                    }
                }
            </style>
        </head>
        <body>
            <h2>Student Information</h2>

            ${imageSrc ? `<img src="${imageSrc}" alt="Student Photo">` : ""}

            <table>
                <tr><th>Student Name</th><td>${escapeHTML(name)}</td></tr>
                <tr><th>National ID</th><td>${escapeHTML(num)}</td></tr>
                <tr><th>Email</th><td>${escapeHTML(email)}</td></tr>
                <tr><th>Gender</th><td>${escapeHTML(gender)}</td></tr>
                <tr><th>Year</th><td>${escapeHTML(year)}</td></tr>
                <tr><th>Date of Birth</th><td>${escapeHTML(date)}</td></tr>
                <tr><th>Semester</th><td>${escapeHTML(semester)}</td></tr>
            </table>

            <br>
            <button class="no-print" onclick="window.print()">
                Print Student Data
            </button>
        </body>
        </html>
    `);

    newPage.document.close();
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}
