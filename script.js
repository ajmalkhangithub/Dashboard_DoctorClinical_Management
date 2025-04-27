      
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('active');
}

const ctx = document.getElementById('statusChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Active', 'Recovered', 'In Treatment', 'Critical'],
    datasets: [{
      data: [30, 45, 20, 5],
      backgroundColor: ['#3b82f6', '#10b981', '#facc15', '#ef4444']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});
