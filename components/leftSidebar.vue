<template>
  <aside>
    <div class="sidebar">
      <div class="top"></div>
      <img
        width="64"
        src="https://media-exp1.licdn.com/dms/image/C5603AQGgW-kYRvEhHQ/profile-displayphoto-shrink_100_100/0/1658998691881?e=1668643200&amp;v=beta&amp;t=X-5hgaHsF-Aw9U9kF0TjviVDbe04xX9pnRghSrGCcxo"
        loading="lazy"
        height="64"
        alt="Photo of Md Siam Sheikh"
        id="ember219"
        class="feed-identity-module__member-photo EntityPhoto-circle-5 lazy-image ember-view"
      />
      <div class="profile">
        <a href="#">Md Siam Sheikh</a>
        <h5>front-end developer</h5>
        <hr id="profile" />
      </div>
      <div class="view">
        <div class="views">
          <h5>Connections</h5>
          <a href="#">9</a>
        </div>
        <div class="views">
          <h5>Invitation</h5>
          <a href="#">2</a>
        </div>
      </div>
      <div class="premium">
        <hr id="view" />
        <h5>Access exclusive tools & insights</h5>
        <a href="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
              fill="#f8c77e"
            ></path>
            <path
              d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
              fill="#e7a33e"
            ></path></svg
          >Tty Premium for free</a
        >
        <hr id="premium" />
      </div>
      <div class="items">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          width="16"
          height="16"
          focusable="false"
        >
          <path
            d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"
          ></path>
        </svg>
        <h5>My Items</h5>
      </div>
    </div>

    <div class="recent-jobs">
      <div class="recent">
        <a href="#">Groups</a>
      </div>
      <div class="recents">
        <a href="#">Events</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          class="mercado-match"
          width="16"
          height="16"
          focusable="false"
        >
          <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
        </svg>
      </div>
      <div class="recent">
        <a href="#">Followed Hashtahs</a>
      </div>
      <div class="discover">
        <a href="#">Discover more</a>
      </div>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style>
aside .sidebar {
  background: #ffffff;
  width: 100%;
  height: 37vh;
  position: relative;
  border-radius: 0.6rem;
  overflow: hidden;
  /* position: fixed;
  top: 0;
  left: 0;
  width: 400px; */
}
.sidebar .top {
  width: 100%;
  height: 6vh;
  background-image: linear-gradient(
    to right,
    #a0b4b7,
    #a0b4b7,
    #a0b4b7,
    #a0b4b7,
    #edf3f4,
    #bfd3d6,
    #bfd3d6
  );
}
.sidebar img {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 4%;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
}
aside .sidebar .profile {
  position: relative;
  text-align: center;
  top: 13%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 8vh;
}
.sidebar .profile a {
  text-decoration: none;
  color: #2f1919;
  font-size: 1rem;
}
.sidebar a {
  display: block;
}
.sidebar .profile a:hover {
  text-decoration: underline;
}
.sidebar .profile {
  color: #9c9797;
  font-size: 0.9rem;
}
.sidebar .view {
  position: relative;
  display: flex;
  flex-direction: column;
  top: 13%;
}
.sidebar .view .views {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0.4rem;
  font-size: 0.9rem;
  cursor: pointer;
}
.sidebar .view .views:hover {
  background: #ebebeb;
}
.sidebar .view .views h5 {
  color: gray;
  font-size: 0.7rem;
}
.sidebar .view .views a {
  color: #359bd8;
  text-decoration: none;
  font-size: 0.8rem;
}
.sidebar .premium {
  position: relative;
  top: 12%;
}
.sidebar .premium h5 {
  color: gray;
  font-weight: 100;
  margin-left: 0.4rem;
}
.sidebar .premium a {
  display: flex;
  gap: 0.2rem;
  align-items: center;
  text-decoration: none;
  margin-left: 0.2rem;
  font-size: 0.9rem;
  color: #191919;
  text-decoration: underline;
}
.sidebar .premium a:hover {
  color: #0a66c2;
}
.sidebar .premium a svg {
  width: 1.2rem;
}
.sidebar .premium:hover {
  background-color: #ebebeb;
}
hr#premium,
hr#view,
hr#profile {
  margin: 0.4rem 0;
}

.items {
  position: relative;
  top: 13%;
  display: flex;
  gap: 0.3rem;
  margin-left: 1rem;
  color: #5e5e5e;
}

aside .recent-jobs {
  background: #ffffff;
  width: 100%;
  margin-top: 0.6rem;
  height: 17vh;
  position: relative;
  border-radius: 0.6rem;
  overflow: hidden;
}
aside .recent-jobs {
  position: relative;
  display: flex;
  flex-direction: column;
}
aside .recent-jobs .recent,
aside .recent-jobs .recents {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0.6rem;
  font-size: 1rem;
  cursor: pointer;
}
aside .recent-jobs .recents svg {
  color: gray;
  background: transparent;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 0.7rem;
  border-radius: 100%;
  position: relative;
}
aside .recent-jobs .recents svg:hover {
  color: #191919;
  background: #e4dede;
  justify-content: center;
  cursor: pointer;
}
aside .recent-jobs .recent a,
aside .recent-jobs .recents a {
  text-decoration: none;
  color: #1d72c7;
  font-size: 0.8rem;
}
aside .recent-jobs .recent a:hover,
aside .recent-jobs .recents a:hover {
  text-decoration: underline;
}
.discover {
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid #c1bfbf;
  padding-top: 0.7rem;
}
.discover:hover {
  background: #ebebeb;
  height: 100%;
}
.discover a {
  text-decoration: none;
  color: #7b7b7b;
}
</style>
