import parser from './parser';

self.onmessage = (text) => {
    self.postMessage(parser.render(text.data[0]));
};