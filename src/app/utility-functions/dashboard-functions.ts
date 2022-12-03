export class DashboardFunctions {
  constructor() {
  }

  static optionOnClick(element: HTMLAnchorElement, options: HTMLCollection) {
    element.style.backgroundColor = '#8F37FF';
    this.disableClicks(element, options);
    element.dataset['clicked'] = "true";
  }

  static disableClicks(element: HTMLAnchorElement, options: HTMLCollection): void {
    for (let i = 0; i < options.length; i++) {
      if (options[i] !== element) {
        if ((options[i] as HTMLAnchorElement).dataset['clicked'] === 'true') {
          (options[i] as HTMLAnchorElement).style.backgroundColor = '#5564B2';
          (options[i] as HTMLAnchorElement).dataset['clicked'] = 'false';
        }
      }
    }
  }

  static isTriggered( searchedElement: string, options: HTMLCollection): string {
    for (let i = 0; i < options.length; i++) {
        if(options[i].lastChild!.textContent == searchedElement){
          return (options[i] as HTMLAnchorElement).dataset['clicked']!;
        }
    }
    return 'false';
  }

}
