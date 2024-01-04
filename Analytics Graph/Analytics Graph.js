document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('chart').getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Morbi ligula', 'Scelersique' ,'praesent maecenas','Morbi ligl','ligual morbi'],
            datasets: [{
                label: 'Visitors per day %',
                data: [41, 29, 23, 4, 3],
                backgroundColor: ['rgb(144, 40, 144)', 'rgb(164, 81, 94)', 'rgb(251, 169, 16)', 'rgb(219, 219, 12)','rgb(37, 165, 120)'],
                borderWidth: 0.5,
                borderColor: 'black'
            }]
        },
        options: {
            cutout: '80%',
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });
});
