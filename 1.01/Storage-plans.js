document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('chart').getContext('2d');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Used', 'Free'],
            datasets: [{
                label: '% of storage usage',
                data: [10, 100],
                backgroundColor: ['blue', 'lightblue'],
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });
});
