// Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') 
    ? 'Light Mode' 
    : 'Dark Mode';
});

// Show Details Function
function showDetails(type) {
  const title = document.getElementById('detailsTitle');
  const content = document.getElementById('detailsContent');
  const box = document.getElementById('detailsBox');

  const detailsData = {
    followers: 'You have 1,245 followers. That’s a 15% increase from last month.',
    posts: 'You have made 324 posts. Great consistency!',
    likes: 'Your posts have received a total of 4,512 likes.',
    messages: 'You have 56 unread messages. Stay in touch!'
  };

  title.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Details`;
  content.textContent = detailsData[type] || 'No data available.';
  box.style.display = 'block';
}

// Chart.js - Followers Over Time Example
const ctx = document.getElementById('followersChart').getContext('2d');
const followersChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Followers',
      data: [800, 950, 1000, 1100, 1200, 1245],
      backgroundColor: 'rgba(39, 174, 96, 0.2)',
      borderColor: '#27ae60',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointBackgroundColor: '#27ae60'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});
