# ![icon](resources/icon.png) count [![GitHub deployments](https://img.shields.io/github/deployments/Enteee/count/github-pages?label=live-preview)][GitHubPages] [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/enteee/count/Count%20CI)][Build] [![Coverage Status](https://coveralls.io/repos/github/Enteee/count/badge.svg?branch=master)](https://coveralls.io/github/Enteee/count?branch=master) [![GitHub language count](https://img.shields.io/github/languages/count/Enteee/count)][count] [![GitHub top language](https://img.shields.io/github/languages/top/Enteee/count)][count] [![GitHub contributors](https://img.shields.io/github/contributors/Enteee/count)][count]
_Count, Visualize, Understand_

<a href="https://enteee.github.io/count">
  <img align="right" src="doc/preview.gif">
</a>

An open source community driven tally counter app with support for advanced analytics.
This app was created using [Ionic Framework][Ionic] and runs on Android, iOS and in [the browser][GitHubPages].

[![Try it now](https://img.shields.io/badge/Try%20it-NOW!-brightgreen)](https://enteee.github.io/count)

**Features**

* Visualizations:
  * Day of the week histogram
* [Preview on GitHub Pages][GitHubPages]
* Full screen counting
* Count on multiple counters in parallel
* Lock a counter
* Vibrate on count
* Automatic reset to 0 on configurable limit (wraparound)
* Optional position recording on count
* Preview unimplemented features
* Dynamic update channel selection (Beta, Production)
* [GitHub] and [IssueHunt] integration
* Contributors overview
* Online help

## Running the App

```
$ ionic cordova run browser -l
```

## Developing the App

Start without cordova (some features won't work):
```
$ ionic serve
```

### Update All Icons

```
$ ./icon_update.sh
```

[Ionic]:https://ionicframework.com/
[count]:https://github.com/Enteee/count
[GitHub]:https://github.com/
[GitHubPages]:https://enteee.github.io/count
[Coverage]:https://coveralls.io/github/Enteee/count?branch=master
[Build]:https://github.com/Enteee/count/actions
[IssueHunt]:https://issuehunt.io/
