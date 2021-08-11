</section>

<footer class="footer">
    <div class="footer-inner">
        <div class="copyright pull-left">
         <a href="https://yusi123.com/" title="欲思博客">欲思博客</a> 版权所有，保留一切权利 ! Theme  <a href="https://yusi123.com/3233.html">Yusi</a>   ·    <a href="https://yusi123.com/sitemap.xml" title="站点地图">站点地图</a>   © 2011-2014 ·  <a href="http://www.miitbeian.gov.cn/" rel="nofollow" target="_blank" >赣ICP备13005641号</a>   ·   托管于 <a rel="nofollow" target="_blank" href="https://yusi123.com/go/aliyun">阿里云</a> & <a rel="nofollow" target="_blank" href="https://yusi123.com/go/qiniu">七牛</a>
        </div>
        <div class="trackcode pull-right">
            <?php if( dopt('d_track_b') ) echo dopt('d_track'); ?>
        </div>
    </div>
</footer>

<?php 
wp_footer(); 
global $dHasShare; 
if($dHasShare == true){ 
	echo'<script>with(document)0[(getElementsByTagName("head")[0]||body).appendChild(createElement("script")).src="http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion="+~(-new Date()/36e5)];</script>';
}
if( dopt('d_footcode_b') ) echo dopt('d_footcode'); 
?>

</body>
</html>