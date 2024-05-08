import Markdown from 'react-markdown';

const REGEX_REPLACEMENTS: Map<RegExp, string> = new Map([
    [/gh:(.*)[/](.*)[#]([1-9]*)/g, "[$1/$2#$3](https://github.com/$1/$2/issues/$3)"], // link to github issues/pr's
    [/(^|\s)(\/?([ru])\/(\w+))/g, "$1[$2](<https://reddit.com/$3/$4>)"] // link to reddit users or subreddits
]);

export default function BlogPostContent({ content = "" }: { content: string }) {
    var replacedContent = content;

    REGEX_REPLACEMENTS.forEach((value, key) => {
        replacedContent = replacedContent.replace(key, value);
    });

    return(
        <Markdown className="text-lg text-center mx-auto overflow-hidden break-words">
            {replacedContent}
        </Markdown>
    );
}
