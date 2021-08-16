</section>

<footer class="footer">
    <div class="footer-inner">
        <div class="copyright pull-left">
            Copyright &copy 2011-<?php echo date("Y") ?> <a href=""><?php dopt("blogname", 1) ?></a> All Rights Reserved    ·  Theme <a href="#yusi123.com">Yusi</a>:<a href="https://git.qmcmc.cn/qctech/Yuko" target="_blank">ゆうこ</a>   ·    <a href="/sitemap.xml" title="站点地图">站点地图</a>
            <?php if(dopt('d_beian')){echo '· <a href="#" >'. dopt('d_beian') .'</a>';} ?>
        </div>
        <div class="trackcode pull-right">
            <?php wppage_speed() ?>
        </div>
    </div>
</footer>
<?php
if (!dopt("d_disable_browser_update")){
?>
<script>
    var $buoop = {required:{e:-4,f:-3,o:-3,s:-1,c:-6},insecure:true,api:2021.08 };
    function $buo_f(){
        var e = document.createElement("script");
        e.src = "//browser-update.org/update.min.js";
        document.body.appendChild(e);
    };
    try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
    catch(e){window.attachEvent("onload", $buo_f)}
</script>
<?php
}
wp_footer();
if( dopt('d_footcode_b') ) echo dopt('d_footcode'); 
?>

</body>
</html>