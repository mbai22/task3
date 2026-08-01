const API_URL = 'https://jsonplaceholder.typicode.com/users';

const fallbackUsers = [
  {
    id: 1,
    name: 'Sofia Martin',
    email: 'sofia@chelka.fr',
    city: 'Paris',
    company: { name: 'Finance & Co' },
  },
  {
    id: 2,
    name: 'Nabil Benali',
    email: 'nabil@chelka.fr',
    city: 'Lyon',
    company: { name: 'Nexa Invest' },
  },
  {
    id: 3,
    name: 'Lina Dubois',
    email: 'lina@chelka.fr',
    city: 'Marseille',
    company: { name: 'Immo Plus' },
  },
  {
    id: 4,
    name: 'Omar Haddad',
    email: 'omar@chelka.fr',
    city: 'Nice',
    company: { name: 'BlueStone' },
  },
];

const clientsGrid = document.getElementById('clientsGrid');
const transactionsBody = document.getElementById('transactionsBody');
const apiStatus = document.getElementById('apiStatus');

function renderUsers(users) {
  clientsGrid.innerHTML = users
    .slice(0, 6)
    .map((user, index) => {
      const initials = user.name
        .split(' ')
        .slice(0, 2)
        .map((part) => part[0])
        .join('');

      const tags = [
        index % 2 === 0 ? 'Premium' : 'Business',
        user.company?.name?.split(' ')[0] || 'Client',
      ];

      return `
        <article class="client-card">
          <div class="client-meta">
            <div class="avatar" aria-label="initiales du client">${initials}</div>
            <div>
              <h3>${user.name}</h3>
              <div class="client-email">${user.email}</div>
            </div>
          </div>

          <div>
            <div class="client-city"><i class="fa-solid fa-location-dot"></i> ${user.city}</div>
          </div>

          <div class="client-tags">
            ${tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </article>
      `;
    })
    .join('');
}

function renderTransactions(users) {
  const movements = users.slice(0, 5).map((user, index) => {
    const type = index % 2 === 0 ? 'Virement' : 'Carte';
    const amount = index % 2 === 0 ? `+ €${(120 + index * 48).toFixed(2)}` : `- €${(35 + index * 22).toFixed(2)}`;

    return `
      <tr>
        <td>${user.name}</td>
        <td>${user.city}</td>
        <td>${type}</td>
        <td class="amount">${amount}</td>
      </tr>
    `;
  });

  transactionsBody.innerHTML = movements.join('');
}

async function loadClients() {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Réponse réseau invalide');
    }

    const data = await response.json();
    renderUsers(data);
    renderTransactions(data);
    apiStatus.textContent = 'API connectée';
  } catch (error) {
    console.error('Erreur de chargement API:', error);
    renderUsers(fallbackUsers);
    renderTransactions(fallbackUsers);
    apiStatus.textContent = 'Données locales';
  }
}

document.addEventListener('DOMContentLoaded', loadClients);
