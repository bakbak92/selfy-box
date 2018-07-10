<template>
<div>
<div class="header-home">
  <div class="presentation">
    <h1>Titre du concept Man</h1>
    <p>Aperiam, alias. Rem delectus ab reiciendis</p>
    <v-btn>
      Voir nos tarifs
    </v-btn>
  </div>
</div>
<v-container>

  <div>
    <h2>Concept</h2>
  </div>
  <div class="content-concept">
    <div class="concept">
      <div>
        <v-icon>
          monochrome_photos
        </v-icon>
      </div>
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>Dolores non incidunt omnis voluptatum nam assumenda adipisci aperiam pariatur aliquid aliquam! Aperiam, alias. Rem delectus ab reiciendis.</p>
    </div>
    <div class="concept">
      <div>
        <v-icon>
          photo
        </v-icon>
      </div>
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>Quae velit deserunt similique perferendis incidunt, magnam sit dolorem eveniet quam ipsam delectus ducimus vitae voluptas voluptatem exercitationem.</p>
    </div>
    <div class="concept">
      <div>
        <v-icon>
          event
        </v-icon>
      </div>
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>Nemo eveniet, sequi id adipisci harum unde dolor rem ad odio, inventore laboriosam neque sapiente facilis quibusdam deserunt porro molestiae culpa.</p>
    </div>
  </div>

  <v-carousel>
    <v-carousel-item
      v-for="(image,i) in images"
      :key="i"
      :src="image"
    ></v-carousel-item>
  </v-carousel>
</v-container>
</div>

</template>
<script>
export default {
  data(){
    return {
      images: [
        'https://images.unsplash.com/photo-1466686606061-5b5fd8310160?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c235142536989f4926dd57145604d242&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9699a304159246af55ed7002f6ef7f8a&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3cf5198be760cf5b4920e08b14501a9&auto=format&fit=crop&w=1050&q=80'
      ]
    }
  }
}
</script>
<style lang="scss">
  .concept{
    width: 33.33%;
    float: left;
    padding-right: 2rem;
    text-align: center;
    .v-icon{
      color: #FA628C;
    }
  }
  .content-concept{
    margin-bottom: 2rem;
    overflow: hidden;
  }
  h2{
    text-align: center;
  }
  .header-home{
    height: 450px;
    box-shadow: inset 2000px 0 0 0 rgba(135, 132, 183, 0.5);
    background-size: cover;
    background-image: url(https://images.unsplash.com/photo-1505340843-6554dea802df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2f0395c3b53f5482863d86058ad1ca6&auto=format&fit=crop&w=1050&q=80);
    .presentation{
      padding-top: 7rem;
      color: white;
      text-align: center;
      p{
        font-size: 1.8rem;
      }
      .v-btn{
        background-color: #FA628C!important;
        color: white;
      }
    }
  }
</style>
