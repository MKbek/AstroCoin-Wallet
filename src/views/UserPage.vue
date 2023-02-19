<template>
  <div id="user-app">
    <div class="user-page">
      <router-link to="/" class="close-page">
        <i class="ai ai-arrow-back"></i>
        <div class="close-title">Back</div>
      </router-link>
      <div class="user-photo">
        <div class="user-pic-block">
          <img :src="user.photo ? this.$store.state.url + user.photo : require(`../assets/default.webp`)" alt="" class="user-pic" ref="image">
        </div>
        <input
          type="file"
          @change="onFileChange"
          ref="fileInput"
          style="display: none"
          accept=".jpg, .png, .jpeg, |image/*"
        >
        <div class="edit-user-pic" @click="$refs.fileInput.click()">
          <i class="ai ai-camera-outline"></i>
        </div>
      </div>
      <div class="user-fullname">{{ user.name }} {{ user.last_name }}
        <svg v-if="user.verify" width="28" height="28" fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.517 3.389c.776-.704 1.164-1.056 1.59-1.222a2.467 2.467 0 0 1 1.786 0c.427.166.814.518 1.59 1.222.366.331.549.497.753.62.275.167.58.278.898.327.236.037.482.028.976.008 1.046-.04 1.57-.06 2.003.087a2.467 2.467 0 0 1 1.368 1.148c.22.4.291.92.433 1.958.067.489.1.733.177.96.104.304.266.585.478.827.157.18.352.33.742.633.828.642 1.242.963 1.48 1.354.319.527.43 1.154.31 1.759-.09.448-.369.892-.927 1.778-.263.417-.395.626-.481.849-.116.3-.173.62-.166.94.005.24.057.48.161.963.222 1.024.333 1.536.263 1.988a2.468 2.468 0 0 1-.893 1.547c-.356.286-.855.446-1.853.766-.47.15-.705.226-.914.341-.282.155-.53.364-.732.614-.15.186-.265.405-.495.841-.488.927-.732 1.39-1.076 1.692A2.468 2.468 0 0 1 17.31 26c-.458-.01-.942-.208-1.912-.604-.457-.187-.686-.28-.92-.326a2.47 2.47 0 0 0-.955 0c-.235.046-.463.14-.92.326-.97.396-1.455.594-1.912.604a2.468 2.468 0 0 1-1.678-.61c-.344-.302-.589-.766-1.077-1.692-.23-.437-.345-.655-.495-.841a2.468 2.468 0 0 0-.732-.615c-.209-.115-.444-.19-.914-.34-.997-.32-1.496-.48-1.853-.767a2.468 2.468 0 0 1-.893-1.547c-.07-.452.041-.964.263-1.988.105-.482.157-.723.162-.962a2.467 2.467 0 0 0-.166-.941c-.087-.223-.218-.431-.481-.85-.559-.885-.838-1.329-.927-1.777a2.468 2.468 0 0 1 .31-1.759c.237-.391.651-.712 1.48-1.354.39-.302.584-.454.741-.633.212-.242.374-.523.478-.828.077-.226.11-.47.178-.96.141-1.037.212-1.556.433-1.957.296-.54.784-.95 1.368-1.148.433-.147.956-.127 2.003-.087.493.02.74.03.976-.008.317-.049.622-.16.897-.326.205-.124.388-.29.753-.621z" fill="#3721d6"></path>
          <path d="M9.476 14.707l2.879 2.879 5.758-5.758" id="verified_svg__verified_tick" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <div class="user-email">{{ user.email }}</div>
      <div class="user-tools">
        <ul class="tools-items">
          <router-link tag="li" to="/ranks"><i class="ai ai-trending-up"></i>Student Ranking</router-link>
        </ul>
        <ul class="tools-items">
          <li><i class="ai ai-person-outline"></i>{{ user.qwasar }}</li>
          <li><i class="ai ai-school-outline"></i>{{ user.stack }}</li>
          <li><i class="ai ai-call-outline"></i>+{{ user.number }}</li>
          <li><i class="ai ai-wallet-outline"></i>{{ user.wallet.slice(0, 7) + '.......' + user.wallet.slice(-9, user.wallet.length) }}</li>
        </ul>
        <ul class="tools-items">
          <router-link tag="li" to="/update-password"><i class="ai ai-key-outline"></i>Change password</router-link>
        </ul>
        <ul class="tools-items">
          <li @click="logout" class="btn-log-out"><i class="ai ai-log-out-outline"></i>Log Out</li>
        </ul>
      </div>
    </div>
    <img v-if="croppedImage" :src="croppedImage" alt="">
    <div id="modals" class="modals">
      <div id="upload-avatar" :class="{ active: openUpload }">
        <div class="modal-header">
          <div class="modal-title">Upload</div>
          <div class="modal-tools">
            <div class="modal-close" @click="closeModals">
              <i class="ai ai-close"></i>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <Cropper
              ref="cropper"
              :src="image"
              stencil-component="circle-stencil"
          />
        </div>
        <div class="upload-tools">
          <button @click="reset">Reset</button>
          <button @click="uploadImage">Upload</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
export default {
  name: "UserPage",
  data: () => ({
    user: {},
    image: null,
    openUpload: false,
    croppedImage: null,
  }),
  components: {
    Cropper,
  },
  async mounted() {
    this.$store.state.userModal = false;
    document.title = 'AstroCoin | My Profile'
    if (!this.$store.state.user) {
      await this.$store.dispatch('getUser')
    }
    this.user = this.$store.state.user
    window.addEventListener('keydown', (e) => {
      if (e.key == "Escape") {
        this.$router.push('/')
      }
    })
  },
  methods: {
    closeModals() {
      this.openUpload = false
    },
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    },
    reset() {
      this.$refs.cropper.reset();
      this.image = null;
      this.openUpload = false
    },
    onFileChange(e) {
      const file = e.target.files[0]
      this.image = URL.createObjectURL(file)
      this.openUpload = true
    },
    async uploadImage() {
      const { canvas } = this.$refs.cropper.getResult();
			if (canvas) {
				const form = new FormData();
				await canvas.toBlob(blob => {
					form.append('photo', blob);
          this.$store.dispatch('setPhoto', form).then(res => {
            this.$refs.image.src = this.$store.state.url + res.data.path
          })
				}, 'image/jpeg');
			}
      this.openUpload = false
      Toast.fire('Success', 'Photo uploaded', 'success')
		},
  }
}
</script>
<style scoped>

#upload-avatar {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 12px;
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  transform: scale(0.9);
  box-shadow: 0 0 15px #c2c2c2;
  position: fixed;
  top: 155px;
  z-index: 8;
}

#upload-avatar.active {
  visibility: visible;
  opacity: 1;
  transform: scale(1.1);
}

#upload-avatar .vue-advanced-cropper {
  width: 350px;
  height: 350px;
  overflow: hidden;
  border-radius: 10px;
}

#upload-avatar .upload-tools {
  display: flex;
  justify-content: center;
  margin: 35px 5px 5px;
}

#upload-avatar .upload-tools button {
  border: none;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
}

#upload-avatar .upload-tools button:hover {
  background: #3721d6;
  color: #fff;
}

</style>
