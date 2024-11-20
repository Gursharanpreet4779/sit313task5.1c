function PostSelection({checkState}) {
    
    const handleOptionChange = (event) => {
      const selectedOption = event.target.value;
      checkState(selectedOption);  
    };

    return(
        <div>
            <header>
                <h3>New Post</h3>

                <div>
                <p>Select Post Type: </p>
                
                <input type="radio" id="Question" 
                    name="option" value="question" defaultChecked onChange={handleOptionChange} />
                
                <label htmlFor="Question">Question</label>

                <input type="radio" id="Article" 
                    name="option" value="Article" onChange={handleOptionChange} />

                <label htmlFor="Article">Article</label>

                </div>
                </header>
        </div>
    )
}


export default PostSelection