const DisplayBlog = ({ blogs, blogtitle, deleteBlog }) => {
    //const blogs = props.myblogs;
    // const blogtitle = props.title;
    return ( <
            div className = "display-blog" >
            <
            h2 > { blogtitle } < /h2> {
            blogs.map((blog) => ( <
                div className = "blog-preview"
                key = { blog.id } >

                <
                h2 > { blog.title } < /h2> <
                h4 > { blog.author } < /h4> <
                p > { blog.body } < /p><br/ >

                <
                /div>
            ))
        } <
        /div>
);
}

export default DisplayBlog;