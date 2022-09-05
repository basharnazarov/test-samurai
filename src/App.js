import React from "react";
import { endpoint } from "./api";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function App() {
  const [posts, setPosts] = React.useState([]);
  const [liked, setLiked] = React.useState(false);

  const getPosts = () => {
    endpoint
      .get("/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.error(error));
  };

  const handleCreate = () => {
    endpoint
      .post("/posts", {
        title: "this is new post title",
        body: "this is the new body text",
      })
      .then((response) => {
        console.log(response);
        alert("New post successfully created!");
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (id) => {
    endpoint
      .put(`/posts/${id}`, {
        title: "this blog is changed",
        body: "but nothing is touched",
      })
      .then((response) =>
        alert("Successfully updated! You can check the Network section!")
      )
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    endpoint
      .delete(`/posts/${id}`)
      .then((response) =>
        alert("Successfully deleted! You can check the Network section!")
      )
      .catch((error) => console.error(error));
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Blogs' Page </h1>
      <Button variant="contained" onClick={() => handleCreate()}>
        Create New Post
      </Button>
      <h3>Recent Posts[{posts.length}] : </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gap: 5,
          margin: "0 20px 0 20px",
          alignItems: "stretch",
        }}
      >
        {posts.length > 0 ? (
          posts.map((item, index) => {
            return (
              <Box key={item.id}>
                <Card sx={{ maxWidth: 345, mb: 3 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    src="data:image/jpeg;base64,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"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.body}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleEdit(item.id)}>
                      Edit
                    </Button>
                    <Button
                      size="small"
                      color="error"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                    <Button>
                      {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            );
          })
        ) : (
          <h3> LOADING ...</h3>
        )}
      </div>
    </div>
  );
}

export default App;
