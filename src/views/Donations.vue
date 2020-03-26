<template>
  <div class="wrap">
    <div class="donate-wrapper">
      <h3>You can donate if you like this program &euro;</h3>
      <div class="donate">
        <a href="#" target="_blank" class="donate-anchor">
          <div class="donate-type webmoney">
            <img src="../assets/webmoney_logo.jpg" alt="webmoney" />
          </div>
        </a>
        <a href="#" target="_blank" class="donate-anchor">
          <div class="donate-type yamoney">
            <img src="../assets/yaMoney.png" alt="Yandex Money" />
          </div>
        </a>
        <a href="#" target="_blank" class="donate-anchor">
          <div class="donate-type visa">
            <img src="../assets/logoVisa.png" alt="Card" />
          </div>
        </a>
        <a href="#" target="_blank" class="donate-anchor">
          <div class="donate-type qiwi">
            <img src="../assets/qiwi.png" alt="Qiwi" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  width: 70%;
  p {
    font-family: Roboto, sans-serif;
    font-size: 20px;
    margin: 7px;
  }
  .donate-wrapper {
    margin-top: 15vh;
    text-align: center;
    h3 {
      margin: 20px;
    }
    .donate {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-content: space-around;
      flex-wrap: wrap;

      .donate-anchor {
        display: inline-block;
        transition: all 0.2s ease;
        border: 2px solid rgb(235, 235, 235);
        box-shadow: 3px 3px 4px #6b8caf;
        padding: 0 15px;
        margin-right: 15px;
        margin-bottom: 25px;
        flex-basis: 190px;
        flex-grow: 0;

        .donate-type {
          img {
            height: 60px;
            width: 120px;
          }
        }
        &:hover {
          transform: translateY(-2px);
          box-shadow: 2px 2px 4px #6b8caf;
          // border: 1px solid rgb(121, 170, 216);
        }
      }
    }
  }
}
</style>