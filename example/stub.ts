const data = {
    comment: {
        userName: "testing 1",
        content: "this is the parent level comment",
        comment: {
            userName: "testing 2",
            content: "this is the child level comment",
            comment: {
                userName: "testing 3",
                content: "this is the grandchild level comment"
            }
        }
    }
}

export default data;
