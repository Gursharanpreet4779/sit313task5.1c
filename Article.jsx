function Article(){
    return(
        <div className="article-body">
            <div className="article-abstract">
                <h4>Abstract</h4>
                <textarea type="text" placeholder="Enter a 1-paragraph absract" />
            </div>
            <div className="article-text">
                <h4>Article Text</h4>
                <textarea type="text" placeholder="Enter a 1-paragraph abstract" />

            </div>
        </div>
    )
}


export default Article