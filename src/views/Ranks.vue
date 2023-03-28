<template>
  <div id="ranks">
    <div class="ranks-header">
      <div class="corp-logo">{astrum:brand}</div>
      <div class="hr-line"></div>
      <div class="header-title">Ranks</div>
    </div>
    <div class="ranks-body">
      <div class="col row">
        <div class="col col-2">
          <div class="rank rank-top-users">
            <div class="rank-title">{{ ranks[0].title }}</div> <!-- олигарх -->
            <ol class="rank-users">
              <li class="user-item" v-for="user in ranks[0].users" :key="user.id">
                <div class="user-date">
                  <div class="user-name">{{ user.name }}. {{ user.last_name[0] }}
                    <VerifyAccountBadge v-if="user.verify" />
                  </div>
                  <div class="user-coins">{{ user.balance }} ASC</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div class="col">
          <div class="rank">
            <div class="rank-title">{{ ranks[3].title }}</div> <!-- мажор -->
            <ol class="rank-users">
              <li class="user-item" v-for="user in ranks[3].users" :key="user.id">
                <div class="user-date">
                  <div class="user-name">{{ user.name }}. {{ user.last_name[0] }}
                    <VerifyAccountBadge v-if="user.verify" />
                  </div>
                  <div class="user-coins">{{ user.balance }} ASC</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="col row">
        <div class="col col-2">
          <div class="rank rank-top-users">
            <div class="rank-title">{{ ranks[1].title }}</div> <!-- баникир -->
            <ol class="rank-users">
              <li class="user-item" v-for="user in ranks[1].users" :key="user.id">
                <div class="user-date">
                  <div class="user-name">{{ user.name }}. {{ user.last_name[0] }}
                    <VerifyAccountBadge v-if="user.verify" />
                  </div>
                  <div class="user-coins">{{ user.balance }} ASC</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div class="col">
          <div class="rank">
            <div class="rank-title">
              <div class="rank-title">{{ ranks[4].title }}</div></div> <!-- мажор -->
            <ol class="rank-users">
              <li class="user-item" v-for="user in ranks[4].users" :key="user.id">
                <div class="user-date">
                  <div class="user-name">{{ user.name }}. {{ user.last_name[0] }}
                    <VerifyAccountBadge v-if="user.verify" />
                  </div>
                  <div class="user-coins">{{ user.balance }} ASC</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="col row">
        <div class="col">
          <div class="rank">
            <div class="rank-title">{{ ranks[5].title }}</div> <!-- любимчик админа -->
            <ol class="rank-users">
              <li class="user-item" v-for="user in ranks[5].users" :key="user.id">
                <div class="user-date">
                  <div class="user-name">{{ user.name }}. {{ user.last_name[0] }}
                    <VerifyAccountBadge v-if="user.verify" />
                  </div>
                  <div class="user-coins">{{ user.balance }} ASC</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div class="col">
          <div class="rank">
            <div class="rank-title">{{ ranks[6].title }}</div> <!-- филантроп -->
            <ol class="rank-users">
              <li class="user-item" v-for="user in ranks[6].users" :key="user.id">
                <div class="user-date">
                  <div class="user-name">{{ user.name }}. {{ user.last_name[0] }}
                    <VerifyAccountBadge v-if="user.verify" />
                  </div>
                  <div class="user-coins">{{ user.balance }} ASC</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div class="col">
          <div class="rank">
            <div class="rank-title">{{ ranks[7].title }}</div> <!-- шопоголик -->
            <ol class="rank-users">
              <li class="user-item" v-for="user in ranks[7].users" :key="user.id">
                <div class="user-date">
                  <div class="user-name">{{ user.name }}. {{ user.last_name[0] }}
                    <VerifyAccountBadge v-if="user.verify" />
                  </div>
                  <div class="user-coins">{{ user.balance }} ASC</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div class="col">
          <div class="rank">
            <div class="rank-title">{{ ranks[2].title }}</div> <!-- жмот -->
            <ol class="rank-users">
              <li class="user-item" v-for="user in ranks[2].users" :key="user.id">
                <div class="user-date">
                  <div class="user-name">{{ user.name }}. {{ user.last_name[0] }}
                    <VerifyAccountBadge v-if="user.verify" />
                  </div>
                  <div class="user-coins">{{ user.balance }} ASC</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div class="col">
          <div class="rank">
            <div class="rank-title">{{ ranks[8].title }}</div> <!-- олигарх -->
            <ol class="rank-users">
              <li class="user-item" v-if="!ranks[8].users.length">
                <div class="user-date">
                  <div class="user-name">None</div>
                </div>
              </li>
              <li class="user-item" v-else v-for="user in ranks[8].users" :key="user.id">
                <div class="user-date">
                  <div class="user-name">{{ user.name }}. {{ user.last_name[0] }}
                    <VerifyAccountBadge v-if="user.verify" />
                  </div>
                  <div class="user-coins">{{ user.balance }} ASC</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VerifyAccountBadge from "@/components/Icons/VerifyAccountBadge.vue";

export default {
  name: "Ranks",
  components: {VerifyAccountBadge},
  data: () => ({
    ranks: []
  }),
  async mounted() {
    document.title = 'AstroCoin | Ranks'
    if (!this.ranks.length) {
      await this.$store.dispatch("getRanks")
      this.ranks = this.$store.state.ranks
    }
    this.intervalRanks()
  },
  methods: {
    intervalRanks() {
      setInterval(() => {
        this.$store.dispatch("getRanks")
        this.ranks = this.$store.state.ranks
      }, 18000)
    }
  }
}
</script>
<style scoped>
@import url('@/style/ranks.css');
</style>