import React, { useState } from "react";
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import Navbar from "../Navbar2/Navbar";
import { getPostsBySearch } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Pagination from "../Pagination";
import useStyles from "./styles";
import "./Home2.css";

import QueueOutlinedIcon from "@material-ui/icons/QueueOutlined";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  if (!user) {
    history.push("/home");
  }

  const classes = useStyles();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      history.push(`/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`);
    } else {
      history.push("/posts");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Navbar />
        <div className="con">
          <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Pagination page={page} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link to="/create">
                <QueueOutlinedIcon fontSize="large" />
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Grow>
  );
};

export default Home;
