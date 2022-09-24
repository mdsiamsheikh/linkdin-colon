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
      <p>Already resisterd? <a href="#">Login</a></p>
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
  text-align: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background: #f3f2ef;
}

.signup .input-group {
  background-color: #ffffff;
  border-radius: 0.7rem;
  width: 450px;
  padding: 25px;
}

.text-center h1 {
  display: flex;
  text-align: center;
  justify-content: center;
  color: #333333;
  font-size: 2.5rem;
}

.form_profile {
  border-radius: 4px;
  display: block;
  border: none;
  font-size: 14px;
}

.form_profile input {
  display: flex;
  width: 100%;
  margin: 0.5rem 0rem 1.2rem;
  border-radius: 5px;
  color: #f3f2ef;
  outline: none;
  border: 1px solid #333;
  padding: 15px;
  box-shadow: inset 0px 5px 5px 0px #ffffff;
}

.form_profile input:hover {
  transform: scale(1);
  box-shadow: 0px 10px 20px 2px rgba(14, 13, 13, 0.25);
}

.form_profile .btn-secondery {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 17px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5rem;
  border: none;
  outline: none;
  color: #ffffff;
  background: #076dd4;
}

.form_profile .btn-secondery:hover {
  background: #4848fa;
}

.input-group p {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.input-group a {
  display: flex;
  justify-content: center;
  font-size: 1rem;
}
</style>
