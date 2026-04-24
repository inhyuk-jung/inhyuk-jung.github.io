document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for reveal animations
  const revealElements = document.querySelectorAll('.reveal');

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once revealed, no need to observe again
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.15
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for fixed nav height
          behavior: 'smooth'
        });
      }
    });
  });

  // Dynamic navbar background adjustment
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.style.padding = '0.8rem 0';
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
      } else {
        nav.style.padding = '1.5rem 0';
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
      }
    });
  }

  // Project data rendering (for apps/index.html)
  const projectListContainer = document.getElementById('project-list-container');
  if (projectListContainer) {
    const projects = [
      {
        url: 'screwtape_letters.html',
        name: '스크루테이프의 편지',
        desc: '나를 무너뜨리기 위한 악마의 밀서 확인하기',
        icon: '../assets/images/apps/screwtape_letters_logo.png',
        tags: ['Web']
      },
      {
        url: 'noah.html',
        name: '노아 (Noah)',
        desc: '기도 시간 기록 및 기도 제목 관리',
        icon: 'https://play-lh.googleusercontent.com/x0MXHIjbMIDrplaxoKvVKtlYaqzGiVC6at2_m_fWEMOTn6EftuWMMmaffva-XkztvpE=s128-rw',
        tags: ['Android', 'iOS']
      },
      {
        url: 'ruach.html',
        name: '루아 (Ruach)',
        desc: '신앙 습관 만들기',
        icon: 'https://play-lh.googleusercontent.com/p2rX1ickD6SNd-TKpmgrMSNBml_WLinMIv_eK1Kcwubj_Gsya7UDwZ_cxyCuy7v6yhVFrpJiF6eC1QlYAI9UTb0=s128-rw',
        tags: ['Android', 'iOS']
      },
      {
        url: 'etham.html',
        name: '에담 (Etham)',
        desc: '가정예배 길잡이',
        icon: 'https://play-lh.googleusercontent.com/hO7hYq8i9u2RRYzLZqCwbJdixAbsT1lmWyQGY8VmJJbiJAfvM64FPwkeRDHSOEpZog4=s128-rw',
        tags: ['Android', 'iOS']
      },
      {
        url: 'tonetune.html',
        name: '턴톤 (ToneTune)',
        desc: '말투를 바꿔주는 똑똑한 AI 비서',
        icon: 'https://play-lh.googleusercontent.com/MpsYKBpuXABBRrnh_XOHA1nAitnTrHjDWZNRTvXoqI54-TtGqv4Gk64C8qIadL_cHeBkbUWx4Zj8Q_bOXC1oi7s=s128-rw',
        tags: ['Android', 'iOS']
      },
      {
        url: 'code2art.html',
        name: 'Code2Art',
        desc: '코드를 예술 작품으로 변환하는 프로젝트',
        icon: null,
        tags: ['GitHub']
      },
      {
        url: 'tov.html',
        name: '토브 (Tov)',
        desc: '직접 만드는 말씀카드',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/6f/3e/28/6f3e28a1-81da-e825-5bce-d9bb0ca47cd3/AppIcon-1x_U007emarketing-0-5-0-0-85-220.png/400x400ia-75.webp',
        tags: ['iOS']
      }
    ];

    projectListContainer.innerHTML = projects.map(p => `
      <a href="${p.url}" class="card-link">
          <div class="project-item">
              ${p.icon
        ? `<img src="${p.icon}" alt="${p.name} Icon" class="project-icon">`
        : `<div class="project-icon-placeholder">C2A</div>`}
              <div class="project-info">
                  <h3>${p.name}</h3>
                  <p>${p.desc}</p>
                  <div class="project-tags">
                      ${p.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                  </div>
              </div>
              <div class="project-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
          </div>
      </a>
    `).join('');
  }
});
