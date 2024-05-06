import Markdown from 'react-markdown'

export default function BlogPostContent({ content }: { content: string }) {
    return(
        <Markdown className="text-lg text-center mx-auto overflow-hidden break-words">
            {content}
        </Markdown>
    )
}
