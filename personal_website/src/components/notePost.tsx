import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";
import "./notePost.css";

const NotePost = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="parent-note-post">
                <Link to="/notes" className="note-post-back-link">← Notes</Link>
                <h1>Post not found</h1>
            </div>
        );
    }

    return (
        <div className="parent-note-post">
            <Link to="/notes" className="note-post-back-link">← Notes</Link>
            <h1 className="note-post-title">{post.title}</h1>
            <div className="note-post-date">{post.date}</div>
            <div className="note-post-content">{post.content}</div>
        </div>
    );
};

export default NotePost;
