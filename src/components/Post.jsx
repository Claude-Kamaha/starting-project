import classes from './Post.module.css'

function Post(props){
    return(
        <div>
{props.author}
{props.text}
        </div>
    )
}
export default Post;