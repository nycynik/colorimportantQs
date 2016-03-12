# Color Interesting Questions

Chrome extension that colors topics and questions that you are interested in on [Stack Overflow](http://stackoverflow.com/).  Helps you find interesting questions to answer.  

# Installation

To install, download this repository, turn Chrome in to development mode and add the extension.

### Fetch the repository

    git clone https://github.com/nycynik/colorimportantQs.git

### Enable Development Mode in Chrome

- Follow this link to learn how to enable development mode https://developer.chrome.com/extensions/faq#faq-dev-01

### Load this extension

- Navigate to : [chrome://extensions](chrome://extensions) in Chrome
- Ensure that the Developer mode checkbox in the top right-hand corner is checked.
- Click Load unpacked extension… to pop up a file-selection dialog.
- Navigate to the directory in which your extension files live, and select it.
  
# Changing colors or topics

To modify colors or interesting topics, modify soic_script.js before loading, or reload it after you make changes.
```javascript
var interestingTags =   ["ios","php","python","c#","javascript","java","flash","c++","cocos2d"];
var interestingColors = ["#D6EBFF","#CC86FF","#eee","#C3A6CA","#D6C2AD","#FF9999","#EB9EA0","#bbb","#C5DBD9"];
```

