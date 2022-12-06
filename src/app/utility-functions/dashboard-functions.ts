export class DashboardFunctions {
  constructor() {
  }

  static optionOnClick(element: HTMLAnchorElement, options: HTMLCollection[]) {
    element.style.backgroundColor = '#8F37FF';
    this.disableClicks(element, options);
    element.dataset['clicked'] = "true";
  }

  static disableClicks(element: HTMLAnchorElement, options: HTMLCollection[]): void {
    for (let i = 0; i < options.length; i++) {
      for (let j = 0; j < options[i].length; j++)
        if (options[i][j] !== element) {
          if ((options[i][j] as HTMLAnchorElement).dataset['clicked'] === 'true') {
            (options[i][j] as HTMLAnchorElement).style.backgroundColor = '#5564B2';
            (options[i][j] as HTMLAnchorElement).dataset['clicked'] = 'false';
          }
        }
    }

  }

  static setDefaultValues(options: HTMLCollection[]): void {
    for (let i = 0; i < options.length; i++) {
      for (let j = 0; j < options[i].length; j++)
        if (!(options[i][j] as HTMLAnchorElement).dataset['clicked']) {
          (options[i][j] as HTMLAnchorElement).dataset['clicked'] = 'false';
        }
    }
  }

  static checkStatus(searchedElement: string, options: HTMLCollection[]): string {
    for (let i = 0; i < options.length; i++) {
      for (let j = 0; j < options[i].length; j++)
        if (options[i][j].lastChild!.textContent == searchedElement) {
          return (options[i][j] as HTMLAnchorElement).dataset['clicked']!;
        }
    }
    return 'false';
  }

}
