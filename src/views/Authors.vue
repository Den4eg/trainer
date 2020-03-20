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
  p {
    font-family: Roboto, sans-serif;
    font-size: 20px;
    margin: 7px;
  }
  .donate-wrapper {
    width: 100%;
    margin-top: 20vh;
    text-align: center;
    h3 {
      margin: 20px;
    }
    .donate {
      height: 65px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-self: center;
      flex-wrap: nowrap;

      .donate-anchor {
        transition: all 0.2s ease;
        border: 2px solid rgb(235, 235, 235);
        box-shadow: 3px 3px 4px #6b8caf;
        padding: 0 15px;
        margin-right: 5px;
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