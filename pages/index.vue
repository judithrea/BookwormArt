<template>
  <v-app>
    <v-container>
      <v-layout column justify-center>
        <v-row>
          <v-col cols="12">
            <h1 class="text-center">Imagery List</h1>
          </v-col>
        </v-row>
        <v-row v-if="imageries.length !== 0">
          <v-col
            v-for="(imagery, index) in imageries"
            :key="index"
            cols="12"
            md="4"
            sm="6"
          >
            <ImageryCard
              :heart.sync="heart"
              :imagery="imagery"
              :index="index"
            />
          </v-col>
        </v-row>
      </v-layout>
      <p v-if="imageries.length === 0" class="text-center">
        No imageries yet.
      </p>
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import ImageryCard from '@/components/ImageryCard.vue'

export default {
  components: {
    ImageryCard
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('imageries/fetchImageries')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch imagery list at this time. Please try again.'
      })
    }
  },
  data() {
    return {
      heart: 'mdi-heart-outline'
    }
  },
  computed: {
    ...mapState('imageries', ['imageries'])
  }
}
</script>
