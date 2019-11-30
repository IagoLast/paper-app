// import 'markdown-it-highlight/dist/index.css'

import Markdown from 'markdown-it';
import pluginMark from 'markdown-it-mark';
import pluginSub from 'markdown-it-sub';
import pluginSup from 'markdown-it-sup';
import pluginHighLight from 'markdown-it-highlight'


const parser = Markdown("default", {
    html: true,
    xhtmlOut: true,
    breaks: true,
});

parser.use(pluginSub);
parser.use(pluginSup);
parser.use(pluginMark);
parser.use(pluginHighLight)

export default parser;
