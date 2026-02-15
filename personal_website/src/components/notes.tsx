import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import "./notes.css";

const Notes = () => {
    return (
        <div className="parent-notes">
            <Link to="/" className="notes-back-link">← Home</Link>
            <h1 className="notes-heading">Notes</h1>
            <div className="notes-list">
                {posts.map((post) => (
                    <div key={post.slug}>
                        <Link to={`/notes/${post.slug}`}>{post.title}</Link>
                        <div className="notes-date">{post.date}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notes;
