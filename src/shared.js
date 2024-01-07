document.addEventListener('DOMContentLoaded', () => {
  highlightSidebar();
  handleSidebar();
});

function highlightSidebar() {
  const current_url = window.location.href.split(/#|\?/)[0].replace(/\/$/, "");
  const sidebar_links = document.querySelectorAll("#sidebar a");
  for (const link of sidebar_links) {
    const href = link.href.split(/#|\?/)[0].replace(/\/$/, "");
    if (href === current_url) {
      link.parentElement.classList.add("here");
    }
  }
}

function handleSidebar() {
  const sidebar_toggle = document.querySelector('#sidebar-toggle-icon');
  const sidebar = document.querySelector('#sidebar');
  let sidebar_open = !isMobile();
  sidebar_toggle.addEventListener('click', () => {
    sidebar_open = !sidebar_open;
    if (sidebar_open) {
      openSidebar(0.3);
    }
    else {
      closeSidebar(0.3);
    }
  });

  if (sidebar_open) {
    openSidebar(0);
  }
  else {
    closeSidebar(0);
  }

  const current_page_item = document.querySelector('#sidebar .here');
  if (current_page_item && !isVisible(current_page_item)) {
    current_page_item.scrollIntoView({ behavior: 'instant' });
  }
}

function openSidebar(duration) {
  const sidebar = document.querySelector('#sidebar');
  const dummy = document.querySelector('#sidebar-dummy');
  sidebar.hidden = false;
  gsap.to(dummy, {
    duration: duration,
    ease: 'power2.out',
    "--sidebar-width": '200px',
  });
}

function closeSidebar(duration) {
  const sidebar = document.querySelector('#sidebar');
  const dummy = document.querySelector('#sidebar-dummy');
  gsap.to(dummy, {
    duration: duration,
    ease: 'power2.out',
    "--sidebar-width": '0px',
    onComplete: () => {
      sidebar.hidden = true;
    }
  });
}

function isMobile() {
  return window.matchMedia('(max-width: 768px)').matches;
}

function isVisible(element) {
  if (!element) return false;
  var rect = element.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
