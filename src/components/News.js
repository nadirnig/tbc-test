import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';
import Post from './Post';

const News = () => {
  const [respons, setRespons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(6);
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://gorest.co.in/public/v1/posts?page=${currentPage}`
        );
        console.log(response);
        const myResp = response.data.data;
        console.log(myResp);
        setRespons(myResp);
        setLoading(false);
      } catch (err) {
        console.log('ERROR ', err);
      }
    };
    getData();
  }, [currentPage]);

  const getValue = (e) => {
    // e.preventDefault();
    // setCurrentPage(e.currentTarget.value);
    let data = e.target.value;
    console.log(data);
    setCurrentPage(data);
  };

  return loading ? (
    <h3>LOADING NEWS....</h3>
  ) : (
    <Container>
      <Post respons={respons} />
      {pages.map((page) => (
        <Button
          style={{ marginRight: 15, marginTop: 15 }}
          onClick={getValue}
          value={page}
          key={page}
        >
          {page}
        </Button>
      ))}
    </Container>
  );
};
export default News;
