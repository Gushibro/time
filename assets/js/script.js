
  const playBtn = document.getElementById('playButton');
  const video = document.getElementById('journeyVideo');

  playBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playBtn.style.display = 'none';
    } else {
      video.pause();
      playBtn.style.display = 'flex';
    }
  });

  video.addEventListener('ended', () => {
    playBtn.style.display = 'flex';
  });
  // ********** Vision Section Scroll Animation **********
  const visionSection = document.getElementById('vision');

  const observerOptions = {
    // Sets the threshold to 0.2, meaning the callback fires when 20% of the element is visible.
    threshold: 0.2
  };

  const visionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // The entry.isIntersecting is true when the element's visibility ratio reaches the threshold (0.2)
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        // Removes the visible class when it scrolls out of the 20% range (up or down).
        entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  // Start observing the target element
  if (visionSection) {
    visionObserver.observe(visionSection);
  }
// ***************************************************
// ********** Hall of Fame Logic **********

// Sample Data (replace with your actual data source)
const donorData = [
    { name: "Iron Man", amount: 15000 },
    { name: "Captain America", amount: 2000 }, // Should be Rank 1
    { name: "Thor", amount: 1000000 },
    { name: "Black Widow", amount: 4500000 },
    { name: "Hulk", amount: 9000 },
    { name: "Hawkeye", amount: 5000 },
    { name: "Loki", amount: 3000 },
    { name: "Thanos", amount: 100 },
];

function renderHallOfFame() {
    // 1. Sort the data in descending order by amount
    donorData.sort((a, b) => b.amount - a.amount);

    const topThree = donorData.slice(0, 3);
    const remainingDonors = donorData.slice(3);

    const cardContainer = document.getElementById('hallOfFameContainer');
    const tableBody = document.getElementById('remainingDonorsTable').getElementsByTagName('tbody')[0];
    
    // Clear previous content
    cardContainer.innerHTML = '';
    tableBody.innerHTML = '';

    // 2. Render Top 3 Cards
    topThree.forEach((donor, index) => {
        const rank = index + 1;
        const card = document.createElement('div');
        card.classList.add('hof-card', `rank-${rank}`);
        
        // Use a different class for the name only for rank 1 (gold text)
        const nameClass = rank === 1 ? 'hof-name' : '';
        
        card.innerHTML = `
            <small>#${rank}</small>
            <div class="${nameClass}">${donor.name}</div>
            <div class="hof-amount">$${donor.amount.toLocaleString()}</div>
        `;
        cardContainer.appendChild(card);
    });

    // 3. Render Remaining Donors Table
    remainingDonors.forEach((donor, index) => {
        const rank = 4 + index;
        const row = tableBody.insertRow();
        
        row.innerHTML = `
            <th scope="row">${rank}</th>
            <td>${donor.name}</td>
            <td>$${donor.amount.toLocaleString()}</td>
        `;
    });
}

// Call the function to display the Hall of Fame when the page loads
renderHallOfFame();
// ***************************************************

for (let i = 0; i < 20; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.animationDuration = (5 + Math.random() * 10) + 's';
  particle.style.animationDelay = Math.random() * 5 + 's';
  document.body.appendChild(particle);
}