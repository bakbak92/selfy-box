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

  <!--<v-carousel>
    <v-carousel-item
      v-for="(image,i) in images"
      :key="i"
      :src="image"
    ></v-carousel-item>
  </v-carousel>-->
  <h2>Quelque une de nos réalisations</h2>
  <div class="gallery">
    <div class="img-gallery">
      <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f9b9cb51ea58b136b1ccfc012192afcc&auto=format&fit=crop&w=1050&q=80" alt="">
    </div>
    <div class="img-gallery">
      <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b811266a4cf56733a98b08047ffe3ed&auto=format&fit=crop&w=1050&q=80" alt="">
    </div>
    <div class="img-gallery">
      <img src="https://images.unsplash.com/photo-1496285416008-dfb54bbaedff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e2cdf2bccf2cdeffbbfebae84913c42&auto=format&fit=crop&w=1050&q=80" alt="">
    </div>
  </div>
  <div class="gallery">
    <div class="img-gallery">
      <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da90b7e324f7b8884b268bb4aaf62fcb&auto=format&fit=crop&w=1050&q=80" alt="">
    </div>
    <div class="img-gallery">
      <img src="https://images.unsplash.com/photo-1470754260170-299cad39501f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=811d8d6497cb32ab9cd5f89d837626d4&auto=format&fit=crop&w=1050&q=80" alt="">
    </div>
    <div class="img-gallery">
      <img src="https://images.unsplash.com/photo-1513271705142-e6742ebb86b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a53881f25f08e437cbf81b8a15d950f&auto=format&fit=crop&w=1189&q=80" alt="">
    </div>
  </div>
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
      ],
      galeries: [
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f9b9cb51ea58b136b1ccfc012192afcc&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b811266a4cf56733a98b08047ffe3ed&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1496285416008-dfb54bbaedff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e2cdf2bccf2cdeffbbfebae84913c42&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da90b7e324f7b8884b268bb4aaf62fcb&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1470754260170-299cad39501f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=811d8d6497cb32ab9cd5f89d837626d4&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1513271705142-e6742ebb86b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a53881f25f08e437cbf81b8a15d950f&auto=format&fit=crop&w=1189&q=80',
      ]
    }
  }
}
</script>
<style lang="scss">

  .concept{
    width: 30%;
    float: left;
    margin: 0 1rem;
    text-align: center;
    background-color: white;
    padding: 1rem;
    .v-icon{
      color: #D32F2F;
      font-size: 5rem;
    }
  }
  .content-concept{
    margin-bottom: 2rem;
    overflow: hidden;
  }
  h2{
    text-align: center;
  }
  .gallery{
    display: flex;
  }
  .img-gallery{
    overflow: hidden;
    margin: 1rem;
    height: 320px;
    img{
      max-width: 600px;
    }
  }
  .header-home{
    height: 450px;
    background-size: cover;
    background-image: url(https://images.unsplash.com/photo-1518353053542-7ea33d942319?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=49b132188d2041ed79058f12047afb26&auto=format&fit=crop&w=1051&q=80);
    .presentation{
      padding-top: 7rem;
      color: white;
      text-align: center;
      p{
        font-size: 1.8rem;
      }
      .v-btn{
        background-color: #D32F2F!important;
        color: white;
      }
    }
  }
</style>
