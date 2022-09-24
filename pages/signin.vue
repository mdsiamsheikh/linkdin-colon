<template>
  <div class="signup">
    <div class="input-group">
      <div class="text-center">
        <h1>
          Linked
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#0A66C2"
            width="40"
            height="40"
            focusable="false"
            class="mercado-match"
          >
            <path
              d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
            ></path>
          </svg>
        </h1>
      </div>
      <form class="form_profile">
        <input
          type="text"
          name="di"
          placeholder="Full Name"
          required="required"
        />
        <input type="text" name="di" placeholder="Profile URL (optional)" />
        <input type="text" name="di" placeholder="Email" required="required" />
        <input
          type="text"
          name="di"
          placeholder="Password"
          required="required"
        />
        <button type="submit" class="btn-secondery">Accept and Resister</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: #f3f2ef;
}

.signup {
  display: flex;
  align-items: center;
  /* text-align: center; */
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 10px 40px;
  background: #f3f2ef;
}

.signup .input-group {
  background-color: #ffffff;
  border-radius: 0.7rem;
  width: 450px;
  padding: 10px;
}

.text-center h1 {
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 10px 40px;
}

.form_profile {
  border: 1px solid #ffffff;
  border-radius: 4px;
  display: block;
  font-size: 14px;
}

.form_profile input {
  display: flex;
  width: 100%;
  margin: 1rem 0rem 1.4rem;
  border-radius: 5px;
  color: #f3f2ef;
  padding: 15px;
  border: 1px solid rgb(90, 87, 87);
}

.form_profile input:hover {
  box-shadow: #f3f2ef;
}
</style>
