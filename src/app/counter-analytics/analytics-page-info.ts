class AnalyticsPageInfo {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const analyticsPageInfos: AnalyticsPageInfo[] = [];

export function getAnalyticsPageInfos() {
  return analyticsPageInfos;
}

export function AnalyticsPage(pageInfo: AnalyticsPageInfo) {
  analyticsPageInfos.push(pageInfo);

  // tslint:disable-next-line:ban-types
  return (constructor: Function) => {};
}

