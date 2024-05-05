import Markdown from 'react-markdown'

export default function BlogPostContent({ content }: { content: string }) {
    return(
        <Markdown className="text-lg w-45 text-center">
            {content}
        </Markdown>
    )
}
