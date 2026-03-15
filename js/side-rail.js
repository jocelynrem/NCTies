document.addEventListener('DOMContentLoaded', () => {
  const mobileQuery = window.matchMedia('(max-width: 991.98px)');

  document.querySelectorAll('.side-rail').forEach((rail) => {
    const button = rail.querySelector('.side-rail-toggle');

    if (!button) {
      return;
    }

    const syncState = () => {
      if (!mobileQuery.matches) {
        rail.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
        return;
      }

      button.setAttribute(
        'aria-expanded',
        rail.classList.contains('is-open') ? 'true' : 'false'
      );
    };

    button.addEventListener('click', () => {
      if (!mobileQuery.matches) {
        return;
      }

      rail.classList.toggle('is-open');
      syncState();
    });

    if (typeof mobileQuery.addEventListener === 'function') {
      mobileQuery.addEventListener('change', syncState);
    } else if (typeof mobileQuery.addListener === 'function') {
      mobileQuery.addListener(syncState);
    }

    syncState();
  });
});
