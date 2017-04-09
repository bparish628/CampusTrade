import template from './dashboard';

const dashboardComponent = {
  template,
  controller: class DashboardComponent {
    recentlyViewed = [
      { name: 'Name1' },
      { name: 'Name2' },
      { name: 'Name3' },
      { name: 'Name4' },
      { name: 'Name5' },
      { name: 'Name6' }
    ];

    inView = []

    constructor() {
      const numPages = Math.ceil(this.recentlyViewed.length / 4);
      this.pages = {
        num: [...Array(numPages).keys()],
        currentPage: 0,
        displayedPages: []
      };
      this.changeView();
    }

    changeView(num = 0){
      if (num === -1 || num === this.pages.num.length) return

      const end = this.recentlyViewed.length < num*4 + 4 ? this.recentlyViewed.length : num*4 + 4
      const currentlyViewed = this.recentlyViewed.slice(num*4, end);

      this.pages.displayedPages = currentlyViewed;
      this.pages.currentPage = num;
    }
  },
};

export default dashboardComponent;