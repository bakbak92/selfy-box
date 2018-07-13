<template>
  <v-container>
    <div class="form">
      <h2>Reserver ci-dessous</h2>
      <div class="input-form">
        <p>Nom</p>
        <v-text-field
        placeholder="Nom"
        solo
        required
        >

        </v-text-field>
      </div>
      <div class="input-form">
        <p>Téléphone</p>
        <v-text-field
        placeholder="Téléphone"
        solo
        required
        >

        </v-text-field>
      </div>
      <div class="input-form">
        <p>Email</p>
        <v-text-field
        placeholder="Email"
        solo
        required
        >

        </v-text-field>
      </div>
      <div class="input-form">
        <p>Service</p>
        <v-checkbox
          v-model="borne"
          label="Borne 300€"
          required
        ></v-checkbox>
        <v-checkbox
          v-model="video"
          label="Video 400€"
          required
        ></v-checkbox>
        <v-checkbox
          v-model="livreDor"
          label="Livre d'or 200 €"
          required
        ></v-checkbox>
      </div>
      <div class="input-form">
        <p>Date de l'évenement</p>
        <div class="date">
          <v-date-picker color="red darken-2" v-model="picker" :locale="fr" :landscape="landscape" :reactive="reactive"></v-date-picker>
        </div>
      </div>
      <div class="input-form">
        <div class="content-time">
          <p>Heure de l'évenement</p>
          <v-time-picker color="red darken-2" v-model="e7" format="24hr"></v-time-picker>
          <v-time-picker color="red darken-2" v-model="e7" format="24hr"></v-time-picker>
        </div>
      </div>
      <div class="input-form">
        <p>Informations supplémentaire</p>
        <v-textarea
          solo
          name="input-7-4"
          label="Solo textarea"
        ></v-textarea>
      </div>
      <div class="input-form">
        <v-btn>
          ENVOYER MA RESERVATION
        </v-btn>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  data(){
    return {
      borne: false,
      video: false,
      livreDor: false
    }
  }
}
</script>
<style lang="scss" scoped>
.form{
  background-color: white;
  padding: 2rem;
  max-width: 650px;
  margin: 2rem auto;
}
.v-picker__title.primary {
    background: #D32F2F!important;
}
.v-btn{
  background-color: #D32F2F!important;
  color: white;
}
.input-form{
  margin-bottom: 1rem;
}
</style>
