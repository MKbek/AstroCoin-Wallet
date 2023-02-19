<template>
  <div class="home">
    <div v-if="user.status === 'blocked'" id="container-b" style="margin-top: 30px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 512 512">
        <g>
          <g>
            <g transform="matrix(1.0399999618530273,-0.0000847925984999165,0.0000847925984999165,1.0399999618530273,-13.807706832885742,-19.082326889038086)">
              <g transform="matrix(1,0,0,1,215.23899841308594,335.0249938964844)">
                <path fill="#C3BC78" d="M217.2,148.7l-346.1,0c-6.3,0-11.4-5.1-11.4-11.4l0-226.3c0-6.3,5.1-11.4,11.4-11.4l346.1,0c6.3,0,11.4,5.1,11.4,11.4l0,226.3C228.7,143.6,223.5,148.7,217.2,148.7z"></path>
              </g>
              <g transform="matrix(1,0,0,1,215.23699951171875,276.2919921875)" opacity="0.2">
                <path fill-opacity="0" stroke="#66582E" stroke-width="11.5657" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4.16" d="M226.8,6.2c0,0-7,8.2-31.2,8.2l-302.7,0c-21.7,0-31.3-8.2-31.3-8.2"></path></g><g transform="matrix(1,0,0,1,215.23699951171875,246.03199768066406)">
              <path fill="#F4E9AB" d="M226.8-2.6c-6.7,10.1-18.2,16.7-31.2,16.7l-302.7,0c-13,0-24.5-6.6-31.3-16.7c2.1-3.1,5.5-5.1,9.5-5.1l346.1,0C221.2-7.7,224.7-5.7,226.8-2.6z"></path>
            </g>
              <g transform="matrix(1,0,0,1,215.23699951171875,248.0970001220703)">
                <path fill-opacity="0" stroke="#EAE2A7" stroke-width="7.7105" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4.16" d="M226.8-4.7C220,5.4,208.5,12,195.5,12l-302.7,0c-13,0-24.5-6.6-31.3-16.7"></path>
              </g><g transform="matrix(1,0,0,1,215.23699951171875,279.5010070800781)">
              <path fill-opacity="0" stroke="#D8D193" stroke-width="7.7105" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4.16" d="M226.8,6.9c0,0-7,8.2-31.2,8.2l-302.7,0c-21.7,0-31.3-8.2-31.3-8.2"></path>
            </g>
              <g transform="matrix(1,0,0,1,215.23699951171875,335.1210021972656)" opacity="0.2">
                <path fill-opacity="0" stroke="#66582E" stroke-width="11.5657" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4.16" d="M226.8,20c0,0-7,8.2-31.2,8.2l-302.7,0c-21.7,0-31.3-8.2-31.3-8.2"></path>
              </g>
              <g transform="matrix(1,0,0,1,215.23699951171875,393.1369934082031)" opacity="0.2">
                <path fill-opacity="0" stroke="#66582E" stroke-width="11.5657" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4.16" d="M226.8,33.7c0,0-7,8.2-31.2,8.2l-302.7,0c-21.7,0-31.3-8.2-31.3-8.2"></path>
              </g>
              <g transform="matrix(1,0,0,1,215.23699951171875,338.1210021972656)">
                <path fill-opacity="0" stroke="#D8D193" stroke-width="7.7105" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4.16" d="M226.8,20.8c0,0-7,8.2-31.2,8.2l-302.7,0c-21.7,0-31.3-8.2-31.3-8.2"></path>
              </g>
              <g transform="matrix(1,0,0,1,215.23699951171875,396.4750061035156)"><path fill-opacity="0" stroke="#D8D193" stroke-width="7.7105" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4.16" d="M226.8,34.5c0,0-7,8.2-31.2,8.2l-302.7,0c-21.7,0-31.3-8.2-31.3-8.2"></path>
              </g>
              <g transform="matrix(1,0,0,1,215.23699951171875,311.94500732421875)">
                <path fill-opacity="0" stroke="#D8D193" stroke-width="7.7105" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4.16" d="M226.8,14.6c0,0-7,8.2-31.2,8.2l-302.7,0c-21.7,0-31.3-8.2-31.3-8.2"></path>
              </g>
              <g transform="matrix(1,0,0,1,215.23699951171875,370.2980041503906)">
                <path fill-opacity="0" stroke="#D8D193" stroke-width="7.7105" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4.16" d="M226.8,28.3c0,0-7,8.2-31.2,8.2l-302.7,0c-21.7,0-31.3-8.2-31.3-8.2"></path>
              </g>
              <g transform="matrix(1,0,0,1,215.23699951171875,308.94500732421875)">
                <path fill-opacity="0" stroke="#9B9157" stroke-width="7.7105" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4.16" d="M226.8,13.9c0,0-7,8.2-31.2,8.2l-302.7,0c-21.7,0-31.3-8.2-31.3-8.2"></path>
              </g>
              <g transform="matrix(1,0,0,1,215.23699951171875,367.2980041503906)">
                <path fill-opacity="0" stroke="#9B9157" stroke-width="7.7105" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4.16" d="M226.8,27.6c0,0-7,8.2-31.2,8.2l-302.7,0c-21.7,0-31.3-8.2-31.3-8.2"></path>
              </g>
              <g transform="matrix(1,0,0,1,215.23699951171875,428.36700439453125)">
                <path fill="#514523" d="M-138.4,51c6.7-8.5,18.2-14.1,31.2-14.1l302.7,0c13,0,24.5,5.6,31.3,14.1c-2.1,2.6-5.5,4.3-9.5,4.3l-346.1,0C-132.9,55.4-136.4,53.7-138.4,51z"></path>
              </g>
              <g transform="matrix(1,0,0,1,283.0419921875,335.0270080566406)" opacity="0.3">
                <path fill="#7C7038" d="M160.9-89l0,226.3c0,6.3-5.1,11.4-11.4,11.4l-189.8,0l26.8-12.5c7.7-3.6,12.7-11.4,12.7-19.9l0-179.1c0-7.5-3.9-14.5-10.2-18.6l-29.3-18.5l-0.2-0.5l190,0C155.7-100.4,160.9-95.3,160.9-89z"></path>
              </g>
              <g transform="matrix(1,0,0,1,215.23899841308594,335.0249938964844)">
                <path fill-opacity="0" stroke="#8E8342" stroke-width="10.2806" stroke-miterlimit="10.4" d="M217.2,148.7l-346.1,0c-6.3,0-11.4-5.1-11.4-11.4l0-226.3c0-6.3,5.1-11.4,11.4-11.4l346.1,0c6.3,0,11.4,5.1,11.4,11.4l0,226.3C228.7,143.6,223.5,148.7,217.2,148.7z"></path>
              </g>
              <g transform="matrix(1,0,0,1,215.27499389648438,433.5060119628906)">
                <path fill-opacity="0" stroke="#3A3211" stroke-width="10.2806" stroke-miterlimit="10.4" d="M227.1,44.5c-2,3.3-5.8,5.8-9.9,5.8l-346.1,0c-3.9,0-7.8-2.6-9.8-5.6"></path>
              </g>
            </g>
            <g transform="matrix(1.0399999618530273,-0.0000847925984999165,0.0000847925984999165,1.0399999618530273,-13.807706832885742,-19.082326889038086)">
              <g transform="matrix(1,0,0,1,217.96200561523438,157.61199951171875)">
                <g transform="matrix(1,0,0,1,0,0)">
                  <path fill="#BAD9F7" d="M196,38.9V77l-50.7,0V38.9c0-21.4-6.7-41.2-18.2-57.5c-9.2-13.1-21.4-23.9-35.6-31.4c-12.2-6.5-25.9-10.5-40.5-11.4c0,0-0.1,0-0.1,0c-2.1-0.1-4.1-0.2-6.2-0.2c-55.4,0-100.5,45.1-100.5,100.5l0,38.1l-50.7,0l0-38.1c0-38.8,14.7-74.1,38.7-100.9c0,0,0,0,0,0c12-13.4,26.3-24.6,42.4-33c20.6-10.8,44-17,68.7-17.2c0.4,0,0.9,0,1.3,0C128.2-112.3,196-44.5,196,38.9z"></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,217.9669952392578,170.26199340820312)" opacity="0.4">
                <path fill="#5E4E41" d="M161.7,26.8v37.5l-16.3,0V26.2c0-21.4-6.7-41.2-18.2-57.5c-9.2-13.1-21.4-23.9-35.6-31.4c-12.2-6.5-25.9-10.5-40.5-11.4c0,0-0.1,0-0.1,0c-2.1-0.1-4.1-0.2-6.2-0.2c-55.4,0-100.5,45.1-100.5,100.5l0,38.1h-16.3l0-37.5c0-64.4,52.4-120.6,116.9-120.6c9.9,0,19.6,1.3,28.8,3.8C124.2-76.2,161.7-27.6,161.7,26.8z"></path>
              </g>
              <g transform="matrix(1,0,0,1,233.63699340820312,157.61199951171875)" opacity="0.5">
                <path fill="#70A3D6" d="M180.3,38.9l0,38.1l-34.6,0l0-38.1c-0.9-16.5-8.3-85-62.3-119.9c-12.5-8.1-47-26.5-96.6-15.9c-31.9,6.8-69,34.1-70.1,34.9c10.4-14.2,25.8-25.1,42.4-33c4.3-2.1,8.7-3.9,13.1-5.6c20.6-7.8,41.5-11.4,55.7-11.7c0.4,0,0.9,0,1.3,0C112.5-112.3,180.3-44.5,180.3,38.9z"></path>
              </g>
              <g transform="matrix(1,0,0,1,217.96200561523438,157.61199951171875)">
                <g transform="matrix(1,0,0,1,0,0)">
                  <path fill-opacity="0" stroke="#6A7D9E" stroke-width="10.2806" stroke-miterlimit="10.4" d="M196,38.9v33.1c0,2.8-2.3,5.1-5.1,5.1l-40.5,0c-2.8,0-5.1-2.3-5.1-5.1V38.9c0-21.4-6.7-41.2-18.2-57.5c-9.2-13.1-21.4-23.9-35.6-31.4c-12.2-6.5-25.9-10.5-40.5-11.4c0,0-0.1,0-0.1,0c-2-0.1-3.9-0.2-5.9-0.2C-10.3-61.8-55.7-15.6-55.7,39.9l0,32.1c0,2.8-2.3,5.1-5.1,5.1l-40.5,0c-2.8,0-5.1-2.3-5.1-5.1l0-33.1c0-38.8,14.7-74.1,38.7-100.9c0,0,0,0,0,0c12-13.4,26.3-24.6,42.4-33c20.6-10.8,44-17,68.7-17.2c0.4,0,0.9,0,1.3,0C128.2-112.3,196-44.5,196,38.9z"></path>
                </g>
              </g>
              <g transform="matrix(1,0,0,1,139.43800354003906,125.25700378417969)">
                <path fill-opacity="0" stroke="#E9F6FF" stroke-width="17.9911" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4.16" d="M23.6-22.9c2.4-2.6,2.6-2.5,5.4-4.9"></path>
              </g>
              <g transform="matrix(1,0,0,1,115.23500061035156,170.3419952392578)">
                <path fill-opacity="0" stroke="#E9F6FF" stroke-width="17.9911" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4.16" d="M11.5,13.5c0,0,0.7-30.2,18.2-56.2"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div class="block-user">Sorry, <span class="user-name">Muhammadqodir</span>
      </div>
      <div class="block-title">Your account is Blocked</div>
      <div class="block-info">
        <div class="info-title">We bring our own sorry. You may have allowed some of the blocking signs listed below</div>
        <ul>
          <li>Perhaps someone registered on your behalf</li>
          <li>You may have entered incorrect data during registration</li>
          <li>Perhaps you have not uploaded your real photo to the platform or you are not available in electronic badges</li>
          <li>You may have suspended or forgotten to pay to extend the course</li>
          <li>You may have violated the rules established inside the Astrum Academy</li>
          <li>Perhaps you tried to cheat the Qwasar platform or your account in the platform is blocked for a specific reason</li>
        </ul>
        <div class="info-footer">If your account has been blocked for no reason, we ask you to contact the main mentor of the academy</div>
        <div class="block-tools">
          <a href="https://t.me/Julwy2" class="contact-btn telegram">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="auto" viewBox="0 0 512 512">
              <path fill="#FFFFFF" d="M38.3,227.3c135.4-58.8,225.5-97.9,270.8-116.8C437.9,56.7,465,47.4,482.4,47c3.9,0,12.4,0.8,18.2,5.4c4.6,3.9,5.8,8.9,6.6,12.8s1.5,12,0.8,18.2c-7,73.5-37.1,251.9-52.6,333.9c-6.6,34.8-19.3,46.4-31.7,47.6c-27.1,2.3-47.6-17.8-73.5-34.8c-41-26.7-63.8-43.3-103.7-69.6c-46-30.2-16.2-46.8,10.1-73.9c7-7,125.7-115.3,128.1-125c0.4-1.2,0.4-5.8-2.3-8.1c-2.7-2.3-6.6-1.5-9.7-0.8c-4.3,0.8-69.2,44.1-195.8,129.6c-18.6,12.8-35.2,19-50.3,18.6c-16.6-0.4-48.4-9.3-72.3-17c-29-9.3-52.2-14.3-50.3-30.6C5,244.7,16.6,236.2,38.3,227.3z"></path>
            </svg>
            Telegram</a>
          <a href="https://discordapp.com/users/888079300358701056" class="contact-btn discord">
            <svg width="30" height="auto" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#ffffff"></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="71" height="55" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            Discord
          </a>
        </div>
      </div>
    </div>
    <div v-else-if="user.status === 'verified'" id="container">
      <div id="header">
        <div class="left-content">
          <div class="app-logo main"></div>
        </div>
        <div class="center-content"></div>
        <div class="right-content">
          <div class="user-menu" @click="openUser">
            <img :src="user.photo ? this.$store.state.url + user.photo : require(`../assets/default.webp`)" class="user-pic" alt="">
          </div>
        </div>
      </div>
      <div id="main">
        <div class="coin-header">
          <div class="coin-logo">
            <div class="coin-icon">{astrocoin:coin_icon}</div>
          </div>
          <div class="coin-currency">{{ userBalance }} ASC</div>
          <div v-if="user.status !== 'unverified'" class="coin-buttons" :style="this.$store.state.receiveModal || this.$store.state.sendModal ? 'z-index: 1' : ''">
            <div v-if="user.role === 'superuser' || user.role === 'admin'" @click="openDashboard" class="coin-btn">
              <div class="coin-btn-icon">
                <svg
                    width="22"
                    viewBox="0 0 500 500"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M104 496H72a24 24 0 01-24-24V328a24 24 0 0124-24h32a24 24 0 0124 24v144a24 24 0 01-24 24zM328 496h-32a24 24 0 01-24-24V232a24 24 0 0124-24h32a24 24 0 0124 24v240a24 24 0 01-24 24zM440 496h-32a24 24 0 01-24-24V120a24 24 0 0124-24h32a24 24 0 0124 24v352a24 24 0 01-24 24zM216 496h-32a24 24 0 01-24-24V40a24 24 0 0124-24h32a24 24 0 0124 24v432a24 24 0 01-24 24z"/>
              </svg>
              </div>
              <span class="coin-btn-title">Stats</span>
            </div>
            <div class="coin-btn" @click.prevent="submitModal">
              <div class="coin-btn-icon">
                <svg
                    width="25"
                    viewBox="0 0 500 500"
                    xml:space="preserve"
                    style="stroke-width: 22px"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M400,240H272V112c0-8.8-7.2-16-16-16c-8.8,0-16,7.2-16,16v128H112c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16h128v128c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16V272h128c8.8,0,16-7.2,16-16C416,247.2,408.8,240,400,240z"
                />
              </svg>
              </div>
              <span class="coin-btn-title">Receive</span>
            </div>
            <div class="coin-btn" @click.prevent="sendModal">
              <div class="coin-btn-icon">
                <svg
                    width="25"
                    viewBox="0 0 500 500"
                    xml:space="preserve"
                    style="stroke-width: 10px"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M417,227L273,83c-9.4-9.4-24.6-9.4-33.9,0L95,227c-9.4,9.4-9.4,24.6,0,33.9c9.4,9.4,24.6,9.4,33.9,0l103-103V412c0,13.3,10.7,24,24,24s24-10.7,24-24V157.9l103,103c4.7,4.7,10.8,7,17,7s12.3-2.3,17-7C426.3,251.6,426.3,236.4,417,227z"
                />
              </svg>
              </div>
              <span class="coin-btn-title">Send</span>
            </div>
            <div @click="openStore" class="coin-btn">
              <div class="coin-btn-icon">
                <svg
                    width="25"
                    viewBox="0 0 500 500"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M454.65,169.4A31.82,31.82,0,0,0,432,160H368V144a112,112,0,0,0-224,0v16H80a32,32,0,0,0-32,32V408c0,39,33,72,72,72H392a72.22,72.22,0,0,0,50.48-20.55A69.48,69.48,0,0,0,464,409.25V192A31.75,31.75,0,0,0,454.65,169.4ZM176,144a80,80,0,0,1,160,0v16H176Zm192,96a112,112,0,0,1-224,0V224a16,16,0,0,1,32,0v16a80,80,0,0,0,160,0V224a16,16,0,0,1,32,0Z"
                />
              </svg>
              </div>
              <span class="coin-btn-title">Store</span>
            </div>
          </div>
          <div v-if="user.status === 'unverified'">
            <p class="text-error font-default">
              Your account is unverified
            </p>
          </div>
        </div>
        <div class="coin-body">
          <div class="main-tools" :class="{'left': activeItem === 'story-transfers', 'right': activeItem === 'story-buy'}">
            <div class="story-transfers story-btn" @click="setActive('story-transfers')" :class="{ active: isActive('story-transfers') }">Transactions</div>
            <div class="story-buy story-btn" @click="setActive('story-buy')" :class="{ active: isActive('story-buy') }">Orders</div>
          </div>
          <div class="story" :class="{'transfer': activeItem === 'story-transfers', 'buy': activeItem === 'story-buy'}">
            <div id="story-transfers">
              <div style="display: flex; justify-content: center;">
                <bounce-loader :loading="loading" :color="'#3721d6'"></bounce-loader>
              </div>
              <div class="card" v-for="(history, date) in walletHistory" :key="date">
                <div class="transfers-date">
                  {{ date }}
                </div>
                <div v-for="(item, index) in history" @click="setCheque(item)" :key="index" :class="item.status == 'failed' ? 'failed-coin' : item.wallet_to == user.wallet ? 'receive-coin' : 'remove-coin'">
                  <div class="status-icon">
                    <i :class="item.status == 'failed' ? 'ai ai-warning-outline' : item.wallet_to == user.wallet ? 'ai ai-add' : 'ai ai-remove'"></i>
                  </div>
                  <div class="status-content">
                    <div class="status-name">{{ item.title }}</div>
                    <div class="status-coin">{{ item.amount }} ASC</div>
                  </div>
                </div>
              </div>
              <div style="display: flex; justify-content: center;">
                <bounce-loader :loading="loadHistory" :color="'#3721d6'"></bounce-loader>
              </div>
            </div>
            <div id="story-buy">
              <div style="display: flex; justify-content: center;">
                <bounce-loader :loading="loading" :color="'#3721d6'"></bounce-loader>
              </div>
              <div class="card" v-for="(history, date) in storeHistory" :key="date">
                <div class="transfers-date">
                  {{ date }}
                </div>
                <div v-for="(item, index) in history" @click="setCheque(item)" :key="index" :class="item.status === 'failed' ? 'failed-coin' : item.wallet_to === user.wallet ? 'receive-coin' : 'remove-coin'">
                  <div class="status-icon">
                    <i :class="item.status === 'failed' ? 'ai ai-warning-outline' : item.wallet_to === user.wallet ? 'ai ai-add' : 'ai ai-remove'"></i>
                  </div>
                  <div class="status-content">
                    <div class="status-name">{{ item.title }}</div>
                    <div class="status-coin">{{ item.amount }} ASC</div>
                  </div>
                </div>
              </div>
              <div style="display: flex; justify-content: center;">
                <bounce-loader :loading="loadHistory" :color="'#3721d6'"></bounce-loader>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      <div id="footer">
        <div class="copyright">
          © 2020 <span class="wallet-name">AstroCoin | Wallet</span> Made With <i class="ai ai-heart"></i> By <a href="https://github.com/astrum-lab" target="_blank">Astrum Lab</a>
        </div>
      </div>-->
      <Modals :user="user" @sendCoin="sendCoin" :cheque="cheque"/>
    </div>
  </div>
</template>
<script>

import Modals from '../components/Modals.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: { Modals },
  async mounted() {
    if (this.$route.fullPath === "/transfer/" || this.$route.fullPath === "/transfer") {
      this.$router.push('/')
    }
    this.loading = true
    document.title = 'AstroCoin | Wallet'
    if (!this.$store.state.user) {
      await this.$store.dispatch('getUser')
    }
    if (!this.$store.state.walletHistory) {
      await this.$store.dispatch('getHistory').catch((e) => {
        Toast.fire(e.response.data.error, '', 'error')
      })
      this.loading = false
    }
    if (!this.$store.state.orderHistory) {
      await this.$store.dispatch('getOrders').catch((e) => {
        Toast.fire(e.response.data.error, '', 'error')
      })
      this.loading = false
    }
    this.user = this.$store.state.user
    this.walletHistory = this.$store.state.walletHistory
    this.storeHistory = this.$store.state.orderHistory
    this.loading = false
    window.addEventListener('scroll', this.scroll)
    this.old_balance = this.user.balance
    this.counterAnim()
  },
  data: () => ({
    activeItem: 'story-transfers',
    user: {},
    userBalance: 0,
    walletHistory: {},
    walletsEmpty: false,
    storesEmpty: false,
    storeHistory: {},
    cheque: {},
    loading: false,
    loadHistory: false,
    page: 1,
    count: 10,
    delay: 0,
    old_balance: 0,
  }),
  methods: {
    counterAnim(start = 0, end, duration = 500) {
      if (this.old_balance !== this.user.balance) {
        start = this.old_balance
      }
      const target = this.userBalance
      end = this.user.balance
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        this.userBalance = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
    // sort() {
    //   const groups = this.walletHistory.reduce((groups, game) => {
    //     const date = game.date.split('T')[0];
    //     if (!groups[date]) {
    //       groups[date] = [];
    //     }
    //     groups[date].push(game);
    //     return groups;
    //   }, {});
    //   const groupArrays = Object.keys(groups).map((date) => {
    //     return {
    //       date,
    //       data: groups[date]
    //     };
    //   });
    //   this.walletHistory = groupArrays
    // },
    async scroll() {
      if (this.delay == 1) return
        this.delay = 1
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight && this.count >= 10) {
          this.loadHistory = true
          this.page++
          const res = await axios.get(`https://api.astrocoin.uz/api/transfers?page=${this.page}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
          this.count = 0
          for (const [key, value] of Object.entries(res.data)) {
            if (key in this.walletHistory) {
              this.walletHistory[key] = this.walletHistory[key].concat(res.data[key])
              delete res.data[key]
            } else {
              this.walletHistory = { ...this.walletHistory, ...res.data }
            }
            this.count += value.length;
          };
        } else {
          this.loadHistory = false
        }
        this.delay = 0
    },
    async sendCoin(data) {
      try {
        await this.$store.dispatch('transfer', data)
        Toast.fire('Sent', '', 'success');
        await this.$store.dispatch('getUser')
        await this.$store.dispatch('getHistory')
        this.user = this.$store.state.user
        this.walletHistory = this.$store.state.walletHistory
        this.counterAnim()
      } catch (e) {
        Toast.fire(this.$store.state.error, '', 'error')
      }
    },
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },
    setCheque(item) {
      this.$store.state.openCheque = true
      this.cheque = item
      this.$store.state.userModal = false
    },
    //
    openUser() {
      this.$store.state.userModal = !this.$store.state.userModal
    },
    openDashboard() {
      window.open(`https://admin.astrocoin.uz/user/login`)
    },
    submitModal() {
      this.$store.state.receiveModal = !this.$store.state.receiveModal
      this.$store.state.userModal = false
      document.querySelector('#modal-back').style.background = '';
      document.querySelector('.main-tools').style.zIndex = '1';
    },
    sendModal() {
      this.$store.state.sendModal = !this.$store.state.sendModal
      this.$store.state.userModal = false
      document.querySelector('#modal-back').style.background = '';
      document.querySelector('.main-tools').style.zIndex = '1';
    },
    openStore() {
      window.open(`https://store.astrocoin.uz/user/login`)
    },
  },
}
</script>
