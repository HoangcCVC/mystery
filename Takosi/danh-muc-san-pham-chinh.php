<?php include('header.php');?>
<?php include('banner.php');?>
<section class="product-portfolio produc-home container container-set">
    <h2 class="porduc-title text-center"> Danh mục sản phẩm</h2>
    <div class="row mt-50 px-2 px-lg-4">
        <div class="col-12  mb-3">
            <div class="item-box position-relative">
                <a href="#" class="d-block  img_home" title="">
                <img src="theme/frontend/images/item-product.jpg" alt="">
                </a>
                <div class="item-slug">
                    <a href="#" class="title-name" title=""> BỒN CẦU </a>
                </div>
            </div>
        </div>
        <div class="col-lg-12 mb-3 mb-lg-0">
            <div class="item-box position-relative">
                <a href="#" class="d-block  img_home" title="">
                <img src="theme/frontend/images/item-product-2.jpg" alt="">
                </a>
                <div class="item-slug">
                    <a href="#" class="title-name " title=""> Chậu rửa </a>
                </div>
            </div>
        </div>
    </div>
    <div class="row px-2 px-lg-4">
        <?php for($i = 0; $i <= 4 ; $i++) :  ?>
        <div class="col-6 col-lg-4 col-portfolio">
            <a href="#" class="title d-block name-portfolio text-center "> Chậu rửa dường vành </a>
        </div>
        <?php endfor; ?>
    </div>
    <div class="row mt-0 mt-lg-4 px-2 px-lg-4">
        <div class="col-lg-6  mb-3 mt-lg-0">
            <div class="item-box position-relative">
                <a href="#" class="d-block  img_home" title="">
                <img src="theme/frontend/images/item-product.jpg" alt="">
                </a>
                <div class="item-slug">
                    <a href="#" class="title-name" title=""> Vòi chậu </a>
                </div>
            </div>
        </div>
        <div class="col-lg-6  mt-3 mt-lg-0">
            <div class="item-box position-relative">
                <a href="#" class="d-block  img_home" title="">
                <img src="theme/frontend/images/item-product-2.jpg" alt="">
                </a>
                <div class="item-slug">
                    <a href="#" class="title-name" title=""> Sen tắm</a>
                </div>
            </div>
        </div>
    </div>
    <div class="row  px-2 px-lg-4">
        <?php for($i = 0; $i <= 3 ; $i++) :  ?>
        <div class="col-6 col-lg-6 col-portfolio col-portfolio-one ">
            <a href="#" class="title d-block name-portfolio text-center "> Vòi Sen thường </a>
        </div>
        <?php endfor; ?>
    </div>
    <div class="row mt-0 mt-lg-4  px-2 px-lg-4">
        <div class="col-6 col-lg-6">
            <div class="item-slug-box">
                <a href="#" class="name d-block smooth" title="" > Phụ kiện </a>
            </div>
        </div>
        <div class="col-6 col-lg-6">
            <div class="item-slug-box">
                <a href="#" class="name d-block smooth" title="" > Bồn tiểu </a>
            </div>
        </div>
    </div>
</section>
<section class="quality">
    <div class="container container-set">
        <div class="row gx-2 gx-lg-4">
            <div class="col-4 col-lg-4 mt-3 lt-lg-0">
                <div class="items  text-center">
                    <a href="#" class="d-block img-sty  smooth  text-center">
                    <img src="theme/frontend/images/khien.png" alt="">     
                    </a>
                    <span class="slug_"> 100% đặt hành tiêu chuẩn chất lượng cao </span>
                </div>
            </div>
            <div class="col-4 col-lg-4 mt-3 lt-lg-0">
                <div class="items  text-center">
                    <a href="#" class="d-block img-sty   smooth  text-center">
                    <img src="theme/frontend/images/oto.png" alt="">     
                    </a>
                    <span class="slug_"> Giao hàng trong 24 giờ - đến 48 giờ Kể từ ngày đặt đơn hàng </span>
                </div>
            </div>
            <div class="col-4 col-lg-4 mt-3   lt-lg-0">
                <div class="items  text-center">
                    <a href="#" class="d-block  img-sty smooth text-center">
                    <img src="theme/frontend/images/phone-3.png" alt="">     
                    </a>
                    <span class="slug_"> Liên hệ tự vấn 24/7 </span>
                    <a href="#" class="d-block phone-number smooth text-center" title="" > 096.6711.955 </a>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="new-product container container-set">
    <div class="title-all-pro d-flex align-items-center justify-content-between">
        <h3 class="title"> Sản phẩm mới  </h3>
        <a href="#" class="d-block btn-pro" title=""> Xem thêm </a>
    </div>
    <div class="silde-all position-relative">
        <div class="swiper newSlide mt-3 mt-lg-5">
            <div class="swiper-wrapper">
                <?php for($i = 0; $i <= 5 ; $i++) : ?>
                <div class="swiper-slide">
                    <div class="items-box text-center">
                        <a href="#" class=" hv-img  smooth d-block ">
                        <img src="theme/frontend/images/san-pham-1.png" alt="" class="">     
                        </a>
                        <span class="name-product  d-block"> Sen tắm cây </span>
                        <span class="name-product  d-block"> TK103 </span>
                    </div>
                </div>
                <?php endfor; ?>
            </div>
        </div>
      
            <div class="controll next btn-pro-next"> <img src="theme/frontend/images/next.png" alt="Next" /></div>
            <div class=" controll prev  btn-pro-prev"> <img src="theme/frontend/images/prve.png" alt="Next" /></div> 
        
    </div>
</section>
<section class="post_useful container container-set">
    <div class="row gx-3 gx-lg-4">
    <h3 class="title"> Sản phẩm mới  </h3>
    <?php  for ($i = 0; $i <=2 ; $i++): ?>
        <div class="col-12 col-sm-6 col-lg-4 mb-3 mt-lg-3">
                <div class="items">
                    <a href="#" class="img__  img-post d-block smooth">
                        <img src="theme/frontend/images/post-1.png" alt="" width="100%" >     
                   </a>
                   <a href="#" class="post-name d-block">
                         Làm gì để chiếc gương bị mờ trở lên sáng bóng 
                   </a>
                </div>
        </div>
        <?php endfor; ?>
    </div>
</section>
<?php include('footer.php');?>