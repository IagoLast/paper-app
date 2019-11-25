import Markdown from 'markdown-it';
import pluginMark from 'markdown-it-mark';
import pluginSub from 'markdown-it-sub';
import pluginSup from 'markdown-it-sup';


const parser = Markdown("default", {
    html: true,
    xhtmlOut: true,
    breaks: true,
});

parser.use(pluginSub);
parser.use(pluginSup);
parser.use(pluginMark);

export default parser;
