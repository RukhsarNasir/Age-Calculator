let DateElement = document.getElementById("date");
let MonthElement = document.getElementById("month");
let YearElement = document.getElementById("year");
let Result = document.getElementById("result");

function calculateage() {
    let birthDate = new Date(`${YearElement.value}-${MonthElement.value}-${DateElement.value}`);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y3, m3, d3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        let prevMonth = new Date(y2, m2 - 1, 0);
        d3 = prevMonth.getDate() + d2 - d1;
    }

    console.log(d3, m3, y3);

    Result.innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old`;
}
