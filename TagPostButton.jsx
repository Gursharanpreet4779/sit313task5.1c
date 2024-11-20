function TagPostButton(){
    return(
        <div>
            <div className="tag">
                <h4>Tags</h4>
                <input type="text" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" />
            </div>
            <div className="post-button">
                <button>Post</button>
            </div>
        </div>
    )
}


export default TagPostButton