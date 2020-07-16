const root = document.getElementById('root');

export default class Router {
  constructor (routes) {
    this.routes = routes;
    this.initEventListeners();
    this.renderPage(window.location.pathname);
  }

  initEventListeners () {
    document.addEventListener('click', event => {
      const { target } = event;
      const link = target.closest('a');

      // additional checking if this button is router button
      if (link && link.className === 'router') {
        const href = link.getAttribute('href');

        if (href.startsWith('/')) {
          event.preventDefault();

          history.pushState(null, null, href)

          this.renderPage(href);
        }
      }
    });

    window.addEventListener('popstate', event => {
      const { target } = event;
      this.renderPage(target.location.pathname);
    });
  }

  renderPage (path) {
    const component = this.routes[path];

    root.innerHTML = '';
    root.append(component.element);
  }
}
