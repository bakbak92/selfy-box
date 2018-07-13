<template>
  <v-container>
    <h1>Nos service</h1>
    <div class="offre">
      <div class="text-offre">
        <h2>Borne</h2>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Amet consectetur adipisicing elit. Exercitationem,</li>
          <li>Reiciendis blanditiis deleniti iusto, delectus expedita</li>
          <li>Accusantium, doloremque debitis ab sapiente ratione</li>
        </ul>
        <p class="Prix">300€</p>
        <v-btn>Commander cette offre</v-btn>
      </div>
      <div class="image-offre">
        <img src="https://images.unsplash.com/photo-1509402102439-7900f517ec6f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=496c4b682d27489b64456be002e38bc6&auto=format&fit=crop&w=976&q=80" alt="">
      </div>
    </div>
    <div class="offre">
      <div class="image-offre">
        <img src="https://images.unsplash.com/photo-1511881220587-13b89d1da6b8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b073ab19cbddf34a9f64ffecce72db85&auto=format&fit=crop&w=1074&q=80" alt="">
      </div>
      <div class="text-offre">
        <h2>Livre d'or</h2>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Amet consectetur adipisicing elit. Exercitationem,</li>
          <li>Reiciendis blanditiis deleniti iusto, delectus expedita</li>
          <li>Accusantium, doloremque debitis ab sapiente ratione</li>
        </ul>
        <p class="Prix">300€</p>
        <v-btn>Commander cette offre</v-btn>
      </div>

    </div>
    <div class="offre">
      <div class="text-offre">
        <h2>Video</h2>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Amet consectetur adipisicing elit. Exercitationem,</li>
          <li>Reiciendis blanditiis deleniti iusto, delectus expedita</li>
          <li>Accusantium, doloremque debitis ab sapiente ratione</li>
        </ul>
        <p class="Prix">300€</p>
        <v-btn>Commander cette offre</v-btn>
      </div>
      <div class="image-offre">
        <img src="https://images.unsplash.com/photo-1462926795244-b273f8a5454f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1bcf1dbfa0bb2bcf4259e14788f91a0c&auto=format&fit=crop&w=909&q=80" alt="">
      </div>
    </div>

  </v-container>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  h1{
    text-align: center;
    margin-bottom: 2rem;
  }
  .offre{
    margin-bottom: 4rem;
    overflow: hidden;
    .text-offre{
      float: left;
      width: 50%;
      overflow: hidden;
      box-sizing: border-box;
      background-color: white;
      padding: 1rem;
      ul{
        list-style: none;
        padding-left: 0!important;
        li{
          list-style: none;
          padding-bottom: 0.5rem;

        }
      }
      .prix{
        font-weight: 600;
      }
      h2{
        text-align: left;
        padding-bottom: 1rem;
      }
      .v-btn{
        background-color: #D32F2F!important;
        color: white;
        margin-left: 0;
      }
    }
    .image-offre{
      float: left;
      width: 50%;
      overflow: hidden;
      height: 270px;
      img{
        max-width: 600px;
      }
    }
  }
</style>
