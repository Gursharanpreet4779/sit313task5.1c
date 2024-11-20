
function Title({placeholder_msg}){
    return(
        <div className="Title-input">

            <h3>What do you want to ask or share</h3>

            <div>

                <h4>Title</h4>

                <input type="text" name="Title" placeholder={placeholder_msg} required></input>

            </div>

        </div>
    )
}


export default Title