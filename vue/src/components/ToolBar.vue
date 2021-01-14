<template>
  <div class="header">
    <div>
      <!-- type - 글자 색  variant - 배경색 -->
  <b-navbar toggleable="lg" type="dark" variant="#288bff" style="background-color:chocolate">
    <b-navbar-brand><router-link to="/">위펀딩</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/investments">투자하기</router-link></b-nav-item>
        <b-nav-item><router-link to="/jobs">WRC</router-link></b-nav-item>
        <b-nav-item><router-link to="/ask">회사소개</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown text="공지사항" right>
          <b-dropdown-item><router-link to="investments">EN</router-link></b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item @click="openModal">SignIn</b-dropdown-item>
          <b-dropdown-item @click="openModal2">SignUp</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    <div class="modal-window">
      <!-- 컴포넌트 LoginForm -->
      <login-form class="modal-text" @close="closeModal" v-if="modal">
        <!-- default 슬롯 콘텐츠 -->
        <div class="loginHeader" slot="header">Create Account</div>
        <div slot="body">
          <div>
            <input class="input1" type="text" v-model="id" placeholder="id" />
            <input
              class="input1"
              type="password"
              v-model="password"
              placeholder="password"
            />
          </div>
          <div>
            <button class="Btn1" style="font-size: 1px" @click="doSend">
              로그인</button
            ><br />
            <button class="Btn1" style="font-size: 1px" @click="closeModal">
              나가기
            </button>
          </div>
        </div>
        <!-- /default -->
        <!-- footer 슬롯 콘텐츠 -->
        <template class="footer" slot="footer">
          <a href="https://www.naver.com"
            ><button class="Btn1">네이버</button></a
          >
          <a href="https://www.naver.com"><button class="Btn1">구글</button></a>
          <a href="https://www.naver.com"
            ><button class="Btn1">깃허브</button></a
          >
        </template>
        <!-- /footer -->
      </login-form>

      <!-- 컴포넌트 Sign Up -->
      <sign-up class="modal-text" @close="closeModal2" v-if="modal2">
        <!-- default 슬롯 콘텐츠 -->
        <div class="loginHeader" slot="header">Create Account</div>
        <div slot="body">
          <div>
            <input
              class="input1"
              type="text"
              v-model="user.userId"
              placeholder="id"
            />
            <input
              class="input1"
              type="password"
              v-model="user.userPassword"
              placeholder="password"
            />
            <input
              class="input1"
              type="text"
              v-model="user.userEmail"
              placeholder="E-mail"
            />
            <input
              class="input1"
              type="text"
              v-model="user.userName"
              placeholder="name"
            />
            <button class="Btn2" style="font-size: 1px" @click="doSignUp">
              회원 가입
            </button>
          </div>
          <button class="Btn2" style="font-size: 1px" @click="closeModal2">
            나가기
          </button>
        </div>
        <!-- /default -->
      </sign-up>
    </div>
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import SignUp from "./SignUp.vue";

export default {
  components: { LoginForm, SignUp },
  data() {
    return {
      modal: false,
      modal2: false,
      user: {
        userId: "",
        userEmail: "",
        userPassword: "",
        userName: "",
      },
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    openModal2() {
      this.modal2 = true;
    },
    closeModal() {
      this.modal = false;
    },
    closeModal2() {
      this.modal2 = false;
    },
    doLogin() {
      if (this.message.length > 0) {
        alert(this.message);
        this.message = "";
        this.closeModal();
      } else {
        alert("메시지를 입력해주세요.");
      }
    },
    doSignUp() {
      if (this.user.userId.length > 0) {
        alert(
          this.$store.dispatch("GET_USER_RESULT", this.user) + this.user.userId
        );

        this.closeModal2();
      } else {
        alert("fail");
      }
    },
  },
};
</script>

<style scoped>
.header .router-link-exact-active {
  color: gray;
}

.header a {
  color: black;
}

.modal-window {
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
}

.loginHeader {
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Btn1 {
  border: 1px solid skyblue;
  background-color: rgba(0, 0, 0, 0);
  color: skyblue;
  width: 100px;
  padding: 5px;
  height: 30px;
  vertical-align: middle;
  cursor: pointer;
}

.input1 {
  border: 1px solid skyblue;
  background-color: rgba(0, 0, 0, 0);
  color: skyblue;
  width: 200px;
  height: 18px;
  padding: 5px;
  vertical-align: middle;
}

.input1::placeholder {
  color: gray;
  vertical-align: middle;
}

.Btn2 {
  padding: 2px;
  border: 1px solid skyblue;
  background-color: rgba(0, 0, 0, 0);
  color: skyblue;
  width: 100px;
  padding: 5px;
  height: 30px;
  vertical-align: middle;
  cursor: pointer;
  justify-content: center;
}
</style>