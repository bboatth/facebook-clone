import { Link } from "react-router-dom";

function Header() {
  const styles = {
    headerBg: {
      minHeight: "56px",
     
    },
    imgAvatar: {
      width: "40px",
      height: "40px",
      objectFit: "cover",
    },
    headerIcon: {
      width: "38px",
      height: "38px",
    },
    searchWidth:{
        width:"100%",
        maxWidth: "250px"
    },
    hrLine:{
        backgroundColor: "#000000",
        height: ".5px"
    }
  };

  return (
    <div className="sticky-sm-top">
      <div
        className="d-flex align-items-center  shadow header "
        style={styles.headerBg}
      >
        <div className="container-fluid ">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 d-sm-flex align-items-sm-center ">
              {/* mobile */}
              <div className="row ">
                <div className="col-2  d-flex align-items-center">
                  <Link className="navbar-brand d-sm-none d-flex" to="">
                    <i
                      className="fa-regular fa-circle-user text-white"
                      style={{ fontSize: "20px" }}
                    ></i>
                  </Link>
                </div>
                <div className="col-8">
                 
              <div className="input-group d-flex justify-content-center d-sm-none">
                              <div className="search" style={styles.searchWidth}>
                                <i className="fa fa-search"></i>
                                <input
                                  type="text"
                                  className="form-control border rounded-pill"
                                  placeholder="เมนูค้นหา"
                                />
                              </div>
              </div>
                </div>
                <div className="col-2  d-flex align-items-center d-block d-sm-none">
                  <i
                    className="fas fa-camera text-white"
                    style={{ fontSize: "20px" }}
                  ></i>
                </div>
              </div>

              {/* desktop */}
              <Link className="navbar-brand d-none d-md-flex" to="">
                <i
                  className="fa-brands fa-facebook text-primary"
                  style={{ fontSize: "3rem" }}
                ></i>
              </Link>

              <div className="input-group ms-2 d-none d-sm-block">
                              <div className="search "  style={styles.searchWidth}>
                                <i className="fa fa-search"></i>
                                <input
                                  type="text"
                                  className="form-control border rounded-pill"
                                  placeholder="ค้นหาบน Facebook:"
                                />
                              </div>
                            
             
              </div>
            </div>

            {/* group icon center */}
            <div className="col-4 d-none d-xl-flex justify-content-center">
              <div className="mx-4 nav_btn nav_btn-active">
                <button type="button" className="btn px-4  bg-transparent ">
                  <i className="fas fa-home text-muted fs-4"></i>
                </button>
              </div>
              <div className="mx-4 nav_btn ">
                <button type="button" className="btn px-4 shadow-none">
                  <i className="fas fa-video text-muted fs-4"></i>
                </button>
              </div>
              <div className="mx-4 nav_btn ">
                <button type="button" className="btn px-4 shadow-none">
                  <i className="fas fa-store text-muted fs-4 "></i>
                </button>
              </div>
              <div className="mx-4 nav_btn ">
                <button type="button" className="btn px-4 shadow-none">
                  <i className="fas fa-users text-muted fs-4"></i>
                </button>
              </div>
              <div className="mx-4 nav_btn ">
                <button type="button" className="btn px-4 shadow-none">
                  <i className="fas fa-gamepad text-muted fs-4"></i>
                </button>
              </div>
            </div>

            {/* group icon right */}
            <div className="col col-md-6 col-lg-6 col-xl-4 d-flex align-items-center justify-content-end  ">
              <div className="">
                <div
                  className="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center mx-2  d-none d-sm-flex"
                  style={styles.headerIcon}
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <i className="fas fa-bars"></i>
                </div>

                <ul
                  className="dropdown-menu border-0 shadow p-3 bg-gray overflow-auto"
                  style={{ width: "600px", height: "600px" }}
                >
                  <li className="p-1">
                    <span className="fw-bold" style={{ fontSize: "24px" }}>
                      เมนู
                    </span>
                  </li>
                  <li className="p-1">
                    <div className="row">
                      <div className="col-8">
                        <div className="card border ">
                          <div className="card-body">
                            <div className="input-group">
                              <div className="search" style={styles.searchWidth}>
                                <i className="fa fa-search"></i>
                                <input
                                  type="text"
                                  className="form-control border rounded-pill"
                                  placeholder="เมนูค้นหา"
                                />
                              </div>
                            </div>
                            <div className="mt-3">
                              <span
                                className="fw-bold "
                                style={{ fontSize: "17px" }}
                              >
                                สังคม
                              </span>
                            </div> 
                            <div className="text-dark d-flex align-items-center mt-2">
                              <div className="p-2">
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/9-o1e6LN_TX.png?_nc_eui2=AeGWqi54oOkBRKuHuA1MHK8R_zoPwCCE1VP_Og_AIITVU9PYjA4uYGpb4BXeowWd9JeG0bRmWyD1GbTcoKus84SU"
                                  alt="icon fb"
                                  className="rounded-circle"
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div>
                                <p className="m-0">งานกิจกรรม</p>
                                <span className="fs-7 text-muted">
                                  จัดการหรือค้นหางานกิจกรรมหรือสิ่งอื่นๆ
                                  ออนไลน์และที่อยู่ใกล้เคียง
                                </span>
                              </div>
                            </div>
                            <div className="text-dark d-flex align-items-center mt-2">
                              <div className="p-2">
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png?_nc_eui2=AeFuSfrPGd2b7yP_OtXMfGMXzZiWk1i76CzNmJaTWLvoLL9A0erf0gOx67-lG6PEuqE8iZ6ygSnNgt4rzTzm29_u"
                                  alt="icon fb"
                                  className="rounded-circle"
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div>
                                <p className="m-0">เพื่อน</p>
                                <span className="fs-7 text-muted">
                                 ค้นหาเพื่อนหรือคนอื่นๆ ที่คุณอาจรู้จัก
                                </span>
                              </div>
                            </div>
                            <div className="text-dark d-flex align-items-center mt-2">
                              <div className="p-2">
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png?_nc_eui2=AeGmSJy0cABOxXHjtc26AHs2A_bf-kPbCmUD9t_6Q9sKZSC5O5ytLeVSmJKBMGjDMyILY9AP2tOrHC6ipcpBMqul"
                                  alt="icon fb"
                                  className="rounded-circle"
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div>
                                <p className="m-0">คอมมูนิตี้ (กลุ่ม)</p>
                                <span className="fs-7 text-muted">
                               เชื่อมต่อกับผู้คนที่มีความสนใจเหมือนกันกับคุณ
                                </span>
                              </div>
                            </div>
                            <div className="text-dark d-flex align-items-center mt-2">
                              <div className="p-2">
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/DOal__ng_AH.png?_nc_eui2=AeGmHsp61YicTmWnk9dl5bgvP-dXyL9RrUk_51fIv1GtSUGuHKr519OmrLi_pxCfrI9SOXAydmhnwndGPYqdiahl"
                                  alt="icon fb"
                                  className="rounded-circle"
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div>
                                <p className="m-0">ฟีดข่าว</p>
                                <span className="fs-7 text-muted">
                              ดูโพสต์ที่เกี่ยวข้องจากผู้คนและเพจที่คุณติดตาม
                                </span>
                              </div>
                            </div>
                            <div className="text-dark d-flex align-items-center mt-2">
                              <div className="p-2">
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png?_nc_eui2=AeF-2vd4rbSIEuX4fjtXUNKjIucpu18fVQgi5ym7Xx9VCD1OD2vxYsBAvY9P9DIWeNTfl1wxBDIfdH9ZlZ1wP-wH"
                                  alt="icon fb"
                                  className="rounded-circle"
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div>
                                <p className="m-0">เพจ</p>
                                <span className="fs-7 text-muted">
                             ค้นหาและเชื่อมต่อกับธุรกิจต่างๆ บน Facebook
                                </span>
                              </div>
                            </div>
                            <div className="p-1">
                          <hr  style={styles.hrLine}/>
                                </div>
                                <div className="mt-1">
                              <span
                                className="fw-bold "
                                style={{ fontSize: "17px" }}
                              >
                                ส่วนตัว
                              </span>
                            </div>
                            <div className="text-dark d-flex align-items-center mt-2">
                              <div className="p-2">
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/u6E3qp8lSIK.png?_nc_eui2=AeHSb-mZ3bH8X7mhprBPlmGOR4oAiHhPFqNHigCIeE8Wo2HxP4-TdxdOASPtNdlofYmGfivW_vzAVKZDF22gX4Ao"
                                  alt="icon fb"
                                  className="rounded-circle"
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div>
                                <p className="m-0">กิจกรรมโฆษณาล่าสุด</p>
                                <span className="fs-7 text-muted">
                                  ดูโฆษณาทั้งหมดที่คุณโต้ตอบบน Facebook
                                </span>
                              </div>
                              
                            </div>

                            <div className="text-dark d-flex align-items-center mt-2">
                              <div className="p-2">
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/24MgFlPfCs5.png?_nc_eui2=AeG0AKDpUWjW089_iku1hzdiDpd8SYtOGKAOl3xJi04YoP4IeQxnmrL2WU8sokUiZRFYSjts-ZPXpOLm4HUEjJEX"
                                  alt="icon fb"
                                  className="rounded-circle"
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div>
                                <p className="m-0">ความทรงจำ</p>
                                <span className="fs-7 text-muted">
                                  เลือกดูโพสต์ วีดีโอ และรูปภาพเก่าของคุณบน Facebook
                                </span>
                              </div>
                              
                            </div>
                            <div className="text-dark d-flex align-items-center mt-2">
                              <div className="p-2">
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/EygD86pCwoD.png?_nc_eui2=AeER1m7Fz-0xhqetDFZMluWJtFjbvGa1AwK0WNu8ZrUDAtV3ZnV6LEycLmMi-y7OEao94dbK0VV7HLM9_OFFADLV"
                                  alt="icon fb"
                                  className="rounded-circle"
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div>
                                <p className="m-0">ที่บันทึกไว้</p>
                                <span className="fs-7 text-muted">
                                  ค้นหาโพสต์ รูปภาพ และวีดีโอที่คุณบันทึกไว้เพื่อดูในภายหลัง
                                </span>
                              </div>
                              
                            </div>
                          </div>    

                           
                        </div>

                     
                                     
                       
                      </div>
                           {/* สร้าง */}
                      <div className="col-4">
                      <div className="card">
                        <div className="card-body">
                           <span className="fw-bold" style={{fontSize:"20px"}}>สร้าง</span>
                           <div className="text-dark d-flex align-items-center mt-2">
                              <div className="p-2">
                              <i className="fas fa-edit" style={{fontSize:"20px"}}></i>
                              </div>
                              <div>
                                
                                <span className="fs-8">
                                 โพสต์
                                </span>
                              </div>
                              
                            </div>
                        </div>
                        </div>
                       </div>
                      
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <div
                  className="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center mx-2  d-none d-sm-flex"
                  style={styles.headerIcon}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <i className="fa-brands fa-facebook-messenger"></i>
                </div>
                {/* chat dropdown */}
                <ul
                  className="dropdown-menu border-0 shadow p-3 "
                  arialabelledby="dropdown_menu"
                >
                  <li className="p-1">
                    <div className="d-flex justify-content-between">
                      <h2 className="fw-bold">เแชท</h2>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <div
                  className="rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center mx-2  d-none d-sm-flex"
                  style={styles.headerIcon}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <i className="fas fa-bell"></i>
                </div>
                {/* notification dropdown */}
                <ul
                  className="dropdown-menu border-0 shadow p-3 "
                  arialabelledby="dropdown_menu"
                >
                  <li className="p-1">
                    <div className="d-flex justify-content-between">
                      <h2>แจ้งเตือน</h2>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="btn-group d-none d-sm-flex  align-items-center justify-content-center ">
                <img
                  src="https://images.unsplash.com/photo-1656528049647-c82eb8174d04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="avatar"
                  className="rounded-circle me-2"
                  style={styles.imgAvatar}
                />

               
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navbar mobile */}
      <div className="container d-sm-none d-sm-flex border-bottom bg-white">
        <div className="d-flex justify-content-between">
            
          <div className="p-2 nav_btn nav_btn_mobile-active">
          <i className="fa-solid fa-newspaper text-muted fs-4"></i>
           
          </div>
          <div className="p-2">
            <i className=" fas fa-user-friends text-muted fs-4"></i>
          </div>
          <div className="p-2">
            <i className=" fab fa-facebook-messenger text-muted fs-4"></i>
          </div>
          <div className="p-2">
            <i className="fas fa-video text-muted fs-4"></i>
          </div>
          <div className="p-2">
          <i className="far fa-bell text-muted fs-4"></i>
          </div>
          <div className="p-2">
            <i className="fas fa-bars text-muted fs-4"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
