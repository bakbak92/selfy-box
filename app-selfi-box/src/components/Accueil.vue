<template>
<v-container>
  <div>
    <h2>Concept</h2>
  </div>
  <div class="content-concept">
    <div class="concept">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non incidunt omnis voluptatum nam assumenda adipisci aperiam pariatur aliquid aliquam! Aperiam, alias. Rem delectus ab reiciendis, quos explicabo asperiores vitae.
    </div>
    <div class="concept">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae velit deserunt similique perferendis incidunt, magnam sit dolorem eveniet quam ipsam delectus ducimus vitae voluptas voluptatem exercitationem.
    </div>
    <div class="concept">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet, sequi id adipisci harum unde dolor rem ad odio, inventore laboriosam neque sapiente facilis quibusdam deserunt porro molestiae culpa. Minus.
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
<style scss>
.concept{
  width: 33.33%;
  float: left;
  padding-right: 2rem;
  text-align: center;
}
.content-concept{
  margin-bottom: 2rem;
  overflow: hidden;
}
h2{
  text-align: center;
}

</style>
