google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart2);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ['', 20],
        ['Estoque', 80]
    ]);

    var options = {
        pieHole: 0.5,
        pieSliceTextStyle: {
            color: 'black',
        },
        legend: 'none',
        backgroundColor: 'transparent'
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
    chart.draw(data, options);
}

function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Dia', 'Clientes'],
        ['Domingo', 33],
        ['Segunda', 20],
        ['Terça', 18],
        ['Quarta', 22],
        ['Quinta', 23],
        ['Sexta', 30],
        ['Sábado', 40]
    ]);

    var options = {
        legend: 'none',
        backgroundColor: 'transparent'
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}