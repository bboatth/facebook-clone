import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Feed() {
  const styles = {
    imgAvatar: {
      width: "38px",
      height: "38px",
      objectFit: "cover",
    },
    hrLine: {
      backgroundColor: "#000000",
      height: ".5px",
    },
  };

  const [like, setLike] = useState(false);
  const likeButton = () => {
    setLike(!like);
  };
  const effectBtn = like ? "text-primary" : "text-muted";

  const [posts, setPosts] = useState([]);
  const url ="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2c108728ad784b2da7a71ce65637d806";

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response);

      setPosts(response.data.articles);
    });
  }, []);

  return (
    <div className="container">
      <div className="">
        <div className=" ">
          {/* stories */}
          <div
            className="d-flex flex-column justify-content-center mx-auto gg"
            style={{ maxWidth: "680px" , width:"100%" }}
          >
            <div className="mt-sm-5 mt-2 d-flex justify-content-between position-relative">
              <div
                className="mx-1 bg-white  story"
                type="button"
                style={{ width: "6.8em", height: "190px", objectFit: "cover" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1656528049647-c82eb8174d04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top rounded"
                  alt="story posts"
                  style={{ height: "145px", objectFit: "cover" }}
                />
                <div
                  className="
                    d-flex
                    align-items-center
                    justify-content-center
                    position-relative
                  "
                  style={{ minHeight: "65px" }}
                >
                  <p className="mb-0 text-center fs-7 fw-bold">สร้างสตอรี่</p>
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <i
                      className="
                        fas
                        fa-plus-circle
                        fs-3
                        text-primary
                        bg-white
                        p-1
                        rounded-circle
                      "
                    ></i>
                  </div>
                </div>
              </div>

              <div
                className="rounded mx-1 story"
                type="button"
                style={{ width: "6.8em", height: "190px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1656426885244-8012b6f6262a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top rounded"
                  alt="story posts"
                  style={{ minHeight: "190px", objectFit: "cover" }}
                />
              </div>
              <div
                className="rounded mx-1 story"
                type="button"
                style={{ width: "6.8em", height: "190px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1656587118315-0f85d6b83be6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top rounded"
                  alt="story posts"
                  style={{ minHeight: "190px", objectFit: "cover" }}
                />
              </div>
              <div
                className="rounded mx-1 story"
                type="button"
                style={{ width: "6.8em", height: "190px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1656591674454-c5a06ccf4fff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top rounded"
                  alt="story posts"
                  style={{ minHeight: "190px", objectFit: "cover" }}
                />
              </div>
              <div
                className="rounded mx-1 story d-none d-sm-block"
                type="button"
                style={{ width: "6.8em", height: "190px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1656537191526-22109a84cd92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top rounded"
                  alt="story posts"
                  style={{ minHeight: "190px", objectFit: "cover" }}
                />
              </div>
           
              <div
                className="
                  position-absolute
                  top-50
                  start-100
                  translate-middle
                  pointer
                  d-none d-lg-block
                "
              >
                <i
                  className="
                    fas
                    fa-arrow-right
                    p-3
                    border
                    text-muted
                    bg-white
                    rounded-circle
                  "
                ></i>
              </div>
            </div>
            <div className="bg-white p-3 mt-3 rounded border shadow">
              <div className="d-flex" type="button">
                <div className="p-1">
                  <img
                    src="https://images.unsplash.com/photo-1656528049647-c82eb8174d04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="avatar"
                    className="rounded-circle me-2"
                    style={styles.imgAvatar}
                  />
                </div>
                <input
                  type="text"
                  className="form-control rounded-pill border-0 bg-gray pointer"
                  disabled=""
                  placeholder="คุณคิดอะไรอยู่"
                />
              </div>
              <div className="d-flex flex-column flex-lg-row mt-3 d-none d-sm-flex">
                <div
                  className="
                    dropdown-item
                    rounded
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                  type="button"
                >
                  <i className="fas fa-video me-2 text-danger"></i>
                  <p className="m-0 text-muted">วีดีโอถ่ายทอดสด</p>
                </div>

                <div
                  className="
                    dropdown-item
                    rounded
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                  type="button"
                >
                  <i className="fas fa-photo-video me-2 text-success"></i>
                  <p className="m-0 text-muted">รูปภาพ/วีดีโอ</p>
                </div>

                <div
                  className="
                    dropdown-item
                    rounded
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                  type="button"
                >
                  <i className="fas fa-smile me-2 text-warning"></i>
                  <p className="m-0 text-muted">ความรู้สึก/กิจกรรม</p>
                </div>
              </div>
            </div>

            <div
              className="
                bg-white
                p-3
                mt-3
                rounded
                border
                shadow
                d-sm-flex
                justify-content-between
                position-relative
                d-none
                
              "
            >
              <div>
                <button className="btn rounded-pill border d-sm-block">
                  <i className="fas fa-video me-3"></i>สร้างห้อง
                </button>
              </div>

              <div className="d-xxl-none">
                <img
                  src="https://source.unsplash.com/random/1"
                  alt="avatar"
                  className="rounded-circle me-2"
                  style={styles.imgAvatar}
                />
                <img
                  src="https://source.unsplash.com/random/2"
                  alt="avatar"
                  className="rounded-circle me-2"
                  style={styles.imgAvatar}
                />
                <img
                  src="https://source.unsplash.com/random/3"
                  alt="avatar"
                  className="rounded-circle me-2"
                  style={styles.imgAvatar}
                />
                <img
                  src="https://source.unsplash.com/random/4"
                  alt="avatar"
                  className="rounded-circle me-2"
                  style={styles.imgAvatar}
                />
              </div>

              <div className="d-none d-xxl-block" style={{ maxWidth: "450px" }}>
                <div
                  id="carouselExampleControls"
                  className="carousel slide pointer-event"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="https://source.unsplash.com/random/1"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/2"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/3"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/4"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/5"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/6"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/7"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/8"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/9"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://source.unsplash.com/random/1"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/2"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/3"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/4"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/5"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/6"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/7"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/8"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                      <img
                        src="https://source.unsplash.com/random/9"
                        alt="avatar"
                        className="rounded-circle me-2"
                        style={styles.imgAvatar}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="
                  position-absolute
                  start-0
                  top-50
                  translate-middle
                  d-none d-xxl-block
                "
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <div
                    className="
                    p-2
                    bg-white
                    border
                    rounded-circle
                    d-flex
                    justify-content-center
                    align-items-center
                    pointer
                    story
                  "
                    style={{ width: "30px", height: "30px" }}
                  >
                    <i className="fas fa-chevron-left text-muted"></i>
                  </div>
                </div>

                <div
                  className="
                  position-absolute
                  start-100
                  top-50
                  translate-middle
                  d-none d-xxl-block
                "
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <div
                    className="
                    p-2
                    bg-white
                    border
                    rounded-circle
                    d-flex
                    justify-content-center
                    align-items-center
                    pointer
                    story
                    
                  "
                    style={{ width: "30px", height: "30px" }}
                  >
                    <i className="fas fa-chevron-right text-muted"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Post news */}

            {posts.map((post) => (
              <div
                key={post.title}
                className="bg-white p-3 rounded shadow mt-3 "
              >
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      src="https://source.unsplash.com/random/"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={styles.imgAvatar}
                    />

                    <div>
                      <p className="m-0 fw-bold">
                        {post.author ? post.author.substring(0,50) : "Admin"}
                      </p>
                      <span className="text-muted fs-7">9 ชม. </span>
                    </div>
                  </div>
                  <i
                    className="fas fa-ellipsis-h"
                    type="button"
                    data-bs-toggle="dropdown"
                    ariaexpanded="false"
                  ></i>
                  <ul
                    className="dropdown-menu dropdown-menu-end border-0 shadow"
                    style={{ minWidth: "340px" }}
                  >
                    <li className="d-flex align-items-center">
                      <Link
                        className="dropdown-item d-flex align-items-center fs-6 fw-semibold "
                        to="/"
                      >
                        <div className="p-2">
                          <i className="fa-regular fa-bell "></i>
                        </div>
                        บันทึกโพสต์
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <Link
                        className="dropdown-item d-flex align-items-center fs-6 fw-semibold"
                        to="/"
                      >
                        <div className="p-2">
                          <i className="fa-regular fa-bookmark"></i>
                        </div>
                        เปิดการแจ้งเตือนสำหรับโพสต์นี้
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-3">
                  <div>
                    <p>{post.title}</p>
                    <p>{post.description}</p>
                    <img
                      src={
                        post.urlToImage
                          ? post.urlToImage
                          : "https://source.unsplash.com/random/"
                      }
                      alt="post "
                      className="img-fluid rounded"
                    />
                  </div>

                  <div className="d-flex align-items-center mt-3">
                    <div className="ms-3 me-2">
                      <i className="text-primary fas fa-thumbs-up"></i>
                    </div>
                  
                    <div className="me-3 ms-auto">
                      <span className="fs-6">ความคิดเห็น</span>
                    </div>
                  </div>
                  <hr style={styles.hrLine} />
    
                  <div className="row ">
                    <div className="col-6 d-flex justify-content-center btn_like pointer " onClick={likeButton}>
                      <button
                        className="btn text-muted"
                        type="button"
                       
                      >
                        <i
                          className={`fa-solid fa-thumbs-up me-3 ${effectBtn}`}
                        ></i>
                        <span  className="fs-8">ถูกใจ</span>
                      </button>
                    </div>
                    <div className="col-6 d-flex justify-content-center btn_like pointer">
                      <button className="btn text-muted" type="button">
                        <i className="fas fa-comment-alt me-3 d-none d-sm-inline-flex"></i>
                        <span className="fs-8">แสดงความคิดเห็น</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
