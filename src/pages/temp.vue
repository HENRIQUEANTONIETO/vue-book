<template>
  <div class="container">
    <div class="flip-book" id="demoBookExample">
      <div class="page page-cover page-cover-top" data-density="hard">
        <div class="page-content">
          <h2>BOOK TITLE</h2>
        </div>
      </div>
      <div class="page">
        <div class="page-content">
          <h2 class="page-header">Page header 1</h2>
          <div class="page-image">
            <img src="../assets/images/1.jpg" alt="" />
          </div>
          <div class="page-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis
            nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id
            magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque
            non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex
            convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non
            tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit
            viverra metus, a venenatis tellus tellus id magna.
          </div>
          <div class="page-footer">2</div>
        </div>
      </div>
      <!-- PAGES .... -->
      <div class="page">
        <div class="page-content">
          <h2 class="page-header">Page header - 15</h2>
          <div class="page-image">
            <img src="../assets/images/2.jpg" alt="" />
          </div>
          <div class="page-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis
            nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id
            magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque
            non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex
            convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non
            tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit
            viverra metus, a venenatis tellus tellus id magna.
          </div>
          <div class="page-footer">16</div>
        </div>
      </div>
      <div class="page">
        <div class="page-content">
          <h2 class="page-header">Page header - 16</h2>
          <div class="page-image">
            <img src="../assets/images/3.jpg" alt="" />
          </div>
          <div class="page-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis
            nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae
            pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
            sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id
            magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque
            non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex
            convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non
            tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit
            viverra metus, a venenatis tellus tellus id magna.
          </div>
          <div class="page-footer">17</div>
        </div>
      </div>
      <div class="page page-cover page-cover-bottom" data-density="hard">
        <div class="page-content">
          <h2>THE END</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PageFlip } from "page-flip";

onMounted(() => {
  const pageFlip = new PageFlip(
    document.getElementById("demoBookExample") as HTMLElement,
    {
      width: 550, // base page width
      height: 700, // base page height

      // set threshold values:
      minWidth: 315,
      maxWidth: 1000,
      minHeight: 420,
      maxHeight: 1350,

      maxShadowOpacity: 0.5, // Half shadow intensity
      showCover: true,
      mobileScrollSupport: false, // disable content scrolling on mobile devices
    }
  );

  pageFlip.loadFromHTML(document.querySelectorAll(".page"));
});
</script>

<style>
.page {
  background-color: #fdfaf7;
}

#demoBookExample {
  margin: 15px auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5) !important;
  display: none;
  background-size: cover !important;
}

.page {
  padding: 20px;
  background-color: hsl(35, 55, 98);
  color: hsl(35, 33%, 36%);
  border: solid 1px hsl(35, 20, 70);
  overflow: hidden;
}

.page img {
  width: 500px;
}

.page .page-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}

.page .page-content .page-header {
  height: 30px;
  font-size: 100%;
  text-transform: uppercase;
  text-align: center;
}

.page .page-content .page-image img {
  height: 100%;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}

.page .page-content .page-text {
  height: 100%;
  flex-grow: 1;
  font-size: 80%;
  text-align: justify;
  margin-top: 10px;
  padding-top: 10px;
  box-sizing: border-box;
  border-top: solid 1px hsl(35, 55, 90);
}

.page .page-content .page-footer {
  height: 30px;
  border-top: solid 1px hsl(35, 55, 90);
  font-size: 80%;
  color: hsl(35, 20, 50);
}

.page.--left {
  border-right: 0;
  box-shadow: inset -7px 0 30px -7px rgba(0, 0, 0, 0.4);
}

.page.--right {
  border-left: 0;
  box-shadow: inset 7px 0 30px -7px rgba(0, 0, 0, 0.4);
}

.page.--right .page-content .page-footer {
  text-align: right;
}

.page.hard {
  background-color: hsl(35, 50, 90);
  border: solid 1px hsl(35, 20, 50);
}

.page.page-cover {
  background-color: hsl(35, 45, 80);
  color: hsl(35, 35, 35);
  border: solid 1px hsl(35, 20, 50);
}

.page.page-cover h2 {
  text-align: center;
  padding-top: 50%;
  font-size: 210%;
}

.page.page-cover.page-cover-top {
  box-shadow: inset 0px 0 30px 0px rgba(36, 10, 3, 0.5), -2px 0 5px 2px rgba(0, 0, 0, 0.4);
}

.page.page-cover.page-cover-bottom {
  box-shadow: inset 0px 0 30px 0px rgba(36, 10, 3, 0.5), 10px 0 8px 0px rgba(0, 0, 0, 0.4);
}
</style>
