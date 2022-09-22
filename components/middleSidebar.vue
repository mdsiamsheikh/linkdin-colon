<template>
  <main>
    <div class="main-section">
      <div class="search">
        <img
          width="64"
          src="https://media-exp1.licdn.com/dms/image/C5603AQGgW-kYRvEhHQ/profile-displayphoto-shrink_100_100/0/1658998691881?e=1668643200&amp;v=beta&amp;t=X-5hgaHsF-Aw9U9kF0TjviVDbe04xX9pnRghSrGCcxo"
          loading="lazy"
          height="64"
          alt="Photo of Md Siam Sheikh"
          id="ember219"
          class="feed-identity-module__member-photo EntityPhoto-circle-5 lazy-image ember-view"
        />
        <input
          @change="addItems"
          type="text"
          placeholder="Start a post"
          v-model="text"
        />
      </div>
      <div class="poshts">
        <div class="posht">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"
            ></path>
          </svg>
          <h5>Photo</h5>
        </div>
        <div class="posht">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"
            ></path>
          </svg>
          <h5>Video</h5>
        </div>
        <div class="posht">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"
            ></path>
          </svg>
          <h5>Event</h5>
        </div>
        <div class="posht">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"
            ></path>
          </svg>
          <h5>Write article</h5>
        </div>
      </div>

      <!--  -->
      <div v-for="item in userData" :key="item.id" class="post">
        <div class="post_header">
          <img
            width="64"
            src="https://media-exp1.licdn.com/dms/image/C5603AQGgW-kYRvEhHQ/profile-displayphoto-shrink_100_100/0/1658998691881?e=1668643200&amp;v=beta&amp;t=X-5hgaHsF-Aw9U9kF0TjviVDbe04xX9pnRghSrGCcxo"
            loading="lazy"
            height="64"
            alt="Photo of Md Siam Sheikh"
            id="ember219"
            class="feed-identity-module__member-photo EntityPhoto-circle-5 lazy-image ember-view"
          />
          <div v-for="item in userData" :key="item.id" class="post_info">
            <h3>{{ item.title }}</h3>

            <p>{{ item.email }}</p>
          </div>
        </div>
        <div class="post_body">
          <p>{{ item.post }}</p>
        </div>
        <div class="inputOptions">
          <div class="inputOption">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"
              ></path>
            </svg>
            <h4>Like</h4>
          </div>
          <div class="inputOption">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"
              ></path>
            </svg>
            <h4>Comment</h4>
          </div>
          <div class="inputOption">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"
              ></path>
            </svg>
            <h4>Share</h4>
          </div>
          <div class="inputOption">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
            </svg>
            <h4>Send</h4>
          </div>
        </div>
      </div>
      <div class="show-profile">
        <div class="show_profiles">
          <img
            width="64"
            src="https://media-exp1.licdn.com/dms/image/C5603AQGgW-kYRvEhHQ/profile-displayphoto-shrink_100_100/0/1658998691881?e=1668643200&amp;v=beta&amp;t=X-5hgaHsF-Aw9U9kF0TjviVDbe04xX9pnRghSrGCcxo"
            loading="lazy"
            height="64"
            alt="Photo of Md Siam Sheikh"
            id="ember219"
            class="feed-identity-module__member-photo EntityPhoto-circle-5 lazy-image ember-view"
          />
          <div class="box">
            <h3>Md Siam Sheikh</h3>
            <p>front-end Web Developer</p>
          </div>
        </div>
        <div class="post_imgs">
          <img src="../asices/img/img_2-removebg-preview.png" />
        </div>
        <div class="like_send">
          <div class="like_share">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"
              ></path>
            </svg>
            <h4>Like</h4>
          </div>
          <div class="like_share">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"
              ></path>
            </svg>
            <h4>Comment</h4>
          </div>
          <div class="like_share">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"
              ></path>
            </svg>
            <h4>Share</h4>
          </div>
          <div class="like_share">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
            </svg>
            <h4>Send</h4>
          </div>
        </div>
      </div>

      <!--  -->
      <div class="show-profiles">
        <div class="shows_profiles">
          <img
            width="48"
            src="https://media-exp1.licdn.com/dms/image/C560BAQHa9Vs286lN2A/company-logo_100_100/0/1646374989368?e=1671667200&amp;v=beta&amp;t=dyJjf-jb4bezQXKzYavXlIKqMjiOA_c2cEvtYd5lvFs"
            loading="lazy"
            height="48"
            alt="Connekt Camp"
            id="ember523"
            class="ivm-view-attr__img--centered EntityPhoto-square-3 lazy-image ember-view"
          />
          <div class="boxs">
            <h3>CONNEKT STUDIO</h3>
            <p>Software Devolopment</p>
          </div>
        </div>
        <div class="posts_imgs">
          <img
            width="600"
            src="https://media-exp1.licdn.com/dms/image/C5622AQEgT7qJ3g9_tA/feedshare-shrink_800/0/1659105969856?e=1666828800&amp;v=beta&amp;t=d4rFh84AIYHd4JSxhsLrnW3v4xJL61RLQwNGLsF87Mw"
            loading="lazy"
            height="600"
            alt="graphical user interface, application"
            id="ember329"
            class="ivm-view-attr__img--centered feed-shared-image__image feed-shared-image__image--constrained lazy-image ember-view"
          />
        </div>
        <div class="like_sends">
          <div class="like_shares">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"
              ></path>
            </svg>
            <h4>Like</h4>
          </div>
          <div class="like_shares">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"
              ></path>
            </svg>
            <h4>Comment</h4>
          </div>
          <div class="like_shares">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"
              ></path>
            </svg>
            <h4>Share</h4>
          </div>
          <div class="like_shares">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
            </svg>
            <h4>Send</h4>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      email: "",
      userData: [
        {
          id: 1,
          title: "Md Siam Sheikh",
          email: "siamsheikh@gmail.com",
          post: "I am a developer",
        },
      ],
    };
  },
  methods: {
    addItems() {
      this.userData.push({ post: this.text, email: this.email });
    },
  },
};
</script>

<style>
main .main-section {
  background: #ffffff;
  border-radius: 0.6rem;
  height: 14.7vh;
  border: 1px solid #b2b2b2;
}
main .main-section .search {
  display: flex;
  gap: 0.6rem;
  padding: 0.6rem;
}
main .main-section .search img {
  width: 3.1rem;
  height: 3.1rem;
  border-radius: 50%;
  cursor: pointer;
}
main .main-section .search input {
  border-radius: 5rem;
  border: 0.1rem solid #a4a4a4;
  width: 100%;
  padding: 0 0.8rem;
  cursor: pointer;
}
main .main-section .search input:hover {
  background: #ebebeb;
}
main .main-section .poshts {
  display: flex;
  justify-content: space-between;
  margin: 0.7rem 1rem;
}
main .main-section .poshts .posht {
  display: flex;
  align-items: center;
  color: #929292;
  gap: 0.7rem;
  justify-content: center;
  text-align: center;
  padding: 0.3rem 0.4rem 0.9rem;
  border-radius: 0.3rem;
  cursor: pointer;
  padding: 0.7rem;
}
main .main-section .poshts .posht:hover {
  background: #ebebeb;
}
main .main-section .poshts .posht:nth-child(1) svg {
  color: #378fe9;
}
main .main-section .poshts .posht:nth-child(2) svg {
  color: #5f9b41;
}
main .main-section .poshts .posht:nth-child(3) svg {
  color: #c88a30;
}
main .main-section .poshts .posht:nth-child(4) svg {
  color: #e16745;
}
/* 6640 */
main .main-section .post {
  background: #ffffff;
  border-radius: 0.6rem;
  padding-bottom: 0.5rem;
  margin: 2rem 0;
}
.main-section .post .post_header {
  display: flex;
  gap: 0.6rem;
  padding: 0.6rem;
}
.main-section .post .post_header img {
  width: 3.1rem;
  height: 3.1rem;
  border-radius: 50%;
  cursor: pointer;
}
.main-section .post .post_header .post_info h3 {
  font-size: 1.2rem;
  color: #373535;
}
.main-section .post .post_header .post_info p {
  font-size: 0.8rem;
  margin-top: 0.2rem;
  color: gray;
}
.main-section .post .post_body,
.main-section .show-profile .post_imgs,
.main-section .show-profiles .posts_imgs {
  padding: 0.5rem;
}
.main-section .inputOptions,
.main-section .like_send,
.main-section .like_sends {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
}
.main-section .inputOptions .inputOption,
.main-section .like_send .like_share,
.main-section .like_sends .like_shares {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
}
.main-section .inputOptions .inputOption:hover,
.main-section .like_send .like_share:hover,
.main-section .like_sends .like_shares:hover {
  background: #ebebeb;
}
/* front-end */
.main-section .show-profile,
.main-section .show-profiles {
  background: #ffffff;
  border-radius: 0.6rem;
  padding-bottom: 0.5rem;
  margin: 2rem 0;
}
.main-section .show-profile .show_profiles,
.main-section .show-profiles .shows_profiles {
  display: flex;
  gap: 0.6rem;
  padding: 0.6rem;
}
.main-section .show-profile .show_profiles img,
.main-section .show-profiles .shows_profiles img {
  width: 3.1rem;
  height: 3.1rem;
  border-radius: 50%;
  cursor: pointer;
}
.main-section .show-profile .show_profiles .box h3,
.main-section .show-profiles .shows_profiles .boxs h3 {
  font-size: 1.2rem;
  color: #373535;
}
.main-section .show-profile .show_profiles .box p,
.main-section .show-profiles .shows_profiles .boxs p {
  font-size: 0.8rem;
  margin-top: 0.2rem;
  color: gray;
}
.main-section .show-profile .post_imgs,
.main-section .show-profiles .posts_imgs {
  display: flex;
  justify-content: center;
}
.main-section .show-profile .post_imgs img,
.main-section .show-profiles .posts_imgs img {
  width: 100%;
  height: 100%;
}
</style>
